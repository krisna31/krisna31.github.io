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