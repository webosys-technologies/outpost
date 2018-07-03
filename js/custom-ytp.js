// Video Init
$(document).ready(function() {
    if (!($("html").hasClass("mobile"))) {
        $(".player").mb_YTPlayer();
    }
});
