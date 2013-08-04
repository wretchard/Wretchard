
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItemVoteTracker = {};	// @menuItem
	var menuItemBooks = {};	// @menuItem
	var menuItemAuthor = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItemFB = {};	// @menuItem
	var menuItemTwitter = {};	// @menuItem
	var menuItemBelmont = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItemTipjar = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItemVoteTracker.click = function menuItemVoteTracker_click (event)// @startlock
	{// @endlock
		window.open("http://ec2-23-22-2-174.compute-1.amazonaws.com", "_blank");
	};// @lock

	menuItemBooks.click = function menuItemBooks_click (event)// @startlock
	{// @endlock
		window.open("https://www.amazon.com/author/fernandezrichard", "_blank");
	};// @lock

	menuItemAuthor.click = function menuItemAuthor_click (event)// @startlock
	{// @endlock
		window.open("http://www.amazon.com/Richard-Fernandez/e/B00DJXLUU4", "_blank");
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		window.open("http://wretchard.blogspot.com.au/", "_blank");
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		window.open("http://wakanda.org/", "_blank");
	};// @lock

	menuItemFB.click = function menuItemFB_click (event)// @startlock
	{// @endlock
		$$('component_main').removeComponent();
		$$('component_main').loadComponent('/Components/UnderConstruction.waComponent');
	};// @lock

	menuItemTwitter.click = function menuItemTwitter_click (event)// @startlock
	{// @endlock
		window.open('https://twitter.com/wretchardthecat', '_blank');
	};// @lock

	menuItemBelmont.click = function menuItemBelmont_click (event)// @startlock
	{// @endlock
		window.open("http://pjmedia.com/richardfernandez/", "_blank");
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
	WAF.addListener("menuItemVoteTracker", "click", menuItemVoteTracker.click, "WAF");
	WAF.addListener("menuItemBooks", "click", menuItemBooks.click, "WAF");
	WAF.addListener("menuItemAuthor", "click", menuItemAuthor.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItemFB", "click", menuItemFB.click, "WAF");
	WAF.addListener("menuItemTwitter", "click", menuItemTwitter.click, "WAF");
	WAF.addListener("menuItemBelmont", "click", menuItemBelmont.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItemTipjar", "click", menuItemTipjar.click, "WAF");
// @endregion
};// @endlock
