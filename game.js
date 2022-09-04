// Constants.
const appName = 'Dumb Idle Game',
    appVersion = '0.0.3',
    appBuild = '2022-09-03',
    debug = true,
    decimalPlaces = 2,
    defaultClicks = 0, defaultMultiplier = 1.0, defaultMultiplierCost = 10,
    defaultMultiplierIncrement = 0.1, defaultMultiplierCostIncrement = 1.4;

// Variables.
let clicks, multiplier, multiplierCost,
    btnClick = document.querySelector('#btnClick'),
    btnMultiplier = document.querySelector('#btnMultiplier'),
    btnSave = document.querySelector('#btnSave'),
    btnReset = document.querySelector('#btnReset'),
    divClicks = document.querySelector('#divClicks'),
    divMultiplier = document.querySelector('#divMultiplier'),
    title = document.querySelector('#title'),
    localStorageSaveInterval = window.setInterval(saveLocalStorage, 30 * 1000);


// Event listeners --------------------------------------------------------------------------------

// Click button event listener.
btnClick.addEventListener('click', (event) => {
    clicks += 1 * multiplier

    updateDivClicks()
});

btnSave.addEventListener('click', (event) => {
    saveLocalStorage()
});

btnReset.addEventListener('click', (event) => {
    if (confirm("Reset? Are you sure?")) {
        clicks = defaultClicks
        multiplier = defaultMultiplier
        multiplierCost = defaultMultiplierCost
        saveLocalStorage()
        console.log('Everything reset.')

        init()
    }
});

btnMultiplier.addEventListener('click', (event) => {
    clicks -= multiplierCost
    multiplier += defaultMultiplierIncrement
    multiplierCost *= defaultMultiplierCostIncrement

    updateDivClicks()
    updateBtnMultiplier()
    updateDivMultiplier()
});

// Functions --------------------------------------------------------------------------------------

// Displays application version info.
function getVersion() {
    return appName + ' v' + appVersion + ' (' + appBuild + ').';
}

// Updates the div displaying the number of clicks.
function updateDivClicks() {
    divClicks.innerHTML = 'Clicks: ' + clicks.toFixed(decimalPlaces)
    updateBtnMultiplier()

    if (debug) {
        console.log('Clicks: ' + clicks);
    }
};

// Updates the multiplier button.
function updateBtnMultiplier() {
    btnMultiplier.innerHTML = 'Buy multiplier (' + multiplierCost.toFixed(decimalPlaces) + ')'

    if (clicks < multiplierCost) {
        btnMultiplier.disabled = true
    } else {
        btnMultiplier.disabled = false
    }
};

function updateDivMultiplier() {
    divMultiplier.innerHTML = 'Multiplier: ' + multiplier.toFixed(decimalPlaces)
};

// Updates the page title with the current application version.
function updateTitle() {
    title.innerHTML = 'Dumb Idle Game <small class="text-muted">v' + appVersion + '</small>'
};

// Initialisation things.
function init() {
    console.log('Welcome to ' + getVersion());

    updateTitle()

    // Get status from local storage, reset if can't.
    clicks = +window.localStorage.getItem('clicks');
    if (typeof (clicks) != 'number') {
        clicks = defaultClicks
    }

    multiplier = +window.localStorage.getItem('multiplier');
    if (typeof (multiplier) != 'number') {
        multiplier = defaultMultiplier
    }

    multiplierCost = +window.localStorage.getItem('multiplierCost');
    if (typeof (multiplierCost) != 'number') {
        multiplier = defaultMultiplierCost
    }

    btnMultiplier.disabled = true

    updateDivClicks()
    updateBtnMultiplier()
    updateDivMultiplier()
}

// Save to local storage.
function saveLocalStorage() {
    window.localStorage.setItem('clicks', clicks);
    window.localStorage.setItem('multiplier', multiplier);
    window.localStorage.setItem('multiplierCost', multiplierCost);

    console.log('Saved to local storage.')
}

// Code to run on startup -------------------------------------------------------------------------

init();
