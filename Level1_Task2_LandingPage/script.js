
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {
            link.classList.add('active');
        }

    });

});

const revealCards = document.querySelectorAll(
    '.service-card, .solution-card, .insight-card, .testimonial-card, .contact-card'
);

function revealOnScroll() {

    const triggerPoint = window.innerHeight * 0.85;

    revealCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add('show');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

const counters = document.querySelectorAll('.stat-box h3');

counters.forEach(counter => {

    const originalText = counter.innerText;
    const targetValue = parseInt(originalText);

    if (isNaN(targetValue)) return;

    let count = 0;

    const updateCounter = () => {

        const increment = targetValue / 60;

        if (count < targetValue) {

            count += increment;

            if (originalText.includes('%')) {

                counter.innerText =
                    Math.ceil(count) + '%';

            } else {

                counter.innerText =
                    Math.ceil(count) + '+';

            }

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = originalText;

        }

    };

    updateCounter();

});

const cards = document.querySelectorAll(
    '.service-card, .solution-card, .insight-card'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-12px) scale(1.03)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0px) scale(1)';

    });

});
