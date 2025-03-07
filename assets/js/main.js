document.addEventListener("DOMContentLoaded", () => {
  // support chat
  const chatBubble = document.getElementById("chatBubble");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const sendMessageBtn = document.getElementById("sendMessageBtn");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  let chatOpen = false;

  chatBubble.addEventListener("click", () => {
    chatOpen = !chatOpen;
    chatBox.classList.toggle("active");
    chatBubble.innerHTML = chatOpen ? "✖" : "💬";
  });

  closeChat.addEventListener("click", () => {
    chatOpen = false;
    chatBox.classList.remove("active");
    chatBubble.innerHTML = "💬";
  });

  sendMessageBtn.addEventListener("click", () => {
    if (chatInput.value.trim() !== "") {
      const message = document.createElement("div");
      message.textContent = chatInput.value;
      message.style.padding = "8px";
      message.style.margin = "5px 0";
      message.style.background = "#33A88E";
      message.style.color = "white";
      message.style.borderRadius = "5px";
      message.style.alignSelf = "flex-end";
      chatMessages.appendChild(message);
      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  // support chat

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
    // Toggle menu and body scroll on menu click
    document.querySelector(".mobile-menu").addEventListener("click", function () {
      document.querySelector("header").classList.toggle("show");
      document.body.classList.toggle("no-scroll");
    });
  
    // Close the sidebar if clicking outside of it
    document.addEventListener("click", function (event) {
      // Check if the click is outside the sidebar and the menu button
      if (
        !event.target.closest("header") &&
        !event.target.closest(".mobile-menu")
      ) {
        if (document.querySelector("header").classList.contains("show")) {
          document.querySelector("header").classList.remove("show");
          document.body.classList.remove("no-scroll");
        }
      }
    });
  
    // close via close btn
    document.querySelector(".close-sidebar-btn").addEventListener("click", () => {
      document.querySelector("header").classList.remove("show");
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





  