/* 

    1.promise  是一个类 在执行和这个类的时候需要传递一个执行器  执行器会立即执行
    2.promise  有三种状态  成功（fulfilled）  失败（rejected）  等待（pending）
    pending==>fulfilled
    pending==>rejected   状态发生改变不能进行更改
    3. resolve 和 reject 函数是用来更改状态的
    resolve:成功
    reject:失败
    4.then 方法内部做的事情就是判断状态  状态成功调用成功回调   如果失败调用失败回调 （被定义在原型对象）
    5、then 成功回调的参数  表示成功之后的值  then失败回调中的参数 表示失败后的原因
 */

const PENDING = "pending"; //等待
const FULFILLED = "fulfilled"; //成功
const REJECTED = "rejected"; //失败

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error)
        }
    }
    //状态
    status = PENDING; //默认等待
    //成功后的值
    value = undefined;
    //失败后的原因
    reason = undefined;
    //成功回调
    successCallback = [];
    //失败回调
    failCallback = [];
    resolve = value => {
        // 如果状态不是等待 阻止向下执行
        if (this.status !== PENDING) return;
        //状态成功
        this.status = FULFILLED;
        // 保存成功后的值
        this.value = value;
        //判断成功回调是否存在 如果存在调用
        // this.successCallback && this.successCallback(this.value)
        while (this.successCallback.length) this.successCallback.shift()()
    }

    reject = reason => {
        if (this.status !== PENDING) return;
        //状态失败
        this.status = REJECTED;
        // 保存失败后的原因
        this.reason = reason;
        //判断失败回调是否存在 如果存在调用
        // this.failCallback && this.failCallback(this.reason)
        while (this.failCallback.length) this.failCallback.shift()()
    }

    then(successCallback, failCallback) {
        successCallback = successCallback ? successCallback : value => value;
        failCallback = failCallback ? failCallback : reason => { throw reason }
        let promise1 = new MyPromise((resolve, reject) => {
            // 判断状态
            if (this.status === FULFILLED) {  //成功
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value)
                        //判断x 是普通值还是promise对象
                        // 如果是普通值 直接调用resolve 
                        // 如果是promise对象查看对象返回结果
                        // 再根据promise对象返回的结果决定是调用resolve还是reject
                        resolvePromise(promise1, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else if (this.status === REJECTED) {  //失败
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason)
                        //判断x 是普通值还是promise对象
                        // 如果是普通值 直接调用resolve 
                        // 如果是promise对象查看对象返回结果
                        // 再根据promise对象返回的结果决定是调用resolve还是reject
                        resolvePromise(promise1, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else {
                //等待
                //存储成功回调  失败回调
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value)
                            //判断x 是普通值还是promise对象
                            // 如果是普通值 直接调用resolve 
                            // 如果是promise对象查看对象返回结果
                            // 再根据promise对象返回的结果决定是调用resolve还是reject
                            resolvePromise(promise1, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason)
                            //判断x 是普通值还是promise对象
                            // 如果是普通值 直接调用resolve 
                            // 如果是promise对象查看对象返回结果
                            // 再根据promise对象返回的结果决定是调用resolve还是reject
                            resolvePromise(promise1, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                });
            }
        })
        return promise1;
    }

    finally(callback){
        return this.then(value=>{
            return MyPromise.resolve(callback()).then(()=>value)
        },reason=>{
            return MyPromise.resolve(callback()).then(()=>{throw reason})
        })
    }
    
    catch(failCallback){
        return this.then(undefined,failCallback);
    }

    static all(array){
        let result = [];
        let index = 0;
        return new MyPromise((resolve,reject)=>{
            function addData(key,value){
                result[key] = value;
                index++;
                if(index==array.lengt){
                    resolve(result)
                }
            }
            for(let i = 0;i<array.length;i++){
                let current = array[i]
                if(current instanceof MyPromise){
                    //promise
                    current.then(value=>addData(i,value),reason=>reject(reason))
                }else{
                    //普通值
                    addData(i,array[i])
                }
            }
        })
    }

    static resolve(value){
        if(value instanceof MyPromise) return value;
        return new MyPromise(resolve=>resolve(value));
    }
}

function resolvePromise(promise1, x, resolve, reject) {
    if (promise1 === x) {
        return reject(new TypeError("promise不能循环调用自己"))
    }
    if (x instanceof MyPromise) {
        //是promise对象
        // x.then(value=>resolve(value),reason=>reject(reason))
        x.then(resolve, reject);
    } else {
        //是普通值
        resolve(x);
    }
}
module.exports = MyPromise;