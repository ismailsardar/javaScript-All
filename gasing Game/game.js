let winNumber = 0;
let lostNumber = 0;

for(let i = 1; i<=5; i++){
    let inputNumber = parseInt(prompt("Enter 1 to 5 Number..?"));

    let readomNumber = Math.floor(Math.random()*5) + 1;
    if(inputNumber == readomNumber){
        console.log('You are Won!');
        winNumber++;
    }else{
        console.log('You are Lost!');
        lostNumber++;
    }
}

document.write(`You are win => ${winNumber} </br>`);
document.write(`You are lost => ${lostNumber}`);

// console.log(readomNumber);