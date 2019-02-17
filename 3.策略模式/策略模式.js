// 不同的年终奖发放策略
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