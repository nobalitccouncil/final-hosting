// ========== COMPUTER STUDENTS ==========

// ------- OLD DATA -------
const computerStudentsOld = [
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
  { rollNo: "NITSC/SESS.Ex",   name: "Farah",           subCourse: "ADCA", marks: 70 }
];

// ------- NEW DATA -------
const computerStudentsNew = [
  { rollNo: "NITSC/CAN06378", name: "BEAUTI SAIKIA", subCourse: "ADCA", marks: 87 },
  { rollNo: "NITSC/CAN06361", name: "LUCKY BORA", subCourse: "DCA", marks: 87 },
  { rollNo: "", name: "NILAKSHI CHUTIA", subCourse: "DCA", marks: 87 },
  { rollNo: "NITSC/CAN06362", name: "DHARITRI BORA", subCourse: "DCA", marks: 88 },
  { rollNo: "NITS/CAN06363", name: "PRATHANA BHARALI", subCourse: "DCA", marks: 88 },
  { rollNo: "NITS/CAN06364", name: "BIPLAB HAZARIKA", subCourse: "DCA", marks: 86 },
  { rollNo: "NITSC/CAN06365", name: "BISMITA BORA", subCourse: "DCA", marks: 86 },
  { rollNo: "NITSC/CAN06366", name: "DIMPI SAIKIA", subCourse: "DCA", marks: 89 },
  { rollNo: "NITSC/CAN06367", name: "ISHAN BORAH", subCourse: "DCA", marks: 81 },
  { rollNo: "NITSC/CAN06370", name: "PUROBI BORA", subCourse: "ADCA", marks: 87 },
  { rollNo: "NITSC/CAN06368", name: "RISHIKESH BORA", subCourse: "DCA", marks: 86 },
  { rollNo: "NITSC/CAN06371", name: "TANUJ KUMAR SAIKIA", subCourse: "ADCA", marks: 83 },
  { rollNo: "NITSC/CAN06372", name: "ABHINASH HANDIQUE", subCourse: "ADCA", marks: 87 },
  { rollNo: "NITSC/CAN06373", name: "BISWAJIT BORA", subCourse: "ADCA", marks: 89 },
  { rollNo: "NITSC/CAN06374", name: "JAYANTA BORUAH", subCourse: "ADCA", marks: 88 },
  { rollNo: "NITSC/CAN06375", name: "NITUMONI GOGOI", subCourse: "ADCA", marks: 89 },
  { rollNo: "NITSC/CAN06376", name: "RINTU SAIKIA", subCourse: "ADCA", marks: 83 },
  { rollNo: "NITSC/CAN06369", name: "NISHITA RAJKHOWA", subCourse: "DCA", marks: 83 },
  { rollNo: "NITSC/CAN06379", name: "JYOTSHNA HAZARIKA", subCourse: "PGDCA", marks: 83 },
  { rollNo: "NITSC/CAN06377", name: "MRINNAYEE NATH", subCourse: "ADCA", marks: 87 },
  { rollNo: "NITSC/CAN06380", name: "GITASHREE SAIKIA", subCourse: "PGDCA", marks: 83 }
];

// ========== CUTTING STUDENTS ==========

// ------- OLD DATA -------
const cuttingStudentsOld = [
  { rollNo: "NITSC/SESS.EX231", name: "mayuri das", marks: 40 },
  { rollNo: "NITSC/SESS.EX196", name: "dipti dutta", marks: 38 },
  { rollNo: "NITSC/SESS.EX195", name: "boby das", marks: 39 },
  { rollNo: "NITSC/SESS.EX202", name: "junmoni das", marks: 45 },
  { rollNo: "NITSC/SESS.EX213", name: "turishma bora", marks: 41 },
  { rollNo: "NITSC/SESS.EX197", name: "amia hazarika", marks: 42 },
  { rollNo: "NITSC/SESS.EX207", name: "urmila das", marks: 36 },
  { rollNo: "NITSC/SESS.EX214", name: "popee bora", marks: 33 },
  { rollNo: "NITSC/SESS.EX236", name: "mamta malpahariya", marks: 31 },
  { rollNo: "NITSC/SESS.EX235", name: "manisha tanti", marks: 32 },
  { rollNo: "NITSC/SESS.EX232", name: "asha karamakar", marks: 30 },
  { rollNo: "NITSC/SESS.EX233", name: "boishnobi mal", marks: 29 },
  { rollNo: "NITSC/SESS.EX234", name: "dipjyoti mal", marks: 28 },
  { rollNo: "NITSC/SESS.EX238", name: "naina karmakar", marks: 29 },
  { rollNo: "NITSC/SESS.EX220", name: "punom bhumij", marks: 31 },
  { rollNo: "NITSC/SESS.EX218", name: "anjali karmakar", marks: 27 },
  { rollNo: "NITSC/SESS.EX0218", name: "anjali karmakar", marks: 26 },
  { rollNo: "NITSC/SESS.EX219", name: "rinki karmakar", marks: 29 },
  { rollNo: "NITSC/SESS.EX224", name: "nobanita bakti", marks: 26 },
  { rollNo: "NITSC/SESS.EX216", name: "hunmoni urang", marks: 43 },
  { rollNo: "NITSC/SESS.EX205", name: "pallabi baruah", marks: 45 },
  { rollNo: "NITSC/SESS.EX227", name: "rakhi", marks: 41 },
  { rollNo: "NITSC/SESS.EX215", name: "madhobi bhuyan", marks: 32 },
  { rollNo: "NITSC/SESS.EX217", name: "priyanka karmakar", marks: 25 }
];

// ------- NEW DATA -------
const cuttingStudentsNew = [
  { rollNo: "NITSC/CAN06383", name: "Lucky Gowala", marks: 89 },
  { rollNo: "NITSC/CAN06385", name: "DIPALI BORAH", marks: 87 },
  { rollNo: "NITSC/CAN06382", name: "DIPIKA BORA", marks: 88 },
  { rollNo: "NITSC/CAN06381", name: "PRAMILA URANG", marks: 88 },
  { rollNo: "NITSC/CAN06384", name: "MRINMAYEE NATH", marks: 89 }
];

// ========== FINAL MERGE ==========
const computerStudents = [...computerStudentsOld, ...computerStudentsNew];
const cuttingStudents = [...cuttingStudentsOld, ...cuttingStudentsNew];

// ========== LOGIC ==========

const FULL_MARK = 100;
const PASS_MARK = 35;

function handleCourseChange() {
  const course = document.getElementById("course").value;
  document.getElementById("subCourseDiv").classList.toggle("hidden", course !== "computer");
}

function generateResult() {
  const roll = document.getElementById("rollNumber").value.trim().toLowerCase();
  const course = document.getElementById("course").value;
  const sub = course === "computer" ? document.getElementById("subCourse").value.trim().toLowerCase() : "";
  const display = document.getElementById("resultDisplay");

  if (!roll || !course || (course === "computer" && !sub)) {
    alert("Please fill all fields.");
    return;
  }

  let student = null;
  if (course === "computer") {
    student = computerStudents.find(s => s.rollNo.toLowerCase() === roll && s.subCourse.toLowerCase() === sub);
  } else {
    student = cuttingStudents.find(s => s.rollNo.toLowerCase() === roll);
  }

  if (!student) {
    display.innerHTML = `<h3>No record found for Roll No "${roll}" in ${course}</h3>`;
    display.style.display = "block";
    return;
  }

  const pass = student.marks >= PASS_MARK;
  const grade = pass ? "P" : "F";
  const msg = pass ? "Congratulations" : "Try Again";

  display.innerHTML = `
    <h2 class="glow">${msg}, ${student.name}! ${pass ? "🎉" : "😞"}</h2>
    <p>Course: ${course.toUpperCase()} (Full Marks: ${FULL_MARK}, Pass Marks: ${PASS_MARK})</p>
    ${course === "computer" ? `<p>Sub-Course: ${student.subCourse.toUpperCase()}</p>` : ""}
    <p>Roll No: ${student.rollNo}</p>
    <p>Marks: ${student.marks} / ${FULL_MARK}</p>
    <p>Grade: ${grade}</p>
  `;
  display.style.display = "block";
}

function downloadMarksheet() {
  const text = document.getElementById("resultDisplay").innerText;
  if (!text.trim()) {
    alert("Generate result first!");
    return;
  }

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Marksheet.txt";
  link.click();
   }
   
