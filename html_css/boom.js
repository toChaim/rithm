$(document).ready(function () {
	$('#boombox').on('click', function () {
		$p = $(this).children('p').eq(0);
		$p.css('visibility', 'visible')

		var $boom = $('<div>', {
			class: 'explosion',
			width: '5px',
			height: '5px',
		});
		$(this).append($boom);
	})
});