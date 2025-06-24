document.addEventListener('DOMContentLoaded', function() {
    // Game info modal functionality
    const infoButtons = document.querySelectorAll('.info-button');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameTitle = this.closest('.game-info').querySelector('h3').textContent;
            alert(`More information about "${gameTitle}" coming soon!`);
            // In the future, you can replace this with a proper modal
        });
    });
    
    // Animation for game cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    const gameCards = document.querySelectorAll('.game-card, .featured-game-container');
    gameCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
