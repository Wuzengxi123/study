# *fed-e-task-01-01*

## 1、什么是js异步编程

### 由于js执行环境是单线程的，只有前面处理好后面才会继续执行（同一时间只能做一件事情)；
### js异步编程不会等待当前任务结束才会去执行下一个任务，任务开启后就会继续去执行下一个任务，当这个异步任务完成后，会将异步任务的回调放到消息队列，当js主线程执行完毕后会依次执行消息队列的任务。

## 2、eventLoop、消息队列

### eventLoop（事件循环）：当执行代码的时候会产生异步任务，异步任务完成后会放到消息队列，当前任务完成后会执行消息队列任务，这个执行的过程就叫做事件循环（eventLoop）
### 消息队列：消息队列就是从来处理异步任务的

## 3、宏任务、微任务

### 宏任务：每次执行站执行的代码就是一个宏任务 
### 微任务：在当前任务结束后立即执行的任务 

## 举一反三

#### 题目1
```
 setTimeout(function(){
     console.log('start')
 },0);
 new Promise(function(resolve){
     console.log('执行Promise');
 }).then(function(){
     console.log('执行then')
 });
 console.log('代码执行结束');

执行结果
 执行Promise
 代码执行结束
 执行then
 start
```
#### 题目2
```
async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
async1()
console.log( 'script start' )

执行结果
async1 start
async2
script start
async1 end

```

#### 题目3
```
async function async1() {
    console.log( 'async1 start' ) 
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
console.log( 'script start' ) 
setTimeout( function () {
    console.log( 'setTimeout' )
}, 0 )
async1();
new Promise( function ( resolve ) {
    console.log( 'promise1' )
    resolve();
} ).then( function () {
    console.log( 'promise2' ) 
} )
console.log( 'script end' )

执行结果
script start 
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

## 总结：

### 首先从执行站执行一个宏任务，执行过程中如果遇到微任务，就将它添加到微任务的任务队列中，宏任务执行完毕后，立即执行当前微任务队列中的所有微任务，开始下一个宏任务，依次循环。


