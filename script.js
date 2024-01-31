document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var logo = document.querySelector('#navbar img');

    function updateNavbar() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled-navbar');
            logo.src = 'assets\\logo_color.png'; 
        } else {
            navbar.classList.remove('scrolled-navbar');
            logo.src = 'assets\\logo.png'; 
        }
    }

    updateNavbar();

    window.addEventListener('scroll', updateNavbar);
});

$(document).ready(function () {

    $('#openWebsite').click(function () {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.solutions.bibright.hubingScan';
    });

    $('#openWebsiteFromDownload').click(function () {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.solutions.bibright.hubingScan';
    });

    
});




