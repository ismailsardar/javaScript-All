// error handeling => try, catch(), Finally

console.clear();

try {
    alert("Good Morning....");
    alert(f);
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    alert("Ok, By.......!");
}

document.querySelector('#getValue').addEventListener("click", () => {
    let gtValue = document.querySelector("#inputValue").value;
    
    try {
        if(gtValue < 5){
            throw "Number is Too low..";
            // throw new Error("Number is Too low..");
        }else if(gtValue > 10){
            throw "High Number enter.....";
        }
    } catch (error) {
        console.log(error);
    }
});

