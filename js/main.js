const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
	"bracos": {
		"forca": 29,
		"poder": 35,
		"energia": -21,
		"velocidade": -5
	},

	"blindagem": {
		"forca": 41,
		"poder": 20,
		"energia": 0,
		"velocidade": -20
	},

	"nucleos": {
		"forca": 0,
		"poder": 7,
		"energia": 48,
		"velocidade": -4
	},

	"pernas": {
		"forca": 27,
		"poder": 21,
		"energia": 48,
		"velocidade": -4
	},

	"foguetes": {
		"forca": 0,
		"poder": 28,
		"energia": 0,
		"velocidade": -2
	}
}

const cores = document.querySelectorAll("[data-cor]")

const robo = document.querySelector(".robo")

controle.forEach((elemento) => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
		atualizaEstatisticas(evento.target.dataset.peca)
	})
})

function manipulaDados(operacao, controle) {
	const peca = controle.querySelector("[data-contador]")

	if (operacao === "-") {
		peca.value = parseInt(peca.value) - 1;
	} else {
		peca.value = parseInt(peca.value) + 1;
	}
}

function atualizaEstatisticas(peca) {

	estatisticas.forEach((elemento) => {
		elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
	})
}

cores.forEach((elemento) => {
	elemento.addEventListener("click", (evento) => {
		escolheCorRobotron(evento.target.dataset.cor);
	})	
})

function escolheCorRobotron(corEscolhida) {
	
	if(corEscolhida === "amarelo") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Amarelo.png';
	}else if(corEscolhida === "azul") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Azul.png';
	}else if(corEscolhida === "branco") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Branco.png';
	}else if(corEscolhida === "preto") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Preto.png';
	}else if(corEscolhida === "rosa") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Rosa.png';
	}else if(corEscolhida === "vermelho") {
		console.log(corEscolhida);
		robo.src = 'img/robotron2000-Vermelho.png';
	}


}