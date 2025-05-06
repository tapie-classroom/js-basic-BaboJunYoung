// 그래서 js가 마크업 언어죠?

let cellNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let cell = document.getElementsByClassName("block");

function display() {
    for (let i = 0; i < 16; i++) {
        cell[i].innerHTML = "<div>" + cellNumber[i]+"</div>"
    }
}

function pushRight(array) {
    let newArray = [0, 0, 0, 0];
    let index = 3;
    for (let i = 3; i >= 0; i--) {
        if (array[i] != 0) newArray[index--] = array[i];
    }
    
    return newArray;
}
function pushLeft(array) {
    let newArray = [0, 0, 0, 0];
    let index = 0;
    for (let i = 0; i < 4; i++) {
        if (array[i] != 0) newArray[index++] = array[i];
    }
    
    return newArray;
}



function getHorizontal(number) {
    let horizontalArray = []
    for (let i = 0; i < 4; i++) horizontalArray[i] = number + i;
    return horizontalArray;
}
function getVertical(number) {
    let verticalArray = []
    for (let i = 0 ; i < 4; i++) verticalArray[i] = number + i * 4;
    return verticalArray;
}

function up() {
    let vertical0 = getVertical(0);
    let vertical1 = getVertical(1);
    let vertical2 = getVertical(2);
    let vertical3 = getVertical(3);


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

// public static void main(String args[]) {
//     document.addEventListener("keydown", keydown)
// }
document.addEventListener("keydown", keydown);