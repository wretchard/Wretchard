function dispatchHandler ( request, response ) {
	var responseTxt
	if (settings.project.hostName=='localhost') {
		 responseTxt='http://localhost:8081/index/'
	}
	else {
		responseTxt='http://' + settings.project.hostName + '/index/'
	}
	console.log(responseTxt);
	response.headers.location=responseTxt;
	return;
}
