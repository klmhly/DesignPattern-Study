// 一、1)定义发布者
var taobao = {}

// 2）,给发布者添加缓存列表,存放订阅者回调函数
taobao.listFn = []

// 二、1）,增加订阅者回调函数
taobao.listen = function (fn) {
    this.listFn.push(fn)
}

// 2）发布消息
taobao.trigger = function () {
    for (var i=0,fn; i<this.listFn.length;i++) {
        var fn = this.listFn[i]
        fn.apply(this,arguments)
    }
}

// 三、1）订阅者们订阅消息
taobao.listen(function (color,size,price) {
    console.log('A款商品颜色是：'+color)
    console.log('A款商品尺码是：'+size)
    console.log('A款商品价格是：'+price)
})
taobao.listen(function (color,price) {
    console.log('B款颜色是：',color)
    console.log('B款价格是：',price)
})

taobao.trigger('红色',24,'¥89')
taobao.trigger('黑色','$66')