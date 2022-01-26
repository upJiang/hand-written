执行所有

const PromiseAll = require('./promiseAll')

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success1')
    }, 5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success2')
    }, 1000);
})

const promise3 = new Promise((resolve, reject) => {
    reject('error')
})

PromiseAll([promise1, promise2, promise3]).then((res) => {
    console.log("全部执行完成", res);
}).catch((error) => {
    console.log("执行异常", error)
})

//执行结果，如果没有 reject，输出 ['success1','success1']，reject 输出 error
