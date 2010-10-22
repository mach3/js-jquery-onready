# jQuery.onReady

Add handler which is called when the element is loaded.  
This is like "$(document).ready", but this can be used with selecter.

You may use this when keeping watch on the element added interactively,  
something like widgets.

## Version

1.0

## This does

- Add handler of loading to any HTML element.

## Require

- jQuery

## Usage

Simple example :

	$("#MyContainer").onReady(
		function(){
			// Do something you want, when the element loaded.
			// "This" is a jQuery object itself.
		}
	);
	
With configuration :

	$("#MyContainer").onReady(
		function(){
			// Do anything.
		},
		{
			"limit" : 30000, // milli seconds ( limit of waiting for loading )
			"delay" : 1000 // milli seconds ( delay of timeout )
		}
	);

## Author

- [Follow @mach3](http://twitter.com/mach3ss/)
- [Mach3.laBlog](http://blog.mach3.jp/)