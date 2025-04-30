document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });

        img.addEventListener("click", () => {
            alert("¡Esta imagen es parte del proyecto de igualdad de género!");
        });
    });
});
