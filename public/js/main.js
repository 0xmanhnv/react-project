$(document).ready(function() {   
    // xử lý draer-menu
    $('#btn-drawer-open').click(function() {
        openNav();
         
    });
    $("#btn-drawer-close").click(function() {
        closeNav();
    })

    $('#overlay-menu').click(function() {
        closeNav();
    });

    function closeNav() {
        $('#overlay-menu').hide();
        $('#side-nav-mobile').css({
            'left': '-250px',
        });
    }
    function openNav() {
        $('#side-nav-mobile').css({
            'left': '0',
        });
        $('#overlay-menu').show();
    }
    // end draer-menu
});