const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DEV = require("./webpack.dev");
const PROD = require("./webpack.prod");
const { merge } = require("webpack-merge");


module.exports = env => {
  const mode = env.development ? DEV : PROD; 
  const common = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/template.html"),
        title: "FunBox Test Task",
      }),
    ],    
  };

  return merge(common, mode);
}
