document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.add("hidden"));

    document.querySelector('a[href="#rhum"]').addEventListener("click", () => showSection("rhum"));
    document.querySelector('a[href="#tshirts"]').addEventListener("click", () => showSection("tshirts"));
    document.querySelector('a[href="#contact"]').addEventListener("click", () => showSection("contact"));
});

function showSection(id) {
    document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function addToCart(item) {
    const image = document.querySelector(`img[data-nom="${item}"]`);
    if (image) {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "pointer";

        const bigImg = document.createElement("img");
        bigImg.src = image.src;
        bigImg.style.maxWidth = "90%";
        bigImg.style.maxHeight = "90%";
        bigImg.style.border = "5px solid #FFA500";
        bigImg.style.borderRadius = "10px";

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => document.body.removeChild(overlay));
    } else {
        alert(item + " ajouté au panier !");
    }
}

