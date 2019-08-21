# ES6(不限于ES6)
 ### 解构赋值
 #### 数组的解构赋值
 
  1. 数组左边变量对应右边位置的值
  2. 右边对应位置没有值时左边变量为 undefined
  3. 左边变量可以设置默认值 当右边值为undefined 时生效
 
  ```ecmascript 6
     let [a, b, c] = [1, 2, 3]
     let [foo = true] = []
```
  
 #### 对象的解构赋值
 
 1. 变量与属性同名才能取到正常值
 2. 解构失败变量的值为undefined
 3. 对象的解构赋值真正赋值的变量是左边第二个baz
  ```ecmascript 6
     let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
     let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'}
     
     let {foo: baz} = {foo: 'aaa'} 
     baz //'aaa' 
     foo // foo is not defined
     
     let {x=3} = {} 
     x // 默认值 3
``` 
 #### 函数参数的解构赋值
 1. 表面上参数是数组 但是传参时会解构赋值为x y
 2. 函数的解构赋值也可以使用默认值
 3. 函数的参数指定默认值
 ```ecmascript 6
    function add([x, y]) {
      return x + y
    }
    add([1, 2])
    function move({x = 0, y = 0} = {}) {
      return [x, y]
    }
    function move1({x, y} = {x:0, y:0}) {
      return [x, y]
    }
    
```
### 字符串的扩展
  1. for...of 可以循环遍历字符串
  2. includes() 、startsWith()、endsWith() 返回布尔值
  3. repeat() 返回新的字符串 将原字符串重复n次
  4. padStart()、padEnd() 指定字符串长度并补齐
  5. trim() trimStart(), trimEnd() 消除字符串空格
  
### 正则表达式
### 数值的扩展
  1. Number.isFinite() 如果参数类型不是数值 返回false finite有限的 Infinity 无穷的
  2. Number.isNaN() 如果参数类型不是NaN 返回false
  3. Number.parseInt()
  4. Number.parseFloat()
  5. Number.isInteger() 判断一个数值是否为整数
  6. Math.trunc() 去除一个数的小数部分返回整数部分 非数值先转换为数值 无法截取的值或空返回NaN
  7. Math.sign() 判读一个数是正数、负数或者0 返回值有五种+1、-1、0、-0、NaN
  
### 函数的扩展
  1. 函数参数可以设置默认值
  ```ecmascript 6
     function sum(x=0, y=0) {
       return x + y
     }
     sum() //0
     sum(1) //1
     sum(1, 1) //2
```
