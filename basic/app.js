var num = '20.5';
// num = toString(20);
num = parseFloat(20);

console.log(typeof num); 


var num1 = 2.4655;
console.log(typeof num1.toFixed(2)); 
console.log(num1.toPrecision(2)); 

var str = 'Bangladesh';

console.log(str.charAt(0));


var nam1 = prompt('first name...?'); 
var nam2 = prompt('Last name...?'); 

var cont = parseInt(nam1,10) + parseInt(nam2, 10);
console.log(cont);
console.log(typeof cont);
console.log(cont.length);
console.log(cont.toUpperCase());
console.log(cont.charAt(1));
