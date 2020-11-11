const path = require("path");

module.exports = {
  mode: "development",

  output: {
    filename: "FunBoxTest-[contenthash:5].js",
  },

  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-module-source-map",
}