// Constants.
const appName = 'Dumb Idle Game',
    appVersion = '0.0.1',
    appBuild = '2022-09-03',
    debug = true;

// Variables.
let clicks = 0,
    btnClick = document.querySelector('#btnClick'),
    divClicks = document.querySelector('#divClicks'),
    title = document.querySelector('#title');

// Event listeners --------------------------------------------------------------------------------

// Click button event listener.
btnClick.addEventListener('click', (event) => {
    clicks++

    updateDivClicks()
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
    updateDivClicks()
}

// Code to run on startup -------------------------------------------------------------------------

init();
