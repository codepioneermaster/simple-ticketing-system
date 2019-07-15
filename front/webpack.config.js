const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json'
});
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.env$/i,
                use: ['Dotenv'],
            },
        ]
    },
    plugins: [htmlWebpackPlugin, miniCssExtractPlugin, new Dotenv({
        path: './.env',
        safe: true
    })],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        historyApiFallback: true
    },
    output: {
        publicPath: ASSET_PATH
    }
};
