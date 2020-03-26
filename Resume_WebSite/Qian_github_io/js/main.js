function display(id){
    var viewelement = document.getElementById(id);
    viewelement.scrollIntoView({behavior: "smooth"});
}


$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
        });
    });