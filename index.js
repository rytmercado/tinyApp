const appList = Object.values(apps);

const appTitle = document.getElementById('app-name');
const display = document.getElementById('display');
const options = document.getElementById('options');

const setDisplay = () => {
    let selectedApp = appList[0];
    appTitle.innerText = selectedApp.title;
    appTitle.style.color = selectedApp.color;
    document.title = selectedApp.title;
}

document.addEventListener('DOMContentLoaded', () => {
    setDisplay();
})