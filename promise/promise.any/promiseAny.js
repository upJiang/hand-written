function promiseAny(promiseArr) {
    let index = 0
    return new Promise((resolve, reject) => {
        if (promiseArr.length === 0) return
        promiseArr.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                resolve(val)

            }, err => {
                index++
                if (index === promiseArr.length) {
                    reject(new AggregateError('All promises were rejected'))
                }
            })
        })
    })
}

module.exports = promiseAny;

// 思路：
// 计数，当遇到成功状态，就返回这个结果，当全部都失败，就返回失败信息


