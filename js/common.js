    const toggleIcon = document.getElementById('toggleIcon');
    const filterSection = document.querySelector('.filter');

    // Function to toggle the filter section visibility and icon
    function toggleFilterSection() {
      if (filterSection.style.display === 'none' || filterSection.style.display === '') {
        // Show filter section
        filterSection.style.display = 'block';
        // Change icon to upward chevron
        toggleIcon.classList.remove('bi-chevron-double-down');
        toggleIcon.classList.add('bi-chevron-double-up');
      } else {
        // Hide filter section
        filterSection.style.display = 'none';
        // Change icon to downward chevron
        toggleIcon.classList.remove('bi-chevron-double-up');
        toggleIcon.classList.add('bi-chevron-double-down');
      }
    }

    // Add event listener to toggle the filter section when the icon is clicked
    toggleIcon.addEventListener('click', toggleFilterSection);