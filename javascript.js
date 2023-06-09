$(document).ready(function () {
    // RSS2JSON API endpoint
    var rss2JsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://www.reddit.com/.rss";

    // Fetch the RSS feed using AJAX
    $.ajax({
        url: rss2JsonUrl,
        method: "GET",
        dataType: "jsonp",
        success: function (data) {
            // Parse the JSON response
            var items = data.items;

            // Iterate over each item in the RSS feed
            items.forEach(function (item) {
                var title = item.title;
                var link = item.link;
                var content = item.content;

                // Create a list item with the title, link, and content
                var listItem = $("<li></li>").html("<h3><a href='" + link + "'>" + title + "</a></h3><p>" + content + "</p>");

                // Append the list item to the feed list
                $("#feed-list").append(listItem);
            });
        },
        error: function (xhr, status, error) {
            console.log("Error: " + error);
        }
    });
});
