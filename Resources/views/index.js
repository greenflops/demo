var win = Titanium.UI.currentWindow;

var imageView = Titanium.UI.createImageView({
		image: '../img/logo.png',
		top:0,
});
win.add(imageView);	

var l1 = Titanium.UI.createLabel({
	id:'font_label_test',
	text:'GreenFLOPS® est une société de services en informatique qui a vu le jour dans les Yvelines en 2014. FLOPS, FLoating-point Operations Per Second, est une unité de mesure de vitesse de calculs des processeurs. Les activités de GreenFLOPS® sont centrées sur la programmation informatique, l\'edition et l\'exploitation commerciale de logiciels systèmes et réseaux du monde Télécom, IT et HPC. contact@greenflops.com +33.667.89.55.87',
	top:180,
	height:260,
	textAlign:'center'
});
	
win.add(l1);
