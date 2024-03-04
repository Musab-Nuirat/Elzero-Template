// Create Page Scroll Progress

let pageScroller = document.querySelector(".scroller");
let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 72) { // avoid scroller in the header
    pageScroller.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
  }
  else {
    pageScroller.style.width = 0;
  }
});

// Function to show content with fading effect
function showContent() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.content').classList.add('show'); // Add 'show' class
}

// Simulate loading time (1 second in this code)
setTimeout(showContent, 1000);

/* Countdown Timer */

// The End Of The Year Date
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
    let timeunits = document.querySelectorAll('.time .unit span:nth-child(2n-1)');
    timeunits.forEach((unit) => {
      unit.innerHTML = '00';
    });
  }
}, 1000);

/* Animate Width and Increase Numbers On Scrolling */
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
};
