const nxtButton = document.querySelector(".nxt-button");
const galleryContainer = document.querySelector(".gallery-container");

nxtButton.addEventListener("click", () => {
    galleryContainer.scrollBy({
        left: 300,
        behavior: "smooth",
    });
});