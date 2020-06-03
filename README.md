# Elevenpack

Get started quickly with [Eleventy](https://www.11ty.dev), while using modern JS & CSS workflows.
Tools used: [webpack](https://webpack.js.org), [babel](https://babeljs.io/), [PostCSS](https://postcss.org) and [Tailwind](https://tailwindcss.com).

The focus is to have a minimal setup that allows modern JS &amp; CSS features and a performant build output, with bundling and cache busting for the assets.
Here's a quick list of features:

* standard structure for new projects (check out the `src` folder)
* basic initial layout (`src/site/_includes/layouts/default.njk`)
* JS & CSS bundling through webpack
* **cache busting** for production deployments
* modern JS support through Babel
* modern CSS support through PostCSS (`postcss-import`, `postcss-preset-env` and `cssnano` plugins included)
* the Tailwind library is included by default
* Vendor assets: anything in the src/vendor folder will be copied through to the output folder.

This repository is automatically published on Netlify at <a href="https://elevenpack.netlify.com/">https://elevenpack.netlify.com/</a>.

Contributions are welcome!

## Usage

```
git clone git@github.com:deviousdodo/elevenpack.git mysite
cd mysite
yarn
yarn dev
# ... edit anything in src, yarn add other packages, etc
```

To publish your website, run `yarn build` and the output will be in the `dist` directory.

### File structure

Everything in `src/site` will be converted by Eleventy - this is the input folder. The ouput folder is `dist`.

The `src/img` and `src/vendor` folders will be copied verbatim and you can reference any file by using the direct path, eg.
```
<img src="/img/example.png">
<link rel="stylesheet" href="/vendor/example.min.css">
```
The `src/vendor` folder is meant for external assets that you don't want to bundle (because they change rarely compared to your own source or for performance reasons).

The `src/js` and `src/css` folders will be bundled. The `index.js` &amp; `index.css` files are the entry points and thus required.

## Similar projects

If you'd like to try other starter projects then check out https://www.11ty.dev/docs/starter/
