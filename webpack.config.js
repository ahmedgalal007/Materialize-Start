/**
 * Created by Ahmed Galal on 15/10/2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ['./src/index.ts', './src/scss/main.scss'],
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
           title: 'Output Management'
        }),
        //new ExtractTextPlugin({filename: 'main.css'})
        // new ExtractTextPlugin({ // define where to save the file
        //     filename: 'dist/[name].bundle.css',
        //     allChunks: true,
        // }),
        extractSass

    ],
    output: {
        filename: '[name].bundle.[js]',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { // regular css files
                test: /\.css$/,
                use: extractSass.extract({
                    use: [{loader: 'css-loader?importLoaders=1'}]
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        // options: {
                        //     includePaths: ["absolute/path/a", "absolute/path/b"]
                        // }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
};