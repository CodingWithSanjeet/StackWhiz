document.addEventListener('DOMContentLoaded', function(){
    const allBtns = document.querySelectorAll('.searchBtn')
    const searchBar = document.querySelector('.searchBar')
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
    const header = document.querySelector('.header');
    
    // Search functionality
    for(var i=0; i<allBtns.length; i++){
        allBtns[i].addEventListener('click', function(){
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open')
            this.setAttribute('aria-expanded','true')
            searchInput.focus()
        })
    }
    
    searchClose.addEventListener('click', function(){
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('open')
        this.setAttribute('aria-expanded','false')
    })
    
    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Hero role rotation
    const roleItems = document.querySelectorAll('.role-item');
    if (roleItems.length > 0) {
        let currentRole = 0;
        
        setInterval(() => {
            roleItems[currentRole].classList.remove('active');
            currentRole = (currentRole + 1) % roleItems.length;
            roleItems[currentRole].classList.add('active');
        }, 3000);
        
        // Click to activate roles
        roleItems.forEach((role, index) => {
            role.addEventListener('click', () => {
                roleItems.forEach(r => r.classList.remove('active'));
                role.classList.add('active');
                currentRole = index;
            });
        });
    }

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const articlesSection = document.querySelector('.articles');
            if (articlesSection) {
                articlesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add parallax effect to hero decorations
    const decorations = document.querySelectorAll('.decoration-item');
    if (decorations.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            decorations.forEach((decoration, index) => {
                const speed = 0.3 + (index * 0.1);
                decoration.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }
})