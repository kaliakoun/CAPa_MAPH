// Fonction pour l'exercice 1 : Calcul de l'épargne mensuelle
document.getElementById('exo1').addEventListener('submit', function(event) {
    event.preventDefault();

    let revenus = parseFloat(document.getElementById('revenus').value);
    let materiel = parseFloat(document.getElementById('materiel').value);
    let alimentation = parseFloat(document.getElementById('alimentation').value);
    let carburant = parseFloat(document.getElementById('carburant').value);
    let assurances = parseFloat(document.getElementById('assurances').value);
    let loisirs = parseFloat(document.getElementById('loisirs').value);

    // Calcul de l'épargne
    let totalDepenses = materiel + alimentation + carburant + assurances + loisirs;
    let epargne = revenus - totalDepenses;
    let prixTracteur = parseFloat(document.getElementById('prixTracteur').value);

    let moisPourAcheterTracteur = prixTracteur / epargne;

    // Affichage des résultats
    document.getElementById('resultat1').innerHTML = `
        <h4>Résultats :</h4>
        <p>Épargne mensuelle : <strong>${epargne} €</strong></p>
        <p>Temps nécessaire pour acheter un tracteur : <strong>${moisPourAcheterTracteur.toFixed(1)} mois</strong></p>
    `;
});

// Fonction pour l'exercice 2 : Ajustement budgétaire suite à une augmentation du carburant
document.getElementById('exo2').addEventListener('submit', function(event) {
    event.preventDefault();

    let augmentationCarburant = parseFloat(document.getElementById('augmentationCarburant').value);

    let carburantActuel = parseFloat(document.getElementById('carburant').value);
    let nouveauCarburant = carburantActuel + (carburantActuel * augmentationCarburant / 100);

    // Mise à jour de l'affichage avec la nouvelle dépense en carburant
    document.getElementById('resultat2').innerHTML = `
        <h4>Nouvelle répartition des dépenses :</h4>
        <p>Dépenses en carburant après augmentation : <strong>${nouveauCarburant} €</strong></p>
        <p>Proposez un ajustement pour respecter votre budget.</p>
    `;
});
