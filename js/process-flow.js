

$(document).ready(function(){

	setTimeout(function() {
		$('.work-step .work-order').eq(0).fadeIn(100, function() {
			$('.work-step .work-title').eq(0).fadeIn(100, function() {
				$('.line-top').animate({
						width: "+=26%"
					}, 1500, function() {
					$('.work-step .work-order').eq(1).fadeIn(100, function() {
						$('.work-step .work-title').eq(1).fadeIn(100, function() {
							$('.line-top').animate({
								width: "+=24%"
							}, 1500, function() {
								$('.work-step .work-order').eq(2).fadeIn(100, function() {
									$('.work-step .work-title').eq(2).fadeIn(100, function() {
										$('.line-top').animate({
											width: "+=30%"
										}, 1500, function() {
											$('.work-step .work-order').eq(3).fadeIn(100, function() {
												$('.work-step .work-title').eq(3).fadeIn(100, function() {
													$('.line-middle').animate({
														width: "+=81%"
													}, 1500, function() {
														$('.work-step .work-order').eq(4).fadeIn(100, function() {
															$('.work-step .work-title').eq(4).fadeIn(100, function() {
																$('.line-bottom').animate({
																	width: "+=26%"
																}, 1500, function() {
																	$('.work-step .work-order').eq(5).fadeIn(100, function() {
																		$('.work-step .work-title').eq(5).fadeIn(100, function() {
																			$('.line-bottom').animate({
																				width: "+=24%"
																			}, 1500, function() {
																				$('.work-step .work-order').eq(6).fadeIn(100, function() {
																					$('.work-step .work-title').eq(6).fadeIn(100, function() {
																						$('.line-bottom').animate({
																							width: "+=30%"
																						}, 1500, function() {
																							$('.work-step .work-order').eq(7).fadeIn(100, function() {
																								$('.work-step .work-title').eq(7).fadeIn(100);
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}, 1000);





	var percentDiv = detectWidthReferenceInMobile();
	if(percentDiv > 98.5 && percentDiv <= 100) {
		$('#references .reference').each(function(index){
			$(this).after($('.reference-content[data-order="' + (index+1) + '"]'));
		});

		$('#team .team-box').each(function(index){
			$(this).removeClass('float-shadow');
		});
	}



	// point hover on the reference
	$('.work-step').hover(function() {
		$(this).find('.work-order').addClass('wow animated pulse');
	}, function() {
		$(this).find('.work-order').removeClass('wow animated pulse');
	});


});

function detectWidthReferenceInMobile() {
	var divWidth = $('.reference').width();
	var parentDivWidth = $('.reference').offsetParent().width();
	var percentDiv = 100*divWidth/parentDivWidth;
	return percentDiv;
}