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

  //input values
  const backend = document.getElementById('backend');
  const frontend = document.getElementById('frontend');
  const fullstack = document.getElementById('fullstack');
  const design = document.getElementById('design');
  const testing = document.getElementById('testing');

  //inputs
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  backend.addEventListener('click', () => {
    subject.value = 'Backend Development Project Inquiry';
    message.value = 'I am looking for a backend developer with strong experience in Node.Js, Express, and .NET. Can you help me produce my project in due time?';
  });

  frontend.addEventListener('click', () => {
    subject.value = 'Frontend Development Project Inquiry';
    message.value = "I’m interested in your frontend development services and would like to discuss a project. I need a beautiful, responsive user interface built using modern technologies like React, Angular, or Tailwind CSS";
  });

  fullstack.addEventListener('click', () => {
    subject.value = 'Full Stack Development Project Inquiry';
    message.value = 'I’m looking for a full-stack developer to handle both backend and frontend development for my project. I need a cohesive, maintainable, and scalable application that delivers exceptional user experiences. Would you be available to discuss this further?';
  });

  design.addEventListener('click', () => {
    subject.value = 'Web UI/UX Design Consultation Request';
    message.value = 'I’m interested in your Web UI design services and would like to discuss a project. I need intuitive, aesthetically pleasing interfaces for [describe your project, e.g., a dashboard, customer portal, or website]. Could we schedule a consultation to go over my requirements?';
  });

  testing.addEventListener('click', () => {
    subject.value = 'QA/Testing Services Inquiry';
    message.value = 'I came across your QA and testing services and would like to discuss a project. I need help with test automation, functional testing, and performance testing to ensure the reliability and security of my software. Let me know how we can proceed and if you’re available for a consultation.';
  });

  //mail configurations

  const form = document.getElementById('contact-form');
  const notification = document.querySelector('.form-notification');
  const submitButton = document.querySelector('.hire-me');

  const recaptchaScript = document.createElement('script');
  recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
  recaptchaScript.async = true;
  recaptchaScript.defer = true;
  document.head.appendChild(recaptchaScript);

  emailjs.init("u-PSPyO4wMjs1k33t");

  form.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
          form.reportValidity();
          showNotification('Please fill in all required fields correctly', 'error');
          return;
      }

      if (typeof grecaptcha !== 'undefined') {
          const recaptchaResponse = grecaptcha.getResponse();
          if (!recaptchaResponse) {
              showNotification('Please complete the reCAPTCHA', 'error');
              return;
          }
      } else {
          showNotification('reCAPTCHA is not fully loaded. Please try again in a moment.', 'error');
          return;
      }

      submitButton.classList.add('loading');
      submitButton.disabled = true;

      try {
          const response = await emailjs.sendForm("service_ilr6gvj", "template_ef2kjmb", form);

          if (response.status === 200) {
              showNotification("Message sent successfully! I'll get back to you soon.", "success");
              form.reset();
              if (typeof grecaptcha !== 'undefined') {
                  grecaptcha.reset();
              }
          } else {
              throw new Error("Something went wrong. Please try again.");
          }
      } catch (error) {
          showNotification(error.message, "error");
      } finally {
          submitButton.classList.remove('loading');
          submitButton.disabled = false;
      }
  });

  function showNotification(message, type) {
      notification.textContent = message;
      notification.className = 'form-notification';
      notification.classList.add(type);

      notification.classList.remove('show');
      void notification.offsetWidth; // Force reflow
      notification.classList.add('show');

      setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
              notification.className = 'form-notification';
          }, 500);
      }, 5000);
  }

});