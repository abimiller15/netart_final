var enabled = true;
browser.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);
