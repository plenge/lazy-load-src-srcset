/*======================================
    LAZYLOAD IMAGES
*/

function lazyload_src() {

    // How far away from your viewport the image starts loading in pixels.
    var loadDistance = 100

    jQuery('.lazyload').each(function () {
        if (jQuery(this).offset().top < (jQuery(window).scrollTop() + jQuery(window).height() + loadDistance)) {
            var srcset = jQuery(this).attr('data-srcset');
            var src = jQuery(this).attr('data-src');
            jQuery(this).attr('srcset', srcset);
            jQuery(this).attr('src', src).removeClass('lazyload');
        }
    })

    jQuery('.lazyload-bg').each(function () {
        if (jQuery(this).offset().top < (jQuery(window).scrollTop() + jQuery(window).height() + loadDistance)) {
            var src = jQuery(this).attr('data-src');
            jQuery(this).css('background-image', 'url("' + src + '")').removeClass('lazyload-bg');
        }
    })
}

lazyload_src();

jQuery(window).on('scroll', function () {
    lazyload_src();
});