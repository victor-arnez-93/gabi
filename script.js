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


// Mostrar subtítulo depois do clique
document.getElementById("toqueParaComecar").addEventListener("click", () => {
    document.getElementById("subtituloInicial").classList.add("show");
});
document.getElementById("setaScroll").addEventListener("click", () => {
    document.getElementById("subtituloInicial").classList.add("show");
});


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
