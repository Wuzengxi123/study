const fp = require('lodash/fp');
const cars = [
    {
        name: 'Ferrari FF',
        horsepower: '660',
        dollar_value: '700000',
        in_stock: true
    },
    {
        name: 'Spyker C12 Zagato',
        horsepower: '650',
        dollar_value: '648000',
        in_stock: false
    },
    {
        name: 'Jaguar XKR-S',
        horsepower: '550',
        dollar_value: '132000',
        in_stock: false
    },
    {
        name: 'Audi R8',
        horsepower: '525',
        dollar_value: '114200',
        in_stock: true
    },
    {
        name: 'Aston Martin One-77',
        horsepower: '750',
        dollar_value: '1850000',
        in_stock: true
    },
    {
        name: 'Pagani Huayra',
        horsepower: '700',
        dollar_value: '1300000',
        in_stock: false
    }
]

// 源码
// let isLastInStock = function(){
//     let last_car = fp.last(cars);
//     return fp.prop('in_stock',last_car);
// }
// console.log(isLastInStock())

// 练习1：使用fp.flowRight实现：
const f1 = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log("练习1：", f1(cars))

// 练习2： 使用fp.flowRight实现：
const f2 = fp.flowRight(fp.prop('name'), fp.first)
console.log("练习2：", f2(cars))

// 练习4： 使用fp.flowRight实现：

function sanitizeNames(v) {
    let _underscore = fp.replace('/\w+/g', '_');
    let _tool = fp.replace(/\s+/g, '_');
    return fp.flowRight(_tool, _underscore, fp.toLower)(v[0])
}

console.log("练习4：",sanitizeNames(["Hellow Wolord"]));