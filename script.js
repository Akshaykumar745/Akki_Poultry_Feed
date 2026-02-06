// ===== NAVBAR FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Update active nav link
    updateActiveNavLink();
});

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        navMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ===== MODAL FUNCTIONS =====
function openLoginModal() {
    closeMenu(); // Close mobile menu when opening modal
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openSignupModal() {
    closeMenu(); // Close mobile menu when opening modal
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToLogin() {
    closeSignupModal();
    openLoginModal();
}

function switchToSignup() {
    closeLoginModal();
    openSignupModal();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// ===== FORM HANDLERS =====
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Store user data in localStorage
    const userData = {
        email: email,
        loggedIn: true,
        timestamp: new Date().toISOString()
    };
    
    if (rememberMe) {
        localStorage.setItem('akki_user', JSON.stringify(userData));
    } else {
        sessionStorage.setItem('akki_user', JSON.stringify(userData));
    }
    
    // Show success message
    alert('Login successful! Welcome back, ' + email);
    closeLoginModal();
    
    // Clear form
    document.querySelector('form[onsubmit="handleLogin(event)"]').reset();
    
    // Update UI to show user is logged in
    updateUIAfterLogin(email);
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (!agreeTerms) {
        alert('Please agree to the terms and conditions');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Validate phone format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Store user data
    const userData = {
        name: name,
        email: email,
        phone: phone,
        loggedIn: true,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('akki_user', JSON.stringify(userData));
    
    // Show success message
    alert('Account created successfully! Welcome, ' + name);
    closeSignupModal();
    
    // Clear form
    document.querySelector('form[onsubmit="handleSignup(event)"]').reset();
    
    // Update UI
    updateUIAfterLogin(email);
}

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    const consent = document.getElementById('contact-consent').checked;
    
    if (!consent) {
        alert('Please consent to receive responses');
        return;
    }
    
    // Store contact message
    const contactData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    let contacts = JSON.parse(localStorage.getItem('akki_contacts')) || [];
    contacts.push(contactData);
    localStorage.setItem('akki_contacts', JSON.stringify(contacts));
    
    // Show success message
    alert('Thank you for contacting us! We will get back to you soon.');
    event.target.reset();
}

function updateUIAfterLogin(userEmail) {
    // This function can be extended to update the UI with user-specific content
    console.log('User logged in:', userEmail);
}

// ===== PRODUCT FILTERING =====
function filterProducts(category) {
    const products = document.querySelectorAll('.full-product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    products.forEach(product => {
        if (category === 'all') {
            product.classList.remove('hidden');
            product.style.animation = 'fadeIn 0.3s ease';
        } else {
            if (product.getAttribute('data-category') === category) {
                product.classList.remove('hidden');
                product.style.animation = 'fadeIn 0.3s ease';
            } else {
                product.classList.add('hidden');
            }
        }
    });
}

// ===== CART FUNCTIONS =====
function addToCart(productName, price) {
    // Get existing cart or create new one
    let cart = JSON.parse(localStorage.getItem('akki_cart')) || [];
    
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    // Save updated cart
    localStorage.setItem('akki_cart', JSON.stringify(cart));
    
    // Show notification
    showCartNotification(productName);
}

function showCartNotification(productName) {
    // Create and show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    
    notification.textContent = '✓ ' + productName + ' added to cart!';
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== UTILITY FUNCTIONS =====
function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('akki_cart')) || [];
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('akki_cart')) || [];
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function clearCart() {
    localStorage.removeItem('akki_cart');
    alert('Cart cleared!');
}

// ===== SCROLL ANIMATIONS =====
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(event) {
    // Press 'L' to open login
    if (event.key === 'l' && event.ctrlKey) {
        event.preventDefault();
        openLoginModal();
    }
    
    // Press 'S' to open signup
    if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
        openSignupModal();
    }
    
    // Press 'Esc' to close modals
    if (event.key === 'Escape') {
        closeLoginModal();
        closeSignupModal();
    }
});

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', function() {
    // Add fade-in animation to page
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// ===== LOCAL STORAGE UTILITIES =====
function saveUserPreferences(preferences) {
    localStorage.setItem('akki_preferences', JSON.stringify(preferences));
}

function getUserPreferences() {
    return JSON.parse(localStorage.getItem('akki_preferences')) || {};
}

function isUserLoggedIn() {
    return localStorage.getItem('akki_user') !== null || sessionStorage.getItem('akki_user') !== null;
}

function getUserData() {
    const data = localStorage.getItem('akki_user') || sessionStorage.getItem('akki_user');
    return data ? JSON.parse(data) : null;
}

// ===== THEME TOGGLE (OPTIONAL) =====
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ===== FORM VALIDATION HELPERS =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function validatePassword(password) {
    // Password must be at least 6 characters
    return password.length >= 6;
}

// ===== SMOOTH SCROLL HELPER =====
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and update UI accordingly
    if (isUserLoggedIn()) {
        const user = getUserData();
        console.log('Welcome back:', user.name || user.email);
    }
    
    // Initialize smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== PRINT CART FUNCTION (for debugging) =====
function printCart() {
    const cart = JSON.parse(localStorage.getItem('akki_cart')) || [];
    console.log('Current Cart:', cart);
    console.log('Total Items:', getCartCount());
    console.log('Total Price:', getCartTotal());
}

// ===== LOGOUT FUNCTION =====
function logout() {
    localStorage.removeItem('akki_user');
    sessionStorage.removeItem('akki_user');
    alert('You have been logged out!');
    location.reload();
}

// ===== ADMIN FUNCTIONS (for demonstration) =====
function getAllContacts() {
    return JSON.parse(localStorage.getItem('akki_contacts')) || [];
}

function printAllContacts() {
    const contacts = getallContacts();
    console.log('All Contact Messages:', contacts);
}

// ===== MOBILE SPECIFIC FEATURES =====

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
}

// Disable body scroll when modal is open (mobile optimization)
function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
}

function enableBodyScroll() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    document.body.style.width = '100%';
}

// Override modal open functions to handle mobile scroll
const originalOpenLoginModal = openLoginModal;
openLoginModal = function() {
    originalOpenLoginModal();
    if (isMobileDevice()) {
        disableBodyScroll();
    }
}

const originalCloseLoginModal = closeLoginModal;
closeLoginModal = function() {
    originalCloseLoginModal();
    if (isMobileDevice()) {
        enableBodyScroll();
    }
}

const originalOpenSignupModal = openSignupModal;
openSignupModal = function() {
    originalOpenSignupModal();
    if (isMobileDevice()) {
        disableBodyScroll();
    }
}

const originalCloseSignupModal = closeSignupModal;
closeSignupModal = function() {
    originalCloseSignupModal();
    if (isMobileDevice()) {
        enableBodyScroll();
    }
}

// Mobile touch optimization for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        btn.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
});

// Improve form input experience on mobile
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (isMobileDevice()) {
                // Scroll the input into view on mobile
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });
});

// Mobile-friendly notification
function showMobileNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 10px;
        right: 10px;
        background: linear-gradient(135deg, #FF6B35 0%, #ff8c42 100%);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideInUp 0.3s ease;
        font-weight: 600;
        text-align: center;
        max-width: calc(100% - 20px);
        word-wrap: break-word;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Add slide animations for mobile notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(100px);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Override cart notification to use mobile-friendly version
const originalShowCartNotification = showCartNotification;
showCartNotification = function(productName) {
    if (isMobileDevice()) {
        showMobileNotification('✓ ' + productName + ' added to cart!');
    } else {
        originalShowCartNotification(productName);
    }
}

// Detect orientation change and handle accordingly
window.addEventListener('orientationchange', function() {
    // Allow browser to update orientation
    setTimeout(() => {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (isMobileDevice()) {
            enableBodyScroll();
        }
    }, 100);
});

// Handle viewport size changes
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && !isMobileDevice()) {
            navMenu.classList.remove('active');
        }
    }, 250);
});

// Mobile performance optimization - defer non-critical images
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    });
}

// Add swipe gesture detection for mobile navigation
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const navMenu = document.querySelector('.nav-menu');
    // Swipe right to open menu
    if (touchEndX < touchStartX - 50 && navMenu) {
        navMenu.classList.remove('active');
    }
    // Swipe left to close menu (reserved for future use)
}

// Mobile viewport optimization
function optimizeViewport() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && isMobileDevice()) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
    }
}

document.addEventListener('DOMContentLoaded', optimizeViewport);

// Prevent iOS zoom on input focus
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (isMobileDevice() && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
                // Zoom to 100% to prevent auto-zoom on iOS
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
            }
        });
    });
});

