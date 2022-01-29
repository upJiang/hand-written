const debounce = require('./debounce') //防抖
const throttle = require('./throttle') //节流

const check = 0 // 0:测试防抖 1:测试节流

const test = !check ? debounce((num) => {
    console.log("执行防抖", res);
    console.log("接收参数", num);
}, 2000, true) : throttle((num) => {
    console.log("执行节流");
    console.log("接收参数", num);
}, 5000, true)

// 模拟不停的点击
test('111')
const debounceInterval = setInterval(() => {
    test()
}, 1000);

// 测试防抖，需要清除一直点击后再延迟指定秒数去执行
!check && setTimeout(() => {
    clearInterval(debounceInterval)
}, 5000);



