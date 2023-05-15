const controle = document.querySelectorAll("[data-controle]");
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energaia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energaia": 0,
        "velocidade": -20
    },

    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energaia": 48,
        "velocidade": -4
    },

    "pernas": {
        "forca": 27,
        "poder": 21,
        "energaia": 48,
        "velocidade": -4
    },

    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energaia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})      

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) -1;
    }else{
        peca.value = parseInt(peca.value) +1;
    }
}


