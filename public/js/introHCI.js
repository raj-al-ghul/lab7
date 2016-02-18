'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	$('.likeBtn').click(function(){
		console.log('test');
		ga("send", "event", 'like', 'click');


	// Feature detects Navigation Timing API support.
	if (window.performance) {
		// Gets the number of milliseconds since page load
		// (and rounds the result since the value must be an integer).
		var timeSincePageLoad = Math.round(performance.now());

		// Sends the timing hit to Google Analytics.
		ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
	}
		
	});
}