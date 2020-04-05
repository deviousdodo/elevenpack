const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const baseFilename = isDev ? "index" : "index.[contenthash]";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: [
    path.resolve(__dirname, "src", "js", "index.js"),
    path.resolve(__dirname, "src", "css", "index.css"),
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: `${baseFilename}.js`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  devtool: isDev ? "eval" : "source-map",
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new ManifestPlugin({ publicPath: "/assets/" }),
  ],
};
