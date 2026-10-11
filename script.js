const button = document.getElementById("theme-toggle");
const root = document.documentElement;

// the label says what clicking will do, so it shows the opposite of the current theme
function updateButton() {
  const isLight = root.dataset.theme === "light";
  button.textContent = isLight ? "Switch to dark mode" : "Switch to light mode";
}

button.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);  // remember the choice for next time
  } catch (error) {
    // storage can be blocked (for example in some private windows), so just carry on
  }
  updateButton();
});

button.hidden = false;  // the script is running, so it's safe to show the button
updateButton();