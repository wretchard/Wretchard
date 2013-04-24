
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItemTipjar = {};	// @menuItem
	var menuItemPortfolio = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/Ideas/Catering.waComponent');
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/About.waComponent');
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
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItemTipjar", "click", menuItemTipjar.click, "WAF");
	WAF.addListener("menuItemPortfolio", "click", menuItemPortfolio.click, "WAF");
// @endregion
};// @endlock
