/*
* 单例模式定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点
* 所以在创建实例前，先判断实例是否已经被创建过
*
* 惰性单例：指的是在需要的时候才创建对象实例
* */



//创建唯一的div
var getSingle = function (fn) {
  var result
  return function () {
    // 如果result已经创建过，则直接返回。否则调用创建函数fn
    return result || (result = fn.apply(this,arguments));
  }
}

var createDiv = function(){
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}

var Single = getSingle(createDiv)
//------------------------
var instance1 = Single();

var instance2 = Single();

console.log(instance1===instance2)  //TRUE