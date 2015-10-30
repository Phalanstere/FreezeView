// Create a new anonymous function, to use as a wrapper

function FreezeView() {
	"use strict";
	this.all = [];
	var mself = this;
	
	this.init = function init()
	{
	var i, 
		o, 
		fn = window.getComputedStyle,
		all; 
	
	if (fn)
		{
		all = document.getElementsByTagName("*");
		
		for (i = 0; i < all.length; i++) {
			o = {};
			o.el = all[i];
			o.style = getComputedStyle(o.el);
			mself.all.push(o);	
			}			
		}
		else
		{
		all = document.getElementsByTagName("*");
		
		for (i = 0; i < all.length; i++) {
			o = {};
			o.el = all[i];
			o.style = el.currentStyle;
			mself.all.push(o);	
			}	
			
		}
	
	
	};
	
	
	this.reset = function() {
		var i, o;
		for (i = 0; i < mself.all.length; i++) {
			o = mself.all[i];
			o.el.style = o.style;		
			}	
		
	};
	
	mself.init();
	
}
 

module.exports = exports = FreezeView;