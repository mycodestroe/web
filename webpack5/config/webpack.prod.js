const path = require('path');
const EsLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// 样式处理loaders
const getStyleLoadders = (prePreocessor) => {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: ['postcss-preset-env'],
                },
            },
        },
        prePreocessor,
    ].filter(Boolean);
};
module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/main.js',
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配.css结尾的文件
                test: /\.css$/,
                // 从右到左执行
                use: getStyleLoadders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoadders('less-loader'),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoadders('sass-loader'),
            },
            {
                test: /\.styl$/,
                use: getStyleLoadders('stylus-loader'),
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
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css',
        }),
        new CssMinimizerPlugin()
    ],

    // 模式
    mode: 'production',
};
