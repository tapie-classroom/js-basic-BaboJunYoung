let cellNumber = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

cell = document.getElementsByClassName("block");

function display() {
    for (let i = 0; i < 16; i++) {
        cell[i].innerHTML = "<div>" + cellNumber[i]+"</div>"
    }
}
display();