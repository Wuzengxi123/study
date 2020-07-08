//二、执行结果   并解释原因

var tmp = 123;
if(true){
    console(tmp)
    let tmp
}

// 输出：会报错

//解释： 首先这道题目考察了一个全局变量  使用var tmp = 123;  定义了一个全局变量  主要会考察变量提升的问题 稍后在举一反三中说明
// 再就是考察了 在if里面属于一个局部的作用域  使用let定义是不存在变量提升的问题 在没有定义tmp之前打印了tmp  所以导致打印结果会报错  
// 举一反三： 
console.log(tmp)
var tmp = 123;
if(true){
    let tmp = 456;
    console.log(tmp)
}

// 输出：undefined 456
//解释 :使用var定义变量tmp存在变量提示  类似于   var tmp; console.log(tmp);  tmp = 123;   所以打印输出：undefined  （最好使用let const）
//使用let定义变量 有局部作用域  在没有定义之前使用会报错   必须要在定义之后使用才行  所以打印 456