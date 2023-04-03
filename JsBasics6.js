let marks = {
    Nachiket: 99,
    Divy: 95,
    Het: 96,
    Abhi: 97
  }
  
//   for(let i=0;i<Object.keys(marks).length;i++){
//     console.log(" The marks of " + Object.keys(marks)[i] + " are " 
//    +marks[Object.keys(marks)[i]])
//   }

  for(let key in marks){
    console.log(" The marks of " + key + " are " + marks[key])
//     console.log(" The marks of " + Object.keys(marks)[key] + " are " 
//    +marks[Object.keys(marks)[key]])
  }

