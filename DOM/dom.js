
//DOM class/tags Select Korla [0] index Number use Korta hoy

// query selector
document.querySelector('h1').innerHTML = 'Hi';
document.querySelector('li a').innerHTML = 'Text';

document.querySelectorAll('p')[0].innerHTML = " I Nedar Land";

function myMasseg(){
    document.querySelectorAll('p')[0].innerHTML = "Hello I am Finland";
}
function myMasseg2(){
    document.querySelectorAll('p')[0].innerHTML = "Hello I am Germany";
}

//creat HTML Elements
let slectTag = document.getElementById('myDiv');
let he1 = document.querySelector('#myDiv h1')

let creatTag = document.createElement('h2');
let text = document.createTextNode('San Friens-co');
creatTag.appendChild(text);

// slectTag.appendChild(creatTag);
slectTag.insertBefore(creatTag,he1);



//Element tergate
let frute = document.querySelector('#fruts');
let frute1 = frute.children[1];
console.log(frute1);
console.log(frute1.nextElementSibling);
console.log(frute1.previousElementSibling);
console.log(frute1.parentElement);