function smooth() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
smooth()
function cursor() {
    var p1 = document.querySelector("#page1");
var crsr = document.querySelector("#cursor");
p1.addEventListener("mousemove", (dets) => {
    gsap.to(crsr, {
        x: dets.x,
        y:dets.y
    })
})
p1.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
        scale:1
    })
})
p1.addEventListener("mouseleave", () => {
    gsap.to(crsr,{
        scale:0
    })
})
}
cursor()
function page2animation() {
    gsap.from("#p2-txt-container h1", {
        y: 130,
        duration: 3,
        opacity:1,
        stagger: 0.8,
        delay:0.5,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 20%",
            scrub: 2
        },
    }, "a")
    gsap.from("#p2-top h3", {
        y: 40,
        duration: 1,
        opacity:1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 20%",
            scrub: 2
        },
    },"a")
}
page2animation()
function page3animation() {
    gsap.to(".p3-c1 h2,.p3-c2 h2", {
        y: 0,
        duration: 5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 60%",
            scrub:2
        },
    })
}
page3animation()
function page3BottomAnimation() {
    gsap.from("#p3-b-top h3", {
        y: 130,
        duration: 3,
        stagger: 0.8,
        delay:0.5,
        scrollTrigger: {
            trigger: "#p3-bottom",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 50%",
            scrub: 2
        },
    }, "a")
    gsap.from("#p3-txt-container h1", {
        y: 120,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#p3-bottom",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 50%",
            scrub: 2
        },
    },"a")
}
page3BottomAnimation()
function page4Animation() {
    gsap.to(".p4-number h2", {
        y: -290,
        duration: 6,
        stagger: 0.8,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top 15%",
            end: "top 10%",
            scrub: 2
        },
    }, "a");
}
page4Animation()
function page5Animation() {
    gsap.from("#p5-top h3", {
        y: 130,
        duration: 3,
        stagger: 0.8,
        delay:0.5,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 20%",
            scrub: 2
        },
    }, "a")
    gsap.from("#p5-txt-container h1", {
        y: 120,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 20%",
            scrub: 2
        },
    },"a")
}
page5Animation()
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
swiperAnimation()
function loadingAnimation() {
    var tl = gsap.timeline()
tl.from("#loader h3", {
    x: 60,
    opacity:0,
    duration: 1,
    stagger:0.1
})
tl.to("#loader h3", {
    x: -60,
    opacity:0,
    duration: 1,
    stagger:0.1
})

tl.to("#loader", {
    opacity:0
})
tl.from("#page-content h1 span", {
    y:130,
    duration: 1,
    stagger: 0.1,
    opacity:0
},"a")
tl.to("#loader", {
    display:"none"
},"a")
}
loadingAnimation()
function page7Animation() {
    var tl = gsap.timeline()
tl.from(".p7-top", {
    y: -90,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub:2
    },
},"a")
tl.from(".p7-mid", {
    y: -90,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub:2
    },
}, "a")
tl.from(".p7-bottom h1", {
    y:-130,
    duration: 1,
    opacity: 0,
    stagger:0.1,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        // markers: true,
        start: "top 20%",
        end: "top 10%",
        scrub:2
    },
},"a")
}
page7Animation()