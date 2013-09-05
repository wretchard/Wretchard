
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'SpeakerSetup';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var agencyEvent = {};	// @dataSource
	var speakerEvent = {};	// @dataSource
	var textFindSpeaker = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.componentSpeakerMain_whereCollection.collectionRefresh()
	};// @lock

	agencyEvent.onCollectionChange = function agencyEvent_onCollectionChange (event)// @startlock
	{// @endlock
		showHideCombo();
	};// @lock

	speakerEvent.onCurrentElementChange = function speakerEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		showHideCombo();
	};// @lock

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
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_speaker", "onCurrentElementChange", speakerEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_agency", "onCollectionChange", agencyEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_textFindSpeaker", "keydown", textFindSpeaker.keydown, "WAF");
	WAF.addListener(this.id + "_textFindSpeaker", "blur", textFindSpeaker.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

function showHideCombo() {
	if ($$('componentSpeakerMain_richTextAgent').getValue()!=="") {
		$$('componentSpeakerMain_comboAgent').hide()
	}
	else {
		$$('componentSpeakerMain_comboAgent').show()
	}
}

function findSpeaker(varSpeaker) {
	source.componentSpeakerMain_speaker.query('lastName=:1', varSpeaker)
}