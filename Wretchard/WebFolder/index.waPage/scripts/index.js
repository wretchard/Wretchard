
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItemTipjar = {};	// @menuItem
	var menuItemPortfolio = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItemTipjar.click = function menuItemTipjar_click (event)// @startlock
	{// @endlock
		window.location.href='/tipjar.html';
	};// @lock

	menuItemPortfolio.click = function menuItemPortfolio_click (event)// @startlock
	{// @endlock
		//$$('component_main').removeComponent()
		//$$('component_main').loadComponent('/Components/UnderConstruction.waComponent'
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItemTipjar", "click", menuItemTipjar.click, "WAF");
	WAF.addListener("menuItemPortfolio", "click", menuItemPortfolio.click, "WAF");
// @endregion
};// @endlock
