module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app.js',
    ],
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js|jsx$/,
                exclude: /node_modules/,
            }
        ]
    }
};