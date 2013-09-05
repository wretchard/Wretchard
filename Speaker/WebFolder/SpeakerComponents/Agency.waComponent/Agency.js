
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Agency';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var agencyEvent = {};	// @dataSource
	var dataGridApplicants = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		alert("will drill down")
	};// @lock

	agencyEvent.onCurrentElementChange = function agencyEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		source.componentSpeakerMain_speaker.query("applyTo=:1", source.componentSpeakerMain_agency.ID)
	};// @lock

	dataGridApplicants.onRowDblClick = function dataGridApplicants_onRowDblClick (event)// @startlock
	{// @endlock
		sources.componentSpeakerMain_speaker.agency.set(sources.componentSpeakerMain_agency);
		sources.componentSpeakerMain_speaker.applyTo=null
		sources.componentSpeakerMain_speaker.save();
		sources.componentSpeakerMain_agency.collectionRefresh()
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_agency", "onCurrentElementChange", agencyEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_dataGridApplicants", "onRowDblClick", dataGridApplicants.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

function addNewClient(speakerID) {
	alert('code here');
}


