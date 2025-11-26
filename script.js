// Aguarda todo o DOM carregar antes de rodar
document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ANIMAÇÃO DE ESCRITA NO TÍTULO
    ================================= */
    const titulo = "Eu preciso te dizer...";
    const h1 = document.getElementById("tituloDigitado");
    let i = 0;

    function typeWriter() {
        if (i < titulo.length) {
            h1.textContent += titulo.charAt(i);
            i++;
            setTimeout(typeWriter, 90); // velocidade suave e emocional
        } else {
            h1.style.borderRight = "none"; // remove cursor
        }
    }

    typeWriter();


    /* ================================
       SETA — SCROLL SUAVE
    ================================= */
    const seta = document.getElementById("setaScroll");
seta.addEventListener("click", () => {

    // ROLAR
    window.scrollTo({
        top: window.innerHeight * 1.0,
        behavior: "smooth"
    });

    // TOCAR MÚSICA
    const musica = document.getElementById("musicaFundo");
    musica.volume = 0.35;   // volume agradável
    musica.play().catch(() => {}); // evita erro no mobile
});



    /* ================================
       ANIMAÇÃO DE APARECER AO ROLAR
    ================================= */
    const elementos = document.querySelectorAll(
        ".bloco p, .foto-intima img, .legenda, .final .maos, .final p"
    );

    function aparecer() {

        // limite ajustado para pegar até o final da página
        const limite = window.innerHeight * 1.15;

        elementos.forEach(el => {
            const topo = el.getBoundingClientRect().top;

            if (topo < limite) {
                el.classList.add("show");
            }
        });
    }

    // Executa no carregamento
    aparecer();

    // Executa ao rolar a página
    window.addEventListener("scroll", aparecer);

});
