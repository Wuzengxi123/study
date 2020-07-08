//一、执行结果   并解释原因

var a = [];
for(var i = 0;i<10;i++){
    a[i] = function(){
        console.log(i)
    }
}
a[6]();  

// 输出：10
//解释：  主要考察局部作用域的问题   使用var定义的变量i是全局作用域   for循环循环10次 很快就会执行完 且每次都会输出10   
// 举一反三： let 实现
var a = [];
for(let i = 0;i<10;i++){
    a[i] = function(){
        console.log(i)
    }
}
a[6]();  
// 输出：6
//解释：  使用let关键字来定义变量i  它属于局部作用域（类似于闭包所实现）所以会输出6

// 举一反三： 闭包 实现
var a = [];
for(var i = 0;i<10;i++){
    (function(i){
        a[i] = function(){
            console.log(i)
        }
    })(i)
}
a[6]();  
// 输出：6
//解释：  使用闭包来实现  也是有一个局部作用域的概念（类似于let）所以依然会输出6