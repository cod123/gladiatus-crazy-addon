//################################################################################################################################
//## CHAT
//################################################################################################################################
function Chat(){
	if(document.getElementById('mainmenu')){
		var chatlink = document.createElement('a');
		chatlink.setAttribute('id', 'ChatLink');
		chatlink.setAttribute('class', 'menuitem');
		chatlink.setAttribute('title', 'Chat');
		chatlink.setAttribute('href', '#');
		chatlink.innerHTML='Chat';
		var targetElement=document.getElementById('mainmenu').getElementsByTagName('a')[2];
		insertAfter(chatlink,targetElement);
		
		document.getElementById("ChatLink").addEventListener("click", makeChatSelection, false);
	}
}

function makeChatSelection(){
	if(document.getElementById('mainmenu').getElementsByTagName('a')[0]){
		var j=document.getElementById('mainmenu').getElementsByTagName('a').length;
		var t=false;var i=0;
		while(!t && i<j){
			if(document.getElementById('mainmenu').getElementsByTagName('a')[i].getAttribute('class')=='menuitem_aktive' && !document.getElementById('mainmenu').getElementsByTagName('a')[i].innerHTML.match(/\(/i)){
				document.getElementById('mainmenu').getElementsByTagName('a')[i].setAttribute('class','menuitem');
				t=true;
			}else if(document.getElementById('mainmenu').getElementsByTagName('a')[i].getAttribute('class')=='submenuitem_aktive'){
				document.getElementById('mainmenu').getElementsByTagName('a')[i].setAttribute('class','submenuitem');
				t=true;
			}
			i++;
		}
	}
	document.getElementById('ChatLink').setAttribute('class','menuitem_aktive');
	if(document.getElementById('content')){
		if(Get_Cookie('playerName')){
			var username=Get_Cookie('playerName');
		}else{
			var username='Anonymous_'+Math.floor(Math.random()*1001);
		}
		if(Get_Cookie('guildName')){
			var guildbutton='';
		}else{
			var guildbutton=' style="opacity:0.55;" onclick="document.getElementById(\'errorlog\').innerHTML=\''+L_noGuildText+'.\';"';
		}
		document.getElementById('content').innerHTML='<div style="margin-top:0px;" class="contentItem">'+
		'<h3>Select a chat room</h3><div class="contentItem_content">'+
		'<div style="background: url(http://epiratiko.webs.com/images/chat_icon.png) top left; background-repeat: no-repeat;position:absolute;margin:-10px;width:120px;height:120px;"></div>'+
		'<div style="margin-left:120px;margin-top:16px;">'+
		'<div id="Username"><b><font size="4">'+L_Username+': </font></b><font size="4"><i>'+username+'</i></font></div>'+
		'<div id="Username"><b><font size="4">Server: </font></b><font size="4"><i>'+GCAO_server+'</i></font></div>'+
		'<div id="Username"><b><font size="4">'+L_Country+': </font></b><font size="4"><i>'+GCAO_lang+'</i></font></div>'+
		'<br><input type="button"'+guildbutton+'id="guildChat" value="'+L_GuildChat+'" class="button2"> '+
		'<input type="button" id="countryChat" value="'+L_CountryChat+'" class="button2"> '+
		'<input type="button" id="globalChat" value="'+L_GlobalChat+'" class="button2"><br>'+
		'<span id="errorlog"></span><br><br></div></div></div>';
		
		if(document.getElementById('mainnav')){
			var numberOfTabs=document.getElementById('mainnav').getElementsByTagName('li').length;
			document.getElementById('mainnav').getElementsByTagName('li')[0].getElementsByTagName('a')[0].innerHTML='Chat';
			document.getElementById('mainnav').getElementsByTagName('li')[0].setAttribute('style','pngfix  current');
			var i=1;
			while(i<numberOfTabs){
				document.getElementById('mainnav').getElementsByTagName('li')[i].style.display='none';
				i++;
			}
		}
		
		if(Get_Cookie('guildName')){document.getElementById("guildChat").addEventListener("click", guildChat, false);}
		document.getElementById("countryChat").addEventListener("click", countryChat, false);
		document.getElementById("globalChat").addEventListener("click", globalChat, false);
	}
}

function guildChat(){
	if(Get_Cookie('playerName')){
		var username=Get_Cookie('playerName');
	}else{
		var username='Anonymous_'+Math.floor(Math.random()*1001);
	}
	var guildname=Get_Cookie('guildName');
	var guildRoom='GCA_'+guildname+'_Chat';
	makechat(username,guildRoom,guildname+' Chat');
}

function countryChat(){
	if(Get_Cookie('playerName')){
		var username=Get_Cookie('playerName')+'_s'+GCAO_server;
	}else{
		var username='Anonymous_'+Math.floor(Math.random()*1001)+'_s'+GCAO_server;
	}
	var countryRoom='GCA_'+GCAO_lang+'_Chat';
	makechat(username,countryRoom,L_CountryChat);
}

function globalChat(){
	if(Get_Cookie('playerName')){
		var username=Get_Cookie('playerName')+'_'+GCAO_lang+'_s'+GCAO_server;
	}else{
		var username='Anonymous_'+Math.floor(Math.random()*1001)+'_'+GCAO_lang+'_s'+GCAO_server;
	}
	var globalRoom='GCA_Global_Chat';
	makechat(username,globalRoom,L_GlobalChat);
}

function makechat(username,room,text){
	username=username.replace(/[;:{}+=()*&^%$#@]/g,'_').replace(/\[/g,'_').replace(/\]/g,'_');
	document.getElementById('content').innerHTML='<div class="contentItem">'+
	'<h3>'+text+'</h3><div class="contentItem_content">'+
	'<applet width="506" height="500" archive="papplet.jar" code="pclient.main.ChatClient.class" codebase="http://64.13.158.25/pchat/bc">'+
	'<param value="papplet.cab" name="cabbase">'+
	'<param value="free_no_roam" name="Net.Site">'+
	'<param value="'+room+'" name="Net.Room">'+
	'<param value="TRUE" name="Ctrl.AutoLogin">'+
	'<param value="false" name="Ad.BrandOn">'+
	'<param value="E7DEB8" name="Col.MainBg">'+
	'<param value="000000" name="Col.MainFg">'+
	'<param value="false" name="Ctrl.Roam">'+
	'<param value="'+username+'" name="Net.User">'+
	'</applet></div></div>'+
	'<span style="margin-top:-10px;">Powerad By <a href="http://www.parachat.com/" target="blank">Parachat</a>!<br>'+
	'<font style="font-size:8px;">If you can\'t access chat be sure that you are using the latest version of Sun Java, which is available for free in <a href="http://www.java.com/" target="_blank">http://www.java.com</a></span></font>';
}