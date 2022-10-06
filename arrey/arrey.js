// console.clear();
let country = [];
country[0]='Bangladesh';
country[1]='Canada';
country[2]='Finland';
country[3]='Denmark';
country[4]='Nroya';

country.push('Swedin');
country.pop();
console.log(country);
console.log(country.length);

let country2 = ['USA', 'Prtuegal','Spane','Itale'];
console.log(country2);
console.log('========');

console.log(country.concat(country2));


//Arrey sum

let numb = [10, 20, 30, 40, 50];
let sum = 0;

for(let i = 0; i<5; i++){
    console.log(numb[i]);
    sum = sum+numb[i];
}
console.log(sum);


//Arrey User inpute
let number = new Array();
for(let i=0; i<5; i++){
    number[i]= parseInt(prompt("Enter Arrey element....."));
}
console.log(number);
let sum = 0;
for(let i = 0; i<5; i++){
    console.log(number[i]);
    sum = sum+number[i];
}
console.log(sum);



//Arrey library methods.

let country2 = ['USA', 'Prtuegal','Spane','Itale'];

//shift is oppsizet pop
console.log(country2);
country2.shift();
console.log(country2);
//unshift is oppsizet push
console.log(country2);
country2.unshift('UK');
console.log(country2);

//splice is remove and ADD elements
//arrey.splice(position,remove Number,'Add elements whwt you want')
country2.splice(2,1,'Risha', 'Nedier Land');
console.log(country2);
//Remove
country2.splice(2,2);
console.log(country2);

// slice is not change ORGNEAL Arrey it make's new Arrey

let newArrey = country2.slice(1,2);
console.log(newArrey);
console.log(country2);

//sort() is make's new Arrey
console.log(country2);
let newArrey = country2.sort();
console.log(newArrey);
newArrey.reverse();
console.log(newArrey);
//Number sort() 
let number = [3, 2, 8, 5, 39, 31, 21,15];
number.sort(function(a,b){
    return a-b;
    // return b-a;
});
console.log(number);


//tesk 8 1 Dimensional Arrey

function hightesScore(score){
    let max = score[0];
    for(let i = 1; i < score.length; i++){
        if(max < score[i]){
            max = score[i];
        }
    }

    return max;
}

let score = [129, 321, 233, 102, 87, 90, 124];
maxScore = hightesScore(score);
console.log(maxScore);

//tesk 9 2 Dimensional Arrey

function hightesRunScore(playerInfo){
    let max = playerInfo[0][1];
    let name = playerInfo[0][0];
    for(let i=0; i<playerInfo.length; i++){
        if(max < playerInfo[i][1]){
             max = playerInfo[i][1];
             name = playerInfo[i][0];
         }
    }

    return name;
}

let playerInfo = [
    ['Faruk', 40],
    ['Akram', 380],
    ['Razib', 98],
    ['Emam', 68],
    ['Salam', 75],
    ['jaba', 89]
];

console.log(playerInfo[5][0]);

plyerName = hightesRunScore(playerInfo);

console.log(`The Heigh schore Player is => ${plyerName}`);