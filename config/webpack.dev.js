const path = require("path");

module.exports = {
    entry: {
        main: "./src/pubon.js"
    },
    mode: "development",
    output: {
        filename: "pubon-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
    }

}