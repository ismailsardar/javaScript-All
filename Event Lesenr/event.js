let btn = document.querySelector('.alert');
btn.addEventListener('click',function(){
    alert('Clecked.......!');
});

// css stylet apply with addEventListener
let textStyle = document.querySelector('.hed1');

textStyle.addEventListener('mouseover', function(){
    textStyle.classList.add('text_s');
});
textStyle.addEventListener('mouseout', function(){
    textStyle.classList.remove('text_s');
});

//Multfool Button Handling

let btnLe = document.querySelectorAll('.mybtn').length;
for(let i =0; i < btnLe; i++){
    document.querySelectorAll('.mybtn')[i].addEventListener('click', function(){
    let text = this.innerHTML;
    let mullbtn = document.querySelector('.mulbtn');
    mullbtn.innerHTML = `${text} is Clicked...`;
});
}

//kebord pressLectener
document.addEventListener("keypress",function(e){
    let evenP = e.key;
    let keypr = document.querySelector('.keyPress');
    keypr.innerHTML = `You are Press => ${evenP}`;
});

let textArea = document.querySelector('#textArea');
let count = 0;
textArea.addEventListener("keypress",function(e){
    count++;
    let evenP = e.key;
    let keypr = document.querySelector('.keyPress');
    keypr.innerHTML = `You are Press => ${count}`;
});