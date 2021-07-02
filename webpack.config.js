const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: 'src/files', to: 'dist/files'},
                {from: 'src/favicon', to: 'dist'}
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|jpg|jpeg|png)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(mp3|wav)$/,
                use: ['file-loader'],
            }
        ]
    }
}