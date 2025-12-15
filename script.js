// Hero animation
gsap.from(".hero h1", {
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
});

gsap.from(".btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 0.8
});

// Section animations
gsap.from(".about", {
    scrollTrigger: ".about",
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".skills", {
    scrollTrigger: ".skills",
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".projects", {
    scrollTrigger: ".projects",
    opacity: 0,
    y: 50,
    duration: 1
});
