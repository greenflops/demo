var win = Titanium.UI.currentWindow;

var isAndroid = Titanium.Platform.osname === 'android',
		isIOS = (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad'),
		isMW = Ti.Platform.osname === 'mobileweb',
		isTizen = Ti.Platform.osname === 'tizen';
		
var Map;
	if (isIOS && !Ti.Map) {
		try {
			Map = require('ti.map');
		} catch(e) {
			alert("Add the `ti.map` module in the `tiapp.xml` file when running on TiSDK 3.2.0.GA and later.");
		}
	} else {
		Map = Ti.Map;
		// Forcing the Android build scripts to include Ti.Map
		Ti.Map.createView;
	}

var greenflops = Map.createAnnotation({
	latitude:48.7815616,
	longitude:2.1891528999999537,
	title:"GreenFLOPS®",
	subtitle:'15 place Lucien BOSSOUTROT 78140 Vélizy-Villacoublay, FRANCE',
	pincolor:Map.ANNOTATION_GREEN,
	animate:false,
});

var mapview = Map.createView({
		mapType: Map.STANDARD_TYPE,
		region:{latitude:48.7815616, longitude:2.1891528999999537, latitudeDelta:0.02, longitudeDelta:0.02},
		animate:true,
		regionFit:true,
		userLocation:false,
		annotations:[greenflops]
	});

win.add(mapview);
