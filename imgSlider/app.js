let hero = document.getElementById('hero');

let imgs = ["img/1.png", "img/2.jpg", "img/3.jpg"];

let count = 0;

function next(){
    count++;
    if(count >= imgs.length){
        count = 0;
        hero.src = imgs[count];
    }else{
        hero.src = imgs[count];
    }
}
function prev(){
    count--;
    if(count < 0){
        count = imgs.length-1;
        hero.src = imgs[count];
    }else{
        hero.src = imgs[count];
    }
}

// css style cginger

let style = document.getElementById('css_style');

function addStyle(){
    style.classList.add("css_style");
}
function removeStyle(){
    style.classList.remove("css_style");
}