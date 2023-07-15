(function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('light-theme');
      } else {
        body.classList.remove('light-theme');
      }
    });
  
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll(".section");
  
    controls.forEach(button => {
      button.addEventListener("click", function() {
        const activeButton = document.querySelector(".active-btn");
        activeButton.classList.remove("active-btn");
        this.classList.add("active-btn");
  
        const activeSection = document.querySelector(".active");
        activeSection.classList.remove("active");
  
        const targetSection = document.getElementById(button.dataset.id);
        targetSection.classList.add("active");
      });
    });
  })();
  