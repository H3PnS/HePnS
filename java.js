document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu HTML
  const navigationHTML = `
      <nav class="navigation">
          <a href="index.html" class="nav-link">Home</a>
          <a href="aboutme.html" class="nav-link">About me</a>
          <a href="keyboards.html" class="nav-link active">Keyboards</a>
          <a href="accessories.html" class="nav-link">Accessories</a>
      </nav>
  `;

  // Inject navigation HTML into the navigation container
  document.getElementById('navigation').innerHTML = navigationHTML;

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
