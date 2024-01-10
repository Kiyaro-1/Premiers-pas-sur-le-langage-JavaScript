//Slideshow images declaration
const slides = document.querySelectorAll(".banner-img"); // reference images
let currentIndex = 0;
showSlide(currentIndex); // Display the first slide at first
//Slideshow Images texts declaration
const slidetexts = document.getElementsByClassName("slide-title"); // reference texts
let textIndex = 0;
showtexts(textIndex);
//Slideshow scroll function
nextbtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  textIndex = (textIndex + 1) % slidetexts.length;
  showtexts(textIndex);
});
//Slideshow backward scroll function
prevbtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  textIndex = (textIndex - 1 + slidetexts.length) % slidetexts.length;
  showtexts(textIndex);
});
//Slideshow dots Display function
function showSlide(index) {
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" selected", "");
  }
  dots[currentIndex].className += " selected";
  slides.forEach((item) => {
    item.style.display = "none"; // Hide all slideshow items
  });
  slides[index].style.display = "block"; //  Display  slide at the specified index
}
//Images texts Display fucntion
function showtexts(index) {
  for (let i = 0; i < slidetexts.length; i++) {
    slidetexts[i].style.display = "none";
  }
  slidetexts[index].style.display = "block";
}
