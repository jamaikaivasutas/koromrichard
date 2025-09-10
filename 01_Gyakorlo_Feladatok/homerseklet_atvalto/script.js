function atvalt(){
    const celsiusInput = document.getElementById("celsius").value;
    const celsius = parseFloat(celsiusInput);

    if(isNaN(celsius)){
        document.getElementById("eredmeny").innerText = "Kérlek valódi számot adj meg!";
        return;
    }
}

const kelvin = celsius + 273.15;
const fahrenheit = celsius * 1.8 + 32;

const solutionText = `${celsius} &deg;C = ${kelvin.toFixed(2)} K <br> ${celsius} &deg;C = ${fahrenheit.toFixed(2)} &deg;F`;

document.getElementById("eredmeny").innerHTML = solutionText;