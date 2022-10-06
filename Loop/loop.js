let sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}
console.log(sum);


let x = 1;
let sum1 = 0;
while(x <= 10){
    sum1 += x;
    document.write(' '+ x );
    x++;
}
document.write('</br> sum is : ' + sum1);

let r = 1;
let sum = 0;
while(r <= 100){
    
    if(r%3==0 && r%5==0){
        sum += r;
    }
    
    r=r+1;
}
console.log(sum);


let i = 11;
do{
    console.log(i);
    i++;
}while(i<=10);


for(let i=1; i<=20; i++){
    if(i==10){
        // break;
        continue;
    }
    console.log(i);
}