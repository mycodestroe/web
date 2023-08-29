module.exports = {
    // 解析选项
    parserOptions:{
        ecmaVersion:6, // ES语法版本
        sourceType:"module", // ES模块化
    },
    parser:"@babel/eslint-parser",
    env: {
        node:true,
        browser:true
    },

    plugins: ["import"], // 解决动态导入import语法报错问题 --> 实际使用eslint-plugin-import的规则解决的
    // 具体检查规则
    // off 或 0 关闭规则 warn 或 1 开启规则 警告 error 或 2 开启规则 程序中断
    rules:{
       "no-var":2, // 不能使用var变量
    },
    // 继承其他规则
    extends:["eslint:recommended"]
}