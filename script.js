
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector("#horizontal");
const track = document.querySelector(".pin-wrap");

function initHorizontalScroll() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(track);

    const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
    };

    gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        },
    });
}

window.addEventListener("load", () => {
    initHorizontalScroll();
    ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
    initHorizontalScroll();
    ScrollTrigger.refresh();
});
