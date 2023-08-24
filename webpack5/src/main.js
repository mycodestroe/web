import count from "./js/count";
import sum from "./js/sum";
// 引入css才会被打包
import "./css/index.css"
import "./css/index.less"
import "./css/index.sass"
import "./css/index.scss"
import "./styl/index.styl"
import "./css/iconfont.css"

const res1 = count(2,1);
const res2 = sum(1,2,3,4)
console.log(res1);
console.log(res2);