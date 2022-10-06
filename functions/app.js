
//tarnery Oprator
// is use aortenet to if,else condetion
let text = prompt('Enter A Number....');

let result = text>0 ? 'Positive Number': 'Negative Number';
console.log(result);



//IIFEs 
(
    function test(num1, num2){
        console.log(num1+num2);
    }
)(15,45);



//Function Expritions

let display = function masseg(msg){
    console.log(msg);
}
display('I am function Expritions');