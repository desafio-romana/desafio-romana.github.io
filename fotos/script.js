document.addEventListener("DOMContentLoaded", function() {
    var photosContainer = document.getElementById('apae-2019');
    for (let i = 0; i <= 62; i++) {
        // Cria um elemento de imagem
        var img = document.createElement('img');
        // Src e Alt da imagem
        img.src = "/src/img/photos/apae-2019/img-" + i.toString().padStart(3, "0") + ".webp";
        img.alt = "Foto Trilhão APAE 2019.";
        // Adiciona a imagem ao div
        photosContainer.appendChild(img);
    }
    
    var photosContainer = document.getElementById('mtb-fest-2023');
    for (let i = 0; i <= 81; i++) {
        var img = document.createElement('img');
        img.src = "/src/img/photos/mtb-fest-2023/img-" + i.toString().padStart(3, "0") + ".webp";
        img.alt = "Foto MTB Fest 2023.";
        photosContainer.appendChild(img);
    }
});