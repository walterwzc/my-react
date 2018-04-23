const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'scripts/app': './src/app.js',
        'vendor/react': 'react',
        'vendor/react-dom': 'react-dom'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: getPath => {
                return getPath('styles/[name]-[hash:6].css').replace(
                    'styles/scripts',
                    'styles'
                )
            }
        }),
        new HtmlPlugin({
            title: 'hello',
            template: './src/index.html',
            filename: './index.html'
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /react/,
                    chunks: 'initial',
                    name: 'vendor/react',
                    priority: 10
                },
                'react-dom': {
                    test: /react-dom/,
                    chunks: 'initial',
                    name: 'vendor/react-dom',
                    priority: 10
                }
            }
        }
    }
}
