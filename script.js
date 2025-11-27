document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ELEMENTOS
    ================================= */
    const seta = document.getElementById("setaScroll");
    const toque = document.getElementById("toqueParaComecar");
    const musica = document.getElementById("musicaFundo");

    /* ================================
       FUNÇÃO — INICIAR MÚSICA + SCROLL
    ================================= */
    function iniciar() {

        // COMEÇAR MÚSICA COM FADE-IN
        musica.volume = 0;
        musica.play().catch(() => {});

musica.addEventListener("timeupdate", function () {
    // margem menor para loops curtos e cortes manuais
    const margem = 0.35; // ajuste fino para eliminar o “corte seco”

    if (this.currentTime >= this.duration - margem) {
        const continuar = this.currentTime - (this.duration - margem);
        this.currentTime = continuar;
        this.play();
    }
});


        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 0.35) {
                vol += 0.01;
                musica.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 150);

        // ROLAGEM SUAVE
        window.scrollTo({
            top: window.innerHeight * 1.0,
            behavior: "smooth"
        });
    }

    // CLIQUES
    seta.addEventListener("click", iniciar);
    toque.addEventListener("click", iniciar);

// Mostrar subtítulo após clique
const subtituloSecao = document.getElementById("subtituloSecao");

document.getElementById("toqueParaComecar").addEventListener("click", () => {
    subtituloSecao.classList.add("show");
});

document.getElementById("setaScroll").addEventListener("click", () => {
    subtituloSecao.classList.add("show");
});


// animação para o vídeo
const videos = document.querySelectorAll(".video-intimo");

function animarVideos() {
    videos.forEach(v => {
        const topo = v.getBoundingClientRect().top;
        if (topo < window.innerHeight * 0.85) {
            v.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animarVideos);
window.addEventListener("load", animarVideos);



    /* ================================
       ANIMAÇÃO SCROLL
    ================================= */

    const elementos = document.querySelectorAll(
        ".bloco p, .foto-intima img, .legenda, .final .maos, .final p"
    );

    function aparecer() {

        const limite = window.innerHeight * 1.15;

        elementos.forEach(el => {
            const topo = el.getBoundingClientRect().top;

            if (topo < limite) {
                el.classList.add("show");
            }
        });
    }

    // chamar no carregamento
    aparecer();
    window.addEventListener("scroll", aparecer);

});

/* CARD INTRO – FECHAR AO CLICAR */
const cardIntro = document.getElementById("cardIntro");
const btnComecar = document.getElementById("btnComecar");

btnComecar.addEventListener("click", () => {
    cardIntro.style.opacity = "0";
    cardIntro.style.transition = "0.8s ease";
    setTimeout(() => {
        cardIntro.style.display = "none";
    }, 800);
});
