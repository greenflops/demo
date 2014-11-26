var win = Titanium.UI.currentWindow;

var views = [];
for(var i=0; i<6; i++){
	var imageView = Titanium.UI.createImageView({
		image: '../img/img'+i+'.png'
	});
	views.push(imageView);
}

var scrollView = Titanium.UI.createScrollableView({
	showPagingControl : true,
	currentPage : 0,
	pagingControlHeight : 30,
	views: views
});

win.add(scrollView);
