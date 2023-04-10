// Array map method
let arr = [45, 23, 21];

let a = arr.map((value, index, Array)=>{
    console.log(value, index, Array); 
    return value + 1;
})
console.log(a);

// Array filter method 
let arr1 = [14, 5, 3, 15, 87]
let a1 = arr1.filter((a)=>{
    return a<10;
})
console.log(a1);

// Array reduce method 

let arr2 = [1, 2, 3, 4, 5]
let a2 = arr2.reduce((h1, h2)=>{
    return h1 + h2;
})
console.log(a2);