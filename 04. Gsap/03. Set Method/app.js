gsap.set(".box", {
  y: -100,
  scale: 2,
  opacity: 0,
  backgroundColor: "yellow",
});
gsap.to(".box", {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  backgroundColor: "white",
  duration: 2,
  yoyo: true,
  repeat: -1,
});
