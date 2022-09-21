let hours = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".second");

setInterval(()=> {
   let date = new Date();
   let sec = date.getSeconds()
   let hr = date.getHours();
   let min = date.getMinutes()
   hours.textContent = hr;
   minute.textContent = min;
   seconds.textContent = `${sec}`;
   if( sec%2 === 0){
      seconds.classList.add("red-color");
   }else{
      seconds.classList.remove("red-color");
   };
}, 0)
