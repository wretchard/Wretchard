
guidedModel =// @startlock
{
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
