/**
 * Created by Ahmed Galal on 15/10/2017.
 */
const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    //filename: "[name].[contenthash].css",
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry:{
        main:  ['./src/index.tsx', './src/scss/main.scss' , './src/js/bin/jquery-1.11.1.js', './src/js/bin/materialize.js']
    },
    output: {
        filename: '[name].bundle.[js]',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        }),
        new UglifyJSPlugin({
            test: /\.js$/i
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "main",
            // filename: "vendor.js"
            // (Give the chunk a different name)

            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Hammer: "hammerjs/hammer",
            React: "react",
            "window.React": "react"
        }),
        new CopyWebpackPlugin([
            { from: 'src/css/materialize/fonts', to: 'fonts/'},
            { from: 'src/css/materialize/css', to: 'css/'}
        ]),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Custom template using ejs',
            template: "./src/templates/home.ejs",
            inject: 'body',
            hash: 'false',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                minifyCSS:true,
                minifyJS:true
            }
        }),
        extractSass

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                //loader:'style-loader!css-loader!autoprefixer-loader',
                use: extractSass.extract({
                    use: [{loader: 'css-loader?importLoaders=1', options: { minimize: true } }]
                })
            },
            {
                test: /\.scss$/,
                //loader:'style-loader!css-loader!autoprefixer-loader!sass-loader',
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", options: { minimize: true }
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
            // {
            //     test: /\.ts(x?)$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src/"),
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },

            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {loader: "file-loader"}
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
        modules: [
            "./node_modules/"
        ]
    },
     externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    }
};