function animateTitle() {
    const title = document.getElementById("title");

    title.style.transition = "all 0.6s ease-in-out";
    title.style.transform = "translateY(-20px) scale(1.3)";
    title.style.color = "#ffcc00";

    setTimeout(() => {
        title.style.transform = "translateY(0) scale(1)";
        title.style.color = "#00ffcc";
    }, 600);
}
