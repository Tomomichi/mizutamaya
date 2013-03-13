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
});
