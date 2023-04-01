/*
let marks = {
    Nachiket: 99,
    Divy: 95,
    Het: 96,
    Abhi: 97
  }
  
  for(let i=0;i<Object.keys(marks).length;i++){
    console.log(" The marks of " + Object.keys(marks)[i] + " are " 
   +marks[Object.keys(marks)[i]])
  }
  */
/*
let marks = {
    Nachiket: 99,
    Divy: 95,
    Het: 96,
    Abhi: 97
  }
  for(let key in marks){
    console.log(" The marks of " + key + " are " + marks[key])
  }
*/
/*
let cn = 4
let i
while(i!=cn){
  console.log("Try again")
  i = prompt("Enter The No: ")
}
console.log("You have entered a correct no.")
*/

const mean = (a, b, c, d)=>{
  return (a+ b+ c+ d)/4
}

console.log("mean is : "+mean(4,5,6,7))
