let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;  
responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
} 
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto"); 
    exibirTextoNaTela("p", "escolha um número entre 1 a 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value; 
     if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","ACERTOU!");
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`; 
        let mensagemTentaTivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentaTivas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
     } else {  
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "o número secreto é menor");
        } else {
            exibirTextoNaTela("p", "o número secreto é maior");
        }
        tentativas++;
        limparCampo();
     }
} 
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1 ); 
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
   if(quantidadeDeElementosNaLista == numeroLimite) {
     listaDeNumeroSorteados = [];
   }
   if (listaDeNumeroSorteados.includes 
    (numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido); 
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
chute = document.querySelector("input");
chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}