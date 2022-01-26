// 执行所有的 promise，返回所有的 promise 状态与结果，reject不影响过程

const promiseAllSettled = require('./promiseAllSettled')

const promise1 = new Promise((resolve, reject) => {
    resolve('success1')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('success2')
})

const promise3 = new Promise((resolve, reject) => {
    reject('error')

})

promiseAllSettled([promise1, promise2, promise3]).then((res) => {
    console.log("AllSettled全部执行完成", res);
})

// 执行结果
//  全部执行完成 [
//     { status: 'fulfilled', value: 'success1' },
//     { status: 'fulfilled', value: 'success2' },
//     { status: 'rejected', reason: 'error' }
//   ]
