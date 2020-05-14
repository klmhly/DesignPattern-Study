class Event{
    constructor(){
        this.handlers = {
        }
    }

    // 给数组添加订阅事件
    on(type, handler, once=false){
        if(!this.handlers[type]){
            this.handlers[type] = []
        }
        this.handlers[type].push(handler)
        handler.once = once
    }

    // 取消订阅, 如果不传则取消全部
    off(type, handler){
        if(this.handlers[type]){
            if(handler===undefined){
                this.handlers[type] = []
            } else{
                this.handlers[type] = this.handlers[type].filter(item=> item != handler)
            }
        }
    }

    trigger(type, ...rest){
        if(this.handlers[type]){
            this.handlers[type].forEach((fn)=>{
                fn.apply(this, rest)
                if(fn.once){
                    this.off(type, fn)
                }
            })
        }
    }

    once(type, handler){
        return this.on(type, handler, true)
    }

}

let  p1 = new Event()

p1.once('衣服', function (a) {
    console.log('衣服价格', a)
})

p1.trigger('衣服', 10)

p1.trigger('衣服', 20)

