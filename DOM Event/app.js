console.clear();


let input1 = document.querySelector('#lable_1');
// console.log(input1);

input1.addEventListener('change', eventHandelar);

function eventHandelar(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.value);
    console.log(e.target.id);
}


//chackboxe Handelar


let program = document.querySelectorAll('input[name=language]');
// console.log(program)

Array.from(program).map((values) => {
    values.addEventListener('change', arreyEventHandeler);
});

function arreyEventHandeler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}



//selector handelar
let department = document.getElementById('department');
// console.log(department);
department.addEventListener('change', departmentHandler);

function departmentHandler(e){
    console.log(e.target.value);
}


//textArea Handelar
let aresText = document.getElementById('textareas');
// console.log(aresText);
aresText.addEventListener('change', textAreaHande)

function textAreaHande(e){
    console.log(e.target.value);
}

//Form Submit Event
let form = document.querySelector('form');
let name = form.querySelector('#name');
let email = form.querySelector('#email');
let password = form.querySelector('#password');
// console.log(password);

form.addEventListener('submit', formHandelar);
function formHandelar(e){
    e.preventDefault();

    let userInfo = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}


//Media => vedio/Audio event
let vedio = document.querySelector("video");
vedio.addEventListener('canplay', function(){
    console.log('canplay');
});
vedio.addEventListener('play', function(){
    console.log('play');
});
vedio.addEventListener('playing', function(){
    console.log('playing');
});
vedio.addEventListener('ended', function(){
    console.log('End');
});
vedio.addEventListener('pause', function(){
    console.log('paush');
});
vedio.addEventListener('volumechange', function(){
    console.log('voluemchange');
});

//lode/unlode/seroll/resize/togell
window.addEventListener("load", function(){
    console.log('Load');
});
window.addEventListener("unload", function(){
    console.log('UnLoad');
});
window.addEventListener("scroll", function(){
    console.log('Scroll page');
});
window.addEventListener("resize", function(){
    let width = window.outerWidth;
    let height = window.outerHeight;
    console.log(`height : ${width}, width : ${height}`);
});

let detels = document.querySelector('details');
detels.addEventListener('toggle', function(e){
    console.log(e.target.open);

});

// MouseEvent
let mouse = document.querySelector('.mouse');
mouse.addEventListener('click',function(e){
    console.log('Div is Click');
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
});
mouse.addEventListener('dblclick',function(){
    console.log('DblClick is occued');
});
mouse.addEventListener('mousedown',function(){
    console.log('Down');
});
mouse.addEventListener('mouseup',function(){
    console.log('Up');
});
mouse.addEventListener('mouseenter',function(){
    console.log('Enter');
});
mouse.addEventListener('mouseleave',function(){
    console.log('Leave');
});
mouse.addEventListener('mouseover',function(){
    console.log('Hover');
});
mouse.addEventListener('mousemove',function(e){
    // console.log(`clintX =` + e.clientX + ' ClientY =' + e.clientY);
    console.log(`offsetX =` + e.offsetX+ ' offsetY =' + e.offsetY);
});

// multefol btn call

let malBtn = document.querySelectorAll('.malBtn');

Array.from(malBtn).map((btn) => {
    btn.addEventListener('click', function(ev){
        console.log(ev.target.innerText);
    });
});

// kebord event handelar
let keboArea = document.querySelector('#kebord_area');

keboArea.addEventListener('keydown', function(e){
    // console.log('key Down');
    if(e.repeat){
        alert('Do not Repet.....');
    }
});
keboArea.addEventListener('keypress', function(){
    console.log('key press');
});
keboArea.addEventListener('keyup', function(e){
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.code);
    if(e.shiftKey){
        console.log('Shift + '+ e.key);
    }
});

// mouse event handeler
let mouse_4e = document.querySelector('#mouse_4e');
mouse_4e.addEventListener('focus', function(){
    // console.log('Focus');
    mouse_4e.style.backgroundColor = 'red';
});
mouse_4e.addEventListener('focusin', function(){
    console.log('Focus In');
});
mouse_4e.addEventListener('focusout', function(){
    console.log('Focus Out');
});
mouse_4e.addEventListener('blur', function(e){
    // console.log('Blur');
    // mouse_4e.style.backgroundColor = 'transparent';
    console.log(e.target.value);
    mouse_4e.value = e.target.value.toUpperCase();
});

//Clipboard Event
let mouse_4e = document.querySelector('#mouse_4e');
let clipebord = document.querySelector('.clipebord');
mouse_4e.addEventListener('copy', function(){
    clipebord.innerText = 'You are copyed.....';
    console.log('You are copyed.....');
});
mouse_4e.addEventListener('cut', function(){
    clipebord.innerText = 'You are cuted.....';
    console.log('You are cuted.....');
});
mouse_4e.addEventListener('paste', function(){
    clipebord.innerText = 'You are pasted.....';
    console.log('You are pasted.....');
});

// DragEvent 
let dropDiv = document.getElementById('dregD');
let dropPra = document.getElementById('dregP');

dropPra.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text", e.target.id);
});

dropDiv.addEventListener('dragover', function(e){
    e.preventDefault();
});

dropDiv.addEventListener('drop', function(e){
    let id = e.dataTransfer.getData("text");
    dropDiv.appendChild(document.getElementById(id));
    e.preventDefault();
    console.log(id);
});
