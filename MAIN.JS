const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("header ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });