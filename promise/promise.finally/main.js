// 由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，
// 它仅用于无论最终结果如何都要执行的情况
// 并且finally之后，还可以继续then。并且会将值原封不动的传递给后面的then

Promise.prototype.myFinally = function (cb) {
    // 此处的 this 是一个 pending状态的 promise，resolve(cb())会执行 finally 的代码
    // promise后有可能还是一个promise，finally需要原封不动的返回 return结果
    return this.then((value) => {
        return Promise.resolve(cb()).then(function () {
            return value
        })
    }, (err) => {
        return Promise.resolve(cb()).then(function () {
            throw err
        })
    })
}

const promise = new Promise((resolve, reject) => {
    resolve('success')
})

promise.then((res) => {
    return new Promise((resolve) => {
        resolve('success1')
    })
}).myFinally(() => {
    console.log("执行finally");
}).then((res) => {
    console.log("finally后，原封不动返回值", res);
})

// 输出：执行finally finally后，原封不动返回值 success1