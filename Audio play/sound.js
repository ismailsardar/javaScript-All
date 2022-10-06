//Audio Add

for(let i = 0; i < 3; i++){
    document.querySelectorAll('.btnAu')[i].addEventListener('click', function(){
        let text = this.innerHTML;
        audioPlay(text); 
        anemationAdd(text);
        // console.log(text);
    });
}

//kebord press letcner
document.addEventListener("keypress",function(e){
    let text = e.key;
    audioPlay(text);
    anemationAdd(text); 
});

//Audio play function
function audioPlay(text){
    switch(text){
        case 'A':
            var song = new Audio('sound/1.mp3');
            song.play();
            break;
        case 'B':
            var song = new Audio('sound/2.mp3');
            song.play();
            break;
        case 'C':
            var song = new Audio('sound/3.mp3');
            song.play();
    }
}

//Animetion functions
function anemationAdd(text){
    let anmet = document.querySelector('.'+text);
    anmet.classList.add('anem');

    setTimeout(function(){
        anmet.classList.remove('anem');
    },1000);
}