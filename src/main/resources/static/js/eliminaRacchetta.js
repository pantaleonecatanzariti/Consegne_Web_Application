document.getElementById("buttonEliminaRacchetta").addEventListener("click", function() {
    document.getElementById("eliminaRacchetta").style.display = "block";
    document.getElementById("RacchettaForm").style.display = "none";
});


document.getElementById("eliminaRacchettaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroRiga = parseInt(document.getElementById("nomeRacchetta").value);

    const tbody = document.querySelector("table tbody");

    if (numeroRiga > 0 && numeroRiga <= tbody.rows.length) {
        tbody.deleteRow(numeroRiga - 1);
    } else {
        alert("Numero di riga non valido. Inserisci un numero compreso tra 1 e " + tbody.rows.length);
    }

    document.getElementById("eliminaRacchettaForm").reset();
    document.getElementById("eliminaRacchetta").style.display = "none";
});