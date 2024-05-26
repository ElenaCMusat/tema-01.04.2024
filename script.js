const listOfColors = ['#AD636C','#009B72', '#6761A8', '#347E8D', '#798186'];
const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');
const colorSwitcherClicks = document.querySelector('.color-switcher-clicks');
const colorSwitcherResetButton = document.querySelector('.color-switcher-reset-button');
const colorSwitcherPreviousButton = document.querySelector('.color-switcher-previous-button');
const colorSwitcherNextButton = document.querySelector('.color-switcher-next-button');

let index = 0;
let numberOfClicks = 0;

const switchColor = () => {
    index++;
    numberOfClicks++;
    if (index === 5) {
        index = 0;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    colorSwitcherClicks.innerText = `Number of clicks - ${numberOfClicks}`;
    currentColor.style.color = listOfColors[index];
   

};


colorSwitcherButton.addEventListener('click', switchColor);

const resetSwitcherColor = () => {
    colorSwitcherContainer.style.backgroundColor = ('#AD636C');
    currentColor.innerText = ('#AD636C');
    currentColor.style.color = 'aquamarine'
};

colorSwitcherResetButton.addEventListener('click', resetSwitcherColor);

const switchPrevious = () => {
    index--;
    if (index < 0) {
        index = 5;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
};

colorSwitcherPreviousButton.addEventListener('click', switchPrevious);

const switchNext = () => {
    index++;
    if (index === 5) {
        index = 0;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
};

colorSwitcherNextButton.addEventListener('click', switchNext);





// Pe aplicatia noastra de color switching sa se implementeze:

// un contorizator al numarului de schimbari de culoare in dreapta sus
// un buton de reset care sa te duca inapoi la prima culoare
// o tranzitie pe schimbarile de culori de background-color
// culoarea h2-ului in care afisam hex-ul sa aiba aceeasi culoare ca a background-ului
//  si sa se actualizeze la fiecare apasare a butonului 'Click me'. De exemplu, daca
//   switcher-ul ajunge pe hex-ul #6761A8, atunci culoarea asta trebuie sa fie setata drept
//    color pe text-ul acelui h2


// Alta sugestie de nivel mai PRO:

// in loc de butonul "click me" sa se puna un buton "previous" si un buton "next" si, 
// folosindu-te de astea doua, sa poti sa navighezi prin array-ul de culori