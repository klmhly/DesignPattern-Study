// 1，用event对象封装订阅事件列表，订阅者，发布者

var event = {
    listFn:[],
    listen:function (key,fn) {
        if(!this.listFn[key]){
            this.listFn[key] = []
        }
        this.listFn[key].push(fn)
    },
    trigger:function () {
        var key = Array.prototype.shift.call(arguments)   //删除数组中的第一个元素，并且返回这个元素
        var fns = this.listFn[key]
        if (!fns || fns.length==0){
            return
        }
        for(var i = 0; i<fns.length;i++){
            fn = fns[i];
            fn.apply(this,arguments)
        }
    }
}

//2，使所有普通对象都具有发布订阅功能
var initEvent = function (obj) {
    for (var i in event) {
        obj[i] = event[i]
    }
}


//3,测试
var taobao = {}
initEvent(taobao)


// 小红订阅上衣信息
taobao.listen('上衣',function (color,size,price) {
    console.log('A款商品颜色是：'+color)
    console.log('A款商品尺码是：'+size)
    console.log('A款商品价格是：'+price)
})
//小明订阅裤子信息
taobao.listen('裤子',function (color,price) {
    console.log('B款颜色是：',color)
    console.log('B款价格是：',price)
})

taobao.trigger('上衣','红色',24,'¥89')
taobao.trigger('裤子','黑色','$66')