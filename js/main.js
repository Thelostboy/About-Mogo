$(document).ready(function () {
    $(".panel-heading").click(function (e) { 
        e.preventDefault();
        $(this).find('.fa-chevron-down').toggle();
        $(this).find(".fa-chevron-up").toggle();
    });
});