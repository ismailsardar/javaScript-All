//Objects Methoud 

let student = {
    name: 'Faisal',
    age: 22,
    exam: 'MA',
    cgpa: 4.99
}
console.log(student.cgpa);

//Make dinamec objects templet

function Student (name, age, exam, cgpa){
    //this constoctor
    this.name = name;
    this.age = age;
    this.exam = exam;
    this.cgpa = cgpa;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.exam);
        console.log(this.cgpa);
    }
}

let student1 = new Student('Babul', 24, 'BSC', 4.68);

student1.display();