
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItemNoWay = {};	// @menuItem
	var menuItemBelmont = {};	// @menuItem
	var menuItemRecruitment = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItemTipjar = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItemNoWay.click = function menuItemNoWay_click (event)// @startlock
	{// @endlock
		window.open("http://www.amazon.com/exec/obidos/ASIN/1453892818/wwwfallbackbe-20", "_blank")
	};// @lock

	menuItemBelmont.click = function menuItemBelmont_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/Portfolio/Belmont.waComponent');
	};// @lock

	menuItemRecruitment.click = function menuItemRecruitment_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/UnderConstruction.waComponent');
	};// @lock

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
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/Tipjar.waComponent');		
		//window.location.href='/tipjar.html';
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItemNoWay", "click", menuItemNoWay.click, "WAF");
	WAF.addListener("menuItemBelmont", "click", menuItemBelmont.click, "WAF");
	WAF.addListener("menuItemRecruitment", "click", menuItemRecruitment.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItemTipjar", "click", menuItemTipjar.click, "WAF");
// @endregion
};// @endlock
