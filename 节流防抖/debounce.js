
// 防抖： 按最后一次算。比如说“停止输入5s后才发送请求”，防止多次点击  (比较常用)
// 你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行
// 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行。

// 关键点就是，进来清除上一次的定时器，重新设置定时器

// 可以看出debounce函数的实现原理就是通过计时器延迟函数执行，短时间内再次触发时重置并添加新计时器。

//第一次触发可以立即执行，并且有取消功能
function debounce(fn, wait = 1000, immediate = false) {
    let timer = null;

    function debounced(...args) {
        // 每次进来都重置计时器，当没有触发了，才真正执行，
        // 或者是 延迟时间 比 触发间隔短 执行
        timer && clearTimeout(timer);

        // 首次立即执行
        if (immediate && !timer) {
            fn.apply(this, ...args);
            // 立即执行完，再过 wait 就不执行了
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            return;
        }

        // 新计时器
        timer = setTimeout(() => {
            fn.apply(this, ...args);
            timer = null;
        }, wait);
    }

    debounced.cancel = () => {
        clearTimeout(timer);
        timer = null;
    };

    return debounced;
}

module.exports = debounce;