'use strict';

//2. Variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'Yebeen';
    console.log(name);
    name = 'hello';
    console.log(name);  
}  


//var
//var hoisting --> 끌어올려서 사용하게 해줌. 이제 안 씀.
//{}block scope xx


//3.Constant, r(read only) 자물쇠가 생겨버림
//favor immutable data type always for a few reasons:
// -security
// - thread safety
// - reduce human mistakes
const daysInweek =7;
const maxNumber =5;

//note!
//Immutable data types: premitive types, frozen objects (i.e. object.freeze())
//Mutable data types : all objects by default are mutable in Js
//favor immutable data type always for a few reasons:
// -security
// - thread safety
// - reduce human mistakes

//4. Variable types  
//primitive, single item: number, string, boolean, null, undefiedn. symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number-speicla numeric values: infinity,
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'/ 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char= 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, Nan, ''
//true: any other value
const canRead = true;
const test = 3<1;//false
console.log(`vlaue: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: $[type of test]`)

//null
let nothing = null;
console.log(`vlaue:${nothing}, type : ${typeof nothing}`)

//undefined
let x = undefined; // let x;
console.log(`value ${x}, type:${typeof x}`)

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 ===symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, typ e: ${typeof symbol1}`)

// 5. Dyanmic typing:dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);