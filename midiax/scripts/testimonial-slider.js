const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 4000); // muda a cada 4 segundos
