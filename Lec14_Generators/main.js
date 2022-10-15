// task 1
function* createIdGenerator() {
    let id = 1;
    while (true) {
        yield id++
    }
}

const idGenerator = createIdGenerator();
const genBtn = document.getElementById("idBtn");
const outputNum = document.getElementById("outputNumber")

outputNum.innerHTML = "ID: 0";
genBtn.addEventListener("click", () => {
    outputNum.innerHTML =`ID: ${idGenerator.next().value}`
})

// task 2

function* newFontGenerator(fontSize) {
    while (true) {
        let size = yield fontSize
        if (size == "up" && fontSize <= 96) {
            fontSize += 2
        } else if (size == "down" && fontSize >= 4) {
            fontSize -= 2
        }
        console.log(fontSize)
        console.log(size)
    }
}

const fontGenerator = newFontGenerator(14)

const spanFS = document.getElementById("fontSize");
const upBtn = document.getElementById("upFS");
const downBtn = document.getElementById("downFS");
const text = document.getElementById("text")

const output = (size) => {
    spanFS.innerHTML = `Font size: ${size} px`
    text.style.fontSize = `${size}px`
}

output(fontGenerator.next().value)

upBtn.addEventListener("click", () => {
    output(fontGenerator.next("up").value)
})

downBtn.addEventListener("click", () => {
    output(fontGenerator.next("down").value)
})