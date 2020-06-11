const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './js/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    }
}