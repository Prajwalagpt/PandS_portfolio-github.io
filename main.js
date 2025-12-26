gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector(".hero");
const content = document.querySelector(".content");

const heroHeight = hero.offsetHeight;
const contentHeight = content.offsetHeight;

gsap.timeline({
  scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: `+=${heroHeight + contentHeight}`,
    scrub: true,
    pin: true,
  }
})
.to(".hero h2", { scale: 0.5, opacity: 0 })
.to(".hero p", { y: -100, opacity: 0 }, "<");
