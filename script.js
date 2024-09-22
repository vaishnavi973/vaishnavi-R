<!-- JavaScript for mobile menu toggle -->
  <script>
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  </script>
 <!-- Font Awesome Icons for Buttons -->
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>