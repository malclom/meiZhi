(function ($) {

    "use strict";

    /* ==========================================================================
                            check document is ready, then
   ========================================================================== */

    $(document).ready(function () {
        
            var $boyCounter = $(".counter");
            if ($boyCounter.length) {

                $.backstretch([
                             '../assets/images/slider/1.jpg'
                             , '../assets/images/slider/2.jpg'
                             , '../assets/images/slider/3.jpg'
                ],
                         { duration: 4000, fade: 1000 })
                ;

                //enter the last menstrual period date using the date format  year, month, day
                $boyCounter.tictic({
                    date: {
                        year: 2017,
                        month: 7,
                        day: 9
                    },
                    charts: {
                        disableAnimation: true,
                        darkerColor: '#FF69B4',
                        lighterColor: '#FF79B4'
                    }
                });

            }
    });

})(window.jQuery);

