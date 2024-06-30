var t1 = gsap.timeline();
t1.to("#full", {
  right: 0,
  duration: 0.4,
})
  .from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
  })
  .from("#full i", {
    opacity: 0,
  })
  .pause();

var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

menu.addEventListener("click", () => {
  t1.play();
});

close.addEventListener("click", () => {
  t1.reverse();
});
