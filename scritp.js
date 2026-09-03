const students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk Designer" },
];

const root = document.querySelector(".idk");

students.forEach(function (student) {
    const divElement = document.createElement("div");
    divElement.classList.add("student");
    // divElement.textContent = `${student.name}, alder: ${student.age}, uddanelse: ${student.course}`;
    // root.append(divElement);

    const h2Element = document.createElement("h2");
    h2Element.textContent = students.name;

    const pElement = document.createElement("p");
    h2Element.textContent = `alder: ${student.age}, uddanelse: ${student.course}`;

    divElement.append(h2Element, pElement);
    root.append(divElement);
});