/*
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
Make sure that the datatype of operators be same
predictable results might not come
*/

//console.log("2">1) // true

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true

// if we check for "Undefined" it will always give false

// === -> Strict check, it will also check the datatype

console.log("2" === 2) //false