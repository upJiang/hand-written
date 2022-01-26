Array.prototype.myReduce = function (callbackFn) {
    var _arr = this, accumulator = arguments[1];
    var i = 0;
    // 判断是否传入初始值
    if (accumulator === undefined) {
        // 没有初始值的空数组调用reduce会报错
        if (_arr.length === 0) {
            throw new Error('initVal and Array.length>0 need one')
        }
        // 初始值赋值为数组第一个元素
        accumulator = _arr[i];
        i++;
    }
    for (; i < _arr.length; i++) {
        // 计算结果赋值给初始值
        accumulator = callbackFn(accumulator, _arr[i], i, _arr)
    }
    return accumulator;
}

// 思路：
// 判断是否传入初始值，如果没有传入初始值并且，第一个数组还是空的，就返回异常，否则将数组的第一项作为初始值
// 开始循环数组，迭代执行传入的方法，传入四个值
// 接受四个参数：
// - accumulator 累加器，当前执行的结果
// - currentValue 当前执行的值
// - currentIndex 当前执行的index
// - array 正在被执行的数组
// - initialValue 初始值
