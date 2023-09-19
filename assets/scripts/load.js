// Add a click event handler to the anchor element
$('.page-link').on('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    // Get the href attribute of the clicked link
    var url = $(this).attr('href');
    
    // Now, you can use the 'url' variable in your AJAX request
    $.ajax({
        url: url,
        success: function(data) {
            // Assuming you have a container with id 'wrapper'
            $('#wrapper').html(data);
        
            // Fade in the new content
            $('#wrapper').children().addClass('hide').removeClass('hide', 1000);
        }
    });
});
