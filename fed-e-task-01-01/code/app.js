// 测试promise 代码

const MyPromise = require('./task-01/myPromise');

let promise = new MyPromise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("ss")
    // },2000)
    // throw new Error("executor Error")
    resolve("ss")
    // reject("ff")
})

// promise.then(value=>{
//     console.log(value)
// },reason=>{
//     console.log(reason)
// })

// promise.then(value=>{
//     console.log(1)
//     console.log(value)
// },reason=>{
//         console.log(reason)
//     })
// promise.then(value=>{
//     console.log(2)
//     console.log(value)
// },reason=>{
//     console.log(reason)
// })
// promise.then(value=>{
//     console.log(3)
//     console.log(value)
// },reason=>{
//     console.log(reason)
// })

// promise.then(value=>{
//     console.log(value)
//     return 100;
// }).then(value=>{
//     console.log(value)
// })
// function other(){
//     return new MyPromise((resolve,reject)=>{
//     resolve("other");
//     })
// }
// promise.then(value=>{
//     console.log(value)
//     return other();
// }).then(value=>{
//     console.log(value)
// })

// let p1 = promise.then(value=>{
//     console.log(value)
//     // return p1;
// },reason=>{
//     console.log(reason)
// })
// .then(value=>{
//     console.log(value)
// })

// promise.then(value=>{
//     console.log(value)
//     throw new Error("then Error")
//     // return p1;
// },reason=>{
//     console.log(reason)
// })