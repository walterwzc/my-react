const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'scripts/app': './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dev'),
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8100,
        //不打印异常信息
        // quiet: true
        proxy: {
            '/api': {
                target: 'https://api.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50,
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ]
}
