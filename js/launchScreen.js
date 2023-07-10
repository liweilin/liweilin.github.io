$(document).ready(function () { // 獲取最後更新時間戳
	var lastUpdated = sessionStorage.getItem('lastUpdated');
	// 如果最後更新時間戳與頁面載入時間戳相同，則不顯示 loading 頁面
	if (lastUpdated === performance.timeOrigin.toString()) {
		$('.launchScreen').remove();
	} else { // 否則顯示 loading 頁面
		$('html, body').css('overflow', 'hidden');
		setTimeout(function () {
			$('.launchScreen').find('.ci').addClass('trans');
		}, 1000);
		// 等待所有內容載入完畢
		$(window).on('load', function () { // 3 秒後移除 loading 頁面
			setTimeout(function () {
				$('.launchScreen').addClass('hide');
			}, 2000);
			setTimeout(function () {
				$('.launchScreen').remove();
			}, 2450);
			setTimeout(function () {
				$('html, body').removeAttr("style");
			}, 2650);
		});
	}
	// 更新最後更新時間戳
	sessionStorage.setItem('lastUpdated', performance.timeOrigin.toString());
});

