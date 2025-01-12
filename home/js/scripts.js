const dialogContents = {
    profile: `
        <h2>Personal Profile</h2>
        <div class="profile-container">
            <div class="profile-section">
                <h3>About Me</h3>
                <p>I am a passionate individual who loves basketball and cooking. Currently, I am a varsity student taking Information Technology. My dreams include having a comfortable life and being happy.</p>
            </div>
            <div class="profile-section">
                <h3>Education & Skills</h3>
                <p>Currently enrolled in Information Technology, focusing on programming and web development. Experienced in Java, Python, and web technologies.</p>
            </div>
        </div>`,

    portfolio: `
        <h2>Portfolio & Experience</h2>
        <div class="portfolio-container">
            <div class="skills-section">
                <h3>Technical Skills</h3>
                <p>Java, Python, Web Development (HTML, CSS, JavaScript)</p>
                <h3>Projects & Achievements</h3>
                <p>Contributing to open-source projects and academic competitions</p>
            </div>
            <div class="goals-section">
                <h3>Future Goals</h3>
                <p>Committed to continuous learning and making a positive impact through technology</p>
            </div>
        </div>`,

    gallery: `
        <h2>Photo Gallery</h2>
        <div class="gallery-container">
            <button class="nav-btn prev" onclick="changeImage(-1)">❮</button>
            <div class="gallery-main">
                <img id="mainImage" src="images/image1.jpg" alt="Gallery Image">
            </div>
            <button class="nav-btn next" onclick="changeImage(1)">❯</button>
        </div>`,

    guestbook: `
        <h2>Guestbook</h2>
        <form id="guestbookForm" onsubmit="submitGuestbook(event)" class="guestbook-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="rating">Rating:</label>
                <div class="rating">
                    <input type="radio" id="star5" name="rating" value="5" required>
                    <label for="star5">★</label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4">★</label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3">★</label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2">★</label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1">★</label>
                </div>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    `
};

function showContent(contentKey, event) {  // Add event parameter
    // Add fade out effect
    document.querySelectorAll('.content-section.active').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.classList.remove('active');
        }, 300);
    });

    // Show new content with fade in effect
    setTimeout(() => {
        const contentSection = document.getElementById(contentKey);
        if (contentSection) {
            contentSection.innerHTML = dialogContents[contentKey];
            contentSection.classList.add('active');
            contentSection.style.opacity = '1';
            contentSection.style.transform = 'translateY(0)';
        }
    }, 300);

    // Update active state in navigation
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Check if event exists before using it
    if (event) {
        event.currentTarget.classList.add('active');
    }
}

// Add new functions for gallery and form
const galleryImages = [
    'images/image1.jpg',
    'images/image2.jpg'
    // Add more image paths as needed
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = galleryImages[currentImageIndex];
    lightbox.style.display = 'flex';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    const mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = galleryImages[currentImageIndex];
        mainImage.style.opacity = '1';
    }, 200);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function submitGuestbook(event) {
  event.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    rating: document.querySelector('input[name="rating"]:checked').value,
    message: document.getElementById('message').value
  };
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', formData);
  
  // Show success message
  alert('Thank you for your feedback!');
  event.target.reset();
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('gallery').classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeLightbox();
    }
});

// Modified window.onload to properly initialize the first content
window.onload = function() {
    showContent('profile');
    // Add active class to the Personal Profile nav item
    document.querySelector('.nav-menu li:first-child').classList.add('active');
};
