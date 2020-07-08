//五、  说明 var let const
var  a = 10;
var obj = {
    a:20,
    fn(){
        setTimeout(()=>{
            console.log(this.a)
        })
    }
}
obj.fn()
//输出 20
//解释： 考察箭头函数的特性 箭头函数的this永远指向其父作用域 他的父级指向obj 所以输出20
// 举一反三：
var  a = 10;
var obj = {
    a:20,
    fn(){
        setTimeout(function(){
            console.log(this.a)
        })
    }
}
obj.fn()
//输出 10   
//解释： setTimeout中的this 指向window  所以输出10
var  a = 10;
var obj = {
    a:20,
    fn(){
        let self =  this;
        setTimeout(function(){
            console.log(self.a)
        })
    }
}
obj.fn()
//输出 20
//解释： 同样实现箭头函数一样的功能  提前保存下this的值  使用self代替setTimeout中的this
