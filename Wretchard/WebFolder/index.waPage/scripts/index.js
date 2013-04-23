
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItemTipjar = {};	// @menuItem
	var menuItemPortfolio = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/About.waComponent');
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/UnderConstruction.waComponent');
	};// @lock

	menuItemTipjar.click = function menuItemTipjar_click (event)// @startlock
	{// @endlock
		window.location.href='/tipjar.html';
	};// @lock

	menuItemPortfolio.click = function menuItemPortfolio_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/UnderConstruction.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItemTipjar", "click", menuItemTipjar.click, "WAF");
	WAF.addListener("menuItemPortfolio", "click", menuItemPortfolio.click, "WAF");
// @endregion
};// @endlock
