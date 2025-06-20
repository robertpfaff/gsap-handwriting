document.addEventListener("DOMContentLoaded", (event) => {
  console.clear();

gsap.registerPlugin(DrawSVGPlugin, CustomEase, CustomBounce, GSDevTools)

const tl = gsap.timeline({});
  
tl.from(".st0", {
  duration: .25,
  drawSVG: 0, 
  stagger: .25,
});


GSDevTools.create({animation: tl});
  
  
});
