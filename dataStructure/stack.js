class Stack {
  constructor() {
    this.items = []
  }
  
  //入栈
  push(element) {
    this.items.push(element)
  }

  //出栈
  pop() {
    return this.item.pop()
  }

  //末位
  get peek() {
    return this.item[this.item.length-1]
  }

  //尺寸
  get size() {
    return !this.item.length
  }

  //清空栈
  clear() {
    this.item = []
  }

  //打印栈数据
  print() {
    console.log(this.item.toString())
  }
}

