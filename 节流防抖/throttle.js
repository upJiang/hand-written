// 节流： 多次触发同一个函数，同一段时间内只执行一次，所以节流会稀释函数的执行频率。触发后只在乎时间，时间到了才执行
// 如果事件不停的触发，它会在规定的时间内一直触发

// fn：执行的方法，wait：等待的时间，immediate：第一次进入是否执行

// 设置上次执行毫秒数初始值 0 ，设置 当前毫秒数 now，通过 now - previous 是否大于传入的等待毫秒数控制方法执行

// 每次点击进入
function throttle(fn, wait, immediate = false) {
    let timer; // 定时器
    let previous = 0; // 上次执行毫秒数初始化 0

    const throttled = function (...args) {
        // args 为执行函数传入的参数

        // 清除上一个 timer
        if (timer) clearTimeout(timer);

        const now = +new Date();
        // 如果第一次进来：previous === 0 并且不需要立即执行 immediate === false
        // 设置当当前毫秒数等于上次执行毫秒数，相减等于0，肯定小于等待时间 wait，所以不能立即执行。
        if (immediate === false && !previous) previous = now; // 控制不能立即执行

        // now - previous 是否大于传入的等待毫秒数控制方法执行
        if (now - previous > wait) {
            fn.apply(this, args);
            previous = now; // 执行完将上次执行毫秒数设置为当前毫秒数
        }
    }

    // 提供马上停止的方法
    throttled.cancel = () => {
        clearTimeout(timer);
        timer = null;
        previous = 0;
    }

    return throttled;
}

module.exports = throttle;