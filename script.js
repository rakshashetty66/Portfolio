// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Full Name"]').value;
        const email = this.querySelector('input[placeholder="Email Address"]').value;
        const phone = this.querySelector('input[placeholder="Mobile Number"]').value;
        const subject = this.querySelector('input[placeholder="Email Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted with values:', { name, email, phone, subject, message });
        
        // Reset form
        this.reset();
        
        // Show success message
        alert('Thank you for your message. I will get back to you soon!');
    });
}

// Mobile menu toggle if needed for smaller screens
function addMobileMenuToggle() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const mobileMenuToggle = document.createElement('div');
            mobileMenuToggle.className = 'mobile-menu-toggle';
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            header.insertBefore(mobileMenuToggle, nav);
            
            mobileMenuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.innerHTML = nav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : 
                    '<i class="fas fa-bars"></i>';
            });
        }
    } else {
        const existingToggle = document.querySelector('.mobile-menu-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }
        nav.classList.remove('active');
    }
}

// Call initially and on resize
window.addEventListener('load', addMobileMenuToggle);
window.addEventListener('resize', addMobileMenuToggle);

// Add placeholder images for demonstration
document.addEventListener('DOMContentLoaded', function() {
    // Find all images without src or with placeholder in src
    const images = document.querySelectorAll('img[src=""], img[src*="placeholder"], img:not([src])');
    
    // Replace with placeholder images
    images.forEach(img => {
        const alt = img.getAttribute('alt') || 'Placeholder image';
        if (alt.includes('profile') || alt.includes('Raksha')) {
            img.src = '/api/placeholder/400/400';
        } else if (alt.includes('certificate')) {
            img.src = '/api/placeholder/300/200';
        } else {
            img.src = '/api/placeholder/300/200';
        }
    });
});