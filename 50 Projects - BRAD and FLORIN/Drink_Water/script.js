const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((smallCups, idx) => {
    smallCups.addEventListener('click', () => highlightCups(idx));
    
})

function highlightCups(idx) {

    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        }
        else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups == 0) {
        percentage.style.visiblity = 'hidden';
        percentage.style.height = 0;
    }
    else {
        percentage.style.visiblity = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups == totalCups) {
        remained.style.visiblity = 'hidden';
        remained.style.height = 0;
    }
    else {
        remained.style.visiblity = 'visible';
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}


