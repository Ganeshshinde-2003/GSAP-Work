// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     rotate: 720,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "bottom 40%",
//         scrub: 5, //no for smooth ness
//         pin: true,
//     }
// })
// gsap.from("#page1 #box", {
//     scale:0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// });

// gsap.from("#page2 #box", {
//     scale:0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         start: "top 60%",
//         markers: true,
//     }
// });

// gsap.from("#page2 h1", {
//     opacity: 0,
//     x:500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })
// gsap.from("#page2 p", {
//     opacity: 0,
//     x:-500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 p",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 2,
    }
})