// Theme Switching Logic
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Initialize Theme
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
};

// Mobile Menu Toggle
const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    if (menu) menu.classList.toggle('open');
    if (overlay) overlay.classList.toggle('hidden');
};

// Navbar & Footer Injection
const injectSharedUI = () => {
    // Add scroll progress bar to body
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);
    }

    const navHTML = `
    <nav class="navbar fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md border-b border-gray-800 flex items-center px-6 md:px-8">
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 group">
                <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-indigo-500/20">
                    <span class="text-white font-bold text-xl">L</span>
                </div>
                <span class="text-xl font-bold tracking-tight brand-text">Lumina</span>
            </a>
            <div class="hidden lg:flex items-center gap-1">
                <a href="index.html" class="nav-link font-medium">Home</a>
                <a href="features.html" class="nav-link font-medium">Features</a>
                <a href="screens.html" class="nav-link font-medium">Screens</a>
                <a href="pricing.html" class="nav-link font-medium">Pricing</a>
                <a href="reviews.html" class="nav-link font-medium">Reviews</a>
                <a href="how-it-works.html" class="nav-link font-medium">How It Works</a>
                <a href="dashboard.html" class="nav-link font-medium">Dashboard</a>
            </div>
            <div class="hidden lg:flex items-center gap-3">
                <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                </button>
                <div class="h-6 w-px bg-gray-800"></div>
                <a href="register.html" class="btn-secondary">Sign Up</a>
                <a href="index.html#waitlist" class="btn-primary">Get Early Access</a>
            </div>
            <button onclick="toggleMenu()" class="lg:hidden p-2 text-gray-400 hover:text-white">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
    </nav>
    <div class="menu-overlay hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]" onclick="toggleMenu()"></div>
    <div class="mobile-menu flex flex-col p-8 lg:hidden">
        <div class="flex justify-between items-center mb-10">
            <span class="text-2xl font-bold brand-text">Lumina</span>
            <button onclick="toggleMenu()" class="p-2">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div class="flex flex-col gap-4 text-xl">
            <a href="index.html" class="nav-link">Home</a>
            <a href="features.html" class="nav-link">Features</a>
            <a href="screens.html" class="nav-link">Screens</a>
            <a href="pricing.html" class="nav-link">Pricing</a>
            <a href="reviews.html" class="nav-link">Reviews</a>
            <a href="how-it-works.html" class="nav-link">How It Works</a>
            <a href="dashboard.html" class="nav-link">Dashboard</a>
            <hr class="border-gray-800">
            <a href="register.html" class="btn-secondary w-full justify-center">Sign Up</a>
            <a href="index.html#waitlist" class="btn-primary w-full mt-4">Get Early Access</a>
        </div>
    </div>`;

    const footerHTML = `
    <footer class="bg-gray-900 border-t border-gray-800 pt-24 pb-12 px-6">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                <div class="max-w-xs">
                    <a href="index.html" class="flex items-center gap-2 mb-8">
                        <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <span class="text-white font-bold text-lg">L</span>
                        </div>
                        <span class="text-2xl font-bold tracking-tight brand-text">Lumina</span>
                    </a>
                    <p class="text-gray-400 leading-relaxed mb-8">Empowering creators and developers with the world's most sophisticated mobile launch platform.</p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.234-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">Product</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="features.html" class="hover:text-indigo-400 transition-colors">Key Features</a></li>
                        <li><a href="screens.html" class="hover:text-indigo-400 transition-colors">Interface Preview</a></li>
                        <li><a href="pricing.html" class="hover:text-indigo-400 transition-colors">Flexible Pricing</a></li>
                        <li><a href="blog.html" class="hover:text-indigo-400 transition-colors">Roadmap</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">Resources</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="support.html" class="hover:text-indigo-400 transition-colors">Help Center</a></li>
                        <li><a href="how-it-works.html" class="hover:text-indigo-400 transition-colors">Getting Started</a></li>
                        <li><a href="blog.html" class="hover:text-indigo-400 transition-colors">Developer Blog</a></li>
                        <li><a href="support.html" class="hover:text-indigo-400 transition-colors">Live Chat</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="privacy.html" class="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="terms.html" class="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                        <li><a href="support.html" class="hover:text-indigo-400 transition-colors">Contact Us</a></li>
                        <li><a href="blog.html" class="hover:text-indigo-400 transition-colors">Join the Team</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-gray-500 text-sm">© 2026 Lumina Global Inc. Designed for the builders.</p>
                <div class="flex gap-8 text-sm text-gray-500">
                    <a href="privacy.html" class="hover:text-white transition-colors">Security</a>
                    <a href="terms.html" class="hover:text-white transition-colors">Compliance</a>
                    <a href="privacy.html" class="hover:text-white transition-colors">Privacy</a>
                </div>
            </div>
        </div>
    </footer>`;

    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) navPlaceholder.innerHTML = navHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
};

// Scroll Monitoring Logic
const initScrollMonitoring = () => {
    const navbar = document.querySelector('.navbar');
    const progressBar = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // Update progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";
    });
};

// Intersection Observer for Reveal Effects
const initRevealEffect = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If contains counter, start counter
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.dataset.started) {
                    startCounter(counter);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
};

// Counter Animation Logic
const startCounter = (el) => {
    el.dataset.started = "true";
    const target = parseInt(el.dataset.target);
    let count = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const updateCount = () => {
        count += step;
        if (count < target) {
            el.innerText = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateCount);
        } else {
            el.innerText = target.toLocaleString();
        }
    };
    updateCount();
};

// FAQ Interactions
const initFAQ = () => {
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.faq-item');
            const isActive = item.classList.contains('active');

            // Close all others
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
};

// Countdown Timer
const initCountdown = (targetDate) => {
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };

        if (elements.days) elements.days.innerText = days.toString().padStart(2, '0');
        if (elements.hours) elements.hours.innerText = hours.toString().padStart(2, '0');
        if (elements.minutes) elements.minutes.innerText = minutes.toString().padStart(2, '0');
        if (elements.seconds) elements.seconds.innerText = seconds.toString().padStart(2, '0');
    };

    if (document.getElementById('days')) {
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
};

// Active Link Highlighting
const updateActiveLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Favicon Injection
const injectFavicon = () => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'https://via.placeholder.com/32x32/6366f1/ffffff?text=L';
    document.head.appendChild(link);
};

// Smooth Scroll
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    injectSharedUI();
    initScrollMonitoring();
    initRevealEffect();
    initFAQ();
    injectFavicon();
    initSmoothScroll();
    updateActiveLink();

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    initCountdown(targetDate.getTime());
});
