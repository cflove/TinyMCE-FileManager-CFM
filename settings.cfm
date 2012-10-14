<cfsilent>
<!--- absolute path to User's File storage folder  --->
<cfset settings.UserFiles 		= "#ExpandPath('../../../../UserFiles')#">
<!--- URL to user's file storage folder            --->
<cfset settings.UserFilesURL	= "http://cflove.org/examples/filemanager/UserFiles">
<!--- image size for thubnail images    --->
<cfset settings.thumbSize		= 78>
<!--- image size for medium size images --->
<cfset settings.middleSize		= 250>
<!--- Permision for linux               --->
<cfset settings.chomd			= "777">
<!--- disallowed file types             --->
<cfset settings.disfiles		= "cfm,cfc,exe,php,asp">
</cfsilent>