let score = "99";
let score2 = "99abc"; // it will also be converted in number


console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let valInNumber = Number(score2)
console.log(typeof valInNumber); //number
console.log(valInNumber); // will print NaN and also for undefined balue of score2 // print 0 for null score2 

/*
"99" -> 99 ->number
"99abc" ->NaN
true -> 1 | false -> 0
*/

let logged = "abc"
let boolIsLogged = Boolean(logged);
console.log(boolIsLogged); // print true
// for empty string it will print false

/*
1 -> true | 0 -> false
"" -> false
"abc" -> true
*/

let val = 99
let valInString = String(val);
console.log(typeof val);

//------------ Operations -----------------------
let val2 = 7;
let negVal = -val2;
console.log(negVal);

let str = "hello"
let str2 = " World"
let str3 = str + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122 // bad Habit
console.log(1 + 2 + "5"); //35  // bad Habit

console.log(true); //true
console.log(+true); //1 //bad habit



