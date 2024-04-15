'use strict';

//JavaScript is synchronous.
//Execute the code block by orger after hoisting.
// hoisting: var, function declaration --> 자동적으로 제일 위로.
console.log('1');
setTimeout(()=> console.log('2'), 1000); ///ms
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout)
}
printWithDelay(()=> console.log('async callback'), 2000);


//Callback Hell example
class Userstorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'yebeen' && password ==='dream')||
                (id === 'coder' && password ==='academy')
            ) {
                onSuccess(id);
            }else{ 
                onError(new Error('not found'));
            }
            
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=>{
            if (user ==='yebeen'){
                onSuccess({ name: 'yebeen', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new Userstorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{}
        );
    },
    error=>{
        console.log(error);
    }
);    
