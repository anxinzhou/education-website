/*
    Revolution Slider Integration
*/

$(document).ready(function(){
// use jQuery correctly with strict
    (function($) {
        "use strict";
        // your code

    /*----------------------------------------------------*/
    /*  Main Slider
    /*----------------------------------------------------*/
        jQuery('.main_slider').revolution({
            delay:5000,
            startwidth:960,
            startheight:835,
            startWithSlide:0,

            fullScreenAlignForce:"off",
            autoHeight:"off",
            minHeight:"off",

            shuffle:"off",

            onHoverStop:"on",
            lazyLoad:"on",

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:3,

            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResoluition:0,

            hideThumbs:0,
            hideTimerBar:"on",

            // keyboardNavigation:"on",

            // navigationType:"none",
            navigationArrows:"none",
            navigationStyle:"round-old",
            navigationHAlign:"right",
            navigationVAlign:"bottom",
            navigationHOffset:30,
            navigationVOffset:30,

            // navigation: {
            //     keyboardNavigation: "off",
            //     keyboard_direction: "horizontal",
            //     mouseScrollNavigation: "off",
            //     onHoverStop: "on",
            //     touch: {
            //         touchenabled: "off",
            //         touchOnDesktop: "off",
            //         swipe_treshold: 75,
            //         swipe_min_touches: 1,
            //         drag_block_vertical: !1,
            //         swipe_direction: "horizontal"
            //     },
            //     // arrows: {
            //     //     style: "",
            //     //     enable: false,
            //     //     hide_onmobile: !1,
            //     //     hide_onleave: !0,
            //     //     hide_delay: 200,
            //     //     hide_delay_mobile: 1200,
            //     //     hide_under: 0,
            //     //     hide_over: 9999,
            //     //     tmp: "",
            //     //     rtl: !1,
            //     //     left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0, container: "slider"},
            //     //     right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0, container: "slider"}
            //     // },
            //     bullets: {
            //         container: "slider",
            //         rtl: !1,
            //         style: "",
            //         enable: true,
            //         hide_onmobile: !1,
            //         hide_onleave: !0,
            //         hide_delay: 200,
            //         hide_delay_mobile: 1200,
            //         hide_under: 0,
            //         hide_over: 9999,
            //         direction: "horizontal",
            //         h_align: "right",
            //         v_align: "right",
            //         space: 0,
            //         h_offset: 20,
            //         v_offset: 0,
            //         tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
            //     },
            // },

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"bottom",
            soloArrowLeftHOffset:0,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"bottom",
            soloArrowRightHOffset:0,
            soloArrowRightVOffset:0,


            touchenabled:"on",
            swipe_velocity:"0.7",
            swipe_max_touches:"1",
            swipe_min_touches:"1",
            drag_block_vertical:"false",

            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
            parallaxDisableOnMobile:"off",

            stopAtSlide:-1,
            stopAfterLoops:-1,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            hideSliderAtLimit:0,

            dottedOverlay:"none",

            spinned:"spinner4",

            fullWidth:"on",
            forceFullWidth:"on",
            fullScreen:"off",
            fullScreenOffsetContainer:"#topheader-to-offset",
            fullScreenOffset:"0px",
            panZoomDisableOnMobile:"off",

            simplifyAll:"off",

            shadow:0
        })



    })(jQuery)
})
