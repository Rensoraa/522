const box = document.getElementById("neonBox");
const closeBtn = document.getElementById("closeBox");

// check if user already closed it
if (localStorage.getItem("neonBoxClosed") === "true") {
  box.style.display = "none";
}

// close on click
closeBtn.addEventListener("click", () => {
  box.style.display = "none";
  localStorage.setItem("neonBoxClosed", "true");
});