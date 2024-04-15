//1. String concatentation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1+2 = ${1+2}`)

//2. Numeric operators.
console.log(1+1);
console.log(5%2);

//3.Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncremnet = counter;
console.log(`preIcrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter ++;
//postIncrement = counter;
//counter=counter +1; 
console.log(`postIncrement: ${postIncrement}, counter:${counter}`);

//4 . Assingment operators
let x =3;
let y =6;
x+=y; // x=x+y;
x*=y; // x=x*y;

//5. Comparsion operators.
console.log(10<6);//less than
console.log(10<=6);//less tyhan or equal

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4<2;

// || (or), finds the first truthy value 
console.log(`or: ${value1 || value2 || check()}`);// check ->True


//&& often used Null
function check(){
    for(let i =0; i<10; i++){
        //wasting time
        console.log('mm');
    }
    return true;
}

// !(not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;
// ==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive !=numberFive);

//===strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1==ellie2);
console.log(ellie1===ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0==false);
console.log(0===false);
console.log(''==false);
console.log(''===false);
console.log(null==undefined);
console.log(null===undefined);

//8.Conditional operator: if
//if, else if, else
const name = 'df';
if (name==='ellie'){
    console.log('welcome, ellie!');
} else if (name ==='coder'){
    console.log('you are amazing coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator: ?
//condition ? value1 : value2: True면 왼쪽 아니면 오른쪽
console.log(name==='ellie' ? 'yes' : 'no');

//10.Swtich statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in Ts
const browser='IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy
//body code is executed.
let i =3;
while (i>0){
    console.log(`while:${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i>0);

// for loop, for (begin; condition; step)
for (i=3; i>0; i--){
    console.log(`for:${i}`);
}

for (let i=3; i>0; i=i -2){
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

for (let i = 0; i<11; i++){
    if (i%2 !==0){
        continue;
    }
    console.log(`q1.${i}`);
}

for (let i = 0; i<=10; i++){
    if (i>8){
        break;
    }
    console.log(`q2.${i}`);
}
