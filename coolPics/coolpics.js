document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("hide");
    });

    function handleResize() {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove("hide");
        } else {
            navLinks.classList.add("hide");
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    document.querySelector(".gallery").addEventListener("click", viewHandler);
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.src.split("-")[0] + "-full.jpeg";
        const altText = event.target.alt;
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));

        // Add event listener to close the viewer
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}
