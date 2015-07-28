var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + "/src",

    entry: {
        javascript: ['webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './index'],
        html: "./index.html"
    },

    output: {
        filename: "app.js",
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};