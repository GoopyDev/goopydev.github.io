const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imagesList = gallery.querySelectorAll("img");
let currentImageIndex = 0;
console.log(gallery);
console.log(prevBtn);
console.log(nextBtn);
console.log(imagesList);

function showImage(index) {
  imagesList.forEach((image, idx) => {
    if (idx === index) {
      image.style.transform = "translateX(0)";
    } else {
      image.style.transform = "translateX(150%)";
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + imagesList.length) % imagesList.length;
  showImage(currentImageIndex);
  console.log("Cambié a indice: ", currentImageIndex);
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imagesList.length;
  showImage(currentImageIndex);
  console.log("Cambié a indice: ", currentImageIndex);
});

// Show the first image initially
showImage(currentImageIndex);
