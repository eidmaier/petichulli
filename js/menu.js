/*var offset = $('#meuMenu').offset().top;
var $meuMenu = $('#meuMenu');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');
    } else {
        $meuMenu.removeClass('fixar');
    }
});
*/
$(function(){   
		var nav = $('#menuHeader');   
		$(window).scroll(function () { 
			if ($(this).scrollTop() > 150) { 
				nav.addClass("menu-fixo");
				$('body').css('padding-top', 70);
			} else { 
				nav.removeClass("menu-fixo"); 
				$('body').css('padding-top', 0);
			} 
		});  
	});
