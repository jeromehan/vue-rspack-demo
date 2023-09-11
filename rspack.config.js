const { VueLoaderPlugin } = require("vue-loader");
const path = require("node:path");
const isProduction = process.env.NODE_ENV === "production";
const imgPublicPath = "https://img1.teststatic.com/sp/";
const assetsPublicPath = "https://s1.teststatic.com/sp/";
const publicPath = isProduction ? assetsPublicPath : "/";

function resolve(dir) {
  return path.join(process.cwd(), dir);
}

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: "./src/main.js",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: false,
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
        type: 'css'
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
        type: 'css'
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: [
                resolve("src/assets/vars.scss"),
                resolve("src/assets/common.scss"),
              ],
              injector: "prepend",
            },
          },
        ],
        type: 'css'
      },
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: "asset/resource",
        generator: {
          publicPath: isProduction ? imgPublicPath : publicPath,
          filename: "static/img/[name].[hash:8][ext]",
        },
      },
      {
        resourceQuery: /lang=ts/,
        type: "ts",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/font/[name].[hash:8][ext]",
        },
      },
    ],
  },
  experiments: {
    css: true,
  },
  output: {
    clean: true,
    publicPath,
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].js",
    cssFilename: "static/css/[name].[contenthash:8].css",
    cssChunkFilename: "static/css/[name].[contenthash:8].css"
  },
};
module.exports = config;
