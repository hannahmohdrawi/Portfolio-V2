
//------- Contact Form Handling -------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var formMessage = document.getElementById('formMessage');
    
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';

    setTimeout(function() {
        formMessage.style.display = 'block';
        formMessage.classList.add('success-message');
        formMessage.innerHTML = 'Thank you for your message, it has sent successfully! 😇';
        
        document.getElementById('contactForm').reset();
    }, 1000); 
});
