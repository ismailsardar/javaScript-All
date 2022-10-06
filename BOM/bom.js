console.clear();

//Location Event
/*
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.port);
console.log(location.hostname);
console.log(location.pathname);

let locations = document.querySelector('.locations');
let p1 = locations.children[0];
p1.textContent = location.href;

let p2 = locations.children[1];
p2.textContent = location.protocol;

let p3 = locations.children[2];
p3.textContent = location.host;

let p4 = locations.children[3];
p4.textContent = location.port;

let p5 = locations.children[4];
p5.textContent = location.hostname;

let p6 = locations.children[5];
p6.textContent = location.pathname;

let visit = document.querySelector('.visitBtn');
visit.addEventListener("click", function(){
    location.assign("https://ismailsardar.netlify.app/");
});
// console.log(visit);
*/

//pop event like prompt,arlt, conform
/*
function creatNodet () {
    let h1 = document.createElement('h1');
    let text;

    let name = prompt("Enter Your Name");
    // console.log(name)
    if(name == null || name == ""){
        text = "No Text Found";
    }else{
        text = "Hello! "+name;
    }

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
creatNodet();

let con = confirm('Are you Suwer');
console.log(con);
*/

/*
// setTimeOut , setinterval
setTimeout(()=>{
    console.log("Time is Starting....");
},2000);

let timeout  = document.querySelector('.timeout');
let maseg  = document.querySelector('.masseg');

// timeout.addEventListener("click", setmasseg);

// function setmasseg(){
//     maseg.textContent = "You Are Doen....!";

//     setTimeout(() => {
//         maseg.textContent = "";
//     }, 2000);
// }

timeout.addEventListener("click", interval);

function interval(){
    let count = 1;
    maseg.textContent = count;

    setInterval(() => {
        count++;
        maseg.textContent = count;
    }, 1000);
}
*/

//clock
let timeout  = document.querySelector('.timeout');
let maseg  = document.querySelector('.masseg');

timeout.addEventListener('click', setClock);

function setClock(){
    let date = new Date();
    let hour = date.getHours();
    let menit = date.getMinutes();
    let secound = date.getSeconds();

    menit = formettime(menit);
    secound = formettime(secound);

    maseg.textContent = `${hour}:${menit}:${secound}`
    setInterval(setClock, 1000);
}

function formettime(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}