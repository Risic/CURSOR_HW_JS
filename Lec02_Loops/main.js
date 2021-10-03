let N;
let M;
let sum = 0;
let outputSkipEven;

do {

    N = parseInt(prompt("Ведите первое целое число"));

    if (!Number.isInteger(N)) {
        alert("Вы ввели не число для первого значения");
    }

} while (!Number.isInteger(N) || N % 1 !== 0);

do {

    M = parseInt(prompt("Ведите второе целое число"));
    
    if (!Number.isInteger(M)) {
        alert("Вы допустили ошибку");
    }

} while (!Number.isInteger(M) || M % 1 !== 0);


const skipEven = confirm("Пропускать чётные числа?");


if (M < N) {

    for (let i = M; i <= N; i++) {

        if (skipEven && i % 2 === 0) {
            sum = sum;
        } else {
            sum += i;
        }
    };

} else if (M > N) {

    for (let i = N; i <= M; i++) {

        if (skipEven && i % 2 === 0) {
            sum = sum;
        } else {
            sum += i;
        }
    };
    
} else if (M == N) {
    sum = N;  
};


if (skipEven) {
    outputSkipEven = "Чётные числа пропущены";

} else {
    outputSkipEven = "Четные числа не пропущены";
}


document.writeln(
    `
    Первое число "${N}" <br>
    Второе число "${M}" <br>
    ${outputSkipEven} <br>
    Сумма чисел от "${N}" до "${M}" равна "${sum}" <br>
    `
)