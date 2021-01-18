const path = require("path");
const webpack = require("webpack");
const hwPlugin = require("html-webpack-plugin");
const mcePlugin = require("mini-css-extract-plugin");

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  name: "myconfiguration",
  mode: "development",
  entry: {
    index: { import: "./src/index.js", dependOn: "shared" },
    print: "./src/print.js",
    module3: { import: "./src/another.module.js", dependOn: "shared" },
    shared: "lodash",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",

  plugins: [
    new webpack.ProgressPlugin(),
    new hwPlugin({
      title: "Title from Plugin",
      filename: "index.html",
      template: "src/index.html",
    }),
    new mcePlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: mcePlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.csv$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    runtimeChunk: "single",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
  },
};
