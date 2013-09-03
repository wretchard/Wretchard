
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Map';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textFieldCity = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textFieldCity.keydown = function textFieldCity_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13)
		{
		varPlace=this.getValue();
		centerMap(varPlace)
		}
	};// @lock

	textFieldCity.blur = function textFieldCity_blur (event)// @startlock
	{// @endlock
		varPlace=this.getValue();
		centerMap(varPlace)
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textFieldCity", "keydown", textFieldCity.keydown, "WAF");
	WAF.addListener(this.id + "_textFieldCity", "blur", textFieldCity.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

function centerMap(varPlace) {
		map=$$('componentSpeakerMain_googleMaps1')
		map.setCenter(varPlace)
}
