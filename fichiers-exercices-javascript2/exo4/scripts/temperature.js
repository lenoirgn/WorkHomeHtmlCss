// Convertit une température Fahrenheit → Celsius
function fahrenheitVersCelsius(F) {
    return (F - 32) * 5 / 9;
}

// Convertit une température Celsius → Fahrenheit
function celsiusVersFahrenheit(C) {
    return C * 9 / 5 + 32;
}

function convertCelsiusToFahrenheit() {
    // Récupère la valeur brute (texte) de l’input celsius
    const celsiusValue = document.getElementById("celsius").value;

    // Convertit en nombre
    const celsiusNumber = parseFloat(celsiusValue);

    // Vérifie si la valeur est correcte
    if (isNaN(celsiusNumber)) {
        return;
    }

    // Conversion
    const fahrenheitValue = celsiusVersFahrenheit(celsiusNumber);

    // Écriture du résultat formaté avec 1 décimale
    document.getElementById("fahrenheit").value = fahrenheitValue.toFixed(1);
}
function convertFahrenheitToCelsius() {
    const fahrenheitValue = document.getElementById("fahrenheit").value;
    const fahrenheitNumber = parseFloat(fahrenheitValue);

    if (isNaN(fahrenheitNumber)) {
        return;
    }
    const celsiusValue = fahrenheitVersCelsius(fahrenheitNumber);
    document.getElementById("celsius").value = celsiusValue.toFixed(1);
}
document.getElementById("cToF").addEventListener("click", convertCelsiusToFahrenheit);
document.getElementById("fToC").addEventListener("click", convertFahrenheitToCelsius);
//document.getElementById("celsius").addEventListener("input", convertCelsiusToFahrenheit);
//document.getElementById("fahrenheit").addEventListener("input", convertFahrenheitToCelsius);