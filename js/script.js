document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const counter = document.querySelector('.counter');
    
    let currentProgress = 0;
    let isComplete = false;
    
    const progressSplit = document.createElement('div');
    progressSplit.className = 'progress-split';
    progressBar.appendChild(progressSplit);
    
    const updateLoader = () => {
        if (currentProgress >= 100 && !isComplete) {
            isComplete = true;
            setTimeout(() => {
                progress.style.width = '70%';
                progressSplit.style.width = '30%';
                progressSplit.classList.add('show');
                setTimeout(() => {
                    progress.classList.add('split');
                    progressBar.classList.add('hide-bg');
                    // Add zoom effect after split
                    setTimeout(() => {
                        progressSplit.classList.add('zoom');
                        // Redirect to home.html after zoom
                        setTimeout(() => {
                            window.location.href = 'home.html';
                        }, 1000);
                    }, 800);
                }, 100);
            }, 500);
            return;
        }
        
        if (!isComplete) {
            currentProgress += 0.5;
            currentProgress = Math.min(currentProgress, 100);
            progress.style.width = `${currentProgress}%`;
            counter.textContent = Math.floor(currentProgress).toString().padStart(3, '0');
            requestAnimationFrame(updateLoader);
        }
    };
    
    updateLoader();
    
    // Function to handle hover images
    function initHoverImages() {
        document.querySelectorAll('.keyword').forEach(keyword => {
            const images = keyword.querySelectorAll('.hover-images img');
            
            keyword.addEventListener('mouseenter', () => {
                images.forEach((img, index) => {
                    // Random position within viewport bounds
                    const randomX = Math.random() * (window.innerWidth - 250);
                    const randomY = Math.random() * (window.innerHeight - 150);
                    const randomRotation = (Math.random() - 0.5) * 30;
                    
                    img.style.cssText = `
                        left: ${randomX}px;
                        top: ${randomY}px;
                        --rotation: ${randomRotation}deg;
                        transition-delay: ${index * 60}ms;
                    `;
                });
            });

            keyword.addEventListener('mouseleave', () => {
                images.forEach(img => {
                    img.style.opacity = '0';
                });
            });
        });
    }

    initHoverImages();
});

