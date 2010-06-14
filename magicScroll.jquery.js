(function($){
	$.extend(
		jQuery.expr[ ":" ], 
		{ reallyVisible: function(a) { return !(jQuery(a).is(':hidden') || jQuery(a).parents(':hidden').length); }
	});
	
	$.fn.magicScroll = function(settings) {
		var config = { loop: false };
		if(settings) { $.extend(config, settings); }
		this.each(function(){
			console.log( $(this).is(':reallyVisible') );
			if( $(this).is(':reallyVisible') === false || ( $(this).is(':animated') === true && settings.loop === false)) { return; }
			var tWidth = 0;
			$(this).find('*').each(function(){ tWidth += $(this).outerWidth(); });
			var ttWidth = $(this).outerWidth(true);
			var tWidth = (tWidth > ttWidth) ? ttWidth + (tWidth - ttWidth) : tWidth;
			$(this).css({'margin-left': (ttWidth + 'px')});
			$(this).animate({'margin-left': ('-' + (tWidth) + 'px')}, 22000, 'linear', function(){
				$(this).magicScroll({ loop: true });
			});
		});
		return this;
	};
})(jQuery);
