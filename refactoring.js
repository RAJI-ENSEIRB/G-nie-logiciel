//CONSTANTES DE CONFIGURATION
const DEFAULT_CENTER = {
    lat: 44.8378
    lng: -0.5792
}

const RANGES = {
    cyclesCount: { min: 0, max: 100 },
    serie: { min: 1000, max: 9999 },
    tempsFonction: { min: 50, max: 200 },
    autonomie: { min: 5, max: 30 },
    tableCycle: { min: 1, max: 2 }
  };


//FONCTIONS UTILITAIRES

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomChoice(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}


// GÉNÉRATION DE COORDONNÉES
function generateRandomCoordinates(center = DEFAULT_CENTER, variance
   = COORDINATE_VARIANCE) {
    return {
      latitude: center.lat + (Math.random() - 0.5) * variance,
      longitude: center.lng + (Math.random() - 0.5) * variance
    };
}


// GÉNÉRATION D'IDENTIFIANT
function generateFeuId(index) {
    return ID_PREFIX + String(index + 1).padStart(ID_PADDING, "0");
}


// GÉNÉRATION DES PROPRIÉTÉS D'IDENTIFICATION
function createIdentificationProperties(index, type) {
    return {
      id: generateFeuId(index),
      nom: `Feu Aléatoire #${index + 1}`,
      type: type
    };
}