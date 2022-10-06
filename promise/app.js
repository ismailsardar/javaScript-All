// Promise

// const promis1 = new Promise((resolve, reject) => {
//     let myFunction = true;
//     if(myFunction){
//         resolve("This function is True..");
//     }else{
//         reject(new Error("This Function is Rojected.."));
//     }
// });

// const promis2 = new Promise((resolve,reject) => {
//     resolve("Peomise2 is True...");
// });

// promis1
//    .then((res) => {
//     console.log(res);
//    })
//    .catch((rej) => {
//     console.log(rej.message);
//    });

// Promise.all([promis1,promis2])
//        .then((res) => {
//         console.log(res);
//        })
//        .catch((rej) => {
//         console.log(rej);
//        });

//resr
// const promis1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This function is True..");
//         }, 2000);
// });

// const promis2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Peomise2 is True...");
//     }, 1000);
// });

// Promise.race([promis1,promis2])
//        .then((res) => {
//         console.log(res);
//        })
//        .catch((rej) => {
//         console.log(rej);
//        });

// make a callback function with Promise

console.log("Hi...");

const textOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1");
    });
}
const textTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2");
        }, 2000);
    });
}
const textThree = () => {
    return new Promise((resolve, reject) => {
        // resolve("Task 3");
        reject("Task 3 is not completed");
    });
}
const textFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4");
    });
}

textOne().then(res => console.log(res))
         .then(textTwo)
         .then(res => console.log(res))
         .then(textThree)
         .then(res => console.log(res))
         .then(textFour)
         .then(res => console.log(res))
         .catch(err => console.log(err));

// Anather Waya to call all tesk
// async await javascript

// async function callAllTask(){
const callAllTask = async () => {
    try{
        const t1 = await textOne();
        console.log(t1);
        const t2 = await textTwo();
        console.log(t2);
        const t3 = await textThree();
        console.log(t3);
        const t4 = await textFour();
        console.log(t4);
    }catch(e){
        console.log(e);
    }
} 

callAllTask();

console.log('Byyyy');