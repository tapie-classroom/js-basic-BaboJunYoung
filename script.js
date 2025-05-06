// 그래서 js가 마크업 언어죠?

var cellNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cell = document.getElementsByClassName("block");
var gameOver = document.getElementById("gameOver");
var isGameOver = 0;

function display() {
    for (let i = 0; i < 16; i++) {
        let color = "";

        switch(cellNumber[i]) {
            case 0: 
                color = "#BDAC97";
                break;
            case 2:
                color = "#EEE4DA";
                break;
            case 4:
                color = "#EBD8B6";
                break;
            case 8:
                color = "#F2B179";
                break;
            case 16:
                color = "#F59563";
                break;
            case 32:
                color = "#F67C5F";
                break;
            case 64:
                color = "#F65E3B";
                break;
            case 128:
                color = "#EDCF72";
                break;
            case 256:
                color = "#EDCC61";
                break;
            case 512:
                color = "#EDC850";
                break;
            case 1024:
                color = "#EDC53F"
                break;
            default:
                color = "#000000";
                break;
        }
        cell[i].style.backgroundColor = color;
        cell[i].innerHTML = "<div>"+cellNumber[i]+"</div>"
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

// 2 90% | 4 10%
function addRandom() {
    let random = Math.floor(Math.random() * 16);
    while (cellNumber[random] != 0) random = Math.floor(Math.random() * 16);
    const TwoFour = Math.floor(Math.random() * 10);
    if (TwoFour < 9) cellNumber[random] = 2;
    else cellNumber[random] = 4;
}

function isEqual(array1, array2, number) {
    for (let i = 0 ; i < number; i++) {
        if (array1[i] != array2[i]) return false;
    }
    return true;
}

function keydown(event) {
    if (isGameOver == 1) return;
    
    if (event.keyCode == "38" || event.keyCode == "87") {
        // up
        let beforeCellNumber = Array.from(cellNumber);
        up();
        if (isEqual(beforeCellNumber, cellNumber, 12)) return;
    }
    else if (event.keyCode == "40" || event.keyCode == "83") {
        // down
        let beforeCellNumber = Array.from(cellNumber);
        down();
        if (isEqual(beforeCellNumber, cellNumber, 12)) return;
    }
    else if (event.keyCode == "37" || event.keyCode == "65") {
        // left
        let beforeCellNumber = Array.from(cellNumber);
        left();
        if (isEqual(beforeCellNumber, cellNumber, 12)) return;
    }
    else if (event.keyCode == "39" || event.keyCode == "68") {
        // right
        let beforeCellNumber = Array.from(cellNumber);
        right();
        if (isEqual(beforeCellNumber, cellNumber, 12)) return;
    }
    else return;
    addRandom();
    display();

    let gameOverFlag = 4;
    let beforeCellNumber = Array.from(cellNumber);
    up();
    if (isEqual(beforeCellNumber, cellNumber, 12)) gameOverFlag--;
    else cellNumber = Array.from(beforeCellNumber);

    beforeCellNumber = Array.from(cellNumber);
    down();
    if (isEqual(beforeCellNumber, cellNumber, 12)) gameOverFlag--;
    else cellNumber = Array.from(beforeCellNumber);
    
    beforeCellNumber = Array.from(cellNumber);
    left();
    if (isEqual(beforeCellNumber, cellNumber, 12)) gameOverFlag--;
    else cellNumber = Array.from(beforeCellNumber);
    
    beforeCellNumber = Array.from(cellNumber);
    right();
    if (isEqual(beforeCellNumber, cellNumber, 12)) gameOverFlag--;
    else cellNumber = Array.from(beforeCellNumber);

    if (gameOverFlag == 0) {
        // GAMEOVER
        gameOver.innerHTML = "<div>GAMEOVER</div>";
        return;
    }
}
/* display(); */

// public static void main(String args[]) {
//     document.addEventListener("keydown", keydown)
// }
addRandom();
addRandom();
display();
document.addEventListener("keydown", keydown);