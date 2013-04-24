
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Catering';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		debugger;
		sources.component_main_ideasCatering.all();
		component_main_arrayFood=sources.component_main_ideasCatering.toArray();

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock
	

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
