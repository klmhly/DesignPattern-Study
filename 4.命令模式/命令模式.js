// 中间发送者，fn函数其实就是命令对象
var setCommond = function(button, fn) {
    button.onClick = function() {
        fn()
    }
};

// 命令接受对象：执行命令者
var menu = {
    reFresh: function() {
        console.log("刷新");
    },
    add: function() {
        console.log("增加");
    },
    delete: function() {
        console.log("删除");
    }
};

// 命令对象
var commondObj = function(reciver) {
    return function() {
        reciver.reFresh();
    }
};

//执行
var commondObj1 = commondObj(menu);
setCommond(btn1, commondObj1);