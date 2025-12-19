const tabs = document.querySelectorAll(".tab-btn");
const panel = document.getElementById("tab-content");

const tabData = {
  playback: `Playback:
Loop: ON
Autoplay: ON
Hover: Enabled
Playback Speed: 1.0x
Reverse: OFF`,

  mobile: `Mobile Settings:
Mobile Width: 100%
Hide on Mobile: Unchecked
Alignment: Center`,

  files: `File Management:
Upload: Shopify Files
Source: Shopify Files
Select: animation.json
Fallback Image: fallback.jpg`
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    panel.innerHTML = "<pre>" + tabData[tab.dataset.tab] + "</pre>";
  });
});
