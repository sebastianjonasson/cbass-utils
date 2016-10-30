const webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "dist/cbass.du.js"
    },
    module: {
        preLoaders: [
          {
            // set up standard-loader as a preloader 
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            loader: 'standard',
            exclude: /(node_modules)/
          }
        ],
        loaders: [
            { 
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /src\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};