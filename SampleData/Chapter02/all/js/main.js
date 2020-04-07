$(function(){
/*CSSの変更*/
	$('#typo .inner').css('transform', 'rotate(10deg)');

	$('.page-main > div:nth-child(1) .inner').css('opacity', '0.5');
/*タイミングのコントロール*/
	$('#typo').on('mouseover', function(){
		$('#typo').css({
			backgroundColor: '#ae5e9b',
			color: '#ebc000'
		});
	});
	$('#typo').on('mouseout', function(){
		$('#typo').css({
			backgroundColor: '',
			color: ''
		});
	});

	$('#typo').on('click', function(){
			$('header').css('color', '#ae5e9b')
	});
/*メソッドチェーン*/
	$('#typo')
	.on('mouseover', function(){
		$('#typo').animate({
		color: '#ebc000',
		backgroundColor: '#ae5e9b'
		},
		500
		);
	})
	.on('mouseout', function(){
		$('#typo').stop(true).animate({
		color: '',
		backgroundColor: '#3498db'
		},
		500
		);
	});
/*アニメーション*/
	$('#typo .inner')
		.css('top', '-100px')
		.on('click', function(){
			$('#typo .inner').stop(true).animate({
			top: '100px'
		},
		1500,
		function(){
			$('#typo .inner').animate({top: '0px'}, 500);
		}
		);
	});
});
