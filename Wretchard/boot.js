/**

* @author Richard R Fernandez
* boot.js

*/

//http handler for mobile dispatching
application.addHttpRequestHandler('\\/$','httpDispatcher.js', 'dispatchHandler');