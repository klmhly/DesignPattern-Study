var Singleton = function (name) {
  this.name = name;
  this.instance = null
}

Singleton.getInstance = function (name) {
  if(!instance){
    this.instance = new Singleton(name);
  }
  return instance
}


var a = Singleton('A')
var b = Singleton('B')

console.log(a===b)