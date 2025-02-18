document.addEventListener('DOMContentLoaded', function () {
  
  const career = [
    "FullstackWeb Developer. ",
    "Quality Assurance / Quality Engineer. ",
    "Software Engineer. ",
    "Creative Problem Solver. ",
    "User Interface Designer. "
  ];
  
  const careerElement = document.getElementById("career");
  
  let textIndex = 0;
  let charIndex = 0;
  const displayInterval = 2000;
  const typingSpeed = 50;
  
  const createFallingLetter = (letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.classList.add('falling-letter');
    span.style.animationDelay = `${Math.random() * 0.1}s`;
    return span;
  };
  
  const typeText = () => {
    if (charIndex < career[textIndex].length) {
      const letter = career[textIndex].charAt(charIndex);
      const letterSpan = createFallingLetter(letter);
      careerElement.appendChild(letterSpan);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, displayInterval);
    }
  };
  
  const eraseText = () => {
    if (careerElement.childNodes.length > 0) {
      careerElement.removeChild(careerElement.lastChild);
      setTimeout(eraseText, typingSpeed / 2);
    } else {
      textIndex = (textIndex + 1) % career.length;
      charIndex = 0;
      setTimeout(typeText, typingSpeed);
    }
  };
  
  // Initialize typing animation
  window.addEventListener('DOMContentLoaded', () => {
    typeText();
  });
  
  // window.addEventListener('scroll', () => {
  //   const header = document.querySelector('.header-section');
  //   if (window.scrollY > 50) {
  //     header.classList.add('header-scrolled');
  //   } else {
  //     header.classList.remove('header-scrolled');
  //   }
  // });
  // Get elements
  const header = document.querySelector('.header-section');
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Set active link based on current section
  function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
    
    // Special case for when at the top of the page
    if (scrollPosition < 100) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#home') {
          item.classList.add('active');
        }
      });
    }
  }
  
  // Initialize active link
  setActiveLink();
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    setActiveLink();
  });
  
  // Mobile menu toggle
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
      menuIcon.classList.replace('bx-menu', 'bx-x');
    } else {
      menuIcon.classList.replace('bx-x', 'bx-menu');
    }
  });
  
  // Close mobile menu when clicking on a link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuIcon.classList.replace('bx-x', 'bx-menu');
      }
    });
  });
  
  // Update mobile menu state on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuIcon.classList.replace('bx-x', 'bx-menu');
    }
  });
});