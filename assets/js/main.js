
document.addEventListener("DOMContentLoaded", function () {

  // Tahun footer otomatis
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");

      const isOpen = mainNav.classList.contains("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Tutup menu setelah klik link
    mainNav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });

    });

  }

  // Form konsultasi ke WhatsApp
  const consultationForm = document.getElementById("consultationForm");

  if (consultationForm) {

    consultationForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const text =
        "Halo Akselerasi Consulting,%0A%0A" +
        "Saya ingin mengajukan konsultasi.%0A%0A" +
        "Nama: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Nomor HP: " + phone + "%0A" +
        "Layanan: " + service + "%0A" +
        "Pesan: " + message;

      const whatsappURL =
        "https://wa.me/62818950312?text=" +
        encodeURIComponent(
          "Halo Akselerasi Consulting,\n\n" +
          "Saya ingin mengajukan konsultasi.\n\n" +
          "Nama: " + name + "\n" +
          "Email: " + email + "\n" +
          "Nomor HP: " + phone + "\n" +
          "Layanan: " + service + "\n" +
          "Pesan: " + message
        );

      window.open(whatsappURL, "_blank");

    });

  }

});
