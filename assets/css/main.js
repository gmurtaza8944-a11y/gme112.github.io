// Main JavaScript for website functionality

// Navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for CTA buttons
document.querySelectorAll('.cta-button, .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add any click handling you need
        console.log('Button clicked');
    });
});

// Ad refresh function (optional)
function refreshAds() {
    if (window.googletag && window.googletag.pubads) {
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
        });
    }
}

// Refresh ads every 30 seconds for better monetization
setInterval(refreshAds, 30000);
