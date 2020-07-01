//  使用 promise 替换setTimeout 
// setTimeout(() => {
//     var a = 'hello'
//     setTimeout(() => {
//         var b = 'lagou'
//         setTimeout(() => {
//             var c = 'i love you'
//             console.log(a + b + c)
//         }, 10)
//     }, 10)
// }, 10)

function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let a = 'hello', b = 'lagou', c = 'i love you';
timer(10).then(() => console.log(a + b + c));