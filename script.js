// 그래서 js가 마크업 언어죠?

var cellNumber = [4, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1];

var cell = document.getElementsByClassName("block");

function display() {
    for (let i = 0; i < 16; i++) {
        cell[i].innerHTML = "<div>" + cellNumber[i]+"</div>"
    }
}

function pushRight(array) {
    let firstArray = [0, 0, 0, 0];
    let index = 3;
    for (let i = 3; i >= 0; i--) {
        if (array[i] != 0) firstArray[index--] = array[i];
    }

    for (let i = 3; i >= 0; i--) {
        if (firstArray[i] == firstArray[i-1]) {
            firstArray[i] *= 2;
            firstArray[i-1] = 0;
        }
    }

    let resultArray = [0, 0, 0, 0];
    index = 3 ;
    for (let i = 3; i >= 0; i--) {
        if (firstArray[i] != 0) resultArray[index--] = firstArray[i];
    }
    
    return resultArray;
}
function pushLeft(array) {
    let firstArray = [0, 0, 0, 0];
    let index = 0;
    for (let i = 0; i < 4; i++) {
        if (array[i] != 0) firstArray[index++] = array[i];
    }
    
    for (let i = 0; i < 3; i++) {
        if (firstArray[i] == firstArray[i + 1]) {
            firstArray[i] *= 2;
            firstArray[i + 1] = 0;
        }
    }
    
    let resultArray = [0, 0, 0, 0];
    index = 0;
    for (let i = 0; i < 4; i++) {
        if (firstArray[i] != 0) resultArray[index++] = firstArray[i];
    }
    

    return resultArray;
}



function getHorizontal(number) {
    let horizontalArray = []
    for (let i = 0; i < 4; i++) horizontalArray[i] = cellNumber[number * 4 + i];
    return horizontalArray;
}
function setHorizontal(array, number) {
    for (let i = 0; i < 4; i++) cellNumber[number * 4 + i] = array[i];
}
function getVertical(number) {
    let verticalArray = []
    for (let i = 0 ; i < 4; i++) verticalArray[i] = cellNumber[number + i * 4];
    return verticalArray;
}
function setVertical(array, number) {
    for (let i = 0; i < 4; i++) cellNumber[number + i * 4] = array[i];
}

function up() {
    for (let i = 0; i < 4; i++) {
        let vertical = getVertical(i);
        vertical = pushLeft(vertical);
        setVertical(vertical, i);
    }
}
function down() {
    for (let i = 0; i < 4; i++) {
        let vertical = getVertical(i);
        vertical = pushRight(vertical);
        setVertical(vertical, i);
    }
}
function left() {
    for (let i = 0; i < 4; i++) {
        let horizontal = getHorizontal(i);
        horizontal = pushLeft(horizontal);
        setHorizontal(horizontal, i);
    }
}
function right() {
    for (let i = 0; i < 4; i++){ 
        let horizontal = getHorizontal(i);
        horizontal = pushRight(horizontal);
        setHorizontal(horizontal, i);
    }
}

function keydown(event) {
    console.log(event)
    if (event.keyCode == "38" || event.keyCode == "87") {
        // up
        up();
    }
    else if (event.keyCode == "40" || event.keyCode == "83") {
        // down
        down();
    }
    else if (event.keyCode == "37" || event.keyCode == "65") {
        // left
        left();
    }
    else if (event.keyCode == "39" || event.keyCode == "68") {
        // right
        right();
    }
    console.log(cellNumber);
    display();
}
/* display(); */

// public static void main(String args[]) {
//     document.addEventListener("keydown", keydown)
// }
display();
document.addEventListener("keydown", keydown);