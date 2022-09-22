const allImg = document.querySelectorAll("img");
const allImgContainer = document.querySelector(".contain");
const displayImg = document.querySelector(".max");
const overlay = document.querySelector(".ov");
let i;

const changeImg = function(){
   allImg.forEach((mov) => {
      mov.src = `/img/lisa-${Math.trunc(Math.random()*7)+1}.jpg`
   });
};

function closeOverlay() {
   displayImg.classList.remove("co");
   overlay.classList.remove("overlay")
}

setInterval(changeImg, 50000);

allImgContainer.addEventListener("click", (e) => {
      i = e.target.src;
      if(e.target.hasAttribute("src")){
         displayImg.classList.add("co");
         displayImg.src = i;
         overlay.classList.add("overlay");
   };
});

overlay.addEventListener("click", (e) => {
   closeOverlay()
});

document.addEventListener("keydown", (e) => {
   if(e.key === "Escape"){
      closeOverlay()
   }
})