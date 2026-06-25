document.addEventListener('DOMContentLoaded', () => {

    // 1. Automated Number Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 60; 

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target + (counter.getAttribute('data-target') === '210' ? '+' : '');
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger counter when visible on scroll
    const statsSection = document.getElementById('stats');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if(statsSection) {
        observer.observe(statsSection);
    }

    // 2. Mobile Navigation Menu Display Controller
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. WORKABLE PAYMENT ROUTING SYSTEM
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const planName = e.target.getAttribute('data-plan');
            
            // Define your operational payment processing links here
            let checkoutUrl = ""; 
            
            if (planName === "Starter") {
                checkoutUrl = "https://buy.stripe.com/mock_starter_plan_link"; 
            } else if (planName === "Professional") {
                checkoutUrl = "https://buy.stripe.com/mock_professional_plan_link";
            }

            // User UX Notification Response
            alert(`Plan Selected: ${planName}\n\nConnecting to our secure payment gateway. Please wait...`);
            
            // Programmatic window routing logic execution
            if(checkoutUrl) {
                window.location.href = checkoutUrl;
            }
        });
    });

    // 4. Collapsible FAQ Component Execution
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const sign = this.querySelector('span');
            
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0px';
                sign.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                sign.textContent = '-';
            }
        });
    });
});