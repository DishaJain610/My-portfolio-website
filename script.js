var typed = new Typed('#typed', {
    strings: [ 'Web Developer.','UI/UX Designer.','Frontend Developer.'],
    typeSpeed: 60,
    backSpeed: 35,
    loop: true
  });
  var tl = gsap.timeline();


 tl.from(".text", {
 opacity: 0,
 y:50,
 duration: 1,
 ease: "power3.out"
  });
 tl.from(".img img",{
  opacity: 0,
 y:50,
 duration: 1,
 ease: "power3.out"
 })
 tl.from("nav li",{
  opacity: 0,
  y:50,
 duration: 1,
 delay:-2,
 ease: "power3.out"
 })



// Tab functionality
function opentab(tabname, event) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%", // when the top of #about hits 80% of viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from("#about .about-col-1 img", {
  scrollTrigger: {
    trigger: "#about .about-col-1 img",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power3.out"
});

gsap.from("#about .subtitle", {
  scrollTrigger: {
    trigger: "#about .subtitle",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from("#about .about-col-2 p", {
  scrollTrigger: {
    trigger: "#about .about-col-2 p",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.4,
  ease: "power3.out"
});

gsap.from("#about .tab-section", {
  scrollTrigger: {
    trigger: "#about .tab-section",
    start: "top 90%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.6,
  ease: "power3.out"
});

// --- GSAP + ScrollTrigger Animations for Service Section (Reversible) ---
gsap.from("#service h1", {
  scrollTrigger: {
    trigger: "#service h1",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

gsap.from("#service .card", {
  scrollTrigger: {
    trigger: "#service .cards",
    start: "top 90%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

// --- GSAP + ScrollTrigger Animations for Projects Section (Reversible) ---
gsap.from("#projects .sub-title", {
  scrollTrigger: {
    trigger: "#projects .sub-title",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".project-list", {
  scrollTrigger: {
    trigger: ".project-list",
    start: "top 90%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  stagger:1,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

// --- GSAP + ScrollTrigger Animations for Contact Section (Reversible) ---
gsap.from("#connect .left", {
  scrollTrigger: {
    trigger: "#connect .left",
    start: "top 90%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power3.out"
});

gsap.from("#connect .right", {
  scrollTrigger: {
    trigger: "#connect .right",
    start: "top 90%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  x: 60,
  duration: 1,
  ease: "power3.out"
});