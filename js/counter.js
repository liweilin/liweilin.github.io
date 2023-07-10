var a = 0;
$(window).scroll(function () {
    var $digital = $(".digital"),
        oTop = $digital.offset().top - window.innerHeight,
        oBottom = $digital.offset().top + $digital.outerHeight();
    
    if ($(window).scrollTop() < oTop || $(window).scrollTop() > oBottom) {
        // 捲軸位置在 digital 的範圍之外，歸零計數器
        $(".counter").text("0");
        a = 0;
    } else if (a == 0) {
        // 捲軸位置進入 digital 的範圍，開始計算
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: 0
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 1500,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.ceil(this.countNum).toLocaleString());
                    },
                    complete: function () {
                        $this.text(Math.ceil(this.countNum).toLocaleString());
                    }
                }
            );
        });
        a = 1;
    }
});
