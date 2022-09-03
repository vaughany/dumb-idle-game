// Constants.
const appName = 'Dumb Idle Game',
    appVersion = '0.0.2',
    appBuild = '2022-09-03',
    debug = true;

// Variables.
let clicks,
    btnClick = document.querySelector('#btnClick'),
    btnSave = document.querySelector('#btnSave'),
    btnReset = document.querySelector('#btnReset'),
    divClicks = document.querySelector('#divClicks'),
    title = document.querySelector('#title'),
    localStorageSaveInterval = window.setInterval(saveLocalStorage, 30 * 1000);


// Event listeners --------------------------------------------------------------------------------

// Click button event listener.
btnClick.addEventListener('click', (event) => {
    clicks++

    updateDivClicks()
});

btnSave.addEventListener('click', (event) => {
    saveLocalStorage()
});

btnReset.addEventListener('click', (event) => {
    if (confirm("Reset? Are you sure?")) {
        clicks = 0
        saveLocalStorage()
        console.log('Clicks reset.')
        updateDivClicks()
    }
});

// Functions --------------------------------------------------------------------------------------

// Displays application version info.
function getVersion() {
    return appName + ' v' + appVersion + ' (' + appBuild + ').';
}

// Updates the div displaying the number of clicks.
function updateDivClicks() {
    divClicks.innerHTML = clicks

    if (debug) {
        console.log('Clicks: ' + clicks);
    }
};

// Updates the page title with the current application version.
function updateTitle() {
    title.innerHTML = title.innerHTML + ' <small class="text-muted">v' + appVersion + '</small>'
};

// Initialisation things.
function init() {
    console.log('Welcome to ' + getVersion());

    updateTitle()

    // Get status from local storage, reset if can't.
    clicks = +window.localStorage.getItem('clicks');
    if (typeof (clicks) != 'number') {
        clicks = 0
    }

    updateDivClicks()
}

// Save to local storage.
function saveLocalStorage() {
    window.localStorage.setItem('clicks', clicks);

    console.log('Saved to local storage.')
}

// Code to run on startup -------------------------------------------------------------------------

init();
