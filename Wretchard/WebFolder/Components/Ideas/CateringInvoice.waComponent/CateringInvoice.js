
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'CateringInvoice';
	// @endregion// @endlock
	var vUnitPrice
	var vFood
	
	this.load = function (data) {// @lock
		//alert(data.userData.url + ' ' + data.userData.blurb + ' ' + data.userData.food_id)
		var urlName= data.userData.url;
		var urlL=urlName.length-4;
		var bigURL=urlName.slice(0,urlL) + '_big.jpg'
		component_main_componentOrder_imageURL=bigURL;
		
		TheCatering = sources.component_main_componentOrder_ideasCatering.query('ID=' + data.userData.food_id, {
		onSuccess: function(event) {
					$('#component_main_componentOrder_richTextblurb').text(event.dataSource.blurb);
					$('#component_main_componentOrder_richTextPrice').text('A$' + event.dataSource.unitPrice);
					vUnitPrice=event.dataSource.unitPrice;
					vFood=event.dataSource.ID;
					buildPicture();
					}
		})
		
		function buildPicture() {
			sources.component_main_componentOrder_imageURL.sync();		
		}
		
		function buildProduct() {
			alert('sheesh')
		}
		
		

	// @region namespaceDeclaration// @startlock
	var radioGroup1 = {};	// @radioGroup
	// @endregion// @endlock

	// eventHandlers// @lock

	radioGroup1.change = function radioGroup1_change (event)// @startlock
	{// @endlock
		var vQty = $('#component_main_componentOrder_textFieldQty').val()
		var vObj={};
		sources.component_main_componentList_ideasInvoice.addNewElement();
		sources.component_main_componentList_ideasInvoice.getCurrentElement()
		sources.component_main_componentList_ideasInvoice.quantity = vQty;
		sources.component_main_componentList_ideasInvoice.purchasePrice = vUnitPrice;
		sources.component_main_componentList_ideasInvoice.save({onSuccess: function(event) {
		sources.component_main_componentList_ideasInvoice.getCurrentElement()
		vObj.invoice=sources.component_main_componentList_ideasInvoice.ID;
		vObj.product=vFood;
		sources.component_main_componentList_ideasInvoice.addProduct(vObj);}
		}
		);
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_radioGroup1", "change", radioGroup1.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
