document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("button_user")
    const content = document.getElementById("content");
    const welcome = document.getElementById("welcome");
    const footer = this.querySelector("footer")
    const hiddenContent = document.getElementById("hiddenContent");
    const pengertian = document.getElementById("pengertian");
    const gejala = document.getElementById("gejala");
    const konsultasi = document.getElementById("konsultasi");
    const nav = document.querySelector(".menu-nav");
    hiddenContent.style.display = "none"
    pengertian.style.filter = "blur(5px)"
    nav.style.filter = "blur(5px)"
    footer.style.display = "none"
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        // Jika nama pengguna sudah tersimpan, sembunyikan bagian sambutan dan tampilkan konten tersembunyi
        footer.style.display = "flex"
        welcome.style.display = "none";
        pengertian.style.filter = "none";
        nav.style.filter = "none";
        hiddenContent.style.display = "block";
        const greeting = document.getElementById("greetings");
        greeting.textContent = `Halo ${storedName}! Gimana kabar kamu?`;
        const isiPesan = document.querySelector(".isi-pesan");
        const pElement = document.createElement("p");
        pElement.textContent = `Jadi, ${storedName}! Mental health itu sangat penting tapi sering kali kita abaikan.`;
        isiPesan.appendChild(pElement);
            // Membuat elemen div baru dengan ID "line" dan mengatur kelasnya
        const lineCreate = document.createElement("div");
        lineCreate.id = "line";
        lineCreate.classList.add("line3");

            // Menambahkan elemen div "lineCreate" ke dalam elemen dengan class "isi-pesan"
        isiPesan.appendChild(lineCreate);
    }
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the user's name input
        const nameInput = document.querySelector("input[name='nama']").value;

       
        if (nameInput.trim() !== "") {
             localStorage.setItem("userName", nameInput);
            // Hide the welcome section
            welcome.style.display = "none";
            pengertian.style.filter = "none"
            nav.style.filter = "none"
            // Show the hidden content section
            hiddenContent.style.display = "block";

            
        }
        function displayMessage(message) {
            // Membuat elemen paragraf
            const paragraph = document.createElement("p");
            paragraph.textContent = message;
        }

    });
});
//id konsultasi
const formKonsultasi = document.getElementById("konsultasi-form")
const namaKonsultasiUser = document.getElementById("namaUser")
const keluhanUSer = document.getElementById("keluhanUser")
formKonsultasi.addEventListener("submit",function(event){
    event.preventDefault();
    namaKonsultasiUser.value = "";
    keluhanUSer.value = "";

});
