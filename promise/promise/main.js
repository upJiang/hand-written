const MyPromise = require('./MyPromise')
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000);
})

promise.then(value => {
    console.log(1)
    console.log('resolve', value)
})

promise.then(value => {
    console.log(2)
    console.log('resolve', value)
})

promise.then(value => {
    console.log(3)
    console.log('resolve', value)
})

// 1
// resolve success
// 2
// resolve success
// 3
// resolve success

// 这里没有处理 then 的链式回调，如要更深入请查阅 https://juejin.cn/post/6945319439772434469#heading-15


