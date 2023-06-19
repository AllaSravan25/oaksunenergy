window.scroll = "smooth"

/*-------------------------------------- Scroll effect -----------------------------------------------*/


window.addEventListener('DOMContentLoaded', function() {
// Your code here
// This code will run when the DOM is ready
  
  if(window.innerWidth > 900){
  const scrollB = document.getElementById('scroll-down');
  scrollB.addEventListener('click',()=>{
    window.scrollTo({
      top: 1070,
      behavior:"smooth"
    });
  })
  }

  else{
  const scrollB = document.getElementById('scroll-down');
  scrollB.addEventListener('click',()=>{
    window.scrollTo({
      top: 910,
      behavior:"smooth"
    });
  })
  }
});

/*------------------------------------------- END ----------------------------------------------*/



/*----------------------------------- Nav Bar for small devices----------------------------------------------------------*/

function openNav (){
  const navmenu = document.getElementById('nav-div')
  navmenu.style.right = "0"
}
function closeNav (){
  const navmenu = document.getElementById('nav-div')
  navmenu.style.right = "-300px"
}

/*---------------------------------------END---------------------------------------------------------*/



/* ---------------------------- redirtecting user to whatsapp --------------------------------------   */

function bookappointment() {
  window.location.href = "https://wa.link/1rzfog"
}

/*--------------------------------- END ----------------------------------------------------*/
function toggleAnswer(index) {
const answer = document.getElementById(`answer${index}`);
answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

function explore() {
var intro = document.getElementById('intro');
const content = document.getElementById('content');
intro.style.display = "none";
content.style.display = "block";
}


document.addEventListener('DOMContentLoaded', function() {
  function explore() {
    var intro = document.getElementById('intro');
    const content = document.getElementById('content');
    intro.style.display = "none";
    content.style.display = "inline-block";
  }
});
var video = document.getElementById("landingpagevideo");

function updateVideoSource() {
  var windowWidth = window.innerWidth;
  var video = document.getElementById("landingpagevideo");
  if (windowWidth <= 480) {
    video.src = "videos/landingpagevideo (mobile version).mp4";
  } else {
    video.src = "videos/landingpagevideo.mp4";
  }
}

function handleWindowResize() {
  
  var video = document.getElementById("landingpagevideo");
  if (window.innerWidth <= 480 && video.src !== "videos/landingpagevideo (mobile version).mp4") {
    video.src = "landingpagevideo (mobile version).mp4";
  } else if (window.innerWidth > 480 && video.src !== "landingpagevideo.mp4") {
    video.src = "videos/landingpagevideo.mp4";
  }
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("load", updateVideoSource);
window.onload = updateVideoSource;


function decreaseSizeForHeroContent() {
  var element = document.querySelector('.autoResize');
  var windowWidth = window.innerWidth;

  // Decrease the size of the element as the window width decreases
  var newSize = windowWidth / 10; // Adjust the division factor as per your requirement
  element.style.width = newSize + 'px';
  element.style.height = newSize + 'px';
}

// Call the decreaseSize function initially
decreaseSize();

// Listen for the resize event on the window and call decreaseSize
window.addEventListener('resize', decreaseSize);



/*------------------------------------------ GSAP SCROLL -----------------------------------------*/

