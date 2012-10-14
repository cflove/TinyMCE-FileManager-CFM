(function () {
	tinymce.PluginManager.requireLangPack("filemanager");
	tinymce.create("tinymce.plugins.filemanagerPlugin", {
		init: function (a, b) {
			a.addCommand("mcefilemanager", function () {
				a.windowManager.open({
					file: b + "/dialog.html",
					width: ($(window).width()-40) + parseInt(a.getLang("filemanager.delta_width", 0)),
					height: ($(window).height()-80), //+ parseInt(a.getLang("filemanager.delta_height", 0)),
					inline: 1,
					movable : false,
					maximizable : false,
					minimizable : false,
					resizable : false
				}, {
					plugin_url: b
				})
				
				if ( $('.clearlooks2').length !== 0 ) {
					var l = ($(window).width() / 2) - ($('.clearlooks2').width()/2)
					var t = ($(window).height() / 2) - ($('.clearlooks2').height()/2)
					if (l < 0) l = 0
					if (t < 0) t = 0
					$('.clearlooks2').css({'left':l,'top':t} )
				}
				
			});
			a.addButton("filemanager", {
				title: "Insert Files",
				cmd: "mcefilemanager",
				image: b + "/img/filemanager.gif"
			});
			a.onNodeChange.add(function (d, c, e) {
				c.setActive("filemanager", e.nodeName == "")
			})
		},
		createControl: function (b, a) {
			return null
		},
		getInfo: function () {
			return {
				longname	: 'filemanager plugin',
                author		: "Saman W Jayasekara",
                authorurl	: "http://cflove.org",
                infourl		: "http://cflove.org",
                version		: "1.0"
			}
		}
	});
	tinymce.PluginManager.add("filemanager", tinymce.plugins.filemanagerPlugin)
})();