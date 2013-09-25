var kittens = [
	"http://placekitten.com/150/150",
	"http://placekitten.com/200/200",
	"http://placekitten.com/250/250",
	"http://placekitten.com/200/200",
	"http://placekitten.com/300/300",
	"http://placekitten.com/350/350",
	"http://placekitten.com/400/400",
	"http://placekitten.com/500/500",
	"http://placekitten.com/600/600"];

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var i = Math.round(Math.random() * kittens.length);
    	return {redirectUrl: kittens[i]};
	},
	{
		urls: [
			"*://fbcdn-profile-a.akamaihd.net/*",
			"*://fbcdn-photos-c-a.akamaihd.net/*",
			"*://fbcdn-sphotos-f-a.akamaihd.net/*",
			"*://fbcdn-sphotos-h-a.akamaihd.net/*"
		],
		types: ["image"]
	},
	['blocking']);