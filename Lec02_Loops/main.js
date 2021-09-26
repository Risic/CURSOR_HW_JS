let N,
    M,
    skipEven,
    outputSkipEven = "",
    sum = 0;

do {

    N = parseInt(prompt("Ведите первое целое число"));

    if (!Number.isInteger(N)) {
        alert("Вы ввели не число для первого значения");
        continue;
    }
    
    M = parseInt(prompt("Ведите второе целое число, больше чем первое"));
    
    if (!Number.isInteger(M)) {
        alert("Вы допустили ошибку");
        continue;
    }
    
    if (M < N) {
        alert("Второе число должно быть больше первого");
        continue;
    };

    skipEven = confirm("Пропускать чётные числа?");

    for (let i = N; i <= M; i++) {

        if (skipEven && i % 2 === 0) {
            continue;
        }
        sum += i;
    };

    if (M === N) {
      sum = 0;  
    };

} while (!Number.isInteger(N && M) || N > M);

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