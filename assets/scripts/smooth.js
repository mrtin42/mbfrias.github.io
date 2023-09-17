// JavaScript to handle navigation
$(document).ready(function() {
  // Intercept clicks on links with class 'page-link'
  $('.page-link').click(function(event) {
    event.preventDefault();
    var targetPage = $(this).attr('href');
    
    // Load the content of the clicked page into the '.page' container
    $('.wrapper').load(targetPage);
  });
});