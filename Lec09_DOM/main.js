const generateBlock = () => {
    for (let i = 0; i < 25; i++) {
        const block = document.createElement("block");
        block.classList.add("block");
        const answer = document.querySelector(".printAnswer");
        answer.append(block)
    }
};
generateBlock();

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor
};

const generateBlocksInterval = () => {

    const setRandomColorForBlock = () => {
        const blocks = document.querySelectorAll(".block");
        for (const block of blocks) {
            block.style.backgroundColor = getRandomColor();
        }
    };

    setInterval(() => {
        setRandomColorForBlock()
    }, 1*1000);
};

generateBlocksInterval()