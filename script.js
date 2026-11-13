let botaoIniciar = document.getElementById("btn-iniciar");
let telaInicial = document.getElementById("tela-inicial");
let telaQuiz = document.getElementById("tela-quiz");
let telaResultado = document.getElementById("tela-resultado");

let numeroPergunta = document.getElementById("numero-pergunta");
let elementoPontuacao = document.getElementById("pontuacao");
let resultadoFinal = document.getElementById("resultado-final");
let mensagemFinal = document.getElementById("mensagem-final");
let botaoReiniciar = document.getElementById("btn-reiniciar");

botaoIniciar.addEventListener("click", function() {
    telaInicial.style.display = "none"; 
    telaQuiz.style.display = "block";
    carregarPergunta();
});

let perguntas = [
    {
        pergunta: "Qual é a capital da Austrália?",
        opcoes: ["Sydney", "Canberra", "Melbourne", "Perth"],
        resposta: 1
    },
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        opcoes: ["Terra", "Saturno", "Júpiter", "Netuno"],
        resposta: 2
    },
    {
        pergunta: "Qual é a fórmula química da água?",
        opcoes: ["CO2", "O2", "H2O", "NaCl"],
        resposta: 2
    },
    {
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        opcoes: ["1889", "1822", "1500", "1922"],
        resposta: 1
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        opcoes: ["Pablo Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"],
        resposta: 2
    },
    {
        pergunta: "Qual é o símbolo químico do ouro?",
        opcoes: ["Ag", "Au", "Fe", "O"],
        resposta: 1
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        opcoes: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        resposta: 3
    },
    {
        pergunta: "Em qual continente fica o Egito?",
        opcoes: ["Ásia", "Europa", "África", "Oceania"],
        resposta: 2
    },
    {
        pergunta: "Qual destes animais é um mamífero que põe ovos?",
        opcoes: ["Morcego", "Ornitorrinco", "Golfinho", "Canguru"],
        resposta: 1
    },
    {
        pergunta: "Qual é o maior mamífero do mundo?",
        opcoes: ["Elefante africano", "Girafa", "Baleia-azul", "Rinoceronte"],
        resposta: 2
    },
    {
        pergunta: "Qual país é conhecido por ter o formato de uma bota?",
        opcoes: ["Espanha", "Grécia", "Itália", "França"],
        resposta: 2
    },
    {
        pergunta: "Quem foi o primeiro homem a pisar na Lua?",
        opcoes: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        resposta: 2
    },
    {
        pergunta: "Quantos minutos tem uma hora?",
        opcoes: ["30", "45", "60", "90"],
        resposta: 2
    },
    {
        pergunta: "Qual instrumento é usado para medir a temperatura?",
        opcoes: ["Barômetro", "Termômetro", "Higrômetro", "Anemômetro"],
        resposta: 1
    },
    {
        pergunta: "Qual é o satélite natural da Terra?",
        opcoes: ["Marte", "Sol", "Lua", "Vênus"],
        resposta: 2
    },
    {
        pergunta: "Qual é o maior deserto quente do mundo?",
        opcoes: ["Gobi", "Saara", "Atacama", "Kalahari"],
        resposta: 1
    },
    {
        pergunta: "Em qual país foram realizados os Jogos Olímpicos de 2016?",
        opcoes: ["China", "Inglaterra", "Brasil", "Japão"],
        resposta: 2
    },
    {
        pergunta: "Qual é a moeda oficial do Japão?",
        opcoes: ["Won", "Yuan", "Iene", "Dólar"],
        resposta: 2
    },
    {
        pergunta: "Como é chamada a camada de gases que envolve a Terra?",
        opcoes: ["Litosfera", "Atmosfera", "Hidrosfera", "Biosfera"],
        resposta: 1
    },
    {
        pergunta: "Quais órgãos são responsáveis pela respiração humana?",
        opcoes: ["Rins", "Pulmões", "Estômago", "Fígado"],
        resposta: 1
    },
    {
        pergunta: "Qual destes números é primo?",
        opcoes: ["9", "15", "21", "13"],
        resposta: 3
    },
    {
        pergunta: "Em qual país fica Machu Picchu?",
        opcoes: ["México", "Peru", "Chile", "Colômbia"],
        resposta: 1
    },
    {
        pergunta: "Quem pintou a obra Guernica?",
        opcoes: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Van Gogh"],
        resposta: 1
    },
    {
        pergunta: "Qual é a capital da Argentina?",
        opcoes: ["Santiago", "Montevidéu", "Buenos Aires", "Lima"],
        resposta: 2
    },
    {
        pergunta: "Qual esporte utiliza raquete e peteca?",
        opcoes: ["Tênis", "Badminton", "Squash", "Tênis de mesa"],
        resposta: 1
    },
    {
        pergunta: "Qual é a unidade de medida da corrente elétrica?",
        opcoes: ["Volt", "Watt", "Ampere", "Ohm"],
        resposta: 2
    },
    {
        pergunta: "Qual é o maior oceano do planeta?",
        opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        resposta: 3
    },
    {
        pergunta: "Em qual país fica a cidade do Cairo?",
        opcoes: ["Marrocos", "Egito", "Turquia", "Arábia Saudita"],
        resposta: 1
    },
    {
        pergunta: "Qual planeta é conhecido por seus grandes anéis?",
        opcoes: ["Marte", "Saturno", "Mercúrio", "Terra"],
        resposta: 1
    },
    {
        pergunta: "Qual parte da planta absorve água do solo?",
        opcoes: ["Folha", "Flor", "Raiz", "Caule"],
        resposta: 2
    },
    {
        pergunta: "Quem compôs a Nona Sinfonia?",
        opcoes: ["Mozart", "Beethoven", "Bach", "Chopin"],
        resposta: 1
    },
    {
        pergunta: "Qual metal é líquido em temperatura ambiente?",
        opcoes: ["Ferro", "Mercúrio", "Alumínio", "Cobre"],
        resposta: 1
    },
    {
        pergunta: "Quantos jogadores cada time tem em campo no futebol?",
        opcoes: ["9", "10", "11", "12"],
        resposta: 2
    },
    {
        pergunta: "Qual continente possui o maior número de países?",
        opcoes: ["Ásia", "Europa", "África", "América"],
        resposta: 2
    },
    {
        pergunta: "Em qual país surgiu a pizza moderna?",
        opcoes: ["França", "Itália", "Grécia", "Estados Unidos"],
        resposta: 1
    },
    {
        pergunta: "Qual é a fórmula química do gás carbônico?",
        opcoes: ["CO2", "H2O", "O2", "CH4"],
        resposta: 0
    },
    {
        pergunta: "Quais órgãos filtram o sangue e produzem urina?",
        opcoes: ["Pulmões", "Rins", "Intestinos", "Pâncreas"],
        resposta: 1
    },
    {
        pergunta: "Em que ano caiu o Muro de Berlim?",
        opcoes: ["1975", "1989", "1995", "1961"],
        resposta: 1
    },
    {
        pergunta: "Qual é a capital de Portugal?",
        opcoes: ["Porto", "Coimbra", "Lisboa", "Braga"],
        resposta: 2
    },
    {
        pergunta: "Qual ave é tradicionalmente associada à paz?",
        opcoes: ["Águia", "Coruja", "Pomba", "Falcão"],
        resposta: 2
    },
    {
        pergunta: "Qual linguagem é utilizada para estruturar páginas da web?",
        opcoes: ["Python", "HTML", "C++", "SQL"],
        resposta: 1
    },
    {
        pergunta: "A velocidade da luz no vácuo é aproximadamente:",
        opcoes: ["30 mil km/s", "150 mil km/s", "300 mil km/s", "500 mil km/s"],
        resposta: 2
    },
    {
        pergunta: "Qual é o menor número primo?",
        opcoes: ["0", "1", "2", "3"],
        resposta: 2
    },
    {
        pergunta: "Em qual esporte Michael Jordan ficou famoso?",
        opcoes: ["Futebol", "Basquete", "Beisebol", "Tênis"],
        resposta: 1
    },
    {
        pergunta: "Qual estilo musical brasileiro tem raízes no Rio de Janeiro?",
        opcoes: ["Samba", "Fado", "Flamenco", "Tango"],
        resposta: 0
    },
    {
        pergunta: "Qual oceano fica entre a África e a Austrália?",
        opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        resposta: 2
    },
    {
        pergunta: "Em qual cidade fica o famoso relógio Big Ben?",
        opcoes: ["Paris", "Londres", "Roma", "Berlim"],
        resposta: 1
    },
    {
        pergunta: "Como é chamado o processo pelo qual as plantas produzem seu alimento?",
        opcoes: ["Respiração", "Fermentação", "Fotossíntese", "Digestão"],
        resposta: 2
    },
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        opcoes: ["Vênus", "Terra", "Marte", "Mercúrio"],
        resposta: 3
    },
    {
        pergunta: "Quantas cores são tradicionalmente representadas no arco-íris?",
        opcoes: ["5", "6", "7", "8"],
        resposta: 2
    },
    {
        pergunta: "Qual foi o primeiro satélite artificial lançado ao espaço?",
        opcoes: ["Apollo 11", "Sputnik 1", "Voyager 1", "Explorer 1"],
        resposta: 1
    }
];

function sortearPerguntas() {
    let copia = [...perguntas];
    copia.sort(() => Math.random() - 0.5);
    return copia.slice(0, 10);
}

let perguntasSorteadas = sortearPerguntas();
let perguntaAtual = 0;
let respostaSelecionada = null;
let pontuacao = 0;

let elementoPergunta = document.getElementById("pergunta");
let elementoResposta = document.getElementById("opcao-a");
let elementoResposta2 = document.getElementById("opcao-b");
let elementoResposta3 = document.getElementById("opcao-c");
let elementoResposta4 = document.getElementById("opcao-d");

let botaoConfirmar = document.getElementById("btn-confirmar");
let mensagemResposta = document.getElementById("mensagem-resposta");
let botaoProxima = document.getElementById("btn-proxima");

function carregarPergunta() {
    mensagemResposta.textContent = "";
    botaoProxima.style.display = "none";
    botaoProxima.textContent = "Próxima Pergunta";
    respostaSelecionada = null;

    numeroPergunta.textContent = `${perguntaAtual + 1} / ${perguntasSorteadas.length}`;

    elementoResposta.classList.remove("selecionada");
    elementoResposta2.classList.remove("selecionada");
    elementoResposta3.classList.remove("selecionada");
    elementoResposta4.classList.remove("selecionada");

    elementoPergunta.textContent = perguntasSorteadas[perguntaAtual].pergunta;
    elementoResposta.textContent = perguntasSorteadas[perguntaAtual].opcoes[0];
    elementoResposta2.textContent = perguntasSorteadas[perguntaAtual].opcoes[1];
    elementoResposta3.textContent = perguntasSorteadas[perguntaAtual].opcoes[2];
    elementoResposta4.textContent = perguntasSorteadas[perguntaAtual].opcoes[3];

    elementoResposta.disabled = false;
    elementoResposta2.disabled = false;
    elementoResposta3.disabled = false;
    elementoResposta4.disabled = false;

    botaoConfirmar.disabled = false;
}

elementoResposta.addEventListener("click", function() {
    respostaSelecionada = 0;
    elementoResposta.classList.remove("selecionada");
    elementoResposta2.classList.remove("selecionada");
    elementoResposta3.classList.remove("selecionada");
    elementoResposta4.classList.remove("selecionada");
    elementoResposta.classList.add("selecionada");
});

elementoResposta2.addEventListener("click", function() {
    respostaSelecionada = 1;
    elementoResposta2.classList.remove("selecionada");
    elementoResposta.classList.remove("selecionada");
    elementoResposta3.classList.remove("selecionada");
    elementoResposta4.classList.remove("selecionada");
    elementoResposta2.classList.add("selecionada");
});

elementoResposta3.addEventListener("click", function() {
    respostaSelecionada = 2;
    elementoResposta3.classList.remove("selecionada");
    elementoResposta.classList.remove("selecionada");
    elementoResposta2.classList.remove("selecionada");
    elementoResposta4.classList.remove("selecionada");
    elementoResposta3.classList.add("selecionada");
});

elementoResposta4.addEventListener("click", function() {
    respostaSelecionada = 3;
    elementoResposta4.classList.remove("selecionada");
    elementoResposta.classList.remove("selecionada");
    elementoResposta2.classList.remove("selecionada");
    elementoResposta3.classList.remove("selecionada");
    elementoResposta4.classList.add("selecionada");
});

botaoConfirmar.addEventListener("click", function() {
    if (respostaSelecionada == null) {
        mensagemResposta.textContent = "Selecione uma alternativa";
        mensagemResposta.style.color = "red";
        return;
    }

    if (respostaSelecionada == perguntasSorteadas[perguntaAtual].resposta) {
        mensagemResposta.textContent = "Resposta Correta";
        mensagemResposta.style.color = "green";
        pontuacao++;
        elementoPontuacao.textContent = pontuacao;
    } else {
        mensagemResposta.textContent = "Resposta Incorreta";
        mensagemResposta.style.color = "red";
    }

    elementoResposta.disabled = true;
    elementoResposta2.disabled = true;
    elementoResposta3.disabled = true;
    elementoResposta4.disabled = true;

    botaoConfirmar.disabled = true;

    if (perguntaAtual === perguntasSorteadas.length - 1) {
        botaoProxima.textContent = "Ver Resultado";
    }

    botaoProxima.style.display = "inline-block";
});

botaoProxima.addEventListener("click", function() {
    perguntaAtual++;

    if (perguntaAtual < perguntasSorteadas.length) {
        carregarPergunta();
    } else {
        finalizarQuiz();
    }
});

function finalizarQuiz() {
    telaQuiz.style.display = "none";
    telaResultado.style.display = "block";

    resultadoFinal.textContent = `${pontuacao} de ${perguntasSorteadas.length} pontos`;

    if (pontuacao >= 8) {
        mensagemFinal.textContent = "Excelente! Você domina conhecimentos gerais.";
    } else if (pontuacao >= 5) {
        mensagemFinal.textContent = "Bom trabalho! Você teve um desempenho sólido.";
    } else {
        mensagemFinal.textContent = "Continue praticando! Tente novamente para melhorar sua pontuação.";
    }
}

botaoReiniciar.addEventListener("click", function() {
    perguntaAtual = 0;
    pontuacao = 0;
    respostaSelecionada = null;
    perguntasSorteadas = sortearPerguntas();

    elementoPontuacao.textContent = pontuacao;
    telaResultado.style.display = "none";
    telaQuiz.style.display = "block";

    carregarPergunta();
});