/* =========================================================
   NEURA — JAVASCRIPT
========================================================= */


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = `${progress}%`;

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroVisual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 800) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 25;

    const y =
        (event.clientY / window.innerHeight - .5) * 25;

    heroVisual.style.transform =
        `translateY(-50%) translate(${x}px, ${y}px)`;

});


/* =========================================================
   GENERATE HERO NODES
========================================================= */

const heroNodes = document.querySelector(".hero-nodes");

for (let i = 0; i < 35; i++) {

    const node = document.createElement("div");

    node.className = "hero-node";

    const angle =
        Math.random() * Math.PI * 2;

    const radius =
        150 + Math.random() * 140;

    const x =
        50 + Math.cos(angle) * radius / 6;

    const y =
        50 + Math.sin(angle) * radius / 6;

    node.style.left = `${x}%`;
    node.style.top = `${y}%`;

    node.style.animationDelay =
        `${Math.random() * 3}s`;

    heroNodes.appendChild(node);

}


/* =========================================================
   BLOCK WORLD
========================================================= */

const blockWorld =
    document.getElementById("blockWorld");

const blocks = [];

const gridSize = 8;

for (let x = 0; x < gridSize; x++) {

    for (let y = 0; y < gridSize; y++) {

        for (let z = 0; z < 3; z++) {

            const cube =
                document.createElement("div");

            cube.className = "block-cube";

            const spacing = 48;

            const centerX =
                (gridSize - 1) / 2;

            const centerY =
                (gridSize - 1) / 2;

            const centerZ = 1;

            const posX =
                (x - centerX) * spacing;

            const posY =
                (y - centerY) * spacing;

            const posZ =
                (z - centerZ) * spacing;

            cube.style.transform =
                `translate3d(
                    ${posX}px,
                    ${posY}px,
                    ${posZ}px
                )`;

            cube.dataset.x = posX;
            cube.dataset.y = posY;
            cube.dataset.z = posZ;

            blockWorld.appendChild(cube);

            blocks.push(cube);

        }

    }

}


/* =========================================================
   BLOCK DISASSEMBLY ON SCROLL
========================================================= */

function updateBlocks() {

    const section =
        document.querySelector(".block-section");

    const rect =
        section.getBoundingClientRect();

    const viewport =
        window.innerHeight;

    const progress =
        Math.max(
            0,
            Math.min(
                1,
                (viewport - rect.top) /
                (viewport + rect.height)
            )
        );

    blocks.forEach((cube, index) => {

        const x = Number(cube.dataset.x);
        const y = Number(cube.dataset.y);
        const z = Number(cube.dataset.z);

        const distance =
            Math.sqrt(x * x + y * y);

        const factor =
            progress * (0.5 + distance / 220);

        const direction =
            index % 2 === 0 ? 1 : -1;

        const moveX =
            x * factor * direction;

        const moveY =
            y * factor * direction;

        const moveZ =
            z * factor * 3;

        const rotate =
            progress * 100 * direction;

        cube.style.transform =
            `translate3d(
                ${x + moveX}px,
                ${y + moveY}px,
                ${z + moveZ}px
            )
            rotateX(${rotate}deg)
            rotateY(${rotate}deg)`;

        cube.style.opacity =
            1 - progress * .75;

    });

}

window.addEventListener("scroll", updateBlocks);

updateBlocks();


/* =========================================================
   FINAL FLOATING BLOCKS
========================================================= */

const finalBlocks =
    document.getElementById("finalBlocks");

for (let i = 0; i < 45; i++) {

    const cube =
        document.createElement("div");

    cube.className = "final-cube";

    cube.style.left =
        `${Math.random() * 100}%`;

    cube.style.top =
        `${Math.random() * 100}%`;

    cube.style.animationDelay =
        `${Math.random() * 6}s`;

    cube.style.animationDuration =
        `${4 + Math.random() * 5}s`;

    finalBlocks.appendChild(cube);

}


/* =========================================================
   PROCESS INTERACTION
========================================================= */

const processData = {

    dados: {
        number: "01",
        title: "DADOS",
        text:
            "A inteligência artificial recebe grandes quantidades de informações para encontrar padrões e relações."
    },

    aprendizado: {
        number: "02",
        title: "APRENDIZADO",
        text:
            "Durante o treinamento, o sistema analisa exemplos e ajusta seus parâmetros para reduzir seus erros."
    },

    modelo: {
        number: "03",
        title: "MODELO",
        text:
            "Depois do treinamento, o modelo consegue utilizar os padrões aprendidos para analisar novas informações."
    },

    resposta: {
        number: "04",
        title: "RESPOSTA",
        text:
            "Por fim, o sistema transforma todo esse processamento em uma previsão, classificação, texto, imagem ou outra resposta."
    }

};

const processButtons =
    document.querySelectorAll(".process-button");

const processIcon =
    document.getElementById("processIcon");

const processTitle =
    document.getElementById("processTitle");

const processText =
    document.getElementById("processText");


processButtons.forEach(button => {

    button.addEventListener("click", () => {

        const step =
            button.dataset.step;

        const data =
            processData[step];

        processButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        processIcon.textContent =
            data.number;

        processTitle.textContent =
            data.title;

        processText.textContent =
            data.text;

    });

});


/* =========================================================
   PROCESS PARTICLES
========================================================= */

const processParticles =
    document.querySelector(".process-particles");

for (let i = 0; i < 30; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "process-particle";

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${Math.random() * 100}%`;

    particle.style.opacity =
        Math.random();

    processParticles.appendChild(particle);

}


/* =========================================================
   HISTORY
========================================================= */

const historyData = {

    "1950": {
        year: "1950",
        label: "O começo da ideia",
        title: "A pergunta que mudou tudo",
        text:
            "Alan Turing publicou ideias que ajudaram a estabelecer uma das perguntas fundamentais sobre máquinas e inteligência."
    },

    "1956": {
        year: "1956",
        label: "O nascimento do campo",
        title: "A Inteligência Artificial ganha nome",
        text:
            "A conferência de Dartmouth ajudou a consolidar o termo Inteligência Artificial como uma área de pesquisa."
    },

    "1980": {
        year: "1980",
        label: "Sistemas especialistas",
        title: "Máquinas começam a tomar decisões",
        text:
            "Sistemas especialistas passaram a utilizar regras e conhecimentos específicos para resolver problemas."
    },

    "2012": {
        year: "2012",
        label: "Revolução das redes neurais",
        title: "Deep Learning muda o jogo",
        text:
            "Redes neurais profundas começaram a alcançar resultados impressionantes em tarefas de visão computacional."
    },

    "2022": {
        year: "2022",
        label: "IA generativa",
        title: "A IA chega ao grande público",
        text:
            "Ferramentas generativas tornaram a criação de textos, imagens, códigos e outros conteúdos acessível a milhões de pessoas."
    }

};

const yearButtons =
    document.querySelectorAll(".year");

const historyYear =
    document.getElementById("historyYear");

const historyLabel =
    document.getElementById("historyLabel");

const historyTitle =
    document.getElementById("historyTitle");

const historyText =
    document.getElementById("historyText");


yearButtons.forEach(button => {

    button.addEventListener("click", () => {

        const year =
            button.dataset.year;

        const data =
            historyData[year];

        yearButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        historyYear.textContent =
            data.year;

        historyLabel.textContent =
            data.label;

        historyTitle.textContent =
            data.title;

        historyText.textContent =
            data.text;

    });

});


/* =========================================================
   3D CARD TILT
========================================================= */

document.querySelectorAll(".tilt").forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -6;

        const rotateY =
            ((x - centerX) / centerX) * 6;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   ASSISTANT
========================================================= */

const assistantPanel =
    document.querySelector(".assistant-panel");

const assistantOverlay =
    document.querySelector(".assistant-overlay");

const assistantClose =
    document.querySelector(".assistant-close");

const assistantFloating =
    document.querySelector(".assistant-floating");

const assistantButtons =
    document.querySelectorAll(".assistant-open");

const assistantMessages =
    document.getElementById("assistantMessages");

const assistantInput =
    document.getElementById("assistantInput");

const sendQuestion =
    document.getElementById("sendQuestion");


function openAssistant() {

    assistantPanel.classList.add("active");

    assistantOverlay.classList.add("active");

    assistantFloating.style.display =
        "none";

}


function closeAssistant() {

    assistantPanel.classList.remove("active");

    assistantOverlay.classList.remove("active");

    assistantFloating.style.display =
        "block";

}


assistantButtons.forEach(button => {

    button.addEventListener("click", openAssistant);

});

assistantFloating.addEventListener(
    "click",
    openAssistant
);

assistantClose.addEventListener(
    "click",
    closeAssistant
);

assistantOverlay.addEventListener(
    "click",
    closeAssistant
);


/* =========================================================
   LOCAL AI ANSWERS
========================================================= */

const answers = {

    "o que é ia":
        "Inteligência Artificial é uma área da computação que desenvolve sistemas capazes de realizar tarefas que normalmente exigiriam algum tipo de inteligência humana.",

    "como a ia funciona":
        "De forma simplificada, uma IA recebe dados, aprende padrões durante o treinamento e depois utiliza esses padrões para produzir uma resposta.",

    "como funciona":
        "Uma IA normalmente passa por três grandes etapas: recebe dados, aprende padrões durante o treinamento e utiliza o modelo treinado para analisar novas informações.",

    "como uma ia aprende":
        "Ela aprende durante o treinamento analisando muitos exemplos. O algoritmo ajusta seus parâmetros para diminuir os erros e reconhecer padrões.",

    "quem criou a ia":
        "A IA não foi criada por uma única pessoa. Muitos pesquisadores contribuíram para sua evolução. Em 1956, a conferência de Dartmouth ajudou a estabelecer oficialmente o campo da Inteligência Artificial.",

    "o que é machine learning":
        "Machine Learning, ou aprendizado de máquina, é uma área da IA em que algoritmos aprendem padrões a partir de dados.",

    "o que é deep learning":
        "Deep Learning é uma técnica baseada em redes neurais com várias camadas, muito utilizada em visão computacional, reconhecimento de voz e IA generativa.",

    "o que é ia generativa":
        "IA Generativa é capaz de produzir novos conteúdos, como textos, imagens, músicas, vídeos e códigos, a partir dos padrões aprendidos durante o treinamento.",

    "como usar ia":
        "Você pode utilizar IA para estudar, pesquisar ideias, programar, organizar informações, criar conteúdos e automatizar tarefas. É importante verificar informações importantes.",

    "como usar":
        "A IA pode ajudar em estudos, programação, criatividade, produtividade e pesquisa. Use-a como uma ferramenta para ampliar suas próprias ideias.",

    "quais são os tipos de ia":
        "Entre as tecnologias mais conhecidas estão Machine Learning, Deep Learning, IA Generativa, Visão Computacional e Processamento de Linguagem Natural.",

    "a ia pensa":
        "A IA não pensa da mesma forma que uma pessoa. Ela processa informações utilizando modelos matemáticos e padrões aprendidos a partir de dados.",

    "futuro da ia":
        "A IA provavelmente continuará sendo integrada a diversas áreas, como educação, ciência, medicina, programação, indústria e criação de conteúdo. Seu desenvolvimento também exige atenção à segurança e ao uso responsável."

};


function normalize(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[?!.,;:]/g, "")
        .trim();

}


function findAnswer(question) {

    const normalizedQuestion =
        normalize(question);

    const exactKey =
        Object.keys(answers).find(
            key => normalize(key) === normalizedQuestion
        );

    if (exactKey) {

        return answers[exactKey];

    }


    const rules = [

        {
            words: ["o que", "ia"],
            answer: answers["o que é ia"]
        },

        {
            words: ["como", "funciona", "ia"],
            answer: answers["como a ia funciona"]
        },

        {
            words: ["ia", "aprende"],
            answer: answers["como uma ia aprende"]
        },

        {
            words: ["machine", "learning"],
            answer: answers["o que é machine learning"]
        },

        {
            words: ["deep", "learning"],
            answer: answers["o que é deep learning"]
        },

        {
            words: ["generativa"],
            answer: answers["o que é ia generativa"]
        },

        {
            words: ["usar", "ia"],
            answer: answers["como usar ia"]
        },

        {
            words: ["tipos", "ia"],
            answer: answers["quais são os tipos de ia"]
        },

        {
            words: ["futuro", "ia"],
            answer: answers["futuro da ia"]
        }

    ];


    for (const rule of rules) {

        const matches =
            rule.words.every(
                word => normalizedQuestion.includes(word)
            );

        if (matches) {

            return rule.answer;

        }

    }


    return "Ainda não tenho uma resposta específica para essa pergunta. Tente perguntar sobre o que é IA, como ela funciona, como uma IA aprende, Machine Learning, Deep Learning ou IA Generativa.";

}


/* =========================================================
   CHAT FUNCTIONS
========================================================= */

function addMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        `message ${type}`;

    message.textContent =
        text;

    assistantMessages.appendChild(message);

    assistantMessages.scrollTop =
        assistantMessages.scrollHeight;

}


function showTyping() {

    const typing =
        document.createElement("div");

    typing.className =
        "message bot typing";

    typing.textContent =
        "NEURA está pensando...";

    assistantMessages.appendChild(typing);

    assistantMessages.scrollTop =
        assistantMessages.scrollHeight;

    return typing;

}


function sendUserQuestion(question) {

    if (!question.trim()) return;

    addMessage(question, "user");

    assistantInput.value = "";

    const typing =
        showTyping();

    setTimeout(() => {

        typing.remove();

        const answer =
            findAnswer(question);

        addMessage(answer, "bot");

    }, 650);

}


sendQuestion.addEventListener(
    "click",
    () => {

        sendUserQuestion(
            assistantInput.value
        );

    }
);


assistantInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            sendUserQuestion(
                assistantInput.value
            );

        }

    }
);


/* =========================================================
   QUICK QUESTIONS
========================================================= */

document.querySelectorAll(
    ".quick-questions button"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const question =
                button.dataset.question;

            sendUserQuestion(question);

        }
    );

});


/* =========================================================
   BLOCK WORLD MOUSE INTERACTION
========================================================= */

document.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const rect =
        blockWorld.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    const rotateX =
        (event.clientY - centerY) / 60;

    const rotateY =
        (event.clientX - centerX) / 60;

    blockWorld.style.transform =
        `
        translateY(-50%)
        rotateX(${55 + rotateX * .15}deg)
        rotateZ(${-25 + rotateY * .15}deg)
        `;

});


/* =========================================================
   INITIALIZATION
========================================================= */

console.log(
    "NEURA iniciado com sucesso."
);