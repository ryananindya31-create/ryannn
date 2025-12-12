function showAlert() {
  const message = "Nusantara memiliki ratusan makanan khas lainnya yang kaya rasa! Jelajahi keberagaman kuliner Indonesia.";
  alert(message);
}

/* ==================== ANIMASI SCROLL & INTERSECTION OBSERVER ==================== */

// Detect elemen saat scroll untuk trigger fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Terapkan observer ke semua card dan elemen fade-in
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.card, .gallery-card, .highlight-box');
    fadeInElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

/* ==================== DARK MODE TOGGLE ==================== */

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
    // Update icon - SVG akan otomatis berganti via CSS
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) {
        const sunIcon = toggleBtn.querySelector('.sun-icon');
        const moonIcon = toggleBtn.querySelector('.moon-icon');
        
        if (document.body.classList.contains('dark-mode')) {
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
    }
}

// Check dark mode preference saat load
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            const sunIcon = toggleBtn.querySelector('.sun-icon');
            const moonIcon = toggleBtn.querySelector('.moon-icon');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
    }
});

/* ==================== REFRESH & BACK BUTTON FUNCTIONALITY ==================== */

function refreshPage() {
    // Clear cache dan reload
    window.location.reload(true);
}

function goBack() {
    // Kembali ke halaman sebelumnya
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // Jika tidak ada history, kembali ke home
        window.location.href = 'index.html';
    }
}

// Ensure tombol refresh dan back ada saat DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const refreshBtn = document.getElementById('refreshBtn');
    const backBtn = document.getElementById('backBtn');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', refreshPage);
    }
    if (backBtn) {
        backBtn.addEventListener('click', goBack);
    }
});

/* ==================== SMOOTH SCROLL & NAVBAR ACTIVE STATE ==================== */

// Update navbar links berdasarkan section yang aktif
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==================== MODAL FUNCTIONALITY ==================== */

function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Trigger animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Close modal saat klik di luar content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id.replace('modal-', '');
        closeModal(modalId);
    }
});

// Close modal saat tekan ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

/* ==================== FILTER & SEARCH INTERAKTIVITAS ==================== */

const filterDaerah = document.getElementById('filter-daerah');
const filterTeknik = document.getElementById('filter-teknik');
const searchMotif = document.getElementById('search-motif');

function filterGallery() {
    const daerah = filterDaerah?.value || '';
    const teknik = filterTeknik?.value || '';
    const motif = searchMotif?.value.toLowerCase() || '';
    
    const cards = document.querySelectorAll('.gallery-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const cardDaerah = card.dataset.daerah || '';
        const cardTeknik = card.dataset.teknik || '';
        const cardMotif = card.querySelector('.gallery-title')?.textContent.toLowerCase() || '';
        
        const matchDaerah = !daerah || cardDaerah === daerah;
        const matchTeknik = !teknik || cardTeknik === teknik;
        const matchMotif = !motif || cardMotif.includes(motif);
        
        if (matchDaerah && matchTeknik && matchMotif) {
            card.style.display = 'block';
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'scaleIn 0.5s ease-out';
            }, 10);
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message jika tidak ada hasil
    const gallery = document.querySelector('.gallery-grid');
    let noResultMsg = gallery?.querySelector('.no-results');
    if (visibleCount === 0 && gallery) {
        if (!noResultMsg) {
            noResultMsg = document.createElement('div');
            noResultMsg.className = 'no-results';
            noResultMsg.textContent = 'Tidak ada hasil yang cocok. Coba ubah filter.';
            noResultMsg.style.gridColumn = '1 / -1';
            noResultMsg.style.textAlign = 'center';
            noResultMsg.style.padding = '30px';
            noResultMsg.style.color = 'var(--text-secondary)';
            gallery.appendChild(noResultMsg);
        }
    } else if (noResultMsg) {
        noResultMsg.remove();
    }
}

if (filterDaerah) filterDaerah.addEventListener('change', filterGallery);
if (filterTeknik) filterTeknik.addEventListener('change', filterGallery);
if (searchMotif) searchMotif.addEventListener('input', filterGallery);

/* ==================== SCROLL TO TOP BUTTON ==================== */

function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTop';
    btn.innerHTML = '↑';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: var(--accent);
        color: var(--btn-text);
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s, transform 0.3s;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        } else {
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
}

// Create scroll to top button saat DOM loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
    createScrollToTopButton();
}

/* ==================== COUNTER ANIMATION ==================== */

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Animate counters saat section visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const countSections = document.querySelectorAll('[data-counter-section]');
    countSections.forEach(section => counterObserver.observe(section));
});

/* ==================== ADD ACTIVE CLASS TO NAV LINKS ==================== */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
