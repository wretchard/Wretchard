
guidedModel =// @startlock
{
	IdeasInvoice :
	{
		methods :
		{// @endlock
			addCustomer:function()
			{// @lock
				// Add your code here
			},// @lock
			addProduct:function(productObj)
			{// @lock
				try {
				TheInvoice=ds.IdeasInvoice(productObj.invoice);
				TheProduct=ds.IdeasCatering(productObj.product);
				if(TheInvoice && TheProduct) {
					TheInvoice.product=TheProduct;
					TheInvoice.save();
				}

			} catch (e) {
						debugger;
				console.log(e);
			}

			}// @startlock
		},
		subTotal :
		{
			onGet:function()
			{// @endlock
				try {
					if(this.quantity !==0) {
						if(this.purchasePrice !==0)
						{return this.quantity * this.purchasePrice}
					}
					else {
						return 0;
					}
	
			} catch (e) {
				console.log (e);
			}

			}// @startlock
		}
	}
};// @endlock
