module.exports = {
    entry: "./public/entry.js",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.html$/,
            loader: "raw-loader"
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(jpg|jpeg|gif|png|ico)$/,
            exclude: /node_modules/,
            loader: 'file-loader?name=[name].[ext]'
        }]
    }
};