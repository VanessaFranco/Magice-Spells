$(".MS1").click(function() {
    $(".MS1").fadeOut();
});

$(".MS2-clean").hide();
$(".MS2-dirty").click(function() {
    $(".MS2-dirty").hide();
    $(".MS2-clean").fadeIn(); 
});

$(".MS3").click(function() {
    $(".MS3").hide();
});

