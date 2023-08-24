const path = require('path');
const EsLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        path: undefined,
        filename: 'static/js/main.js',
        // clean: true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配.css结尾的文件
                test: /\.css$/,
                // 从右到左执行
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader'], // 将 Stylus 文件编译为 CSS
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于100kb的图片会被base64处理
                    },
                },
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: 'static/imgs/[hash:8][ext][query]',
                },
            },
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[hash:8][ext][query]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不转换node_modules
                loader: 'babel-loader',
            },
        ],
    },
    // 插件
    plugins: [
        new EsLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, '../src'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../public/index.html")
        })
    ],
    devServer:{
        host:"localhost",
        port:"3000",
        open:true
    },
    // 模式
    mode: 'development',
};
