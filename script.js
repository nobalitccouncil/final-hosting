const computerStudents = [
  { rollNo: "C101", name: "Alice", subCourse: "PGDCA", marks: 82 },
  { rollNo: "C102", name: "Charlie", subCourse: "DCA", marks: 90 },
  { rollNo: "C103", name: "Eve", subCourse: "BCA", marks: 38 },
  { rollNo: "C104", name: "Farah", subCourse: "ADCA", marks: 70 },
];

const cuttingStudents = [
  { rollNo: "CU201", name: "Bob", marks: 47 },
  { rollNo: "CU202", name: "Daisy", marks: 60 },
  { rollNo: "CU203", name: "Nina", marks: 51 }
];

function handleCourseChange() {
  const course = document.getElementById("course").value;
  const subCourseDiv = document.getElementById("subCourseDiv");
  course === "computer"
    ? subCourseDiv.classList.remove("hidden")
    : subCourseDiv.classList.add("hidden");
}

function generateResult() {
  const roll = document.getElementById("rollNumber").value.trim().toUpperCase();
  const course = document.getElementById("course").value;
  const subCourse = course === "computer" ? document.getElementById("subCourse").value : "";
  const resultDisplay = document.getElementById("resultDisplay");

  if (!roll || !course || (course === "computer" && !subCourse)) {
    alert("Please fill all fields.");
    return;
  }

  let student;

  if (course === "computer") {
    student = computerStudents.find(s =>
      s.rollNo === roll && s.subCourse === subCourse
    );
  } else {
    student = cuttingStudents.find(s =>
      s.rollNo === roll
    );
  }

  if (!student) {
    resultDisplay.innerHTML = `<h3>No record found for Roll No "${roll}" in ${course}</h3>`;
    resultDisplay.style.display = "block";
    return;
  }

  const marks = student.marks;
  const pass = marks >= 50;
  const emoji = pass ? "🎉" : "😞";
  const grade = pass ? "A" : "F";
  const msg = pass ? "Congratulations" : "Try again";

  resultDisplay.innerHTML = `
    <h2 class="glow">${msg}, ${student.name}! ${emoji}</h2>
    <p>Course: ${course}</p>
    ${subCourse ? `<p>Sub-Course: ${subCourse}</p>` : ""}
    <p>Roll No: ${student.rollNo}</p>
    <p>Marks: ${marks}</p>
    <p>Grade: ${grade}</p>
  `;
  resultDisplay.style.display = "block";
}

function downloadMarksheet() {
  const display = document.getElementById("resultDisplay");
  if (display.style.display === "none") {
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
