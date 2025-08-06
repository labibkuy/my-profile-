function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form interaktif
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      msg.textContent = "Terima kasih, pesan Anda sudah terkirim!";
      form.reset();
      setTimeout(() => { msg.textContent = ""; }, 4000);
    });
  }
});