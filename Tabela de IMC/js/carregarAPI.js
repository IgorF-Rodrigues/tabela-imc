const botaoAdd = document.getElementById('carregar-paciente');
const novosPacientes = 'https://api-pacientes.herokuapp.com/pacientes';

botaoAdd.addEventListener('click', carregaNovosPacientes);

async function carregaNovosPacientes() {
    
    let dadosDaApi = await fetch(novosPacientes);
    let dadosDaApiTransformados = await dadosDaApi.json();
    
    dadosDaApiTransformados.forEach((lista) => { 
        let linhaDoPaciente = criaColunas();

        criaLinha(lista, linhaDoPaciente);
    })
}

function criaLinha(lista, linhaDoPaciente) {
    
    for (i = 0; i < 5; i++) {
        let dados = ['nome', 'peso', 'altura', 'gordura', 'imc'];
        let listaDaApi = [lista.nome, lista.peso, lista.altura, lista.gordura, lista.imc];
        
        let colunaDoPaciente = document.createElement('td');
        colunaDoPaciente.classList.add(`info-${dados[i]}`);
        linhaDoPaciente.appendChild(colunaDoPaciente);
        
        colunaDoPaciente.innerHTML = listaDaApi[i];
    }
}

