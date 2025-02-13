window.$ = window.jQuery = $;

$(document).ready(function () {
    $('.container').on('mouseenter', function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow', function() {
            $('.custom-box').css('z-index', '10');
        });
    }).on('mouseleave', function () {
        $('.custom-box').css('z-index', '1');
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    const heartBox = document.getElementById("heartBox");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    heartBox.addEventListener("click", function() {
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

window.onYes = function() {
    window.location.href = "mailto:jean.dlcr@gmail.com?subject=Invitación San Valentín&body=Encantada";
};
