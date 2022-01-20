function getRandomChinese(length) {
    return new Promise((resolve, reject) => {

        let i = 0;
        let str = "";
        while(i < length) {
            setTimeout(() => {
                let sign = (Date.now()).toString().slice(-5)
                str += String.fromCharCode(sign)
                if(str.length === length) {
                  resolve(str)  
                }
            }, 50 * i)
            i++
        };
        
    });
};

getRandomChinese(5).then((res) => {
    document.querySelector(".printAnswer").innerHTML = `Result: ${res}`
    console.log(res)
})