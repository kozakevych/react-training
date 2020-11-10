const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './public/index.js',
    output: {
        path: path.join(__dirname, '/public/index.js'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
};