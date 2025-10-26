let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }

  // Your existing script for filtering
  const categoryLinks = document.querySelectorAll(".offer-nav a");
  const boxes = document.querySelectorAll(".dishes .box");

  categoryLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // highlight active link
      categoryLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const category = link.dataset.category;

      boxes.forEach(box => {
        if (category === "all" || box.dataset.category === category) {
          box.style.display = 'block'; // Use display property for filtering
        } else {
          box.style.display = 'none'; // Use display property for filtering
        }
      });
    });
  });
