const filtro = document.getElementById('filtro-pacientes');

filtro.addEventListener('input', (evento) => {

    let pesquisa = evento.target.value;
    const Inomes = document.querySelectorAll('.info-nome');

    Inomes.forEach((nome) => {

        if(pesquisa.length > 0) {

            for(let i = 0; i < Inomes.length; i++) {
   
                let expressao = new RegExp(pesquisa, 'i');
                 
                if(!expressao.test(Inomes[i].textContent)) {
                    Inomes[i].parentNode.classList.add('remove-paciente');
                } else {
                    Inomes[i].parentNode.classList.remove('remove-paciente');
                }
            }
        } else {

            for(let i = 0; i < Inomes.length; i++) {
                nome.parentNode.classList.remove('remove-paciente');
            }
        }
    })
})
