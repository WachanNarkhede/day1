document.addEventListener('DOMContentLoaded', function() {
    const footerContent = document.getElementById('footer-content');
    const footerSections = document.querySelectorAll('.footer-section h4');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerContent.style.opacity = '1';
                footerContent.style.transform = 'translateY(0)';

                footerSections.forEach((section, index) => {
                    setTimeout(() => {
                        section.classList.add('slideIn');
                    }, index * 200);
                });
            } else {
                footerContent.style.opacity = '0';
                footerContent.style.transform = 'translateY(20px)';

                footerSections.forEach(section => {
                    section.classList.remove('slideIn');
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(footerContent);
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
