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

  