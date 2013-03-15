$(function() {
	var topBtn = $('#page-top');
	topBtn.hide();
	//ちょっとでもスクロールしたらシャドウ表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$("#top").addClass("shadow");
		} else {
			$("#top").removeClass("shadow");
		}
	});

	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//スムーズスクロール
	$('a[href^=#]').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 165;
		$('body').animate({scrollTop:position}, speed, 'swing');
		$("#top").removeClass("shadow");
		return false;
	});

	$(".rslides").responsiveSlides({
		pager: true,
		nav: true,
		namespace: "centered-btns",
	});
});
