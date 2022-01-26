//ES6 提供的 Set 去重
function unique(arr) {
    const result = new Set(arr);
    return [...result];
    // return Array.from(result); //不兼容ie
    //使用扩展运算符将Set数据结构转为数组
}

// filter 配合 indexOf，
//使用 indexOf 获取当前内容的下标，这个下标必须跟当前 index 相等，不想等说明出现在别的地方，是重复的需过滤
function unique(arr) {
    return arr.filter(function (item, index, arr) {
        return arr.indexOf(item) === index;
    })
}

// reduce
let arr = [1, 2, 2, 4, null, null].reduce((accumulator, current) => {
    return accumulator.includes(current) ? accumulator : accumulator.concat(current);
}, []);
