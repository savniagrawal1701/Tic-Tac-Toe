
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector(".msg")
let msgw = document.querySelector("#msgw")
let turnx = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X";
            turnx = false;
        } else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide")
    }
}

const showwinner = (winner) => {
    msgw.innerText = `Congratulations! Winner is ${winner}`
    msg.classList.remove("hide")
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                showwinner(pos1);

            }
        }
    }

}

const resetGame = () => {
    turnx = true;
    enableboxes();
}

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
