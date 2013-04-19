function dispatchHandler ( request, response ) {
	var responseTxt
	if (settings.project.hostName=='localhost') {
		 responseTxt='http://local.tracker.com:8081/index/'
	     //response.headers.location ='http://local.tracker.com:8081/index/'
	}
	else {
		responseTxt='http://' + settings.project.hostName + '/index/'
		//response.headers.location ='http://' + settings.project.hostName + '/index/'
	}
	console.log(responseTxt);
	response.headers.location=responseTxt;
	return;
}
