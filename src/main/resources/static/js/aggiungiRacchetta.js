document.getElementById("buttonInserisciRacchetta").addEventListener("click", function() {
    document.getElementById("RacchettaForm").style.display = "block";
    document.getElementById("eliminaRacchetta").style.display = "none";
});


document.getElementById("inserisciRacchetta").addEventListener("submit", function(event) {
    event.preventDefault();

    const marca = document.getElementById("Marca").value;
    const modello = document.getElementById("Modello").value;
    const tennista = document.getElementById("Tennista").value;

    const nuovaRiga = document.createElement("tr");
    const cellaMarca = document.createElement("td");
    const cellaModello = document.createElement("td");
    const cellaTennista = document.createElement("td");

    cellaMarca.textContent = marca;
    cellaModello.textContent = modello;
    cellaTennista.textContent = tennista;

    nuovaRiga.appendChild(cellaMarca);
    nuovaRiga.appendChild(cellaModello);
    nuovaRiga.appendChild(cellaTennista);

    document.querySelector("table tbody").appendChild(nuovaRiga);
    document.getElementById("inserisciRacchetta").reset();
    document.getElementById("RacchettaForm").style.display = "none";
});