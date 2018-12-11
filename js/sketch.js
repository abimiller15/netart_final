var enabled = true;
//var cookies = ["https://homingdevice.github.io/"]
chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);

const snippets = [
  "lb.usemaxserver.de",
  "tracking.klickthru.com",
  "pubads.g.doubleclick.net",
  "googleads.g.doubleclick.net",
  "remove.com",
  "pagead2.googlesyndication.com",
  "www.googletagservices.com",
  "zmedia.com",
  "s.amazon-adsystem.com",
  "aax-us-east.amazon-adsystem.com",
  "zv1.november-lax.com",
  "contextual.media.net"];

let blockURL = "https://homingdevice.github.io/";
let cats = document.querySelectorAll('iframe');

for(let i = 0; i < cats.length; i++){
	let currentCat = cats[i];
		currentCat.src = blockURL


for(let l = 0; l < snippets.length; l++){
  	let currentURL = snippets[l]


if(currentCat.src.includes(currentURL) ){
    	currentCat.src = blockURL
      }
    }
}
	alert(blockURL)
	alert("working!")
