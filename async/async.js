// async & await
// clear style of using promise:)

//1.async
async function fetchUser(){
    //do network request in 10 secs...   
        return'yebeen';
}

const user= fetchUser();
user.then(console.log);
console.log(user);

//2.await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    //throw 'error';
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana(); //병렬적으로?
    const apple= await getApple();
    const banana= await getBanana();
    return `${apple}+ ${banana}`
}

pickFruits().then(console.log);

//function getBanana(){
    //return delay(3000)
    //.then(()=> 'banana');
//}

//3. useful Promise APIs
function pcikAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits=>
        fruits.join('+')
    );
}
pcikAllFruits().then(console.log)

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

