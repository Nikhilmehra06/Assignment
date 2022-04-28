let student = new Array();

for (let i = 0; i < 5; i++) {
  let name = prompt('Enter Student');

  student.push(name);
}

alert(student[Math.floor(Math.random() * student.length)]);
