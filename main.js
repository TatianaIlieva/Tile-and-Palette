for (let j = 0; j < 100; j++) {
    const square = document.createElement("div");
    square.className = "square";
    let parentBox = document.querySelector("#squares");
    parentBox.appendChild(square);
}

function randomNumber() {
    let numbers = [];
    for (let k = 0; k < 100; k++) {
        let n = Math.floor(Math.random() * 100);
        let check = numbers.includes(n);
        if (check === false) {
            numbers.push(n);
        } else {
            while (check === true) {
                n = Math.floor(Math.random() * 100);
                check = numbers.includes(n);
                if (check === false) {
                    numbers.push(n);
                }
            }
        }
    }
    return numbers;
}

let random = randomNumber();

for (let i = 0; i < 100; i++) {
    setTimeout(function timer() {
        let squareColor = document.getElementById("squares").querySelectorAll(".square");
        let arr = color();
        let bgColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]}`;
        squareColor[random[i]].style.background = bgColor;

        if (i == 99) {
            let complete = document.createElement("p");
            complete.className = "complete";
            complete.innerHTML = "Complete";
            document.body.appendChild(complete);
        }
    }, i * 1000);
}

function color() {
    let arrColor = [];
    for (let j = 0; j < 3; j++) {
        let x = Math.floor(Math.random() * 256).toString();
        arrColor.push(x);
    }
    return arrColor;
}

document.getElementById("squares").addEventListener('click', function (e) {
    let boxColor = e.target.style.background;
    document.body.style.background = boxColor;
});
