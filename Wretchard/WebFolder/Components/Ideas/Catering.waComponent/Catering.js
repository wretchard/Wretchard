
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Catering';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var v = sources.component_main_ideasCatering.all({
			onSuccess: function(event) {
				buildArray() 
				}
			}
		);
	// @region namespaceDeclaration// @startlock
	var containerMenu = {};	// @container
	// @endregion// @endlock

	// eventHandlers// @lock

	containerMenu.click = function containerMenu_click (event)// @startlock
	{// @endlock

		var foodURL= sources.component_main_arrayFood.url;
		var foodBlurb=sources.component_main_arrayFood.blurb;
		var foodID=sources.component_main_arrayFood.food_id;
		
		//$$('component_main_componentOrder').removeComponent();
		$$('component_main_componentOrder').loadComponent({path:'/Components/Ideas/CateringInvoice.waComponent',
		userData:{url:foodURL, blurb:foodBlurb, food_id:foodID}})
		$$('component_main_componentList').loadComponent('/Components/Ideas/CateringOrderList.waComponent');

	};// @lock
	
	function buildArray() {
	component_main_arrayFood=[];
	for (var i=0; i< sources.component_main_ideasCatering.length; i++) {
	   if(sources.component_main_ideasCatering.getPosition()<=i) {
	 	  component_main_arrayFood.push({url:sources.component_main_ideasCatering.url, blurb:sources.component_main_ideasCatering.blurb,
	 	  food_id:sources.component_main_ideasCatering.ID})  	
	   	}
	   	sources.component_main_ideasCatering.selectNext();
	}
		sources.component_main_arrayFood.sync();
	};
	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_containerMenu", "click", containerMenu.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
