//三、使用es6  找出数组最小值

var arr= [1,2,3,4,5,65,4,53,3,4,5,3,0];
console.log(Math.min(...arr))

// 输出：0
//解释： 首先使用 es6中的解构  将数组展开 然后使用Math.min给我们提供的函数  传入多个参数来输出最小的一个值

// 举一反三：（首先去重 其次数组中获取最小值）

var arr= [1,2,3,4,5,65,4,53,3,4,5,3,0];
var minValue = Array.from(new Set(arr))
console.log(Math.min(...minValue))

// 输出：0
//解释： 首先使用 es6中 Array.from(new Set(arr))  将数组去重 然后使用Math.min给我们提供的函数  传入多个参数来输出最小的一个值