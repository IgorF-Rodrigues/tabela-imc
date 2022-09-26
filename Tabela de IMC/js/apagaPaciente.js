tabelaPacientes.addEventListener('dblclick', (evento) => {
    let paiDoTarget = evento.target.parentNode;
    paiDoTarget.classList.add('remove-paciente');
})
