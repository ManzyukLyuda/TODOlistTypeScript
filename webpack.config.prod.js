const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry:'./src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}