const pesos = document.querySelectorAll('.info-peso');
const alturas = document.querySelectorAll('.info-altura');
const imc = document.querySelectorAll('.info-imc');

function calcIMC() {

    for ( i = 0; i < pesos.length; i++) {
        let resultadoIMC = pesos[i].textContent / (alturas[i].textContent * alturas[i].textContent);
        imc[i].innerHTML = resultadoIMC.toFixed(2);
    }
}

calcIMC()




