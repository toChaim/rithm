$(document).ready(function () {
	$('#boombox').on('click', function () {
		$p = $(this).children('p').eq(0);
		$p.css('visibility', 'visible')

		var radius = Math.floor(Math.random()*75) + 50;
		makeBoom($(this), radius);

		function makeBoom($obj, radius) {
			var $boom = $('<div>', {
				class: 'explosion',
				width: '0px',
				height: '0px',
			});

			$obj.append($boom)

			$boom.animate({ 
				width: radius,
				height: radius,
				left: '-=' + (radius)/2,
				top: '-=' + (radius)/2, 
			}, 2000);
		}
	});

	$('#reset').on('click', function () {
		$('.explosion').remove();
	});

});