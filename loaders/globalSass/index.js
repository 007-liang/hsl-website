module.exports = function (source) {
    source = `@use '/src/global-scsss/index.scss' as *;\n` + source;
    return source;
}