const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssNanoPlugin = require("cssnano-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const Autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",

  output: {
    filename: "FunBoxTest-[name]-[contenthash:5].js",
    chunkFilename: "[name].[id].[chunkhash:5].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  Autoprefixer,
                ],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],

  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssNanoPlugin(),
    ],
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,

    concatenateModules: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,

    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "initial",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: -10,
        },

        default: {
          minChunks: 2,
          priority: -20,
        },
      },     
    },

    runtimeChunk: true,
  },
};