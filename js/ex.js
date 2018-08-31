    jQuery(".header .open-menu").on("click", function() {
        jQuery(".hamburger-cross").toggleClass("open");
        if (jQuery(".device-sm").is(":visible")) {
            jQuery(".menu").not('.is-open').animate({ width: 'toggle' }, 700, function() {
                jQuery(this).find('.group-container').animate({ opacity: 1 }, 350);
                jQuery(this).addClass("is-open");
            });
            jQuery(".menu.is-open").find('.group-container').animate({ opacity: 0 }, 350, function() {
                jQuery(this).parent().animate({ width: 'toggle' }, 700);
                jQuery(this).parent().removeClass("is-open");
            });
        } else if (jQuery(".device-xs").is(":visible")) {
            jQuery(".menu").slideToggle(700, function() {
                jQuery(this).toggleClass("is-open");
            });
        }
    });

    //Menu/megamenus
    if ((jQuery(".device-md").is(":visible")) || (jQuery(".device-lg").is(":visible"))) {
        jQuery(document).on("click", "a.is-megamenu.inactive[data-megamenu]", function () {

            if ((jQuery(".device-md").is(":visible")) || (jQuery(".device-lg").is(":visible"))) {
            jQuery("a.is-megamenu[data-megamenu] .caret").removeClass("is-open");
            jQuery(this).find(".caret").addClass("is-open");

            jQuery("a.is-megamenu[data-megamenu], .menu .group .is-bordered").removeClass("active").addClass("inactive");
            jQuery(this).addClass("active").removeClass("inactive");
            jQuery(this).parent().addClass("active").removeClass("inactive");

            var toOpen = jQuery(this).attr("data-megamenu");

            if (jQuery(".megamenu").hasClass("open")) {
                jQuery(".megamenu.open").slideUp(400, function () {
                    jQuery(toOpen).slideDown();
                });
            } else {
                jQuery(toOpen).slideDown();
            };

            jQuery(".megamenu").not(jQuery(toOpen)).removeClass("open");
            jQuery(toOpen).addClass("open");

        }
        return false;
    });
    jQuery(document).on("click", "a.is-megamenu.active[data-megamenu]", function () {
        if ((jQuery(".device-md").is(":visible")) || (jQuery(".device-lg").is(":visible"))) {

            jQuery("a[data-megamenu] .caret").removeClass("is-open");

            jQuery(this).addClass("inactive").removeClass("active");
            jQuery(this).parent().addClass("inactive").removeClass("active");

            jQuery(".megamenu").removeClass("open");
            var toClose = jQuery(this).attr("data-megamenu");
            jQuery(toClose).slideUp();
        }
        return false;
    });
    jQuery(".megamenu .close, .menu .group a.is-megamenu.disabled").on("click", function () {
        jQuery(".megamenu").slideUp().removeClass("open");
        jQuery("a[data-megamenu] .caret").removeClass("is-open");
        jQuery("a.is-megamenu[data-megamenu], .menu .group .is-bordered").removeClass("active").addClass("inactive");
    });
    jQuery("a.view-all").on("click", function () {
        jQuery(this).hide();
        jQuery(".megamenu.shop").animate({
            "padding-bottom": "115px"
        });
        jQuery(this).parent().find(".suite").slideDown();

        return false;
    });
    }

