document.querySelectorAll(".tech-icon").forEach((icon) => {
  const confidence = Number(icon.dataset.confidence || 0);
  const name = icon.querySelector("b")?.textContent?.trim() || "Skill";

  const popover = document.createElement("div");
  popover.className = "tech-popover";
  popover.innerHTML = `
    <div class="tech-popover-title">${name}</div>
    <div class="tech-popover-meta">Confidence ${confidence}%</div>
    <div class="tech-popover-bar">
      <span style="width: ${confidence}%"></span>
    </div>
  `;

  icon.appendChild(popover);
});