const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackShellPlugin = require('webpack-shell-plugin');
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    entry: './index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()],
    plugins: [
        new webpackShellPlugin({
            onBuildEnd: ['npm run watch']
        })
    ],
    watch: NODE_ENV === 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
};
