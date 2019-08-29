# ES6(不限于ES6)
 ### 一 、解构赋值
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
### 二、字符串的扩展
  1. for...of 可以循环遍历字符串
  2. includes() 、startsWith()、endsWith() 返回布尔值
  3. repeat() 返回新的字符串 将原字符串重复n次
  4. padStart()、padEnd() 指定字符串长度并补齐
  5. trim() trimStart(), trimEnd() 消除字符串空格
  
### 三、正则表达式
### 四、数值的扩展
  1. Number.isFinite() 如果参数类型不是数值 返回false finite有限的 Infinity 无穷的
  2. Number.isNaN() 如果参数类型不是NaN 返回false
  3. Number.parseInt()
  4. Number.parseFloat()
  5. Number.isInteger() 判断一个数值是否为整数
  6. Math.trunc() 去除一个数的小数部分返回整数部分 非数值先转换为数值 无法截取的值或空返回NaN
  7. Math.sign() 判读一个数是正数、负数或者0 返回值有五种+1、-1、0、-0、NaN
  
### 五、函数的扩展
  1. 函数参数可以设置默认值
  2. 函数参数可以与解构赋值默认值结合使用
  3. reset参加 形式为...变量名 将所有变量放入一个数组中在函数内使用 rest参数后不允许有其他参数
  4. 箭头函数使用=>定义函数 不需要参数或者需要多个参数使用圆括号传参 代码块多余一条语句 使用大括号
  将他们括起来并使用return语句返回 若想返回对象 必须在对象外面加一个括号
  5. 箭头函数this指向创建函数时的this(即固定) 
  不能当做构造函数 不可以使用arguments 不可以使用 yield 可以使用rest参数
  6. 尾调用 函数的最后一步调用另一个函数
  7. 尾调用优化 只保留内层函数的调用帧(只有不再用到外层函数的内部变量，才会尾调用优化)
  8. 尾递归 函数调用自身，称为递归。如果尾调用自身，就称为尾递归
  9. 柯里化 将多参数形式转换成单参数的形式
  ```ecmascript 6
     function sum(x=0, y=0) {
       return x + y
     }
     sum() //0
     sum(1) //1
     sum(1, 1) //2
     function sum1({x, y=1}) {
       return x + y
     }
     sum1({x:1}) //2
     sum1({x:1, y:4}) //5
     function sum2({x=0, y=1} = {}) {
       return x + y
     }
     sum2() // 1
     function factorial(n, total = 1) {
       if(n === 1) return total
       return factorial(n-1, n*total)
     }
     factorial(5) //120
```
### 六、数组的扩展
  1. 扩展运算符 形式为... 将一个数组转为用逗号分隔的参数序列
  2. Array.from() 将类似数组的对象和可遍历的对象包括Set 和Map 转换为真正的数组
  3. Array.from() 还可以接受第二个参数，作用类似于数组的map方法，处理每个元素处理后的值放入返回的数组。
  4. Array.from() 另一个作用将字符串转为数组。
  5. Array.of() 将一组值转换为数组
  6. copyWithin() 在当前数组内部将制定位置的成员复制到其他位置上返回新的数组。
  7. fill() 使用给定值，填充数组
  ````ecmascript 6
     let arrA = [1, 2, 3]
     let arrB = [4, 5, 6]
     let arrC = [...arrA, ...arrB]
     console.log(arrC) // [1, 2, 3, 4, 5, 6]
     let arrayLike = {'0': 'a', '1': 'b', length: 3}
     let array = Array.form(arrayLike)
     console.log(array) // ['a', 'b']
     Array.of(1, 2, 'a', 'b') // [1, 2, 'a' , 'b']
     [1, 2 ,3 ,4].copyWithin('开始替换位置', '读取数据下标', '停止读取数据下标') 
     [1].fill('填充值', '填充开始位置', '填充结束位置')
````
  