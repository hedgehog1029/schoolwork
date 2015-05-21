$(document).ready(function() {
    
    var offset1 = $(".menu").height() + $(".header").height();
    $("#bgvid").css("top", offset1);
    
    $(".universe").css("height", $("#bgvid").height());
    
    $(window).resize(function(e) {
        var offset = $(".menu").height() + $(".header").height();
        
        $("#bgvid").css("top", offset);
        $(".universe").css("height", $("#bgvid").height());
    });
        
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 155) {
            $(".menu").addClass("fixed");
            $(".menu-anchor").addClass("expand");
        } else {
            $(".menu").removeClass("fixed");
            $(".menu-anchor").removeClass("expand");
        }
    });
});