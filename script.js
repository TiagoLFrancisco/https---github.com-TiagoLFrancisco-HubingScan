document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var logo = document.querySelector('#navbar img');

    // Function to update navbar style and logo based on scroll position
    function updateNavbar() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled-navbar');
            logo.src = 'assets\\logo_color.png'; // Update to the path of your colored logo
        } else {
            navbar.classList.remove('scrolled-navbar');
            logo.src = 'assets\\logo.png'; // Update to the path of your original logo
        }
    }

    // Initial call to set the navbar style and logo on page load
    updateNavbar();

    // Listen for the scroll event and update the navbar style and logo
    window.addEventListener('scroll', updateNavbar);
});

$(document).ready(function () {
    // Attach click event to the rectangle-container
    $('#openWebsite').click(function () {
        // Open the desired website when the rectangle is clicked
        window.location.href = 'https://play.google.com/store/apps/details?id=com.solutions.bibright.hubingScan';
    });

    $('#openWebsiteFromDownload').click(function () {
        // Open the desired website when the rectangle is clicked
        window.location.href = 'https://play.google.com/store/apps/details?id=com.solutions.bibright.hubingScan';
    });

    
});




