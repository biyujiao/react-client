const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'), //打包后的输出目录
        filename: 'main.js', //打包后的文件名
    },
    devtool: isProduction ? 'source-map' : false, //生成单独的完整source-map文件，方便调整
    devServer: {
        port: 8080, // 开发服务器的端口号
        hot: true, //启动热更新
        contentBase: path.join(__dirname, 'public'), //静态文件根目录
        historyApiFallback: {
            index: './index.html'// 可能会使用浏览器路由，刷新时需要重定向到根文件
        }
    },
    resolve: {
        alias: { //配置别名，方便编写引入的路径
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']//查找模块时的扩展名
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', //解析ES+
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        ['import', { libraryName: 'antd', style: 'css' }]
                    ]
                },
                include: path.resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',// 处理import和url
                        options: {importLoaders: 3} //import的文件要导入之前需要经过几个loader的处理
                    },
                    {
                        loader: 'postcss-loader',//加入厂商的兼容性前缀
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    },
                    {
                        loader: 'px2rem-loader',//可以把pox单位变成rem单位
                        options: {
                            remUnit: 75, //1rem对应75px
                            remPrecesion: 8 //计算后的小数精度是8位
                        }
                    },
                    "less-loader" //把less编译成css
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};