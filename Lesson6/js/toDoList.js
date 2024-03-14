var listCount = $("#list").find("li").length;
$("#button").click(function() {
    var input = $("#input").val();

    // appending list item to html
    $("#list").append('<li id="item' + listCount + '">\n' + '<p>' + input + '</p>\n' + 
        '<img src="media/trash-solid.svg" width="15px">\n' + '</li>');
    $("#input").val("");
    listCount = $("#list").find("li").length;

    // adding a delete function to all items
    for (let i = 0; i <= listCount; i++) {
        $("#item" + i).on("click", function() {
            $(this).remove();
            listCount = $("#list").find("li").length;
            // updating list count when an item is removed
            $("#list-count").text("Items in list: " + listCount);
        });
    }

    // updating list count when an item is added
    listCount = $("#list").find("li").length;
    $("#list-count").text("Items in list: " + listCount);
});
// -----------------------------------------------------------------------------------------------------
//same function as above added to Enter key
$("#input").keypress(function(e) {
    if (e.which == 13) {
        var input = $("#input").val();

        // appending list item to html
        $("#list").append('<li id="item' + listCount + '">\n' + '<p>' + input + '</p>\n' + 
            '<img src="media/trash-solid.svg" width="15px">\n' + '</li>');
        $("#input").val("");
        listCount = $("#list").find("li").length;

        // adding a delete function to all items
        for (let i = 0; i <= listCount; i++) {
            $("#item" + i).on("click", function() {
                $(this).remove();
                listCount = $("#list").find("li").length;
                // updating list count when an item is removed
                $("#list-count").text("Items in list: " + listCount);
            });
        }
        // updating list count when an item is added
        listCount = $("#list").find("li").length;
        $("#list-count").text("Items in list: " + listCount);
    }
});