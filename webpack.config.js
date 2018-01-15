// entry point -> output file
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        // loader
        // anytime you see a js file run it through babel
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};



