// Function 1 \\

const getMaxDigit = (number) => {
    return (number === 0) ? 0 : Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
};

// Function 2 \\

const getNumberPow = (number, pow) => {

    let answer = 1;

    for (let i = 0; i < pow; i++) {
        answer *= number;
    }

    return answer;
};

// Function 3 \\

const upFirstLetter = (name) => {
    return name[0].toUpperCase() + name.substring(1)
};

// Function 4 \\

const sumAfterTax = (salary) => { return salary - salary * 0.195; };

// Function 5 \\

const getRundomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

// Function 6 \\

const countLetter = (letter, word) => {
    let lowerLetter = letter.toLowerCase();
    let lowerWord = word.toLowerCase();
    let result = 0;
    for (let i = 0; i <= lowerWord.length; i++) {
        if (lowerWord[i] == lowerLetter) {
            result ++;
        }
    }
    return result;
}

// Function 7 \\

const convertCurrency = (money) => {
    let lowerMoney = money.toLowerCase();
    const currencies = 28;
    let result = 0;

    if (lowerMoney.includes("$")) {
        result = (Math.floor(parseInt(money) * currencies * 100) / 100) + " UAH";

    } else if (lowerMoney.includes("uah") || lowerMoney.includes("грн")) {
        result = (Math.floor(parseInt(money) / currencies * 100) / 100) + " $";

    } else {
        result = "Я создан только для конвертации UAH и $";
    }

    return result;
}

// Function 8 \\

const getRandomPassword = (number = 8) => {
    let password = "";

    for (let i = 0; i < number; i++) {
        password += Math.trunc(Math.random() * 10);
    }
    return password;
}

