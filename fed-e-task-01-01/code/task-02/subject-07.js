//七、  深拷贝  浅拷贝

// 浅复制：仅仅是指向被复制的内存地址，如果原地址发生改变，那么浅复制出来的对象也会相应的改变。

// 深复制：在计算机中开辟一块新的内存地址用于存放复制的对象。


// 实现深拷贝  主要利用了递归 
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断obj子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    


// 前段时间在掘进看到他们发的面试题中有使用JSON.parse、JSON.stringify去实现深拷贝 并且有什么弊端
// 弊端：无法处理function、RegExp，还有无法处理循环引用对象