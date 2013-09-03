
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuAgent = {};	// @menuItem
	var documentEvent = {};	// @document
	var menuSpeaker = {};	// @menuItem
	var menuMap = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuAgent.click = function menuAgent_click (event)// @startlock
	{// @endlock
		$('#componentSpeakerMain').css({'height':'640px', 'width':'694px'})
		$$('componentSpeakerMain').removeComponent();
		$$('componentSpeakerMain').loadComponent('/SpeakerComponents/Agency	.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$('#componentSpeakerMain').css({'height':'640px', 'width':'656px'})
	};// @lock

	menuSpeaker.click = function menuSpeaker_click (event)// @startlock
	{// @endlock
		$('#componentSpeakerMain').css({'height':'640px', 'width':'694px'})
		$$('componentSpeakerMain').removeComponent();
		$$('componentSpeakerMain').loadComponent('/SpeakerComponents/SpeakerSetup.waComponent');
	};// @lock

	menuMap.click = function menuMap_click (event)// @startlock
	{// @endlock
		$('#componentSpeakerMain').css({'height':'640px', 'width':'656px'})
		$$('componentSpeakerMain').removeComponent();
		$$('componentSpeakerMain').loadComponent('/SpeakerComponents/Map.waComponent');		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuAgent", "click", menuAgent.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("menuSpeaker", "click", menuSpeaker.click, "WAF");
	WAF.addListener("menuMap", "click", menuMap.click, "WAF");
// @endregion
};// @endlock
