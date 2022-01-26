// 执行 promise 数组，当遇到一个 成功状态，就返回这个成功结果，如果全部失败，就返回 失败提示// 执行所有的 promise，返回所有的 promise 状态与结果，reject不影响过程

const promiseAny = require('./promiseAny')

const promise1 = new Promise((resolve, reject) => {
    resolve('success1')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('success2')
})

const promise3 = new Promise((resolve, reject) => {
    reject('error')
})

promiseAny([promise1, promise2, promise3]).then((res) => {
    console.log("promiseAny结果", res);
})

// 执行结果
// promiseAny结果 success1
