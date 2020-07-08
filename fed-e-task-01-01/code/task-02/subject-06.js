//六、  简述Symbol类型和用途

//解释： ES6中新增的一种类型  使用Symbol 用来解决命名冲突问题   Symol，用来产生一个全局唯一的标识符，它接受一个字符串参数，作为该标识符的描述


// 举一反三：
var flag1 = Symbol("abc");
var flag2 = Symbol("abc");
console.log(flag1==flag2)

// 输出 false