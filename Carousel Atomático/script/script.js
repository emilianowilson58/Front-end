const carousel = document.getElementById("container");

const totalslide = 6; /* numeros de imagens */

const larguraSlide = 600;  /* largura das imagens */

let pagina = 0;

function proxima(){
    pagina++
    carousel.style.transition = "transform 0.6s ease-in-out";
    carousel.style.transform = `translateX(${-pagina * larguraSlide}px)`;

    /* para realizar o loop do carousel*/
    if (pagina === totalslide - 1) {
        setTimeout(() => {
            carousel.style.transition = "none";
            pagina = 0;
            carousel.style.transform = `translateX(0px)`
        }, 600);
    }
}

setInterval(proxima, 3000); /* tempo para o proximo slide */