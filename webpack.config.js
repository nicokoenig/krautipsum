const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./public/entry.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: "css-loader"
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            })
        }, {
            test: /\.html$/,
            use: "raw-loader"
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: "file-loader"
        }, {
            test: /\.(jpg|jpeg|gif|png|ico)$/,
            exclude: /node_modules/,
            use: [
                { loader: "file-loader?name=[name].[ext]" },
                {
                    loader: "image-webpack-loader",
                    query: {
                        optipng: {
                            optimizationLevel: 7
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.ejs"),
        new UglifyJSPlugin()
    ]
};