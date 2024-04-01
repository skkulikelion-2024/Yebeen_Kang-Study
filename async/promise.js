'use strict';

//Promise is a JavaScript object for asynchronous operation.1-state 2- P vs Consumer
//State:pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, rejcet) => {
    //doing some heavy work (netwrok, read files)
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('yebeen');
        rejcet(new Error('no netwrok'));
    }, 2000);
});

//2. Consumer: then, catch, finally
promise//
    .then((value)=>{
        console.log(value);
    })    
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

//3.Promise chaining
const fetchNumber= new Promise((resolve, rejecet)=>{
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num=>{
    return new Promise((resolve, rejcet)=>{
        setTimeout(()=>resolve(num-1), 1000);
    });
})
.then (num => console.log(num));

//4. Error Handling
const getHen =()=>
    new Promise((resolve, rejcet)=>{
        setTimeout(()=> resolve('hen'), 1000);
    });
const getEgg = hen=>
    new Promise((resolve, reject)=>{
        setTimeout(()=> reject(`error!${hen}=>egg`), 1000);
    });
const cook = egg=>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${egg}=> fried`), 1000)
    });

getHen()
.then(getEgg) //.then (hen=>getEgg(hen))
.catch(error=>{
    return'bread';
})
.then(egg=>cook(egg))
.then(meal=> console.log(meal))
.catch(console.log);