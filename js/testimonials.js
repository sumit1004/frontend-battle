document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const pairs = document.querySelectorAll('.testimonial-pair');
    const dots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateSlider(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active states
        pairs.forEach((pair, i) => {
            pair.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === pairs.length - 1;
    }

    // Event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < pairs.length - 1) {
            currentIndex++;
            updateSlider(currentIndex);
        }
    });

    // Initialize
    updateSlider(0);
});
