const candidates = [
    { name: 'Nithin', score: 0 },
    { name: 'Surya', score: 0 },
    { name: 'Koushik', score: 0 },
    { name: 'Sridhar', score: 0 }
];

const form = document.querySelector('#form');
const select = document.querySelector('#selectDropdown');
const resetButton = document.querySelector('#reset');


const loadDropdown = () => {
    select.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = 'None';
    defaultOption.innerText = "select your person..."
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);
    candidates.forEach(candidate => {
        const option = document.createElement('option');
        option.value = candidate.name;
        option.innerText = `${candidate.name} - ${candidate.score}`;
        select.appendChild(option);
    });
};

const pickRandNumber = () => {
    return Math.floor(Math.random() * 10);
};

// Update scores
// const updateScores = (name, score) => {
//     candidates.forEach(c => {
//         if (c.name === name) {
//             c.score += score;
//         }
//     });
// };

const updateScores = (name, score) => {
    const updatedCandidates = candidates.map(candidate => {
        if (candidate.name === name) {
            newScore = candidate.score + score;
            return { ...candidate, score: newScore };
        }
        else {
            return { ...candidate, score: candidate.score };
        }
        return candidate;
    })
    return updatedCandidates;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedPerson = select.value;
    const randNumber = pickRandNumber();

    alert(`${selectedPerson} scored ${randNumber}`);
    candidates = updateScores(selectedPerson, randNumber);
    loadDropdown();
});

// Reset
resetButton.addEventListener('click', () => {
    candidates.forEach(c => c.score = 0);
    loadDropdown();
});

loadDropdown();