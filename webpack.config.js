const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'index.js'
    }
};

module.exports = config;
