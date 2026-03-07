const themeToggle = document.getElementById("theme-toggle");
const sunIcon = themeToggle.querySelector(".fa-sun");
const moonIcon = themeToggle.querySelector(".fa-moon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline";
} else {
  document.body.classList.add("light-mode");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");

  sunIcon.style.display = isDark ? "none" : "inline";
  moonIcon.style.display = isDark ? "inline" : "none";
});
