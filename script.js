const menuIcon = document.querySelector(".fa-bars-staggered");
const menu = document.querySelector(".menu_link");

menuIcon.addEventListener("click", () => {
  if(window.innerWidth <= 480){    // sirf mobile screen
    if(menu.style.display === "block"){
      menu.style.display = "none";
      
    } else {
      menu.style.display = "block";
      
    }
  }
});

let counters = document.querySelectorAll('.count_num');
let targets = [10, 148, 48, 7];

// Function to start counting for all counters
function startCounting() {
    counters.forEach((counter, index) => {
        let target = targets[index];
        let current = 0;

        let interval = setInterval(() => {
            current++;
            counter.innerText = current;

            if (current >= target) {
                clearInterval(interval);
            }
        }, 1);
    });
}

// Intersection Observer setup
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();         // section visible → start counting
            observer.disconnect();   // ek baar count start ho gaya, observer stop
        }
    });
}, { threshold: 0.5 }); // 50% section visible hone par trigger

// Observe the first counter's parent section
let section = document.querySelector('.counter_section');
observer.observe(section);