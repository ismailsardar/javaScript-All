
// Synchronous vs Asynchronous
const textOne = () => {
    console.log("Text 1");
}
const textTwo = () => {
    setTimeout(() => {
        console.log("Text 2");
    }, 1000);
}

const textThree = () => {
    console.log("text 3");
}
const textFour = () => {
    console.log("text 4");
}
const textFive = () => {
    console.log("text 5");
}

textOne();
textTwo();
textThree();
textFour();
textFive();


// callback and higher order function

const square = (x) => {
    console.log(`square ${x} : ${x*x}`);
}

// square(6);

function higherorderfunction(y, callback){
    callback(y);
}
higherorderfunction(5, square);

const textOne = (callBack) => {
    console.log("Text 1");
    callBack();
}
const textTwo = (callBack) => {
    setTimeout(() => {
        console.log("Text 2");
        callBack();
    }, 1000);
}

const textThree = (callBack) => {
    console.log("text 3");
    callBack();
}
const textFour = (callBack) => {
    console.log("text 4");
    callBack()
}
const textFive = () => {
    console.log("text 5");
}

textOne(()=>{
    textTwo(()=>{
        textThree(()=>{
            textFour(()=>{
                textFive();
            });
        });
    });
});