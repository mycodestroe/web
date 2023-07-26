# 题集
### 一、 基础问题
1. 输入网址到显示出页面的过程发生了什么？  
答：客户端通过域名向DNS服务器获取对应IP地址  
使用HTTP的协议通信,客户端与服务端建立TCP连接  
客户端从服务端获取文件资源然后显示出web页面

2. TCP三次握手  
答：发送端发送一个带SYN标志的数据包给接收端  
接收端收到后回传一个带有SYN/ACK标志的数据包  
最后发送端再回传一个带有ACK标志的数据包,握手  
结束。

3. 浏览器工作原理  
答：用户界面（可视部分） 浏览器引擎（查询操作渲染引擎）   
渲染引擎（显示请求内容） 网络（网络调用） UI后端（基本组件）   
JS解释器（执行JS代码) 数据存储(cookie localStorage, sessionStorage)

4. 浏览器解析过程  
答：解析html构建Dom树 构建render树 布局render树 绘制render树

5. 浏览器内核组成  
答：渲染引擎（解析HTML、XML、图像、CSS等在显示器或其他设备上显示）  
js引擎（解析和执行js实现动态交互）

6. 浏览器内核有哪些  
答：Trident内核：IE  
Webkit内核：Safari Chrome  
Gecko内核：FireFox
Presto内核
Blink: Chrome(Blink为Webkit分支) Opera7(原为Presto)

7. cookie sessionStorage localStorage 区别  
答：cookie 一般用于校验用户身份，会在客户端和服务器之间来回传递 过期时间之前一直有效  
大小不能超过4K
sessionStorage localStorage 一般用来存储服务端返回数据 存储空间较大   
前者生命周期关闭浏览器窗口 后者需主动删除否则一直存在

8. 网页验证码
答：区分用户是人为登录还是程序破解，可以防止黑客利用程序不间断登录，破解账号密码。

9. 网页标准和标准制定机构的重要性
答：网页标准和制定机构都是为了WEB更健康的发展，开发者遵循统一的标准可以降低  
开发难度、开发成本减少代码兼容性BUG,网站安全也更加完善。

10. 前端优化
答：减少DOM操作  
压缩项目代码和需要加载的资源（图片 音乐 视频 等）
代码层面减少冗余代码最大限度做到代码复用  
减少Http请求设置缓存
内容分发使用CDN加速

11. 图片优化
答： 懒加载（比如滚动到一定高度在加载当前页面需要的图片）
预加载（在到达当前页面之前加载当前页面需要的图片）
图片压缩 （使用压缩工具压缩）
根据显示区域大小使用不同大小图片
使用CND加速图片访问

12. 如何使用缓存
答：HTTP请求头设置缓存标识  
浏览器第一次发起HTTP请求 到浏览器缓存  
没有该请求的缓存结果和缓存标志（强制缓存失效，直接向服务器请求）
HTTP向服务器请求服务器返回请求结果和缓存标志
浏览器将请求结果和缓存标识存入浏览器缓存中
再次请求浏览器缓存有两种情况一种是缓存结果时间失效浏览器携带缓存标识向服务器请求（强制缓存失效使用协商缓存）
如果再次请求缓存结果时间未失效直接返回缓存数据不向服务端发送请求（强制缓存生效）
HTTP缓存有强制缓存和协商缓存 当浏览器发送请求时服务器会将缓存规则放入HTTP响应报文的头部。

13. 协商缓存 
答： 协商缓存就是强制缓存失效后浏览器携带缓存标识向服务器发起请求。
协商缓存生效返回304 过程为服务端返回304 浏览器去浏览器缓存中获取缓存数据
协商缓存失效返回200 直接返回数据 浏览器将数据缓存在浏览器缓存中。
强制缓存优先于协商缓存

14. 缓存缓存方式
答：内存缓存（快速读取和失效性。内存缓存会将编译解析后的文件直接存入该进程的内存中占据该内存一定的内存资源  
下次运行时可以快速读取。一旦该进程关闭则该进程的内存则会清空。）      
硬盘缓存（将缓存写入硬盘文件中,读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容  
读取复杂速度比内存缓存慢。）
浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当页面刷新时只需要直接从内存缓存中读取  
（from memory cache）而css文件则会存入硬盘文件中，所以每次渲染完页面都需要从硬盘读取缓存  
（from disk cache）。

15. HTTP请求有几种方法  
答：GET 请求服务器上的某些资源  
POST 向服务器输入某些数据  
HEAD 类似GET服务器在响应中返回首部，不返回实体的主体部分。
PUT  让服务器用请求主体部分来创建一个由请求URL命名的新文档
TRACE 诊断验证请求是否穿过了请求或响应链
OPTIONS 查询服务器支持的请求方法
DELETE 请求服务器删除请求URL指定的资源

16. HTTP状态码  
答：1xx Information(信息性状态码) 接受的请求正在处理  
2xx Success(成功状态码) 请求正常处理完毕  
204 服务器处理成功，但未返回内容  
3xx Redirection(重定向状态码) 需要进行附加的操作以完成请求
304 Not Modified 未修改。不返回资源使用缓存中的资源
4xx Client Error(客户端错误状态码) 服务器无法处理请求
403 Foribidden 服务器理解请求但是拒绝执行
404 Bad Request 客户端请求的语法错误，服务器无法理解(比如请求地址不对)
5xx Server Error(服务端错误状态码) 服务器处理请求出错（比如服务挂了）

17. 同源协议
答：协议相同(https) 域名相同(baidu.com) 端口相同(80)  
https://www.baidu.com:80/index.html
同源策略是浏览器的一个安全功能,不同源的客户端脚本在没有明确授权的情况下  
不能读取对方资源。可以隔离潜在恶意文件。
页面中的链接（src href iframe）、重定向、表单提交不受同源策略限制

18. 跨域资源共享（CORS）
答：需要使用跨域的情况  
XMLHttpRequest或Fetch(基于Promise设计支持async/await)发起的跨域HTTP请求
css引入外部字体（@font-face）
WebGL贴图（3D绘图标准）
使用drawImage将Images/Video绘制到Canvas

19. 跨域方法  
答：jsonp原理 由于src等属性不受同源策略约束 可以动态创建script设置src为网址加参数实现跨域  
jsonp只能实现get请求
```html
<script>
   var script = document.createElement('script')
   script.type= 'text/jsvascript'
   //callback 传给服务器回调函数名 服务器返回回调函数的调用 数据为回调函数的参数
   script.src='http://www.test.com:8080/login?user=admin&callback=onBack'
   //回调执行函数
   function onBack(res) {
     console.log(JSON.stringify(res))
   }
</script>
```
jquery ajax 封装jsonp跨域
```javascript
   $.ajax({
      url: 'http://www.test.com:8080/login',
      type: 'GET',
      data: {},
      dataType: 'jsonp',
      jsonpCallback: 'onBack',//自定义回调函数名
      success: function(res) {
        console.log(res)
      }
   })
```

vue jsonp
```ecmascript 6
  this.$http.jsonp('http://www.test.com:8080/login',{
    params: {},
    jsonp: 'callback' //默认传callback
  }).then((res) => {
     console.log(res)
  })
```
vue 代理 proxy跨域
```javascript
   module.exports = {
      proxy: {
           '/api': {
             target: 'http://www.test.com',
             changeOrigin: true,
             pathRewrite: {
               '^/api': '/'
             }
           }
         }
   }
```
iframe(标签元素会创建一个包含另外一个文档的内联框架 iframe标签里的内容会在浏览器不支持  
iframe的情况下显示) 跨域  
后台响应设置Access-Control-Allow-Origin允许跨域访问  
WebSocket（双工通信，允许跨域） 协议跨域 可以使用Socket.io操作

20. 前端工程化  
答：开发规范（es6规范）  
模块化开发（闪购模块 积分兑换模块等）  
组件化开发（同一项目内可复用代码）  
性能优化 （减少无用代码消耗）  
项目部署 （上传远端仓库 服务器拉取代码）  
开发流程 （按流程按计划推进项目开发）  
开发工具 （webpack打包项目）  
前端工程化有两层含义：  
广义的前端工程化（前端工程是软件工程的一个子类，指的是将软件工程的方法和原理运用在前端开发中，目的是  
实现 高效开发、有效协同、质量可控。）
狭义的前端工程化（前端工程是将 开发阶段 的代码转变成 生产环境 的代码的 一系列步骤。主要包括  
构建 分支管理 自动化测试 部署等）
一般说前端工程化指狭义工程化

21. 哈希表  
答：散列表（哈希表），是根据关键码值直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中  
一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。

22. 堆和栈
答：变量都存在内存中 内存给变量开辟了两块区域，栈区域和堆区域  
栈的特点 开口向上、速度快、容量小。  
堆的特点 速度稍慢、容量比较大。
基本数据类型都存放在栈区域  
引用数据类型都存放在堆区域（栈存储引用类型的指针 指向堆存储的引用类型的值）
 
23. 浅拷贝和深拷贝  
答：浅拷贝仅仅是将引用类型的指针赋值给新的变量 深拷贝将引用类型的值（每一层）赋值给新的变量。

24. 深拷贝的方法  
答：深拷贝数组：  
数组内容为基本类型时 可以用for循环遍历push新数组（第一层拷贝）  
slice()方法不改变原数组，返回两个下标之间截取的元素为新数组元素（第一层拷贝）  
当slice无参数时返回一个与原数组相同的新数组(仅拷贝数组第一层，当数组元素为对象时依然存储的是对象指针)
concat Object.assgin()同slice类似（第一层拷贝） 
真正的深拷贝：遍历复杂数据的每一项（工程庞大不推荐）
JSON.parse(JSON.stringify(obj)) // 值 undefined function symbol 被忽略不拷贝
jquery $.extend([deep], target, object1, [,objectN]) //deep 为布尔值
```ecmascript 6
   let arrayA = [{a: '1'}]
   let arrayB = []
   arrayB = arrayA
   console.log(arrayB) //[{a: '1'}] 浅拷贝
   let arrayC = arrayA.slice() // 深拷贝（一层）
   console.log(arrayC) //[{a: '1'}]
   arrayC.push({b: '1'})
   console.log(arrayA) //[{a: '1'}]
   console.log(arrayC) //[{a: '1'}, {b: '1'}]
   arrayC[0].a = '2'
   console.log(arrayA) //[{a: '2'}]
   console.log(arrayC) //[{a: '2'}, {b: '1'}]
``` 
25. window.requestAnimationFrame(callback) 在浏览器中运行一个动画
```ecmascript 6
var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) { //timestamp 回调被传入参数 表示开始去执行回调函数的时刻
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}
//回调函数执行次数通常是每秒60次 与浏览器刷新率匹配
let  ID = window.requestAnimationFrame(step); //返回值 一个long整数，请求ID 是回调列表中唯一的标识  
window.mozCancelAnimationFrame(ID) //可以取消这个动画
```
26. 移动端适配
答：
绝对单位（固定物理大小）： px 像素单位
相对单位(相对当前对象内文本的字体尺寸):   
em：基准点为父节点字体的大小如果自身定义了font-size按自身计算(浏览器默认1em = 16px)  
rem: 相对根节点html的字体大小计算（html font-size）  
百分比相对单位：
vw: viewpoint width 视窗宽度 1vw等于视窗宽度的1%
vh: viewpoint height 视窗高度 1vh等于视窗高的1%
%: 相对于父元素的百分比值。  
通过媒体查询的方式 @media screen and (min-width : 600px) {//写css样式}  
@media screen and (orientation: landscape) {} //手机横屏样式
```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
```
rem适配（Flexible手淘）根据屏幕宽度设定rem值 需要适配的元素都使用rem，不需要适配的使用px(1em = 16px)
vw适配  将设计稿中的px转换为vw即可，可以使用postcss转换（推荐）

rem+vw 适配方案（默认设置html font-size 13.333333 或 26.333333）
```
// rem 单位换算：定为 75px 只是方便运算，750px-75px、640-64px、1080px-108px，如此类推
$vw_fontsize: 75; // iPhone 6尺寸的根元素大小基准值
@function rem($px) {
     @return ($px / $vw_fontsize ) * 1rem;
}

// 根元素大小使用 vw 单位
$vw_design: 750;
html {
    font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw; 
    // 同时，通过Media Queries 限制根元素最大最小值
    @media screen and (max-width: 320px) {
        font-size: 64px;
    }
    @media screen and (min-width: 540px) {
        font-size: 108px;
    }
}

// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
    max-width: 540px;
    min-width: 320px;
}
```
27. vue 生命周期
答：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destoryed
28. es6和es5有什么区别  
答：es6新增块级作用域 关键字let 常量const  
对象字面量的属性赋值简写
定义变量可以解构赋值
函数可以设置默认值参数 可以确保多种调用情况
增加了Generator函数
增加了Class
定义了Modules
新增了Map、Set、WeakMap、WeakSet 四种集合类型
新增了一些API
新增了Proxies 代理监听
新增了Symbol 基本数据类型
新增了Promise 对象
新增了箭头函数
29. Promise函数的异步
答：Promise函数是处理异步操作的对象 可以使用链式调用来获取数据
30. 对node的理解
答：node.js是一个基于Chrome V8 引擎的JavaScript运行时
31. express和koa2有什么区别
答：koa2与express提供的API大致相同，express是大而全，内置了大多数的中间件。koa2不绑定任何的框架，更加简洁
方便实现定制化、扩展性好。
32. 设计模式
33. 常用算法
34. 图形学
35. webgl 、Threejs
答：WebGL是在浏览器中实现三维效果的一套规范
36. TCP/IP 工作原理

### 面试题

1. 对闭包的了解？
2. 对原型、原型链的了解？
3. 项目鉴权？
4. promise?
5. 事件循环？
6. 垃圾回收？
7. 继承？
8. 类？
9. 虚拟dom?
10. fiber?
11. hook?
x. 项目中遇到过哪些问题？
自我介绍一下
1. 技术选型 react和vue有什么区别？
2. 项目遇到的难点有哪些？
3. 项目的首屏优化？
4. webpack的打包优化？
5. mvc mvp mvvm
6. 微前端
7. 怎么优化垃圾回收
8. 搭建项目脚手架
9. 脚手架生成项目后还需要做什么？
