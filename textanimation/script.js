function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var clutter = "";

  var halfText = Math.floor(splittedText.length / 2);

  splittedText.forEach(function (elem, idx) {
    if (idx < halfText) {
      clutter += `<span class="first-half">${elem}</span>`;
    } else {
      clutter += `<span class="second-half">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .first-half", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.1,
  ease: "power4.out",
});

gsap.from("h1 .second-half", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: -0.1,
    ease: "power4.out",
  });
  