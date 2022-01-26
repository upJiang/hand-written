function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        // 判断传入的必须是数组
        if (!Array.isArray(promises)) {
            throw new TypeError("promises must be an array")
        }
        let result = [] // 保存结果
        let count = 0  // 用于判断是否全部执行完
        promises.forEach((promise, index) => {
            promise.then((res) => {
                console.log("res", res);
                result[index] = res
                count++
                count === promises.length && resolve(result)  //全部执行完后输出结果
            }, (err) => {
                reject(err)
            })
        })
    })
}

module.exports = PromiseAll;

// 思路：
// 1. 判断传入的是数组类型
// 2. 定义数组保存每一个 promise 的返回结果，同时开始计数，当数量等于传入的数组长度，则执行完成
// 3. 如果遇到 reject，直接返回 reject 的失败原因，如果全部成功，则返回结果数组

