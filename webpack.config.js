import {
    srcRoot, distRoot
}
from './constants'
const config = {
    devtool: 'inline-source-map',
    entry: {
        'build': './app/js/index.js'
    },
    output: {
        path: "./build/js/",
        filename: '[name]-min1.js'
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
module.exports = config;
