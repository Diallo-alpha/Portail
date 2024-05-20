document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split('/').pop();
    const navMap = {
        'index.html': 'nav-accueil',
        'evenements': 'nav-evenements',
        'alumnis': 'nav-alumnis',
        'contact': 'nav-contact',
        'apropos': 'nav-apropos'
    };
    const activeNavId = navMap[currentPath];
    if (activeNavId) {
        document.getElementById(activeNavId).classList.add('action');
    }
});
