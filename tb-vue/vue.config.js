const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
            extensions: ['.vue', '.ts', '.js', '.d.ts', '.scss', '.sass'],
        },
    }
  }