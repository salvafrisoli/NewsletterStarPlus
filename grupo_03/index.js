let slideIndex = 1;
showSlides(slideIndex,"mySlides");

function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,className) {
  let i;
  let slides = document.getElementsByClassName(className);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
}
// Comentario prueba