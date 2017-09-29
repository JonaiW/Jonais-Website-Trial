$(document).ready(function(){
		var controller = new ScrollMagic.Controller();

        
	
			
			var scene = new ScrollMagic.Scene({triggerElement: "#Services"})
							// trigger animation by adding a css class
							.setClassToggle("#Services", "fadeIn")
							.addIndicators({name: ""}) 
							.addTo(controller);
});