$(document).ready(function() {
    var url = "{{ page.url }}";
    
    $("#navigation").children().each(function(key){
        if ($(this).find("a").data("page-url") === url) {
            $(this).addClass("active");
        }
    });
});