// Show the modal with the clicked image
function showImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = img.src;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}



    // Get references to the navbar and footer
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('footer'); // Make sure your footer has the <footer> tag

    // Function to hide or show the navbar based on scroll position
    function handleScroll() {
        const footerTop = footer.offsetTop; // Get the top position of the footer
        const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position + window height

        // If the scroll position is near the footer, hide the navbar
        if (scrollPosition >= footerTop) {
            navbar.style.top = `-${navbar.offsetHeight}px`; // Move the navbar off-screen
        } else {
            navbar.style.top = '0'; // Bring the navbar back to the top
        }
    }

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

