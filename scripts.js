

//------- Swipe up effect - not working -------//
document.querySelector('.swipe-up').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});


// Get all timeline events and speech bubbles
const timelineEvents = document.querySelectorAll('.timeline-event');
const speechBubbles = document.querySelectorAll('.speech-bubble');

// Function to hide all speech bubbles
function hideAllBubbles() {
    speechBubbles.forEach(bubble => bubble.classList.remove('active'));
}

// Add click event listeners to all timeline events
timelineEvents.forEach(event => {
    event.addEventListener('click', () => {
        const bubbleId = event.getAttribute('data-id');
        const selectedBubble = document.getElementById(bubbleId);

        // Log which bubble is being selected
        console.log('Selected Bubble ID: ', bubbleId);
        console.log('Is bubble active?', selectedBubble.classList.contains('active'));

        // If the clicked bubble is already active, hide it
        if (selectedBubble.classList.contains('active')) {
            selectedBubble.classList.remove('active');
        } else {
            // Hide all bubbles, then show the clicked one
            hideAllBubbles();
            selectedBubble.classList.add('active');
        }
    });
});

// Close bubbles when clicking outside
window.addEventListener('click', (e) => {
    if (!e.target.closest('.timeline-event') && !e.target.closest('.speech-bubble')) {
        hideAllBubbles();
    }
});





//------- Contact Form Handling -------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var formMessage = document.getElementById('formMessage');
    
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';

    setTimeout(function() {
        formMessage.style.display = 'block';
        formMessage.classList.add('success-message');
        formMessage.innerHTML = 'Your message has been sent successfully!';
        
        document.getElementById('contactForm').reset();
    }, 1000); 
});