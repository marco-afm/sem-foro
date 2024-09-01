const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');
const automatico = document.getElementById('automatico');
var imagem = document.getElementById('imagem');

var imagens = ['./assets/vermelho.png', './assets/amarelo.png', './assets/verde.png']; // Array de imagens

vermelho.addEventListener('click', function() {
    imagem.src = './assets/vermelho.png';
});

amarelo.addEventListener('click', function() {
    imagem.src = './assets/amarelo.png';
});

verde.addEventListener('click', function() {
    imagem.src = './assets/verde.png';
});

automatico.addEventListener('click', function() {
    var indiceAtual = 0; // Índice da imagem atual
    var intervalo; // Variável para armazenar o intervalo

    function trocarImagem() {
        // var imagem = document.getElementById('imagem');
        indiceAtual = (indiceAtual + 1) % imagens.length; // Incrementa o índice e volta ao início se necessário
        imagem.src = imagens[indiceAtual]; // Troca a imagem
    }

    // Inicia a troca de imagens ao clicar no botão de início
    document.getElementById('automatico').addEventListener('click', function() {
        intervalo = setInterval(trocarImagem, 1000);
    });

    // Função para parar a troca de imagens
    function pararTrocaDeImagens() {
        clearInterval(intervalo);
    }

    // Parar a troca de imagens ao clicar em qualquer outro botão
    document.querySelectorAll('button:not(#automatico)').forEach(function(button) {
        button.addEventListener('click', pararTrocaDeImagens);
    });
});

imagem.addEventListener('dblclick', function() {
    imagem.src = './assets/desligado.png';
});
