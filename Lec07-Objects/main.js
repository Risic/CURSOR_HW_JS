const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];


// || Task 1 || \\

const getSubjects = (student) => {
    const studSubjects = [];

    for (const key in student.subjects) {
        let subject = key[0].toUpperCase() + key.slice(1);
        subject = subject.split("_").join(" ");
        studSubjects.push(subject);
    }

    return studSubjects
};

// || Task 2 || \\

const getAverageMark = (student) => {
    const arrMark =[];
    let averageMark;
    for (const key in student.subjects) {
        arrMark.push(...student.subjects[key]);
        averageMark = arrMark.reduce((a, b) => (a + b)) / arrMark.length;
    };

    return Math.round(averageMark * 100) / 100;
};

// || Task 3 || \\

const getStudentInfo = (student) => {
    return studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };
};

// || Task 4 || \\

const getStudentsNames = (students) => students.map(student => student.name).sort();

// || Task 5 || \\

const getBestStudent = (students) => {
    const bestStudent = students.reduce((a, b) => getAverageMark(a) < getAverageMark(b) ? b : a);
    return bestStudent.name
};

// || Task 6 || \\

const calculateWordLetters = (word) => {
    const objectLetter = {};
    
    word.split(" ").join("").split("")
    .forEach(letter => objectLetter[letter] ? objectLetter[letter]++ : objectLetter[letter] = 1);

    return objectLetter
};