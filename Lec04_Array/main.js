const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//  | Task 1 |  \\

const createPairs = (students) => {
    const male = []
    const female = []
    const pairs = []
    
    for (let student of students) {

        if (student.endsWith("а" || "я")) {
            female.push(student)
        } else {
            male.push(student)
        }
    }

    for (let i = 0; i < male.length; i++) {
        pairs.push([male[i], female[i]])
    }
    return pairs
};

//  | Task 2 |  \\

const pairs = createPairs(students)

const getPairsThemes = (pairs, themes) => {
    const pairsThemes = [];

    const randomThemesIndex = (min = 0, max = themes.length - 1) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    for (let i = 0; i < themes.length; i++) {
        pairsThemes.push([pairs[i][0] + " і " + pairs[i][1], themes[randomThemesIndex()]])
    }
    return pairsThemes
};

//  | Task 3 |  \\

const getStudentsMarks = (students, marks) => {
    const studentMark = []

    for (let i = 0; i < students.length; i++) {
        studentMark.push([students[i], marks[i]])
    }
    return studentMark
};

//  | Task 4 |  \\

const pairsThemes = getPairsThemes(pairs, themes)

const randomPairsMark = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const returnPairsMark = (pairsThemes) => {
    const pairsMark = []

    for (let i = 0; i < pairsThemes.length; i++) {
        pairsMark.push([pairsThemes[i], randomPairsMark()])
    }
    return pairsMark
};

// | Output | \\

const arrOutputVar = [
    students.join(" <br>"),
    themes.join(" <br>"),
    marks,
    (createPairs(students)).join(" <br>"),
    getPairsThemes(pairs, themes).join(" <br>"),
    getStudentsMarks(students, marks).join(" <br>"),
    returnPairsMark(pairsThemes).join(" <br>")
];

const arrOutputTitle = [
    "Students: ",
    "Themes: ",
    "Marks: ",
    "Task 1: ",
    "Task 2: ",
    "Task 3: ",
    "Task 4: "
];

const arrOutput = (arrOutputTitle, arrOutputVar) => {
    const output = []

    for (let i = 0; i < arrOutputTitle.length; i++) {
        output.push([arrOutputTitle[i].fontcolor("#142536") + arrOutputVar[i]])
    }

    return output
};

// const output = arrOutput(arrOutputTitle, arrOutputVar);

// document.getElementById("output").innerHTML = arrOutput.join("<br>");

document.writeln(arrOutput(arrOutputTitle, arrOutputVar).join(".<br> <br>"))

