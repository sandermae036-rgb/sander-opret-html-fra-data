const students = [
    {name: "Sofie", age: 25, course: "Webudvikler"},
    {name: "Lukas", age: 22, course: "Mediegrafiker"},
    {name: "Emil", age: 28, course: "Teknisk Designer"},
];

const root = document.querySelector(".idk");

students.forEach(function(student){
    const divElement = document.createElement("div");
    divElement.textContent = `${student.name}, alder: ${student.age}, uddanelse: ${student.course}`;
    root.append(divElement);
});