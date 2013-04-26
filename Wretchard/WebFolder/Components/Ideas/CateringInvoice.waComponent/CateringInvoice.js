
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'CateringInvoice';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		//alert(data.userData.url + ' ' + data.userData.blurb + ' ' + data.userData.food_id)
		var urlName= data.userData.url;
		var urlL=urlName.length-4;
		var bigURL=urlName.slice(0,urlL) + '_big.jpg'
		component_main_componentOrder_imageURL=bigURL;
		
		TheCatering = sources.component_main_componentOrder_ideasCatering.query('ID=' + data.userData.food_id, {
		onSuccess: function(event) {
					//component_main_componentOrder_richTextblurb.setValue(event.dataSource.blurb )
					$('#component_main_componentOrder_richTextblurb').text(event.dataSource.blurb);
					$('#component_main_componentOrder_richTextPrice').text('A$' + event.dataSource.unitPrice);
					buildPicture();
					}
		})
		
		function buildPicture() {
			sources.component_main_componentOrder_imageURL.sync();		
		}
		
		

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
