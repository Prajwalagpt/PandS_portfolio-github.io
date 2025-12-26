gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true
  }
})
.to(".hero", { scale: 0.5 });
