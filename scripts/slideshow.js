let slideIndex = 1;

const plusSlides = (n) => showSlides(slideIndex += n);
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("header__slideshow--slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
const carousel = () => {
  let i;
  let x = document.getElementsByClassName("header__slideshow--slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 30000); 
}
showSlides(slideIndex)
carousel()
