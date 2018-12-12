var enabled = true;
//var cookies = ["https://homingdevice.github.io/"]var blocked_domains = [
//var blocked_domains = [
// "*://*.lb.usemaxserver.de/*",
// "*://*.tracking.klickthru.com/*",
// "*://*.pubads.g.doubleclick.net/*",
// "*://*.googleads.g.doubleclick.net/*",
// "*://*.remove.com/*",
// "*://*.pagead2.googlesyndication.com/*",
// "*://*.www.googletagservices.com/*",
// "*://*.zmedia.com/*",
// "*://*.s.amazon-adsystem.com/*",
// "*://*.aax-us-east.amazon-adsystem.com/*",
// "*://*.zv1.november-lax.com/*",
// "*://*.contextual.media.net/*",
// "*://*.stags.bluekai.com/*"];

//chrome.webRequest.onBeforeRequest.addListener(
	// function(details){
		// return {cancel: enabled };
	// },
	// {urls: blocked_domains},
	// ["blocking"]
// );

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
		"contextual.media.net",
		"stags.bluekai.com",
		"ib.adnxs.com",
		"c.amazon-adsystem.com",
		"bat.bing.com",
		"tag.bounceexchange.com",
		"bidder.criteo.com",
		"ad.doubleclick.net",
		"securepubads.g.doubleclick.net",
		"cdns.gigya.com",
		"geolocation.onetrust.com",
		"stags.bluekai.com",
		"securepubads.g.doubleclick.net",
		"cdn.exelator.com",
		"adclick.g.doubleclick.net",
		"s0.2mdn.net",
		"adservice.google.com",
		"l.aaxads.com",
		"load77.exelator.com",
		"mydmp.exelator.com",
		"px.ads.linkedin.com",
		"ml314.com",
		"zndpq7uw2elr2st9z-forbesbi.siteintercept.qualtrics.com"];


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

	// alert(blockURL)
  	// alert("working!")
