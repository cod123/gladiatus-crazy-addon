//################################################################################################################################
//## GUILD WAR MORE STATS
//################################################################################################################################
function guildWarMoreStats(){
	var img_gold = 'data:image/gif;base64,R0lGODlhDQANAOZtAM68js27jceyhuKvRsq1hpZBGe22Rcy3ipNGHMmzhMq1iJRWO9urRc22f8Wwg+rDVb6xhvnzou/FVP/1oKtgOv/8v7GZb7Kha8GUcrObY4pcOZhePPe2Ov/acbWfdv6dIf3zka6aZcujfZlpO+rYzsKpdPfESv/93v/vyeO3S6RlT7l9XuS2R8ClY//vqMCsfap5S31ON//ld//kY9GlUdm6jaGGZMqmTMe1iJVUOMu2h6SBYe/XX7SKUZBaOf/wfv/xecGvg8SAWP+3OP/8l//ITf/ARKSCX/+UG//aT66caLabVcd8LMS4UP6sLq1uN+zVa//MV8ayhptmR5dcRfvccrKObP//48u6g6KKZvm6Q+m6Tcyacv/ba//dbejBk+6wO/+wMf/6kO63R9PBWffult2uR8qxh6yddP/bWKGQav/4vf/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAG0ALAAAAAANAA0AAAeLgG2Cg4SECiVLAwZjNyFBAYICLTxslZVJTWiQaiAyXVFGWmYMaWQ4AFgTlWFIH2ApW2sZABAVlUVDThwsD2tQLzYnax1ePzMmEkBrVRceGyRXa9JrYjRMREoERwUqIjUNPQhPEWUWbQkjXBgUC1aVLjBngg45K18olUI+UoQ6WVMaYlDZcaCQQUKBAAA7';
	
	if(document.getElementById('bx0')){var i=3;}
	else{var i=1;}
	
	var tableHTML = document.getElementById('content').getElementsByTagName('div')[i].innerHTML;

	if(tableHTML.match(/gid=(\d+)/i)){var guilds = document.getElementById('content').getElementsByTagName('div')[i].getElementsByTagName('a').length/2}
	else{var guilds = document.getElementById('content').getElementsByTagName('div')[i].getElementsByTagName('a').length}
	
	document.getElementById('content').getElementsByTagName('div')[i].innerHTML = tableHTML.replace(/<\/th>/i, ' (' + guilds + ')<span style="float:right;margin-right:7px;"><b>LvL &#216;</b></span><span style="float:right;margin-right:13px;"><b>'+L_gold+'</b></span></th>');

	var c=0;
	while(tableHTML.match(/guild&amp;i=(\d+)/i) && c<=15){
		var guildid = tableHTML.match(/guild&amp;i=(\d+)/i)[1];
		tableHTML = tableHTML.replace(/guild&amp;i=/i, 'guild&i=[DONE]');
		getGuildGold(guildid, i);
		c++;
	}
}

function getGuildGold(id,i){
	var xmlhttp=false;
	if (!xmlhttp && typeof XMLHttpRequest!='undefined'){
		try {xmlhttp = new XMLHttpRequest();}
		catch (e) {xmlhttp = false;}
	}
	var url=GCAO_siteurl + "mod=guild_main&i=" + id + "&sh=" + GCAO_secureCode;
	if (xmlhttp){
		xmlhttp.open("GET", url,true);
		xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4) {
			if(xmlhttp.responseText.match(/mainbox/i)){
				var gold = xmlhttp.responseText.match(/<th>(.+) <img src\="\d+\/img\/res2\.gif"/i)[1];
				var mesoLevel = xmlhttp.responseText.match(/0216.<\/td[^<]+<th>([^<]+)/i)[1];
			}
			else{
				var gold = 'Error 1';
				var mesoLevel = 'Error 3';
			}
			showGuildGold(gold,id,i,mesoLevel);
		}
	}
	xmlhttp.send(null)
	}
}

function showGuildGold(PulledGold,GuildId,i,mesoLevel){
	var img_gold = 'data:image/gif;base64,R0lGODlhDQANAOZtAM68js27jceyhuKvRsq1hpZBGe22Rcy3ipNGHMmzhMq1iJRWO9urRc22f8Wwg+rDVb6xhvnzou/FVP/1oKtgOv/8v7GZb7Kha8GUcrObY4pcOZhePPe2Ov/acbWfdv6dIf3zka6aZcujfZlpO+rYzsKpdPfESv/93v/vyeO3S6RlT7l9XuS2R8ClY//vqMCsfap5S31ON//ld//kY9GlUdm6jaGGZMqmTMe1iJVUOMu2h6SBYe/XX7SKUZBaOf/wfv/xecGvg8SAWP+3OP/8l//ITf/ARKSCX/+UG//aT66caLabVcd8LMS4UP6sLq1uN+zVa//MV8ayhptmR5dcRfvccrKObP//48u6g6KKZvm6Q+m6Tcyacv/ba//dbejBk+6wO/+wMf/6kO63R9PBWffult2uR8qxh6yddP/bWKGQav/4vf/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAG0ALAAAAAANAA0AAAeLgG2Cg4SECiVLAwZjNyFBAYICLTxslZVJTWiQaiAyXVFGWmYMaWQ4AFgTlWFIH2ApW2sZABAVlUVDThwsD2tQLzYnax1ePzMmEkBrVRceGyRXa9JrYjRMREoERwUqIjUNPQhPEWUWbQkjXBgUC1aVLjBngg45K18olUI+UoQ6WVMaYlDZcaCQQUKBAAA7';
	document.getElementById('content').getElementsByTagName('div')[i].innerHTML = document.getElementById('content').getElementsByTagName('div')[i].innerHTML.replace('<a href="index.php?mod=guild&amp;i=' + GuildId + '&amp;', '<span style="float:right;margin-right:15px;">' + mesoLevel + '</span><span style="float:right;margin-right:25px;"><b>' + PulledGold + '</b> <img border="0" src="' + img_gold + '"></span><a title="" href="index.php?mod=guild&amp;i=' + GuildId + '&amp;');
}