// Tabs logic
const tabs = document.querySelectorAll(".tab-btn");
const panel = document.getElementById("tab-content");

const tabData = {
  playback: `Playback:
Loop: ON
Autoplay: ON
Hover: Enabled
Speed: 1.0x
Reverse: OFF`,

  mobile: `Mobile Settings:
Width: 100%
Hide on Mobile: Unchecked
Alignment: Center`,

  files: `File Management:
Upload: Shopify Files
Select: animation.json
Fallback: fallback.jpg`
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    panel.innerHTML = "<pre>" + tabData[tab.dataset.tab] + "</pre>";
  });
});

// Footer year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();
// FAQ toggle
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) {
        a.style.display = "none";
        a.previousElementSibling.classList.remove("active");
      }
    });

    const isOpen = answer.style.display === "block";
    answer.style.display = isOpen ? "none" : "block";
    q.classList.toggle("active", !isOpen);
  });
});
