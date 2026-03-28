document.addEventListener("DOMContentLoaded", () => {
    // 1. Custom Cursor
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");
    
    // Disable on touch devices
    if(window.innerWidth > 768) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
        
        // Small delay for follower
        setTimeout(() => {
          cursorFollower.style.top = e.clientY + "px";
          cursorFollower.style.left = e.clientX + "px";
        }, 50);
      });
  
      // Add hover states to interactive elements
      const interactables = document.querySelectorAll('a, button, input, textarea, .glass-card, .skill-pill');
      interactables.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });
    }
  
    // 2. Typewriter Effect
    const roles = ["Full Stack Developer", "MERN Stack Engineer", "Problem Solver", "CS Student @ LPU"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.querySelector(".typewriter");
    
    function typeEffect() {
      const currentRole = roles[roleIndex];
      
      if(isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if(!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if(isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before new word
      }
      
      setTimeout(typeEffect, typeSpeed);
    }
    
    setTimeout(typeEffect, 1000); // Start delay
  
    // 3. Scroll Animations (AOS equivalent)
    const fadeElements = document.querySelectorAll("[data-aos]");
    
    const aosObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target); // Optional: Trigger only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    
    fadeElements.forEach(el => {
      aosObserver.observe(el);
      
      // Handle delay if specified
      if(el.dataset.aosDelay) {
        el.style.transitionDelay = el.dataset.aosDelay + 'ms';
      }
    });
  
    // 4. Navbar active state & hamburger menu
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  
    // 5. Number Counter Animation
    const counters = document.querySelectorAll(".counter");
    
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const target = +entry.target.getAttribute("data-target");
          let count = 0;
          const inc = target / 50; // Speed control
          
          const updateCount = () => {
            count += inc;
            if(count < target) {
              entry.target.innerText = Math.ceil(count);
              requestAnimationFrame(updateCount);
            } else {
              entry.target.innerText = target;
            }
          };
          
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => countObserver.observe(counter));
  
    // 6. Canvas Particle Background
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    
    let particlesArray;
    
    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    class Particle {
      constructor(x, y, directX, directY, size, color) {
        this.x = x;
        this.y = y;
        this.directX = directX;
        this.directY = directY;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
      
      update() {
        if(this.x > canvas.width || this.x < 0) this.directX = -this.directX;
        if(this.y > canvas.height || this.y < 0) this.directY = -this.directY;
        
        this.x += this.directX;
        this.y += this.directY;
        this.draw();
      }
    }
    
    function initParticles() {
      particlesArray = [];
      let numParticles = (canvas.height * canvas.width) / 9000;
      if(window.innerWidth < 768) numParticles = numParticles / 2; // Less particles on mobile
      
      for(let i = 0; i < numParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directX = (Math.random() * 0.4) - 0.2;
        let directY = (Math.random() * 0.4) - 0.2;
        
        // Randomly pick color between cyan, purple, white
        const colors = ['rgba(0, 212, 255, 0.4)', 'rgba(124, 58, 237, 0.4)', 'rgba(255, 255, 255, 0.2)'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push(new Particle(x, y, directX, directY, size, color));
      }
    }
    
    function animateParticles() {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      
      for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }
    
    initParticles();
    animateParticles();
  });
