// entry point -> output file
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
