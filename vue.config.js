const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    // 公共路径(必须有的)
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "assets",
    // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
    lintOnSave: false,
    // 我用的only，打包后小些
    productionSourceMap: false, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    chainWebpack: config => {
        config.resolve.alias
            .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))

        config
            .plugin('html')
            .tap(args => {
                args[0].title = '天马集团电商零售数据看板';
                return args;
            })
    },


    devServer: {
        proxy: {
            '/pl': {
                // target: 'http://stage.com/index.php/',
                target: 'http://self.gx.xingyunyezi.com/index.php/',
                // target: 'http://192.168.18.173:89/index.php/',
                // target: 'http://mg.dev.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/pl': '/'
                }
            },
            '/self': {
                // target: 'http://stage.com/index.php/',
                target: 'http://self.gx.xingyunyezi.com/index.php/',
                // target: 'http://192.168.18.173:89/index.php/',
                // target: 'http://mg.dev.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/self': '/'
                }
            }
        }
    }
}