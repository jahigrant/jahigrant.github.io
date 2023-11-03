/**
 * JQLoader
 *
 * JQLoader is a Jquery plugin to show a loading bar, or full screen loading
 *
 * @package Core
 * @author Gemblue
 */


var w = window.innerWidth;
var h = window.innerHeight;

(function ( $ ) {

    $.fn.JQLoader = function( options ) {

        var settings = $.extend({
            theme: "standard",
			mask: true,
			background: "#444",
			color: "#fff",
			action: "open"
        }, options);

		// Reset all class, prevent double dom
		$('.loading').remove();

		if (settings.theme == 'standard')
		{
			// Action
			if (settings.action == 'close')
			{
				// $('.loading_box').hide();
				// $('.loading_mask').hide();
				 
				$(".loading_mask").fadeOut(3000);
				$(".loading_box").fadeOut(3000);
				return false;
			}

			// Mask option
			if (settings.mask == true)
			{
					var overlay = $(
						`<div class="loading_mask loading">
						
						</div>`
					).css({
					'background-color': "#444",
					'opacity': 1,
					'width':w,
					'height':h,
					'position':'fixed',
					'top':'0px',
					'left':'0px',
					'overflow': "hidden",
					'z-index':88888
				});

				// Append and call mask element
				this.append(overlay);
				$('.loading_mask').fadeIn(500);
			}

			// Set lood element
			this.append(`
				<div class='loading_box loading'>
				<div id="loadingProgress">
				<div id="loadingBar"></div>
			  </div>
				Please wait..</div>
			`);

			// Style set
			$('.loading_box').css({
				'position':'fixed',
				'top':this.height() / 2,
				'left': (this.width() / 2) - ( 100 / 2),
				'cursor': "pointer",
				'overflow': "hidden",
				'z-index':99999,
				'width':100,
				'color': "#fff"
			});

			// Show lood
			$('.loading_box').show();
		}
		else if (settings.theme == 'bottom')
		{
			if (settings.action == 'close')
			{
				$(".loading-bottom").animate(
					{ opacity: 0 }, {
						duration: 500,
						complete: function() {
						}
					}
				);
				setTimeout(function() {
					$(".loading-bottom").animate(
						{ left: -window_width }, {
							duration: 100,
							easing: 'linear',
							complete: function() {
								$(".loading-text-img").hide();
							}
						}
					);
				}, 500);

				return true;
			}
			else
			{
				// Set element
				lood_div = "<div class='loading-bottom loading'><div class='loading-text-img loading'>Please wait..</div></div>";
				$('body').append(lood_div);

				// Set style
				$(".loading-bottom").css("background", "#444");
				$(".loading-bottom").css("opacity","1");

				// Start
				$(".loading-bottom").animate(
					{ left: 0 }, {
						duration: 1000,
						easing: 'linear',
						complete: function() {
							$(".loading-text-img").fadeIn("slow");
						}
					}
				);

				return false;
			}
		}
		else
		{
			alert('Theme not found or defined');
		}
    };

}( jQuery ));
