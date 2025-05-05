let cellNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

cell = document.getElementsByClassName("block");

function display() {
    for (let i = 0; i < 16; i++) {
        cell[i].innerHTML = "<div>" + cellNumber[i]+"</div>"
    }
}
function keydown(event) {
    console.log(event)
    if (event.keyCode == "38" || event.keyCode == "87") {
        // up

    }
    else if (event.keyCode == "40" || event.keyCode == "83") {
        // down
    }
    else if (event.keyCode == "37" || event.keyCode == "65") {
        // left
    }
    else if (event.keyCode == "39" || event.keyCode == "68") {
        // right
    }
}
/* display(); */

document.addEventListener("keydown", keydown)