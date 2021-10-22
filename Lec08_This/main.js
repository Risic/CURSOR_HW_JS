const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// || Task 1 || \\

const getMyTaxes = function(salary) {
    return salary * this.tax
};

// || Task 2 || \\

const getMiddleTaxes = function() {
    return this.tax * this.middleSalary
};

// || Task 3 || \\

const getTotalTaxes = function() {
    return this.tax * this.middleSalary * this.vacancies
};

// || Task 4 || \\

const getMySalary = function() {
    const minSalary = 1500;
    const maxSalary = 2000
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);

    return {
        salary: randomSalary,
        taxes: this.tax,
        profit: Math.trunc(randomSalary - (randomSalary * this.tax))
    }
}

const fourthTaskOutput = () => {
    console.log("For Ukraine:")
    console.log(getMySalary.call(ukraine))
    console.log("For Litva:")
    console.log(getMySalary.call(litva))
    console.log("For Latvia:")
    console.log(getMySalary.call(latvia))
}

console.log(fourthTaskOutput())

setInterval(fourthTaskOutput, 10000)

document.writeln(`
    Task 1 <br>
    Tax on 10.000 in Ukraine: ${getMyTaxes.call(ukraine, 10000)} <br>
    Tax on 10.000 in Latvia: ${getMyTaxes.call(latvia, 10000)} <br>
    Tax on 10.000 in Litva: ${getMyTaxes.call(litva, 10000)} <br> <br>

    Task 2 <br>
    Ukraine middle tax: ${getMiddleTaxes.call(ukraine)} <br>
    Latvia middle tax: ${getMiddleTaxes.call(latvia)} <br>
    Litva middle tax: ${getMiddleTaxes.call(litva)} <br> <br>

    Task 3 <br>
    Ukraine all taxes: ${getTotalTaxes.call(ukraine)} <br>
    Latvia all taxes: ${getTotalTaxes.call(latvia)} <br>
    Litva all taxes: ${getTotalTaxes.call(litva)} <br> <br>

    Task 4 <br>
    In console <br>
`)