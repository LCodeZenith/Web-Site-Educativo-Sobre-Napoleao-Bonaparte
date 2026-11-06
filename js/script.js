const texto = document.getElementById("centraliza");

texto.addEventListener("mouseenter", () => {
    texto.style.color = "red";
});

texto.addEventListener("mouseleave", () => {
    texto.style.color = "white";
});
