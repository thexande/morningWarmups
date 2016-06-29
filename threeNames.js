var students = [
 {name: "Jack", campus: "Austin"},
 {name: "Angel", campus: "Atlanta"},
 {name: "Rick", campus: "San Diego"},
 {name: "Charles", campus: "San Diego"},
 {name: "Tranh", campus: "Atlanta"},
 {name: "Ngozi", campus: "Lagos"},
 {name: "Rick", campus: "San Diego"},
 {name: "Jim", campus: "Atlanta"}
]

atlantaArr = [];
// print out  all atlanta names

atlantaArr = students.filter((student) => {
  return student.campus === "Atlanta";
})

atlantaArr.forEach((val, index) => {
  console.log(val);
});
