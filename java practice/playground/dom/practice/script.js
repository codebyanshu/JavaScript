let orbitCount = 0;
let planetStatus = document.getElementById("planetStatus");

let orbitInterval = setInterval(() => {
    orbitCount++;
    planetStatus.textContent = `The planet has completed ${orbitCount} orbits!`;

    // Stop the planet after 5 orbits
    if (orbitCount >= 5) {
        clearInterval(orbitInterval);
        planetStatus.textContent = `The planet has stopped after ${orbitCount} orbits.`;
    }
}, 1000);



let spinCount = 0;
let spinStatus = document.getElementById("spinStatus");

// Start the cosmos spinning every 2 seconds
let spinInterval = setInterval(() => {
    spinCount++;
    spinStatus.textContent = `The Ai has spin ${spinCount} times!`;

    // Stop spinning after 3 spins
    if (spinCount >= 3) {
        clearInterval(spinInterval);
        spinStatus.textContent = `The Ai has stopped spinning after ${spinCount} spins.`;
    }
}, 2000); // Changed from 3000 to 2000 (2 seconds)
