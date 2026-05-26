function calcularTemperatura() {
    var valorTemperatura = document.getElementById('inputtemperatura').value;
    var valorTemperaturaNumber = Number.parseFloat(valorTemperatura);
    var valorTemperaturaNumberFixed = valorTemperaturaNumber.toFixed(1);

    var celsius = valorTemperaturaNumberFixed;
    var fahrenheit = valorTemperaturaNumberFixed;
    var kelvin = valorTemperaturaNumberFixed;

    var vcelsius = valorTemperaturaNumberFixed;
    var vfahrenheit = valorTemperaturaNumberFixed;
    var vkelvin = valorTemperaturaNumberFixed;

    const select = document.getElementById('escaladetemperatura');
    const opcao = select.value;

    var campocelsius = '';
    var campofahrenheit = '';
    var campokelvin = '';
    var formulautiliza = '';
    var campoformula = '';

    if (opcao == 'celsius') {
        vcelsius = Number.parseFloat(celsius);
        fahrenheit = vcelsius * 1.8 + 32;
        vfahrenheit = Number.parseFloat(fahrenheit);
        kelvin = vcelsius + 273.15;
        vkelvin = Number.parseFloat(kelvin);

        campocelsius = document.getElementById('temperatura');
        campocelsius.innerHTML = vcelsius.toFixed(1) + " ºC";

        campofahrenheit = document.getElementById('valorconvertidocontainer1');
        campofahrenheit.innerHTML = "Fahrenheit(ºF): <span class='valor-temperatura-container1'>" + " " + vfahrenheit.toFixed(1) + "</span>";

        campokelvin = document.getElementById('valorconvertidocontainer2');
        campokelvin.innerHTML = "Kelvin(ºK): <span class='valor-temperatura-container2'>" + " " + vkelvin.toFixed(1) + "</span>";

        formulautiliza = document.getElementById('formulautilizada');
        formulautiliza.innerHTML = "Fórmulas utilizadas: ";

        campoformula = document.getElementById('formula');
        campoformula.innerHTML = `ºF = ºC x 1,8 + 32 <br> ºK = ºC + 273,15`;

    }else if(opcao == 'fahrenheit'){
        vfahrenheit = Number.parseFloat(fahrenheit);
        celsius = (vfahrenheit - 32) / 1.8;
        vcelsius = Number.parseFloat(celsius);
        kelvin = (vfahrenheit + 459.67) / 1.8;
        vkelvin = Number.parseFloat(kelvin);

        campofahrenheit = document.getElementById('temperatura');
        campofahrenheit.innerHTML = vfahrenheit + " ºF";

        campocelsius = document.getElementById('valorconvertidocontainer1');
        campocelsius.innerHTML = "Celsius(ºC): <span class='valor-temperatura-container1'>" + " " + vcelsius.toFixed(1) + "</span>";

        campokelvin = document.getElementById('valorconvertidocontainer2');
        campokelvin.innerHTML = "Kelvin(ºK): <span class='valor-temperatura-container2'>" + " " + vkelvin.toFixed(1) + "</span>";

        formulautiliza = document.getElementById('formulautilizada');
        formulautiliza.innerHTML = "Fórmulas utilizadas: ";

        campoformula = document.getElementById('formula');
        campoformula.innerHTML = `ºC = (ºF - 32) / 1,8 <br> ºK = (ºF + 459,67) / 1,8`;
        
    }else if(opcao == 'kelvin'){
        vkelvin = Number.parseFloat(kelvin);
        celsius = vkelvin - 273.15;
        vcelsius = Number.parseFloat(celsius);
        fahrenheit = vkelvin * 1.8 - 459.67;
        vfahrenheit = Number.parseFloat(fahrenheit);

        campokelvin = document.getElementById('temperatura');
        campokelvin.innerHTML = vkelvin + " ºK";

        campocelsius = document.getElementById('valorconvertidocontainer1');
        campocelsius.innerHTML = "Celsius(ºC): <span class='valor-temperatura-container1'>" + " " + vcelsius.toFixed(1) + "</span>";

        campofahrenheit = document.getElementById('valorconvertidocontainer2');
        campofahrenheit.innerHTML = "Fahrenheit(ºF): <span class='valor-temperatura-container2'>" + " " + vfahrenheit.toFixed(1) + "</span>";

        formulautiliza = document.getElementById('formulautilizada');
        formulautiliza.innerHTML = "Fórmulas utilizadas: ";

        campoformula = document.getElementById('formula');
        campoformula.innerHTML = `°C = ºK - 273,15 / 1,8 <br> °F = ºK x 1,8 - 459,67`;
    }else{
        formulautiliza = document.getElementById('formulautilizada');
        formulautiliza.innerHTML = "Opção inválida. ";
    }

}


function limparInputs() {
    document.getElementById('inputtemperatura').value = '';
}