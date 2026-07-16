const tombolMode = document.getElementById("tombol-mode");
const body = document.body;

tombolMode.addEventListener("click", function () {

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {

        tombolMode.textContent = "Mode Terang";
        alert("Mode Gelap Berhasil Diaktifkan");

    } else {

        tombolMode.textContent = "Mode Gelap";
        alert("Mode Terang Berhasil Diaktifkan");

    }

});