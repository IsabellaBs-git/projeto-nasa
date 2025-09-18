// Seleciona todos os botões da página
const botoes = document.querySelectorAll('button');

// Adiciona um evento de clique a cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega o texto do botão para a mensagem
        const nomeBotao = botao.innerText || 'Ícone';
        console.log(`Botão "${nomeBotao}" foi clicado!`);
    });
});

console.log('JavaScript carregado com sucesso!');