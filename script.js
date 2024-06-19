const perguntas = [
    {
    enunciado: "Você concorda com a legalização da maconha para uso recreativo? ",
    alternativas: [
    "Sim, acredito que a legalização poderia reduzir o crime relacionado às drogas.",
    "Não, acredito que poderia aumentar o consumo de drogas e causar problemas de saúde pública."
    ]
    },
    {
    enunciado: "Você concorda com a proibição de armas de fogo?",
    alternativas: [
    "Sim, acho que isso pode diminuir a violência armada e proteger a segurança pública.",
    "Não, acredito que as pessoas têm o direito de se defender e que a proibição violaria direitos constitucionais."
    ]
    },
    {
    enunciado: "Você concorda com a implementação de cotas raciais em universidades?",
    alternativas: [
    "Sim, acredito que é necessário para promover a igualdade de oportunidades para grupos historicamente marginalizados.",
    "Não, acho que as cotas podem criar injustiças e discriminação reversa."
    ]
    },
    {
    enunciado: "Você concorda com a redução da idade mínima para votar para 16 anos?",
    alternativas: [
    "Sim, acredito que os jovens devem ter voz nas decisões políticas que afetam seu futuro.",
    "Não, acho que os jovens podem não ter maturidade suficiente para tomar decisões políticas informadas."
    ]
    
    },
    {
    enunciado: "Você concorda com a pena de morte para crimes graves?",
    alternativas: [
    "Sim, acredito que a pena de morte é uma forma de justiça e serve como um deterrente eficaz.",
    "Não, acredito que a pena de morte é desumana e falível, podendo levar à execução de inocentes."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
