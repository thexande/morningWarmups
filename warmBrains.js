// es6 warm brains

class Mobile {
  constructor(name, x, y) {
    this.name = name
    this.x = x
    this.y = y
  }
  act(){
     console.log(this.name + " acts cool")
  }
  move(x, y) {
    
  }
}

let mob = new Mobile("woot", 1, 2)
mob.sayname()
