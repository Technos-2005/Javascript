let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let num = [521, 122, 313, 124, 215, 456, 7, 798, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219]
console.log(num.length)

let t = delete num[0]
console.log(t, num)
console.log(num.length)

let r = num.concat(num_more,num_even_more)
console.log(r)
console.log(num, num_more, num_even_more)

num.sort()
console.log(num)

let compare = (a, b)=>{
    return a - b;
}

num.sort(compare)
num.reverse()
console.log(num)

//Splice and Slice
num.splice(2, 3, 1021, 1022, 1023)
console.log(num)

let NewNum = num.slice(3, 5)
console.log(NewNum)