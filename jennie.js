// ============================================
// VisãoAcolhedora
// script.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // BOTÃO DO GUIA
    // =============================

    const botao = document.getElementById("btn-download");

    if (botao) {

        botao.addEventListener("click", () => {

            alert(
                "💖 Obrigado pelo interesse!\n\nEm uma versão completa do site, o Guia Digital será baixado automaticamente."
            );

        });

    }

    // =============================
    // ANIMAÇÃO AO ROLAR A PÁGINA
    // =============================

    const elementos = document.querySelectorAll(
        ".card, .recurso, .causa, .cta"
    );

    const aparecer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "0.8s ease";

            }

        });

    }, {

        threshold: 0.2

    });

    elementos.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";

        aparecer.observe(item);

    });

    // =============================
    // MENU ATIVO
    // =============================

    const secoes = document.querySelectorAll("section");
    const links = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {

        let atual = "";

        secoes.forEach((secao) => {

            const topo = secao.offsetTop - 120;
            const altura = secao.clientHeight;

            if (window.scrollY >= topo && window.scrollY < topo + altura) {

                atual = secao.getAttribute("id");

            }

        });

        links.forEach((link) => {

            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + atual) {

                link.classList.add("ativo");

            }

        });

    });

    // =============================
    // BOTÃO VOLTAR AO TOPO
    // =============================

    const voltarTopo = document.createElement("button");

    voltarTopo.innerHTML = "⬆";

    voltarTopo.id = "voltar-topo";

    document.body.appendChild(voltarTopo);

    voltarTopo.style.position = "fixed";
    voltarTopo.style.bottom = "25px";
    voltarTopo.style.right = "25px";
    voltarTopo.style.width = "55px";
    voltarTopo.style.height = "55px";
    voltarTopo.style.border = "none";
    voltarTopo.style.borderRadius = "50%";
    voltarTopo.style.background = "#d10068";
    voltarTopo.style.color = "#fff";
    voltarTopo.style.fontSize = "24px";
    voltarTopo.style.cursor = "pointer";
    voltarTopo.style.display = "none";
    voltarTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    voltarTopo.style.zIndex = "999";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            voltarTopo.style.display = "block";

        } else {

            voltarTopo.style.display = "none";

        }

    });

    voltarTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});