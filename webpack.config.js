const path = require('path');

var config = {
    context: path.join(__dirname, "app"),
    //context: __dirname + "/app",
    entry: "./main.js",

    output: {
        filename: "bundle.js",
        //path: __dirname + "/static",
        path:  path.join(__dirname, "public/views/scripts"),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    }
};
module.exports = config;
