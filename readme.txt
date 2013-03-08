For full setup instruction and a downloaderble demo, visit
http://cflove.org/2012/09/coldfusion-file-manager-for-tinymce.cfm 

Set up:
Copy the filemanager folder into your tiny_mce/plugins folder, include the plugin and the button to your tinyMCE form. (Visit http://www.tinymce.com/wiki.php/Configuration:plugins for how to inlude a plugin in to TinyMCE)
Ex:
plugins : "filemanager,table,contextmenu,paste,[other plugins..]"
theme_advanced_buttons1 : "filemanager,bold,italic,underline,[other buttons..]"

Configuration:
Open up the tiny_mce/plugins/filemanager/settings.cfm file and provide an absolute path and the URL of the folder where you store the user files. If you want to store files in a multi-user environment, you can programmatically change this location (such as c:/website/userfiles/#session.users_id#)

This currently uses jQuery-1.9.1 and jQuery-ui-1.10.0. The file "tiny_mce/plugins/filemanager/dialog.html" link to Google jQuery CDN.

Important: Add your own user authentication at the top of filemanager.cfc, upload.cfm and folder.cfm - if you do not authenticate access to these pages, anyone will be able to edit/delete/update files. 

You can download the TinyMCE filemanager and example below. Before you run the example make sure to edit the settings.cfm file. 