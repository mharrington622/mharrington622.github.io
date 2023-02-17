const path = require('path');

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, 'publish'),
        filename: "app.js"
    },
    mode: "development",
    devtool: "source-map"
};
