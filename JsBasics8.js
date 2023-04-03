// Array Method

let num = [1, 2, 3, 4]
let b = num.toString()
console.log(b)
console.log(typeof b)

let c = num.join("-")
console.log(c)
console.log(typeof c)

let r = num.pop() //pop returns the popped element
console.log(num,r)

let p = num.push(5) //push returns the array length
console.log(num,p)

let q = num.shift()
console.log(q, num) // Removes an element from the start of the array
let s = num.unshift(0)
console.log(s, num) // Add an element from the start of the array