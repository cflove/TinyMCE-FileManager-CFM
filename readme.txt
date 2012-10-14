For full setup instruction and demo, visit
http://cflove.org/2012/09/coldfusion-file-manager-for-tinymce.cfm 

Set up:
Copy the filemanager folder into your tiny_mce/plugins folder, then include the plugin and the button to your tinyMCE form. (TinyMCE Plugin)

Configuration:
Open up the tiny_mce/plugins/filemanager/settings.cfm file and provide an absolute path and the URL of the folder where you store the user files. If you want to store files in a multi-user environment, you can programmatically change this location (such as c:/website/userfiles/#session.users_id#)

This needs JQuery & JQuery UI (effects). I have included JQuery inside the [filemanager/jQuery] folder for your convenience. However, if you do not want to keep multiple copies of JQuery files throughout your website, please provide your own JQuery location to tiny_mce/plugins/filemanager/dialog.html and delete that folder.

Important: Add your own user authentication at the top of filemanager.cfc, upload.cfm and folder.cfm - if you do not authenticate access to these pages, anyone will be able to edit/delete/update files. 

You can download the TinyMCE filemanager and example below. Before you run the example make sure to edit the settings.cfm file. 