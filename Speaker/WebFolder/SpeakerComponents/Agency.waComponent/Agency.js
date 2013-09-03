
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Agency';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var comboAddClient = {};	// @combobox
	var textClientSearch = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	comboAddClient.change = function comboAddClient_change (event)// @startlock
	{// @endlock
		alert(this.getValue());
	};// @lock

	textClientSearch.keydown = function textClientSearch_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13)
		{
		varClient=this.getValue();
		findClient (varClient)
		}
	};// @lock

	textClientSearch.blur = function textClientSearch_blur (event)// @startlock
	{// @endlock

		varClient=this.getValue();
		findClient (varClient)

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_comboAddClient", "change", comboAddClient.change, "WAF");
	WAF.addListener(this.id + "_textClientSearch", "keydown", textClientSearch.keydown, "WAF");
	WAF.addListener(this.id + "_textClientSearch", "blur", textClientSearch.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

function findClient(varClient) {
	TheClients = ds.Speaker.query("lastName=:1", varClient, {
		onSuccess: function(event) {
		debugger;
		a=event
		//source.componentSpeakerMain_arrNewSpeakers=event.toArray("fullName, eMail, ID")
		}
		})
}
