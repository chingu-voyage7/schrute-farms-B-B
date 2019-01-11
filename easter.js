const easterEgg = document.getElementById('bbb-container');

// default class name is bears
// order is bears -> beets -> battlestar galactica
easterEgg.addEventListener('click', () => {
    if (easterEgg.className === 'bears') {
        easterEgg.className = 'beets';
    } else if (easterEgg.className === 'beets') {
        easterEgg.className = 'bsg';
    } else {
        easterEgg.className = 'bears';
    }
});