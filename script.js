// Acordeões: abre ou fecha o conteúdo de cada tópico.
document.querySelectorAll(".titulo-acordeao").forEach((botao) => {
    botao.addEventListener("click", () => {
        const artigo = botao.closest(".acordeao");
        const aberto = artigo.classList.toggle("ativo");
        const simbolo = botao.querySelector("span");
        if (simbolo) simbolo.textContent = aberto ? "−" : "+";
        botao.setAttribute("aria-expanded", String(aberto));
    });
});

// Calculadora simples de meia-vida, presente na página História e Conceitos.
const calcular = document.getElementById("calcular-meia-vida");
if (calcular) {
    calcular.addEventListener("click", () => {
        const massa = Number(document.getElementById("massa-inicial").value);
        const meiasVidas = Number(document.getElementById("meias-vidas").value);
        const resultado = document.getElementById("resultado-meia-vida");
        if (!Number.isFinite(massa) || massa < 0 || !Number.isInteger(meiasVidas) || meiasVidas < 0 || meiasVidas > 100) {
            resultado.textContent = "Digite uma quantidade não negativa e um número inteiro de meias-vidas entre 0 e 100.";
            return;
        }
        const restante = massa / (2 ** meiasVidas);
        resultado.textContent = `Após ${meiasVidas} meia(s)-vida(s), restam ${restante.toLocaleString("pt-BR", { maximumFractionDigits: 8 })} g.`;
    });
}

// Quiz de revisão.
const quiz = document.getElementById("quiz-radioatividade");
if (quiz) {
    quiz.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const respostas = { q1: "b", q2: "a", q3: "c" };
        let acertos = 0;
        let respondidas = 0;
        Object.entries(respostas).forEach(([pergunta, correta]) => {
            const marcada = quiz.querySelector(`input[name="${pergunta}"]:checked`);
            if (marcada) {
                respondidas++;
                if (marcada.value === correta) acertos++;
            }
        });
        const resultado = document.getElementById("resultado-quiz");
        if (respondidas < 3) {
            resultado.textContent = "Responda às três perguntas antes de conferir o resultado.";
        } else {
            resultado.textContent = `Você acertou ${acertos} de 3 questões. ${acertos === 3 ? "Excelente trabalho!" : "Revise os conteúdos e tente novamente!"}`;
        }
    });
}
