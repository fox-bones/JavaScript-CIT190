$(".accordion").on("click", function(e) {
    e.preventDefault();
    $(this)
        .next('.panel')
        .not(':animated')
        .slideToggle();
});