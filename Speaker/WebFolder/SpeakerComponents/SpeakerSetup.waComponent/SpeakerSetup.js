
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'SpeakerSetup';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textFindSpeaker = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textFindSpeaker.keydown = function textFindSpeaker_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13)
		{
		varSpeaker=this.getValue();
		findSpeaker (varSpeaker)
		}
	};// @lock

	textFindSpeaker.blur = function textFindSpeaker_blur (event)// @startlock
	{// @endlock
		varSpeaker=this.getValue();
		findSpeaker (varSpeaker)
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textFindSpeaker", "keydown", textFindSpeaker.keydown, "WAF");
	WAF.addListener(this.id + "_textFindSpeaker", "blur", textFindSpeaker.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

function findSpeaker(varSpeaker) {
	source.componentSpeakerMain_speaker.query('lastName=:1', varSpeaker)
}