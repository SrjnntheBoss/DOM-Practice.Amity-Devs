class Students{
    constructor(name , Class , age, Id){
        this.name = name;
        this.Class = Class;
        this.age =  age;
        this.Id = Id;
    }
}
const Student1 = new Students("Srijan" , '12' , "17" , '1');
const Student2 = new Students("pikachu" , '12' , "17" , '2');
const Student3 = new Students("golu" , '12' , "17" , '3');
const Student4 = new Students("Molu" , '12' , "17" , '4');
const Student5 = new Students("TOlu" , '12' , "17" , '5');
const Student6 = new Students("Volu" , '12' , "17" , '6');
const Student7 = new Students("pika" , '12' , "17" , '7');
// Add more if u want..........................

const AllStudents = [Student1, Student2, Student3, Student4, Student5, Student6, Student7];




// let Students = ["Srijan" , "pikachu" , "Ram" , "Hari" , "Shyam"];


function getStudents(){
    const students = AllStudents;
    const mydiv = document.querySelector('.container');
    students.map(std=>{
        const newdiv = document.createElement('div');
        newdiv.id = `${std.name}`;
        newdiv.innerText = `${std.name}`;
        console.log(newdiv);
        newdiv.className = "Student";
        newdiv.addEventListener('click', () =>{
               alert(`Students Details : ${std.name }
                       Class:${std.Class}
                       age:${std.age}
                       id: ${std.Id}
                `);

        });
        mydiv.appendChild(newdiv);
        
        
    })

}