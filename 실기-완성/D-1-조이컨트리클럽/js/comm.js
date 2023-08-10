$(function () {
    // $("#gnb .link-depth1").on("click", function () {
    //     $(".depth1 > li").removeClass("active");
    //     $(this).parent().addClass("active");
    // });

    // // //조건문

    $("#gnb .link-depth1").on("click", function () {
        if ($(this).parent().hasClass("active")) {
            // 만약 active 가지고 있다면
            $(this).parent().removeClass("active");
        } else {
            // 가지고있지않다면
            $(".depth1 > li").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

    //tabs
    $(".tab-tit").on("click", function () {
        $(".tab").removeClass("active");
        $(this).parent(".tab").addClass("active");
    });
});
