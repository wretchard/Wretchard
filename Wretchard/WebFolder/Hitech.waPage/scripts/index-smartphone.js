
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttondemo = {};	// @button
	var title1 = {};	// @richText
// @endregion// @endlock

// eventHandlers// @lock

	buttondemo.click = function buttondemo_click (event)// @startlock
	{// @endlock
		alert('do stuff');
	};// @lock

	title1.click = function title1_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttondemo", "click", buttondemo.click, "WAF");
	WAF.addListener("title1", "click", title1.click, "WAF");
// @endregion
};// @endlock
