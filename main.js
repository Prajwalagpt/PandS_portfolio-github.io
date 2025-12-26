gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true
  },
  scale: 0.8
});
