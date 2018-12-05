const path = require("path");

module.exports = {
    entry: {
        main: ["./src/pubon"]
    },
    resolve: {
        extensions: [".js", ".ts"] 
    },
    mode: "development",
    output: {
        filename: "pubon-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        stats: {
            colors: true
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            }
        ]
    }
}
