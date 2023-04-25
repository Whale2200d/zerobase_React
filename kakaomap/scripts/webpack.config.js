const path = require("path"); // import path from 'path'

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

dotenv.config();

const isProduction = process.env.NODE_ENV === "production"; // 개발모드 vs 프로덕션모드 구분

// export default와 동일
// 아래와 같은 설정에 대한 내용은 webpack 공식 링크 > Documentation에서 확인 가능
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "static/js/[name].[contenthash:8].js",
    clean: true,
  },
  devtool: isProduction ? false : "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              isProduction ? MiniCssExtractPlugin.loader : "style-loader",
              "css-loader",
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    isProduction
      ? new HtmlWebpackPlugin({
          template: "public/index.html",
          minify: true, // 배포할 때 불필요한 코드를 줄이기
        })
      : new HtmlWebpackPlugin({
          template: "public/index.html",
        }),
    isProduction
      ? new MiniCssExtractPlugin({
          linkType: false,
          filename: "[name].[contenthash:8].css",
        })
      : undefined,
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ].filter(Boolean),
};
