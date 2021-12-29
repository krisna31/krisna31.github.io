AOS.init({
  once: true
});

VanillaTilt.init(document.querySelectorAll(".kartu"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": .5,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  gyroscope: true,
  scale: 1.1,
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyb47hLHXobCWzG0Ub8VeLb4ff8rHO6YXRLYg2mjNfBEx7hQJUFA8_6BuXY8oz3G8kozA/exec'
const form = document.forms['krisna-contact-form'];
const myKirim = document.getElementById("myKirim");
const myLoading = document.getElementById("myLoading");
const myAlert = document.getElementById("myAlert");
const myError = document.getElementById("myError")

form.addEventListener('submit', e => {
  e.preventDefault()
  // tombol kirim hilang dan loading muncul
  myLoading.classList.toggle('d-none');
  myKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      myLoading.classList.toggle("d-none");
      myKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      // console.log('Success!', response)
    })
    .catch(error => {
      myError.classList.toggle("d-none")
      myLoading.classList.toggle("d-none");
      myKirim.classList.toggle("d-none");
      form.reset();
      // console.error('Error!', error.message)
    })
})