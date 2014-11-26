// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Présentation',
    url:'views/index.js',
    backgroundColor:'#fff'
});
var win2 = Titanium.UI.createWindow({  
    title:'Projets',
    url:'views/projets.js',
    backgroundColor:'#fff'
});
var win3 = Titanium.UI.createWindow({  
    title:'Contact',
    url:'views/contact.js',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    //icon:Titanium.UI.iPhone.SystemIcon.BOOKMARKS,
    title:'Présentation',
    window:win1
});
var tab2 = Titanium.UI.createTab({  
    //icon:Titanium.UI.iPhone.SystemIcon.FEATURED,
    title:'Projets',
    window:win2
});
var tab3 = Titanium.UI.createTab({  
    //icon:Titanium.UI.iPhone.SystemIcon.CONTACTS,
    title:'Contact',
    window:win3
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
