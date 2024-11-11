const images = [
    "compressed dir files.png",
    "t2 instances.png",
    "library 222.jpg",
    "wallp.jpg"
];

let currentIndex = 0;
const currentImage = document.getElementById("current-image");
const thumbnails = document.querySelectorAll(".thumbnail");

function updateGallery() {
    currentImage.src = images[currentIndex];
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
    });
}

function setImage(index) {
    currentIndex = index;
    updateGallery();
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

// Initialize gallery
updateGallery();