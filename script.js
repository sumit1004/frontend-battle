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
});

