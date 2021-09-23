const pensilPrice = 15.678;
const cakePrice = 123.965;
const potPrise = 90.2354;

const maxPrice = Math.max(pensilPrice, cakePrice, potPrise);

const minPrice = Math.min(pensilPrice, cakePrice, potPrise);

const sumProduct = pensilPrice + cakePrice + potPrise;

const truncSum = Math.floor(pensilPrice) + Math.floor(cakePrice) + Math.floor(potPrise);

const roundSum = 100 * Math.round(truncSum / 100);

const oddEven = roundSum % 2 === 0;

const change = 500 - sumProduct;

const averageSum = Math.round( ( (sumProduct) / 3 ) * 100 ) / 100;

const sale = Math.random();

const salePersent = Math.round(sale * 100);

const saleInMoney = Math.round( (sumProduct * sale) * 100 ) / 100;

const sumToPay = Math.round( (sumProduct - sumProduct * sale) * 100) / 100;

const selfPrice = Math.round( (sumProduct / 2) * 100) / 100;

const profit = Math.round( (selfPrice - saleInMoney) * 100) / 100;

document.writeln(
    `
    Максимальная цена: ${maxPrice} <br>
    Минимальная цена: ${minPrice} <br>
    Общая стоимость: ${sumProduct} <br>
    Суммарная цена: ${truncSum} <br>
    Суммарная цена (округленная): ${roundSum} <br>
    Четность: ${oddEven} <br>
    Остача: ${change} <br>
    Среднее значение: ${averageSum} <br>
    Скидка: ${salePersent}% <br> 
    Скидка: ${saleInMoney} <br>
    Сумма со скидкой: ${sumToPay} <br>
    Себестоимость: ${selfPrice} <br>
    Чистая прибыль: ${profit} <br>
    `
);

