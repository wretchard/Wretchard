
guidedModel =// @startlock
{
	Where :
	{
		methods :
		{// @endlock
			getCities:function()
			{// @lock
				TheCities=ds.Where.query("city !==''").orderBy("city");
				return TheCities.distinctValues("city");
			}// @startlock
		},
		address :
		{
			onGet:function()
			{// @endlock
				var streetName;
				var cityName;
				var countryName;
				if (this.street == null) {streetName=''} else {streetName=this.street};
				if (this.city == null) {cityName=''} else {cityName=this.city};
				if (this.country == null) {countryName=''} else {countryName=this.country};
				vAddress= streetName + ' ' + cityName + ' ' + countryName;
				return vAddress;				// Add your code here
			}// @startlock
		}
	},
	Speaker :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				var firstN;
				var lastN;
				if (this.firstName == null) {firstN=''} else {firstN=this.firstName};
				if (this.lastName == null) {lastN=''} else {lastN=this.lastName};
				varFullName= firstN + ' ' + lastN;
				return varFullName;
			}// @startlock
		}
	}
};// @endlock
