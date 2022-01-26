const debounce = require('./debounce') //防抖
const throttle = require('./throttle') //节流

const test = throttle(() => {
    console.log("执行");
}, 5000, {
    leading: false,
    trailing: false
})

test()
setInterval(() => {
    test()
}, 1000);
