const pacientes = document.querySelectorAll('.paciente');

validaPaciente();

function validaPaciente() {

    for (i = 0; i < pesos.length; i++) {
        
        if( pesos[i].textContent <= 0 || pesos[i].textContent >= 300) {
            pacientes[i].classList.add('paciente-invalido');
        } else if ( alturas[i].textContent <= 0 || alturas[i].textContent >= 3.00 ) {
            pacientes[i].classList.add('paciente-invalido');
        }
    }
}