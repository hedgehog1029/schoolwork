$(document).ready(function() {
    
    $("#diary-container").load("https://www.google.com/calendar/embed?src=challoners.org_1e3c7g4qn1kic52usnlbrn63ts%40group.calendar.google.com&ctz=Europe/London #container > *");
    
    var offset1 = $(".menu").height() + $(".header").height();
    $("#bgvid").css("top", offset1);
    
    $(window).resize(function(e) {
        var offset = $(".menu").height() + $(".header").height();
        
        $("#bgvid").css("top", offset);
        $(".universe").css("height", $("#bgvid").height());
        
        if ($(window).innerHeight() < 1000 || $(window).innerWidth() < 1000) {
            $(".sidebar").css("display", "none");
        } else {
            $(".sidebar").css("display", "block");
        }
    });
        
    $(window).scroll(function(e) {
        $(".universe").css("height", $("#bgvid").height());
        if ($(window).scrollTop() > 155) {
            $(".menu").addClass("fixed");
            $(".menu-anchor").addClass("expand");
        } else {
            $(".menu").removeClass("fixed");
            $(".menu-anchor").removeClass("expand");
        }
        
        if ($(window).scrollTop() < 863) {
            removeAllActive();
            $("#home").addClass("active");
        } else if ($(window).scrollTop() > 863) {
            removeAllActive();
            $("#intranet").addClass("active");
        }
    });
});

function removeAllActive() {
    $(".menu ul").children("li").each(function(i) {
        $(this).removeClass("active");
    });
}

function goTo(s) {
    if (s == "home") {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    } else if (s == "advert") {
        $('html, body').animate({
            scrollTop: 870
        }, 1000);
    }
}