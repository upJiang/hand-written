// 节流： 多次触发同一个函数，同一段时间内只执行一次，所以节流会稀释函数的执行频率

// 可以看出节流的主要原理就是利用时间差（当前和上次执行）来过滤中间过程触发的函数执行。控制是否在开始时会立即触发一次，及最后一次触发是否执行,添加取消的功能

// fn：执行的方法，wait：等待的时间，leading：第一次进入是否执行，trailing：时间结束后是否执行
function throttle(fn, wait, options = { leading: true, trailing: false }) {
    let timer; // 定时器
    let previous = 0; // 时间

    const { leading, trailing } = options;

    const throttled = function (...args) {
        const now = +new Date(); //开始计时

        //如果第一次进来不需要执行 leading === false，并且 previous === 0，即！，那么
        if (leading === false && !previous) previous = now;
        if (timer) clearTimeout(timer);

        if (now - previous > wait) {
            fn.apply(this, args);
            previous = now;
        } else if (trailing) {
            // 更新timer
            timer = setTimeout(() => {
                fn.apply(this, args);
                previous = 0;
                timer = null;
            }, wait);
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