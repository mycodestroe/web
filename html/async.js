// const fun = () => {
//   const startT = Date.now();
//   while (startT > Date.now() - 5000) {
//     console.log(22);
//   }
//   console.log("end");
// };
// fun();
const Person = function () {
  console.log("我被使用了");
  this.name = "wdl";
  this.age = "20";
  this.sayHello = function () {
    console.log("hello" + this.name);
  };
};
const person1 = new Person();
console.log(person1);
// person1.name = "wdl2";
person1.sayHello();
Object.prototype.toString.call(1);
