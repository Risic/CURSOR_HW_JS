
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
