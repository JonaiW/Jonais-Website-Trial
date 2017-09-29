$(document).ready(function(){
		var controller = new ScrollMagic.Controller();

        


			var scene = new ScrollMagic.Scene({
				triggerElement:'#Service',
				duration:300
			})
							// trigger animation by adding a css class
				.setClassToggle('#Services', 'fadeIn')	
				.addIndicators({})
				.addTo(controller);
});