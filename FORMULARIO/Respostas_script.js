function exibirPergunta(perguntaAtual, proximaPergunta) {
    var elementoAtual = document.getElementById(perguntaAtual);
    var elementoProxima = document.getElementById(proximaPergunta);

        elementoAtual.style.display = 'none';
        elementoProxima.style.display = 'block';
  
}

function obterResposta(name) {
    var radios = document.getElementsByName(name);

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].id;
        }
    }

    return null;
}

function Pergunta1() {
    var respostaPergunta1 = obterResposta('flexRadioDefault1');

    if (respostaPergunta1) {
        exibirPergunta('pergunta1', 'pergunta2');
    } else {
        alert("Por favor, selecione uma opção antes de avançar.");
    }
}

function Pergunta2() {
    var respostaPergunta2 = obterResposta('flexRadioDefault2');

    if (respostaPergunta2) {
        if (respostaPergunta2 == 'A2') {
            exibirPergunta('pergunta2', 'pergunta3back');
        } else if (respostaPergunta2 == 'B2') {
            exibirPergunta('pergunta2', 'pergunta4front');
        } else if (respostaPergunta2 == 'C2') {
            exibirPergunta('pergunta2', 'pergunta5full');
        }
    } else {
        alert("Por favor, selecione uma opção antes de avançar.");
    }
}

function Pergunta3() {

    exibirPergunta('pergunta3back', 'pergunta6');
}

function Pergunta4() {

    exibirPergunta('pergunta4front', 'pergunta6');
}

function Pergunta5() {

    exibirPergunta('pergunta5full', 'pergunta6');
}

function Pergunta6() {
    var respostaPergunta6 = obterResposta('outrasTecnologias');

    if (respostaPergunta6 === 'A6') {
       
     
    } else {
      
    }

    alert("Questionário concluído! Reinicie se desejar responder novamente.");
    location.reload();
}
