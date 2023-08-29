import count from './js/count';
// import "core-js/es/promise";
import sum from './js/sum';
// 引入css才会被打包
import './css/index.css';
import './css/index.less';
import './css/index.sass';
import './css/index.scss';
import './styl/index.styl';
import './css/iconfont.css';

const res1 = count(2, 1);
const res2 = sum(1, 2, 3, 4);
console.log(res1);
console.log(res2);
document.getElementById('btn').onclick = function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
    // "math"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "math" */ './js/math.js').then(({ count }) => {
        console.log(count(2, 1));
    });
};
// 添加promise代码
const promise = window.Promise.resolve();
promise.then(() => {
    console.log('hello promise');
});
const arr = [1,2,3,4]
console.log(arr.includes(1))