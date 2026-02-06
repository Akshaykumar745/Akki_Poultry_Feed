# Akki Poultry Feed - Interactive Website

Welcome to the Akki Poultry Feed website! This is a fully responsive, interactive website for a poultry feed business with multiple pages, navigation, login/signup features, and more.

## 🌟 Features

### 1. **Multi-Page Navigation**
   - Home page with hero section and featured products
   - Products page with filter functionality
   - About page with company information and team details
   - Contact page with contact form and FAQ section

### 2. **Translucent Navbar**
   - Beautiful translucent (glassmorphic) navigation bar
   - Logo with poultry egg icon
   - Active page indicator
   - Responsive hamburger menu for mobile devices
   - Quick access login/signup buttons

### 3. **Icons**
   - FontAwesome 6.4.0 integration for beautiful icons
   - Icons for products, features, social media, and more
   - Custom icon styling with primary colors

### 4. **Authentication Features**
   - **Login Modal**: Email and password login with "Remember Me" option
   - **Sign Up Modal**: Full registration form with password confirmation
   - Form validation on both frontend
   - User data stored in browser's localStorage
   - Login state persistence

### 5. **Interactive Elements**
   - Product filtering by category
   - Add to cart functionality
   - Cart notifications
   - Smooth scrolling
   - Modal animations
   - Hover effects on cards and buttons
   - Form validation

### 6. **Responsive Design**
   - Mobile-first approach
   - Optimized for desktop, tablet, and mobile devices
   - Hamburger menu for mobile navigation
   - Responsive grid layouts

### 7. **User Experience**
   - Smooth animations and transitions
   - Intersection Observer for scroll animations
   - Toast notifications
   - Keyboard shortcuts (Ctrl+L for login, Ctrl+S for signup, Esc to close modals)
   - Professional color scheme

## 📁 Project Structure

```
Akki/
├── index.html          # Home page
├── products.html       # Products page with filtering
├── about.html          # About page with company info
├── contact.html        # Contact page with form and FAQ
├── styles.css          # All styling and animations
├── script.js           # All functionality and interactivity
└── README.md           # This file
```

## 🚀 How to Use

### 1. **Opening the Website**
   - Open any HTML file (e.g., `index.html`) in your web browser
   - The website will open with a beautiful translucent navbar at the top

### 2. **Navigation**
   - Use the navbar to navigate between pages
   - On mobile, click the hamburger menu (☰) to see all pages
   - Click on any page to navigate to it

### 3. **Login & Sign Up**
   - Click "Login" button to open the login modal
   - Click "Sign Up" button to create a new account
   - Fill in the required information
   - The form will validate your input before submission

### 4. **Products**
   - Go to the Products page to see all products
   - Use filter buttons to filter products by category:
     - All Products
     - Layer Feed
     - Broiler Feed
     - Chick Starter
   - Click "Add to Cart" to add products to your cart
   - A notification will appear confirming the addition

### 5. **Contact**
   - Visit the Contact page to get in touch
   - Fill out the contact form with your details
   - Select a subject from the dropdown
   - Submit your message
   - Check the FAQ section for common questions

### 6. **About**
   - Learn about the company's mission, vision, and values
   - See the team members
   - Understand why you should choose Akki Poultry Feed

## 🎨 Color Scheme

- **Primary Color**: `#FF6B35` (Orange) - Used for buttons and accents
- **Secondary Color**: `#004E89` (Dark Blue) - Used for headings and text
- **Accent Color**: `#1BA098` (Teal) - Used for special elements
- **Dark Background**: `#0B1929` (Dark Navy) - For navbar and footer
- **Light Background**: `#F5F7FA` (Light Gray) - For section backgrounds

## 💾 Data Storage

The website uses the browser's **localStorage** to save:
- **User data**: Login/signup information
- **Cart items**: Products added to cart
- **Contact messages**: Messages sent through the contact form
- **User preferences**: Theme and other preferences

### Accessing Stored Data (in Browser Console)
```javascript
// View logged-in user
JSON.parse(localStorage.getItem('akki_user'))

// View cart items
JSON.parse(localStorage.getItem('akki_cart'))

// View contact messages (admin)
JSON.parse(localStorage.getItem('akki_contacts'))
```

## ⌨️ Keyboard Shortcuts

- **Ctrl + L**: Open Login modal
- **Ctrl + S**: Open Sign Up modal
- **Esc**: Close any open modal

## 🎯 Products Available

### Layer Feed
- Layer Feed Premium (₹450/bag)
- Layer Feed Standard (₹400/bag)

### Broiler Feed
- Broiler Feed Starter (₹520/bag)
- Broiler Feed Finisher (₹480/bag)

### Chick Starter
- Chick Starter Feed (₹380/bag)
- Chick Grower Feed (₹420/bag)

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #004E89;
    --accent-color: #1BA098;
    /* ... other colors ... */
}
```

### Change Company Information
Update contact details in the footer and contact page:
- Phone number
- Email address
- Physical address
- Business hours

### Add New Products
1. Add a new product card in `products.html`
2. Use the `data-category` attribute to assign it a category
3. Products will automatically filter with the existing filter buttons

### Modify Styling
All styling is in `styles.css`. The file is organized with clear sections for:
- Global styles
- Navbar
- Hero section
- Features
- Products
- Forms
- Modals
- Responsive design
- Animations

## 📱 Mobile Responsive

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎬 Animations

The website includes several smooth animations:
- Fade-in animations
- Slide-in animations
- Hover effects
- Scroll animations (cards appear as you scroll)
- Modal animations
- Button transitions

## 🔐 Security Notes

⚠️ **Important**: This is a frontend-only website. For production use:
- Implement backend authentication with a secure server
- Never store passwords in localStorage
- Use HTTPS for all communications
- Implement proper password hashing and encryption
- Add server-side validation

## 🐛 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Form Validation Rules

### Login Form
- Email must be valid format
- Password must not be empty

### Sign Up Form
- Name must not be empty
- Email must be valid format
- Phone must be 10 digits
- Password must be at least 6 characters
- Passwords must match
- Must agree to terms

### Contact Form
- All fields are required
- Email must be valid format
- Phone must be 10 digits
- Must consent to receive responses

## 🚀 Tips for Enhancement

1. **Add a backend**: Connect to a real database for user accounts
2. **Payment integration**: Add shopping cart and payment gateway
3. **Email notifications**: Send confirmation emails for sign-ups and orders
4. **Admin panel**: Create admin features to manage products and orders
5. **Blog section**: Add a blog for poultry care tips
6. **Image gallery**: Add high-quality product images
7. **Maps integration**: Embed Google Maps for location
8. **Live chat**: Add customer support chat feature

## 📞 Contact Information

The website displays placeholder contact information. Update these with real details:
- Phone: +91 XXXXX XXXXX
- Email: info@akkipoultry.com
- Address: 123 Farm Road, Agricultural Area

## 📄 License

This website template is provided as-is for use by Akki Poultry Feed.

## 🎓 Learning Resources

This website demonstrates:
- HTML5 semantic markup
- Modern CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Local Storage API
- Form validation
- Responsive design
- Modal implementation
- Event handling
- Smooth scrolling
- Component-based design

---

**Enjoy your new Akki Poultry Feed website! 🎉**
