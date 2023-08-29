const os = require('os');
const path = require('path');
const EsLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
// cpu核数
const threads = os.cpus.length;

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
        filename: 'static/js/[name].[contenthash:8].js', // 入口文件打包输出资源命名方式
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js', // 动态导入输出资源命名方式
        assetModuleFilename: 'static/media/[name].[hash][ext]', // 静态资源命名方式
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            {
                oneOf: [
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
                        // generator: {
                        //     // 将图片文件输出到 static/imgs 目录中
                        //     // 将图片文件命名 [hash:8][ext][query]
                        //     // [hash:8]: hash值取8位
                        //     // [ext]: 使用之前的文件扩展名
                        //     // [query]: 添加之前的query参数
                        //     filename: 'static/imgs/[hash:8][ext][query]',
                        // },
                    },
                    {
                        test: /\.(ttf|woff2?|map4|map3|avi)$/,
                        type: 'asset/resource',
                        // generator: {
                        //     filename: 'static/media/[hash:8][ext][query]',
                        // },
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/, // 不转换node_modules
                        use: [
                            {
                                loader: 'thread-loader', // 开启多进程
                                options: {
                                    Worker: threads, // 数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true, // 开启Babel缓存
                                    cacheCompression: false, // 缓存文件不要压缩
                                    plugins: [
                                        '@babel/plugin-transform-runtime',
                                    ],
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // 插件
    plugins: [
        new EsLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules', // 默认值
            cache: true, // 开启缓存
            // 缓存目录
            cacheLocation: path.resolve(
                __dirname,
                '../node_modules/.cache/.eslintcache'
            ),
            threads, // 开启多进程
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 定义输出文件和目录
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        // new CssMinimizerPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload', // preload兼容性更好
            as: 'script',
            // rel: 'prefetch' // prefetch兼容性更差
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: threads,
            }),
            // 压缩图片
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        'preset-default',
                                        'prefixIds',
                                        {
                                            name: 'sortAttrs',
                                            params: {
                                                xmlnsOrder: 'alphabetical',
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
        // 代码分割配置
        splitChunks: {
            chunks: 'all', // 对所有模块进行分割
        },
        // 提前runtime文件
        runtimeChunk:{
            name: (entrypoint) => `runtime~${entrypoint.name}`, // runtime文件命名规则
        }
    },
    devtool: 'source-map',
    // 模式
    mode: 'production',
};
