// Slideshow functionality for Home Page
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the slideshow when the page loads
window.onload = function() {
    showSlides();
    // Listen for click events to show event details
    // This ensures our event details function works after the page has fully loaded
    initializeEventDetailsListeners();
}

// Toggle support form visibility on Support Page
document.getElementById("toggleForm").addEventListener("click", function() {
    let form = document.getElementById("supportForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

// Function to show event details
function showDetails(event) {
    let eventDetails = "";
    switch (event) {
        case 'artExhibition':
            eventDetails = 'Art Exhibition Details:\nDate: TBD\nLocation: Community World Center';
            break;
        case 'foodFair':
            eventDetails = 'Food Fair Details:\nDate: TBD\nLocation: Community World Center';
            break;
        case 'musicConcert':
            eventDetails = 'Music Concert Details:\nDate: TBD\nLocation: Community World Center';
            break;
        case 'charityFundraiser':
            eventDetails = 'Charity Fundraiser Details:\nDate: TBD\nLocation: Community World Center';
            break;
        case 'cookingWorkshop':
            eventDetails = 'Cooking Workshop Details:\nDate: TBD\nLocation: Community World Center';
            break;
        case 'wellnessSeminar':
            eventDetails = 'Health and Wellness Seminar Details:\nDate: TBD\nLocation: Community World Center';
            break;
        // Add more cases for additional events
        default:
            eventDetails = 'Details not available for this event.';
            break;
    }
// Update the popup with event details and show it
document.getElementById("eventDetails").innerText = eventDetails;
document.getElementById("eventDescription").style.display = "block";
document.getElementById("registrationFormContainer").style.display = "block"; // Corrected ID

}

// Initialize listeners for event details buttons
function initializeEventDetailsListeners() {
    const buttons = document.querySelectorAll('button[onclick^="showDetails"]');
    buttons.forEach(button => {
        const eventType = button.getAttribute('onclick').split("'")[1];
        button.onclick = () => showDetails(eventType);
    });
}

function registerEvent(e) {
    e.preventDefault(); // Prevent default form submission

    var fullName = document.getElementById("fullName").value; // Get the user's name

    alert("Hello " + fullName + ", your details have been captured."); // Show the alert

    document.getElementById("eventRegistrationForm").reset(); // Reset the form after submission
}


