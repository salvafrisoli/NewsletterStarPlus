let slideIndex = 1;
showSlides(slideIndex,"mySlidesPopulares");
showSlides(slideIndex,"mySlidesRecientemente");
showSlides(slideIndex,"mySlidesRecomendaciones");

function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,className) {
  let i;
  let slides = document.getElementsByClassName(className);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}



document.getElementById('inputBuscador').addEventListener('keydown', cambioPaginaInput);


function cambioPaginaInput(event){

  // if(event.keyCode == 13){
  //   var input = document.getElementById('inputBuscador');
  //   debugger
  //   var datos = input.innerText;
  //   datos= input.textContent
  
  //   window.location = "./busquedas_personalizada.html" + `?buscar=${datos}`;
  // }
}


//enviar Datos por url
function onClick(){
  // debugger
  // var datos = "Hola&Soy&Julian"
  // //var remplaza = /+/gi; 
  // var url = window.location.href;

  // window.location.href = ./somos.html?param=${datos}
}


// obtener datos de url
// debugger;
// const param = (new URL(location)).searchParams;
// // if(param.get("buscar") != null){
// //   document.getElementById('inputBuscador').innerText(param.get("buscar"));
// // }
// console.log(param)
// console.log(param.get("buscar"))