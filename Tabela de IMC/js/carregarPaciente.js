const botaoAdicionar = document.getElementById('adicionar-paciente');
const tabelaPacientes = document.getElementById('tabela-pacientes');
const formularios = document.querySelectorAll('.grupo');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    verificaFormulario();
});

function verificaFormulario() {
    for(i = 0; i < formularios.length; i++ ) {
        let todosFormularios = formularios[i].childNodes[3].value;
        let formularioDoPeso = formularios[1].childNodes[3].value;
        let formularioDaAltura = formularios[2].childNodes[3].value;
        let formularioDaGordura = formularios[3].childNodes[3].value;

        if (todosFormularios.length == 0 || formularioDaGordura.length == 0) {
            alert('Você deixou um campo vazio!');
            break;

        } else if (formularioDoPeso <= 10 || formularioDoPeso >= 300) {
            alert('O peso está inválido, por favor digite os dados corretos para prosseguir!');
            break;

        } else if (formularioDaAltura <= 1.00 || formularioDaAltura >= 3.00) {
            alert('A altura está inválida, por favor digite os dados corretos para prosseguir!');
            break;

        } else if(formularioDaGordura <= 0 || formularioDaGordura >= 100 ) {
            alert('A gordura está inválida, por favor digite os dados corretos para prosseguir!');
            break;

        } else {
            criaLinhasEColunas(); 
        }
    }
}

function criaLinhasEColunas() {

    let linhaDoPaciente = criaColunas();

    for(i = 0; i < formularios.length; i++ ) {
        let dados = ['nome', 'peso', 'altura', 'gordura'];
        let dadosDoFormulario = formularios[i].childNodes[3].value;

        let colunaDoPaciente = document.createElement('td');
        colunaDoPaciente.classList.add(`info-${dados[i]}`);
        linhaDoPaciente.appendChild(colunaDoPaciente);
        
        colunaDoPaciente.innerHTML = dadosDoFormulario;
    } 
    criaCaixaECalculaNovoIMC(linhaDoPaciente);
}  

function criaColunas() {
    let linhaDoPaciente = document.createElement('tr');
    linhaDoPaciente.classList.add('paciente');
    tabelaPacientes.appendChild(linhaDoPaciente);
    return linhaDoPaciente;
}

function criaCaixaECalculaNovoIMC(linhaDoPaciente) {
    let imcDoNovoPaciente = document.createElement('td');
    imcDoNovoPaciente.classList.add(`info-imc`);
    linhaDoPaciente.appendChild(imcDoNovoPaciente);

    let peso = formularios[1].childNodes[3].value;
    let altura = formularios[2].childNodes[3].value;
        
    let calculo = peso / (altura * altura);
    imcDoNovoPaciente.innerHTML = calculo.toFixed(2);
}

