const students = [
    { name: 'A', marks: 35 },
    { name: 'B', marks: 78 },
    { name: 'C', marks: 42 },
    { name: 'D', marks: 90 }
];

const marks = students.map(student => student.marks);

const total = marks.reduce((sum, mark) => sum + mark, 0);

const average = total / marks.length;

const passed = students.filter(student => student.marks >= 40);

document.getElementById("average").innerText = "Class Average: " + average;

document.getElementById("passed").innerText =
    "Passed Students: " + passed.map(student => student.name).join(", ");
