const COORDS = 'coords';

function handleGeoSucces(position){
    console.log(position);
}

function handleGeoError() {
    console.log("Oops..");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else {

    }
}

function init(){
    loadCoords();
}

init();