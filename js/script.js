const burger = document.querySelector(".header-top__burger");
const menu = document.querySelector(".header-top__menu");
const body = document.querySelector("body");


const videoBlock = document.querySelector(".story__video");
const btn = document.querySelector(".story__play-btn");
const btnIcon = document.querySelector(".story__play-btn img");
const video = document.querySelector(".story__video-self");
const overlay = document.querySelector(".story__overlay");
const image = document.querySelector(".story__video img");

burger.addEventListener("click", function () {
   body.classList.toggle("lock");
   burger.classList.toggle("active");
   menu.classList.toggle("active");
});


videoBlock.addEventListener("click", function () {

   function blockLeave(e) {
      if (e.type === "mouseleave") {
         overlay.classList.add("hidden")
         btn.classList.add("none")
      }
      else {
         btn.classList.remove("none")
         overlay.classList.remove("hidden")
      }
   };

   if (video.paused) {
      videoBlock.onmouseleave = blockLeave;
      videoBlock.onmouseenter = blockLeave;

      btnIcon.src = "img/pause-icon.svg"

      image.classList.add("hidden");
      video.play()
   }

   else {
      btnIcon.src = "img/play.svg"

      video.pause()
      videoBlock.onmouseleave = null;
      videoBlock.onmouseenter = null;
   }
})
