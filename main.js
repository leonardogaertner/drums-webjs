function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.tagName === 'AUDIO') {
        elemento.play();
    } else {
        console.log('Elemento de áudio não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Use backticks for template literals

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
}
