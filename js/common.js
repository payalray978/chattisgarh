    const toggleIcon = document.getElementById('toggleIcon');
    const filterSection = document.querySelector('.filter');

    // Function to toggle the filter section visibility and icon
    function toggleFilterSection() {
      if (filterSection.style.display === 'block' || filterSection.style.display === '') {
        // Show filter section
        filterSection.style.display = 'none';
        // Change icon to upward chevron
        toggleIcon.classList.remove('bi-chevron-double-up');
        toggleIcon.classList.add('bi-chevron-double-down');
      } else {
        // Hide filter section
        filterSection.style.display = 'block';
        // Change icon to downward chevron
        toggleIcon.classList.remove('bi-chevron-double-down');
        toggleIcon.classList.add('bi-chevron-double-up');
      }
    }

    // Add event listener to toggle the filter section when the icon is clicked
    toggleIcon.addEventListener('click', toggleFilterSection);


      
                            // function confirmSwitch(url) {
                            //     var confirmation = confirm("Are you sure you want to switch the unit?");
                            //     if (confirmation) {
                            //         window.location.href = url; // Redirect to the selected page
                            //     }
                            //     return false; // Prevent the default link behavior
                            // }
    // var selectedUrl = "";

    //     // Open the modal and store the URL to be redirected to
    //     function openModal(url) {
    //         selectedUrl = url; // Store the URL
    //         var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    //         myModal.show(); // Show the modal
    //     }

    //     // Confirm and redirect to the stored URL
    //     document.getElementById('confirmBtn').addEventListener('click', function() {
    //         window.location.href = selectedUrl; // Redirect to the selected URL
    // });
    
function openModal(url) {
    // Store the URL to be used after confirmation
    window.selectedUrl = url;

    // Show the modal using Bootstrap's Modal API
    var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    myModal.show();
}

// Directly handle the click event for the confirm button inside the modal
function confirmSwitch() {
    if (window.selectedUrl) {
        window.location.href = window.selectedUrl; // Redirect to the selected URL
    }
}




