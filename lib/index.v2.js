//轮播图初始化
var owl_carousel_func = function (idName) {
	$(idName).owlCarousel({
		loop: true,
		autoWidth: true,
		autoplay: true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		nav: true, // Show next and prev buttons
		navSpeed: 300,
		//paginationSpeed: 400,
		items:1,
		lazyLoad: true,
		rewind: true,
		lazyLoadEager: 100,
		navText: ["<i class='icon-gotop btnicon'></i>", "<i class='icon-gotop btnicon'></i>"]
	});

	$(idName).hover(function () {
		$(idName + " .owl-nav>button").show();
	}, function () {
		$(idName + " .owl-nav>button").hide();
	});
};
owl_carousel_func("#focus-owl-wrap-1");
owl_carousel_func("#focus-owl-wrap-2");
owl_carousel_func("#focus-owl-wrap-3");

/*var noMoreNews = false;
// 自定义滚动条
function initNewsScroll() {
    $(".scrollbar").scrollbar({
        "onScroll": function(y, x) {
            //return;
            if(!noMoreNews && y.scroll == y.maxScroll) {
                $.post({
                    url: "/getmorenews?ot=" + lastOt,
                    dataType: "json",
                    success: function(result) {
                        if (result.success) {
                            //debugger;
                            $("#nnews .bottom .spinner").hide();
                            $("#nnews .t-b ul.nl").last().after(result.content.html);
                            $("#nnews .bottom .spinner").show();

                            lastOt = result.content.lastOt;
                            if (result.content.noMore) {
                                $("#nnews .bottom .spinner").hide();
                                $("#nnews .bottom .no-more").show();
                                noMoreNews = true;
                            }
                        }
                    }
                });
            }
        }
    });
}

initNewsScroll();

$("#nnews .nl li").hover(function() {
    $("#nnews .scroll-wrapper").addClass("width2");
    $("#nnews .scroll-content").addClass("width2");
}, function() {
    $("#nnews .scroll-wrapper").removeClass("width2");
    $("#nnews .scroll-content").removeClass("width2");
});
$("#n-p i").click(function() {
    var index = parseInt($(this).text()) - 1;
    $("#news .t-b").removeClass("sel");
    $($("#news .t-b")[index]).addClass("sel");
    $("#n-p i").removeClass("sel");
    $(this).addClass("sel");

    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({scrollTop: $('#news').offset().top - 5}, 300);
});*/