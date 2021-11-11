const path = require("path");

const resolve = (fileName) => path.resolve(__dirname, fileName);

module.exports = function overrides(config) {
    const onOf = config.module.rules[1].oneOf;

    config.resolve.alias = {
        "@": path.resolve(__dirname, './src'),
    }

    onOf.map(itme => {
        if (!Array.isArray(itme.test) && itme.test && itme.test.test('.scss')) {
            itme.use.push({ // 使用loader在每个文件中导入全局scss
                loader: resolve('loaders/globalSass/index.js'),
            })
        }
    })


    return config;
}