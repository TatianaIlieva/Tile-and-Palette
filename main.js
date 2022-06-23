for (let i = 0; i < 100; i++) {
    setTimeout(function timer() {
        const square = document.createElement("div");
        square.className = "square";

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        square.style.background = bgColor;

        let parentBox = document.getElementById("squares");
        parentBox.style.width = "600px";
        parentBox.style.height = "600px";
        parentBox.appendChild(square);

        if (i == 99) {
            let complete = document.createElement("div");
            complete.className = "complete"
            complete.innerHTML = "Complete";
            document.body.appendChild(complete);
        }
    }, i * 1000);
}

document.getElementById("squares").addEventListener('click', function (e) {
    var boxColor = window.getComputedStyle(e.target).background;
    document.body.style.background = boxColor;
});