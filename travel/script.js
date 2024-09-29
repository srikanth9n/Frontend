// Listen for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server
    
    // Show the popup
    document.getElementById('popup').style.display = 'flex'; // Assuming flex for centering

    // Optional: Reset the form fields after submission
    this.reset();
});

// Close the popup when the user clicks the close button
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
