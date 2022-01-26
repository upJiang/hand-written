
// 防抖： 按最后一次算。比如说“停止输入5s后才发送请求”，防止多次点击  (比较常用)
// 可以看出debounce函数的实现原理就是通过计时器延迟函数执行，短时间内再次触发时重置并添加新计时器。

//第一次触发可以立即执行，并且有取消功能
function debounce(fn, wait = 1000, immediate = false) {
    let timer = null;

    function debounced(...args) {
        // 重置计时器
        if (timer) clearTimeout(timer);

        // 首次立即执行
        if (immediate && !timer) {
            fn.apply(this, ...args);

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