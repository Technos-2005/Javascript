let num = [1, 2, 3, 4]

for(let k=0;k<num.length;k++){
    console.log(num[k]);
}

// forEach Loop
num.forEach((Element)=>{
    console.log(Element*Element)
})

// Array.from
let name = "Nachiket"
let arr = Array.from(name);
console.log(arr)

// for...of
for(let i of num){
    console.log(i)
}

// for...in
for(let j in num){
    console.log(j)
}