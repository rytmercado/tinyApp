const appList = Object.values(apps);

const appTitle = document.getElementById('app-name');
const display = document.getElementById('display');
const options = document.getElementById('options');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let appIndex = 0;

const setDisplay = () => {
    let selectedApp = appList[appIndex];
    appTitle.innerText = selectedApp.title;
    appTitle.style.color = selectedApp.color;
    document.title = selectedApp.title;
}

const incrementLeft = () => {
    if (appIndex > 0) {
        appIndex--;
        setDisplay();
    }
}

const incrementRight = () => {
    if (appIndex < appList.length - 1) {
        appIndex++;
        setDisplay();
    }
}

const initArrows = () => {
    leftArrow.addEventListener("click", incrementLeft);
    rightArrow.addEventListener("click", incrementRight);
    document.onkeydown = function(e) {
        switch(e.keyCode) {
            case 37: 
                incrementLeft();
                break;
            case 39:
                incrementRight();
                break;
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
    initArrows();
})