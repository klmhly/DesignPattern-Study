// 不同的年终奖发放策略
// 1）把所有的策略对象封装成一个策略对象
// 2）定义函数，分配对应的请求返回对应的策略


var strategies = {
    a : function (salary) {
        return salary*4
    },
    b : function (salary) {
        return salary*3
    },
    c : function (salary) {
        return salary*2
    }
}

var calculate = function (grade,money) {
    return strategies[grade](money)
}

console.log(calculate('a',20000))
console.log(calculate('b',15000))