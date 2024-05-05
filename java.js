document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove 'active' class from all links
          navLinks.forEach(link => link.classList.remove('active'));
          // Add 'active' class to clicked link
          this.classList.add('active');
      });
  });
});