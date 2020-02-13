const fs = require("fs");
const path = require("path");

const isDev = process.env.APP_ENV === "development";

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = isDev
  ? {
      "main.js": "/assets/index.js",
      "main.css": "/assets/index.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

module.exports = function(eleventyConfig) {
  // Layout aliases make templates more portable.
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Adds a universal shortcode to embed bundled CSS. In Nunjack templates: {% bundledCss %}
  eleventyConfig.addShortcode("bundledCss", function() {
    return manifest["main.css"]
      ? `<link href="${manifest["main.css"]}" rel="stylesheet" />`
      : "";
  });

  // Adds a universal shortcode to embed bundled JS. In Nunjack templates: {% bundledJs %}
  eleventyConfig.addShortcode("bundledJs", function() {
    return manifest["main.js"]
      ? `<script src="${manifest["main.js"]}"></script>`
      : "";
  });

  // Copy all images directly to dist.
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // Copy external dependencies to dist.
  eleventyConfig.addPassthroughCopy({ "src/vendor": "vendor" });

  // Reload the page every time the JS/CSS are changed.
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  // A debug utility.
  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  return {
    dir: {
      input: "src/site",
      includes: "_includes", // relative to dir.input
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
