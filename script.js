// --- GOODBYE ADHD: APP LOGIC ---

// 1. THE EPIC COUNTDOWN TIMER
// We start at 14 minutes and 59 seconds to match your UI
let timeInSeconds = (14 * 60) + 59; 
const timerDisplay = document.querySelector('.time-left');

function updateTimer() {
    const minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    
    // Add a leading zero if seconds are under 10 (e.g., 14:09)
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    // Update the text on the screen
    timerDisplay.textContent = `${minutes}:${seconds}`;
    
    if (timeInSeconds > 0) {
        timeInSeconds--; // Subtract one second
    } else {
        // When the timer hits zero
        timerDisplay.textContent = "00:00";
        timerDisplay.style.color = "var(--success-neon)";
        timerDisplay.style.textShadow = "0 0 20px var(--success-neon)";
        clearInterval(timerInterval);
        
        // Epic pop-up notification
        setTimeout(() => alert("Flow State Sprint Complete! Incredible focus."), 500);
    }
}

// Run the timer every 1000 milliseconds (1 second)
const timerInterval = setInterval(updateTimer, 1000);


// 2. INTERACTIVE MICRO-MILESTONES
// This allows users to click tasks and mark them as complete
const milestones = document.querySelectorAll('.milestone');

milestones.forEach(milestone => {
    milestone.addEventListener('click', () => {
        
        // Only trigger if the task is currently pending
        if (milestone.classList.contains('pending')) {
            
            // Swap the CSS classes to trigger the Glassmorphism visual changes
            milestone.classList.remove('pending', 'hover-lift');
            milestone.classList.add('completed');
            
            // Change the empty circle icon to a glowing green checkmark
            const icon = milestone.querySelector('i');
            icon.className = 'fas fa-check-circle neon-success';
        }
    });
});
