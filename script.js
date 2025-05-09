// script.js

const computerStudents = [
  { rollNo: "NITSC/SESS.EX119", name: "Jayashree bora", subCourse: "ADCA", marks: 65 },
  { rollNo: "NITSC/SESS.EX120", name: "Babita hazarika", subCourse: "ADCA", marks: 78 },
  { rollNo: "NITSC/SESS.EX111", name: "arpana talukdar", subCourse: "ADCA", marks: 63 },
  { rollNo: "NITSC/SESS.EX112", name: "sumi das", subCourse: "ADCA", marks: 58 },
  { rollNo: "NITSC/SESS.EX124", name: "sharmistha baruah", subCourse: "ADCA", marks: 64 },
  { rollNo: "NITSC/SESS.EX125", name: "urmila hazarika", subCourse: "ADCA", marks: 68 },
  { rollNo: "NITSC/SESS.EX106", name: "ankumoni sakia", subCourse: "ADCA", marks: 69 },
  { rollNo: "NITSC/SESS.EX90",  name: "marjana bora",    subCourse: "ADCA", marks: 63 },
  { rollNo: "NITSC/SESS.EX43",  name: "rupam tali",      subCourse: "DCA",  marks: 77 },
  { rollNo: "NITSC/SESS.EX137", name: "chandan bora",    subCourse: "DCA",  marks: 59 },
  { rollNo: "NITSC/SESS.EX105", name: "dev bhuyan",      subCourse: "ADCA", marks: 48 },
  { rollNo: "NITSC/SESS.EX129", name: "nabankur hanzarika", subCourse: "ADCA", marks: 49 },
  { rollNo: "NITSC/SESS.EX103", name: "aditya verma",    subCourse: "ADCA", marks: 47 },
  { rollNo: "NITSC/SESS.EX127", name: "punom bhumij",    subCourse: "ADCA", marks: 56 },
  { rollNo: "NITSC/SESS.EX128", name: "rahul hazarika",  subCourse: "ADCA", marks: 60 },
  { rollNo: "NITSC/SESS.EX45",  name: "rahul tali",      subCourse: "DCA",  marks: 63 },
  { rollNo: "NITSC/SESS.EX123", name: "debajani thengal", subCourse: "ADCA", marks: 69 },
  { rollNo: "NITSC/SESS.EX75",  name: "nirmaali das",    subCourse: "ADCA", marks: 70 },
  { rollNo: "NITSC/SESS.EX70",  name: "pori saikia",     subCourse: "ADCA", marks: 73 },
  { rollNo: "NITSC/SESS.EX74",  name: "ankita das",      subCourse: "ADCA", marks: 64 },
  { rollNo: "NITSC/SESS.EX",   name: "Alice",           subCourse: "PGDCA", marks: 82 },
  { rollNo: "NITSC/SESS.EX116", name: "satyajit gogoi",  subCourse: "DCA",  marks: 53 },
  { rollNo: "NITSC/SESS.EX",   name: "Eve",             subCourse: "BCA",  marks: 38 },
  { rollNo: "NITSC/SESS.Ex",   name: "Farah",           subCourse: "ADCA", marks: 70 },
];

const cuttingStudents = [
  { rollNo: "NITSC/SESS.EX231", name: "mayuri das",        marks: 40 },
  { rollNo: "NITSC/SESS.EX196", name: "dipti dutta",       marks: 38 },
  { rollNo: "NITSC/SESS.EX195", name: "boby das",          marks: 39 },
  { rollNo: "NITSC/SESS.EX202", name: "junmoni das",       marks: 45 },
  { rollNo: "NITSC/SESS.EX213", name: "turishma bora",     marks: 41 },
  { rollNo: "NITSC/SESS.EX197", name: "amia hazarika",     marks: 42 },
  { rollNo: "NITSC/SESS.EX207", name: "urmila das",        marks: 36 },
  { rollNo: "NITSC/SESS.EX214", name: "popee bora",        marks: 33 },
  { rollNo: "NITSC/SESS.EX236", name: "mamta malpahariya", marks: 31 },
  { rollNo: "NITSC/SESS.EX235", name: "manisha tanti",     marks: 32 },
  { rollNo: "NITSC/SESS.EX232", name: "asha karamakar",    marks: 30 },
  { rollNo: "NITSC/SESS.EX233", name: "boishnobi mal",     marks: 29 },
  { rollNo: "NITSC/SESS.EX234", name: "dipjyoti mal",      marks: 28 },
  { rollNo: "NITSC/SESS.EX238", name: "naina karmakar",    marks: 29 },
  { rollNo: "NITSC/SESS.EX220", name: "punom bhumij",      marks: 31 },
  { rollNo: "NITSC/SESS.EX218", name: "anjali karmakar",   marks: 27 },
  { rollNo: "NITSC/SESS.EX0218",name: "anjali karmakar",   marks: 26 },
  { rollNo: "NITSC/SESS.EX219", name: "rinki karmakar",    marks: 29 },
  { rollNo: "NITSC/SESS.EX224", name: "nobanita bakti",    marks: 26 },
  { rollNo: "NITSC/SESS.EX216", name: "hunmoni urang",     marks: 43 },
  { rollNo: "NITSC/SESS.EX205", name: "pallabi baruah",    marks: 45 },
  { rollNo: "NITSC/SESS.EX227", name: "rakhi",             marks: 41 },
  { rollNo: "NITSC/SESS.EX215", name: "madhobi bhuyan",    marks: 32 },
  { rollNo: "NITSC/SESS.EX217", name: "priyanca karmakar", marks: 25 }
];

function handleCourseChange() {
  const course = document.getElementById("course").value;
  const subCourseDiv = document.getElementById("subCourseDiv");
  if (course === "computer") {
    subCourseDiv.classList.remove("hidden");
  } else {
    subCourseDiv.classList.add("hidden");
  }
}

function generateResult() {
  const rollInput = document.getElementById("rollNumber").value.trim();
  const roll = rollInput.toLowerCase();
  const course = document.getElementById("course").value;
  const subCourseInput = course === "computer"
    ? document.getElementById("subCourse").value.trim()
    : "";
  const subCourse = subCourseInput.toLowerCase();
  const resultDisplay = document.getElementById("resultDisplay");

  if (!rollInput || !course || (course === "computer" && !subCourseInput)) {
    alert("Please fill all fields.");
    return;
  }

  let student;
  if (course === "computer") {
    student = computerStudents.find(s =>
      s.rollNo.toLowerCase() === roll &&
      s.subCourse.toLowerCase() === subCourse
    );
  } else {
    student = cuttingStudents.find(s =>
      s.rollNo.toLowerCase() === roll
    );
  }

  if (!student) {
    resultDisplay.innerHTML = `<h3>No record found for Roll No "${rollInput}" in ${course}</h3>`;
    resultDisplay.style.display = "block";
    return;
  }

  // set full and pass marks by course
  let fullMark, passMark;
  if (course === "computer") {
    fullMark = 100;
    passMark = 33;
  } else {
    fullMark = 50;
    passMark = 17;
  }

  const marks = Number(student.marks);
  const pass = marks >= passMark;
  const emoji = pass ? "🎉" : "😞";
  const grade = pass ? "A" : "F";
  const msg = pass ? "Congratulations" : "Try again";

  resultDisplay.innerHTML = `
    <h2 class="glow">${msg}, ${student.name}! ${emoji}</h2>
    <p>Course: ${course} (Full Marks: ${fullMark}, Pass Marks: ${passMark})</p>
    ${subCourseInput ? `<p>Sub-Course: ${subCourseInput}</p>` : ""}
    <p>Roll No: ${student.rollNo}</p>
    <p>Marks: ${marks} / ${fullMark}</p>
    <p>Grade: ${grade}</p>
  `;
  resultDisplay.style.display = "block";
}

function downloadMarksheet() {
  const display = document.getElementById("resultDisplay");
  if (display.style.display === "none" || !display.innerText.trim()) {
    alert("Generate a result first!");
    return;
  }

  const text = display.innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Marksheet.txt";
  link.click();
}
