module.exports = {
    publicPath: './',
    devServer: {
        // proxy代理
        proxy: {
            '/api': {
                target: 'http://proxy-target-address',
                ws: true,
                changeOrigin: true
            }
        }
    },
    //hash打包
    chainWebpack: config => {
        config.output.filename('[name].[hash].js').end();
    },
}