const conteinerDasQuestoes = document.querySelectorAll('.sessao__conteiner');
const botoesDeNavegacao = document.querySelectorAll('.botoes__nav');
const btnSeta = document.querySelector('.botoes__seta');
const botaoEnviar = document.querySelector('.botoes__enviar');
let respondidas = [false, false, false];

conteinerDasQuestoes.forEach((conteiner, index) => {
    const inputs = conteiner.querySelectorAll('input[type=radio]');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            respondidas[index] = true;
            botoesDeNavegacao[index].disabled = false;
            botoesDeNavegacao[index].classList.add('ativo');

            if (index < conteinerDasQuestoes.length - 1) {
                botoesDeNavegacao[index + 1].disabled = false;
                botoesDeNavegacao[index + 1].classList.add('ativo');
            }

            if (respondidas.every(r => r)) {
                botaoEnviar.style.display = 'block';
                botaoEnviar.classList.add('ativo');
            }
        })
    })
})


botaoEnviar.addEventListener('click', () => {
    window.location.href = 'pag-agradecer.html';
});


botoesDeNavegacao.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        conteinerDasQuestoes.forEach(q => q.classList.remove('ativa'));
        conteinerDasQuestoes[index].classList.add('ativa');
        if (index > 0){
            btnSeta.classList.add('ativo');
        } else {
            btnSeta.classList.remove('ativo');
        }
    });
});


btnSeta.addEventListener('click', () => {
    let atual = [...conteinerDasQuestoes].findIndex(q => q.classList.contains('ativa'));
    if (atual > 0) {
        conteinerDasQuestoes[atual].classList.remove('ativa');
        conteinerDasQuestoes[atual - 1].classList.add('ativa');
    }
});