function allSettled(promises) {
    if (promises.length === 0) return Promise.resolve([])

    const _promises = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )
    return new Promise((resolve, reject) => {
        const result = []
        let unSettledPromiseCount = _promises.length

        _promises.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = {
                    status: 'fulfilled',
                    value
                }

                unSettledPromiseCount -= 1
                // resolve after all are settled
                if (unSettledPromiseCount === 0) {
                    resolve(result)
                }
            }, (reason) => {
                result[index] = {
                    status: 'rejected',
                    reason
                }

                unSettledPromiseCount -= 1
                // resolve after all are settled
                if (unSettledPromiseCount === 0) {
                    resolve(result)
                }
            })
        })

    })
}

module.exports = allSettled;

// 思路：
// 当所有的 promise 都执行完了把结果组成数组，包含状态以及 value。
// 首先判断传入的 promise 数组长度，为0直接返回空数组
// 如果 promise 中没有 reslove 或 reject 的，我们只处理 reslove 或 reject 的，所以没有会直接跳出不执行，停止
// 通过计数 -1 ，以及包装结果，返回全部正常结束的最终结果
