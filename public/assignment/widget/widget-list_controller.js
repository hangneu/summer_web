(function(){
	angular
	 	.module("WebAppMaker")
	 	.controller("WidgetListController",WidgetListController);

	 	function WidgetListController($sce){
	 		var vm = this;
	 		vm .widgets = [
  { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
  { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
    "url": "http://lorempixel.com/400/200/"},
  { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>The <em>next</em> rumored iPhone in 2017 will supposedly come with much bigger changes, including an OLED display and an all-glass design. It’s the kind of update you’d usually expect from a “new number” iPhone. Which means it could be another year before we see the <em>real</em> iPhone 7.</p>'},
  { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
    "url": "https://youtu.be/AM2Ivdi9c4E" },
  { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": '<p>iPhone 7, right? But it’s not that simple. Although the iPhone commandment reads something like “thou shalt always be an S, and only an S, in betwixt two new iPhones,” things might be changing for 2016. A majority of earlier reports say that the new iPhone (all two/three variants) will be called the iPhone 7, iPhone 7 Plus, and iPhone 7 Pro (maybe). However, <a href="http://www.apfelpage.de/news/september-iphone-chinesische-hersteller-sprechen-von-iphone-6se/" rel="noopener" target="_blank">a report from a German gadget blog</a> says the device could be called the iPhone 6SE, a continuation of the moniker that debuted with the <a href="http://gizmodo.com/iphone-se-review-the-phone-that-proves-apple-is-out-of-1768638745">4-inch iPhone SE in March</a>, and the embracing of a major change to the iPhone naming scheme. Number to S to SE.</p>'}
];
		vm.getTrustedUrl = getTrustedUrl;
		vm.getTrustedHtml = getTrustedHtml;
		function getTrustedUrl(widget){
			var urlParts = widget.url.split("/");
			var id = urlParts[urlParts.length - 1];
			var url = "https://www.youtube.com/embed/"+id ;
			console.log(url);
			return $sce.trustAsResourceUrl(url);
		}
		function getTrustedHtml(widget){
			var html = $sce.trustAsHtml(widget.text);
			return html;
		}

	 	}
})();