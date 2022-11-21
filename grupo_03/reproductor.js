function verAhora() {
    var video = document.getElementById("video");
    video.classList.add('reproductor')

    var imgSimpsons = document.getElementById("logo_simpsons");
    imgSimpsons.classList.add('hidden')
    
    var imgNavidad = document.getElementById("logo_navidad");
    imgNavidad.classList.add('hidden')

    var btn_verAhora = document.getElementById("ver_ahora");
    btn_verAhora.classList.add("hidden")

    var txt_reproductor = document.getElementById("text_reproductor");
    txt_reproductor.classList.add("hidden")

    var portada = document.getElementById("portada_reproductor");
    portada.style.backgroundImage = "url('./img/fondo_262626.jpg)')";
    portada.style.padding = 0;
}