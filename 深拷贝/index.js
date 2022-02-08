// 深拷贝，只拷贝内容，不拷贝地址，不会造成互相影响
const deepClone = (target) => {
    // 判断是否是对象并且不为null
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};
        // 递归克隆
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = deepClone(target[prop]);
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}

const object1 = {
    a: 1,
    b: {
        c: 2
    },
    d: ['1', '2']
}

const object2 = deepClone(object1) // 这里两个的a为1 和 3
// const object2 = object1 // 这里两个的a都将输出3

object2.a = 3
console.log('object1', object1);
console.log('object2', object2);
