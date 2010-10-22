/*!
 * jQuery.onReady
 * Copyright (c) 2010 matsukaze.
 * @version 1.0
 * @author mach3
 */
$.fn.extend({
	/**
	 * Add handler which is called when the element is loaded, using timeout.
	 * @param {Function} func This will be called then the element is loaded.
	 * @param {Object} option Some configurations.
	 */
	onReady: function( func, option ){
		var s = this.selector,
			config = { "limit" : 60000, "delay" : 500 },
			start = (new Date()).getTime(),
			progress = function(){
				var e = $(s);
				if( e.length ){ func.apply( e ); return; }
				if( (new Date()).getTime() - start > config.limit ){ return; }
				setTimeout( progress, config.delay );
			};
		$.extend( config, option );
		progress();
	}
});