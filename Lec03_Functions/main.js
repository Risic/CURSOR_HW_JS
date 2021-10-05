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

const sumAfterTax = (salary) => { return Math.round(salary - salary * 0.195); };

// Function 5 \\

const getRandomNumber = (min, max) => {
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
};

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
    };

    return result;
};

// Function 8 \\

const getRandomPassword = (number = 8) => {
    let password = "";

    for (let i = 0; i < number; i++) {
        password += Math.trunc(Math.random() * 10);
    }
    return password;
};

// Function 9 \\ 

const deleteLetters = (letter, word) => {
    let lowerLetter = letter.toLowerCase();
    let lowerWord = word.toLowerCase();
    let result = lowerWord.split(lowerLetter).join("");
    return result
};

// Function 10 \\

const isPalyndrom = (word) => {
    let lowerWord = word.toLowerCase().split(" ").join("");
    let reverseWord = lowerWord.split("").reverse().join("");
    return (lowerWord === reverseWord) ? true : false;
};

// Function 11 \\

const deleteDuplicateLetter = (string) => {
    let lowerString = string.toLowerCase().split("");
    let result = lowerString.filter(letters => {
    return lowerString.lastIndexOf(letters) === lowerString.indexOf(letters);
    });
    return result.join("");
  };


document.writeln(
    `
    Выводит максимальное число: ${getMaxDigit(23874954)}
    <br>
    Определяет число в степени: ${getNumberPow(5, 5)}
    <br>
    Делает первую букву заглавной: ${upFirstLetter("санчез")}
    <br>
    Зарплата после налога: ${sumAfterTax(125000)}
    <br>
    Возвращает целое число в заданных пределах: ${getRandomNumber(10, 126)}
    <br>
    Считает сколько раз повторяется заданная буква: ${countLetter("о", "синхрофазотрон")}
    <br>
    Конвертирует доллары в гривны и наоборот: ${convertCurrency("125uah")}
    <br>
    Генерирует случайный пароль заданной длины или из восьми чисел: ${getRandomPassword(21)}
    <br>
    Удаляет повторения заданной буквы из предложения: ${deleteLetters("р", "портрет")}
    <br>
    Проверяет, являеться ли строка палиндромом: ${isPalyndrom("Я несу гусеня")}
    <br>
    Удаляет все повторяющиеся буквы: ${deleteDuplicateLetter("Иван Васильевич меняет профессию")}
    `
);