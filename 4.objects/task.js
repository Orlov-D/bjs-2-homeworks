function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  for (el of mark) {
    this.marks.push(el);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks === undefined) {
    return console.error(`Еще не учился`);
  } else {
    for (el of this.marks) {
      sum += el;
    }
    return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}