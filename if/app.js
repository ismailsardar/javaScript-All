const result = parseInt(prompt('Enter your marks..'));

if(result >= 80 && result <= 100){
    console.log('You Get : A+');
}else if(result >= 70 && result <= 79){
    console.log('You Get : A');
}else if(result >= 60 && result <= 69){
    console.log('You Get : A-');
}else if(result >= 50 && result <= 59){
    console.log('You Get : B');
}else if(result >= 40 && result <= 49){
    console.log('You Get : C');
}else if(result >= 33 && result <= 39){
    console.log('you Get : D');
}else{
    console.log('You are Fall');
}



const result = parseInt(prompt('Enter your marks..'));

switch(true){

    case result > 100 || result < 0:
        console.log('Envalid Marks!');
        break;
    case result >= 80 && result <= 100:
        console.log('You Get : A+');
        break;
    case result >= 70 && result <= 79:
        console.log('You Get : A');
        break;
    case result >= 60 && result <= 69:
        console.log('You Get : A-');
        break;
    case result >= 50 && result <= 59:
        console.log('You Get : B');
        break;
    case result >= 40 && result <= 49:
        console.log('You Get : C');
        break;
    case result >= 33 && result <= 39:
        console.log('You Get : D');
        break;
    default:
        console.log('You are Fall');
}



let a = 30;
let b = 200;
let c = 1500;

if(a>b && a>c){
    console.log(`Learg Number is A: ${a}`);
}else if (b>a && b>c){
    console.log(`Learg Number is B: ${b}`);
}else{
    console.log(`Learg Number is C: ${c}`);
}


let letter = prompt('Enter A Letter..');
letter = letter.toLowerCase();

if(letter=='a' || letter=='e' || letter=='i'|| letter=='o' || letter=='u'){
    console.log(`This Letter is ${letter} : Voule`);
}else{
    console.log(`This Letter is ${letter} : Consonent`);
}


let letter = prompt('Enter A Letter..');
letter = letter.toLowerCase();

switch(letter){
    case 'a':
        console.log(`This Letter is ${letter} : Vowel`);
        break;
    case 'e':
        console.log(`This Letter is ${letter} : Vowel`);
        break;
    case 'i':
        console.log(`This Letter is ${letter} : Vowel`);
        break;
    case 'o':
        console.log(`This Letter is ${letter} : Vowel`);
        break;
    case 'u':
        console.log(`This Letter is ${letter} : Vowel`);
        break;
    default:
        console.log(`This Letter is ${letter} : counsent`);
}
