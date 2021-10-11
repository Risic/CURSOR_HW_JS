
//  | Task 1 |  \\

const getRandomArray = (length, min, max) => {
    const result = [];
    while (result.length < length) {
        let randomNumber = (Math.floor(Math.random() * (max - min + 1) + min));
        result.push(randomNumber)
    }
    return result
};

//  | Task 2 |  \\

// const getModa = (...numbers) => {

// };

//  | Task 3 |  \\

const getAverage = (...numbers) => {
    const num = numbers.sort((a, b) => a - b).filter(elem => Number.isInteger(elem));
    const sum = num.reduce((a, b) => a + b, 0);

    return Math.fround(sum / num.length)
};

//  | Task 4 |  \\

const getMedian = (...numbers) => {
    const num = numbers.sort((a, b) => a - b).filter(elem => Number.isInteger(elem));
    const halfLength = Math.floor(num.length / 2);

    return num.length % 2 == 0 ? (num[halfLength - 1] + num[halfLength]) / 2 : num[halfLength]
};

// | Task 5 | \\

const filterEvenNumbers = (...numbers) => numbers.filter(num => num % 2 !== 0);

// | Task 6 | \\

const countPositiveNumbers = (...numbers) => (numbers.filter(num => num > 0)).length;

// | Task 7 | \\

const getDividedByFive = (...numbers) => numbers.filter(num => num % 5 === 0);

// | Task 8 | \\

const replaceBadWords = (string) => {
    const badWords = ["fuck", "shit", "bint"];
    let result = string;
    for (let word of badWords) {
        result = result.split(word).join("****")
    }
    return result
};

// | Task 9 | \\

const divideByThree = (word) => {
    let lowerWord = word.toLowerCase();
    const result = [];
    for (let i = 0; i < lowerWord.length; i +=3 ) {
        let sliceWord = lowerWord.slice(i, i + 3);
        result.push(sliceWord);
    }
    return result;
};

// | Task 10 | \\


document.writeln(
    `
    <br>
    Task 1: ${getRandomArray(12, 100, 1000)}
    <br>
    Task 3: ${getAverage(3, 4, 6, 1,45, 0, 45, 287, 90, 34, 678, 921)}
    <br>
    Task 4: ${getMedian(23, 76, 90, 345, 2, 0, 45, 78)}
    <br>
    Task 5: ${filterEvenNumbers(34, 76, 9, 45, 67, 3, 6, 78)}
    <br>
    Task 6: ${countPositiveNumbers(-23, 65, 9, 0, 45, -67, -94, 5, -3)}
    <br>
    Task 7: ${getDividedByFive(45, 8, 20, 65, 9, 67, 4, 5, 24)}
    <br>
    Task 8: ${replaceBadWords("Are you fucking kidding? Holy shit!")}
    <br>
    Task 9: ${divideByThree("Commander")} <br> ${divideByThree("Cat")}
    `
)