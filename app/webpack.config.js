const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});
module.exports = {
 module: {
   rules: []
 },
 plugins: [htmlWebpackPlugin, miniCssExtractPlugin],
 resolve: {
   extensions: ['.js', '.jsx'],
 }
};
