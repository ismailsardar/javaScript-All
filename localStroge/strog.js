console.clear();
console.log(localStorage)

data save localStorage
setItem("key","value")
localStorage.setItem("password", "8524kh27f");

get data form localStorage
getItem("key")
let userName = localStorage.getItem("username");
let password = localStorage.getItem("password");
console.log(userName, password);

How to remove data in localStroge
localStorage.removeItem("username");
localStorage.removeItem("password");

setitem Arrey
const country = ['Nedther Land', 'Germeny', "Poland"];
localStorage.setItem("country", JSON.stringify(country));

get Arrey item

const psrsItem = JSON.parse(localStorage.getItem("country"));
console.log(psrsItem);

all clear
localStorage.clear();

/*
==========================
     sessionStorage
==========================
*/

data save sessionStorage
setItem("key","value")
sessionStorage.setItem("userName", "Tele Samad");
sessionStorage.setItem("password", "*********");

how to get data sessionStorage
const userInfo = sessionStorage.getItem("userName");
console.log(userInfo);

setitem Arrey
const country = {country: 'Nedther Land', name: "kamal"};
sessionStorage.setItem("country", JSON.stringify(country));

get Arrey item

const psrsItem = JSON.parse(sessionStorage.getItem("country"));
console.log(psrsItem);

/*
====================
      cookis
====================
*/

document.cookie = "userName=Panto; expires= Wed Oct 5 2022 4:59:00 GMT";
