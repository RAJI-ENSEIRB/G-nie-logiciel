function generateRandomFeux(count) {
    const feux = [];
    const centerLat = 44.8378;
    const centerLng = -0.5792;
    for (let i = 0; i < count; i++) {
      // Choix aléatoire du type
      const type = getRandomChoice(Object.keys(typeStates));
      const stateCount = typeStates[type].count;
      const feu = {
        id: "FeuRand" + String(i + 1).padStart(3, "0"),
        nom: "Feu Aléatoire #" + (i + 1),
        type: type,
        owner: getRandomChoice(companies),
        pays: getRandomChoice(paysList),
        tension_service: getRandomChoice(tensions),
        tension_alim: getRandomChoice(tensions),
        etat_courant: getRandomInt(0, stateCount - 1),
        cycles_count: getRandomInt(0, 100),
        // Coordonnées générées autour d'un centre
        latitude: centerLat + (Math.random() - 0.5) * 0.1,
        longitude: centerLng + (Math.random() - 0.5) * 0.1,
        serie: "C" + getRandomInt(1000, 9999),
        tempsFonction: getRandomInt(50, 200) + "h",
        autonomie: getRandomInt(5, 30) + "h",
        mode: getRandomChoice(modes),
        tableCycle: getRandomInt(1, 2),
        optiqueHaut: getRandomChoice(optiques),
        optiqueCentre: getRandomChoice(optiques),
        optiqueBas: getRandomChoice(optiques),
        posPhysique: "Emplacement " + (i + 1),
        radio: Math.random() < 0.5,
        bluetooth: Math.random() < 0.5,
        // Dernier changement initialisé à l'instant
        dernier_changement: new Date().toISOString()
      };
      feux.push(feu);
    }
    return feux;
  }