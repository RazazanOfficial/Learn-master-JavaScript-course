const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

const animation = gsap.to(".box1", {
  scale: 2,
  duration: 2,
  yoyo: true,
  repeat: -1,
  backgroundColor: "pink",
  y: -50,
  borderRadius: 2,
});

play.addEventListener("click", () => animation.play());
pause.addEventListener("click", () => animation.pause());
restart.addEventListener("click", () => animation.restart());
