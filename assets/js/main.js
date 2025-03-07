document.addEventListener("DOMContentLoaded", () => {


  const elements = document.querySelectorAll(".aos-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => observer.observe(element));
});
  
  // for mobile sidebar toggle
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuBtn = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-sidebar-btn");

    // Toggle menu on button click
    menuBtn.addEventListener("click", function () {
        header.classList.toggle("show");
        document.body.classList.toggle("no-scroll");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("header") && !event.target.closest(".mobile-menu")) {
            if (header.classList.contains("show")) {
                header.classList.remove("show");
                document.body.classList.remove("no-scroll");
            }
        }
    });

    // Close menu via close button
    closeBtn.addEventListener("click", function () {
        header.classList.remove("show");
        document.body.classList.remove("no-scroll");
    });
});

  
// for marque behaibhiour

// JavaScript to clone the items for infinite scroll effect
document.addEventListener("DOMContentLoaded", function() {
  const partnerItems = document.querySelector('.partner-items');
  const items = document.querySelectorAll('.partner-item');
  
  // Clone the partner items to create an infinite loop
  items.forEach(item => {
    const clonedItem = item.cloneNode(true);
    partnerItems.appendChild(clonedItem);
  });
});


// slider js
document.addEventListener("DOMContentLoaded", function () {
  const sliderContent = document.querySelector(".slider-content-area");
  let slides = document.querySelectorAll(".slider-item");
  const pagination = document.querySelector(".pagination");

  let visibleSlides = getVisibleSlides();
  let totalSlides = slides.length;
  let index = 0;

  // Clone items dynamically for an infinite effect
  slides.forEach((slide) => {
      let clone = slide.cloneNode(true);
      sliderContent.appendChild(clone);
  });

  // Create Pagination
  for (let i = 0; i < totalSlides; i++) {
      let dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      pagination.appendChild(dot);
  }

  function getVisibleSlides() {
      if (window.innerWidth > 1024) return 3; // Large screens
      if (window.innerWidth > 768) return 2; // Tablets
      return 1; // Mobile
  }

  function updatePagination() {
      let dots = document.querySelectorAll(".pagination span");
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index % totalSlides);
      });
  }

  function nextSlide() {
      index++;
      if (index >= totalSlides) {
          index = 0; // Reset index
      }
      sliderContent.style.transition = "transform 0.5s ease-in-out";
      sliderContent.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
      updatePagination();
  }

  function goToSlide(i) {
      index = i;
      sliderContent.style.transition = "transform 0.5s ease-in-out";
      sliderContent.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
      updatePagination();
  }

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Adjust on resize
  window.addEventListener("resize", () => {
      visibleSlides = getVisibleSlides();
      index = 0;
      sliderContent.style.transform = "translateX(0)";
  });
});



// for pricing card

const priceTabs = document.querySelectorAll('.price-tab-btn');
const priceAmounts = document.querySelectorAll('.price-amount'); // Assuming these are the elements to be updated

priceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        priceTabs.forEach((item) => {
            item.classList.remove('active');
        });
        tab.classList.add('active');

        if (tab.classList.contains('monthly')) {
            priceAmounts.forEach((priceAmount) => {
                let currentPrice = parseFloat(priceAmount.textContent); 
                let monthlyPrice = currentPrice / 12; 
                priceAmount.textContent = monthlyPrice.toFixed(2); 
            });
        } else {
            
            priceAmounts.forEach((priceAmount) => {
                let currentPrice = parseFloat(priceAmount.dataset.yearlyPrice); 
                priceAmount.textContent = currentPrice.toFixed(2); 
            });
        }
    });
});






// for accordion

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      item.querySelector(".faq-question").addEventListener("click", () => {
          // Close all other items
          faqItems.forEach(el => {
              if (el !== item) {
                  el.classList.remove("active");
              }
          });

          // Toggle the current item
          item.classList.toggle("active");
      });
  });
});



// counter

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const statsSection = document.querySelector(".stats-section");

  function runCounter(counter) {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let increment = Math.ceil(target / 100); // Increment speed

      let updateCounter = setInterval(() => {
          count += increment;
          if (count >= target) {
              counter.innerText = target.toLocaleString(); // Format with commas
              clearInterval(updateCounter);
          } else {
              counter.innerText = count.toLocaleString();
          }
      }, 20);
  }

  function checkScroll() {
      let sectionPos = statsSection.getBoundingClientRect().top;
      let screenPos = window.innerHeight / 1.5;

      if (sectionPos < screenPos) {
          counters.forEach(counter => runCounter(counter));
          window.removeEventListener("scroll", checkScroll);
      }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load if already in view
});


// home hero slider 
const sliderTrack = document.querySelector('.slider-track');

// Duplicate slides for seamless looping
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    let clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});





  