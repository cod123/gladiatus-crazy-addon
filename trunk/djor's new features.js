


// Improving guild war icons (using icons of quests)
if((GCAO_mod=='guild_warcamp')&&(GCAO_submod=='guild_combatreports')){
	document.getElementById('content').innerHTML = document.getElementById('content').innerHTML.replace(/guild\/combat\/lose\.gif/gi,'ui/quest/button_cancel.jpg" width="20"');
	document.getElementById('content').innerHTML = document.getElementById('content').innerHTML.replace(/guild\/combat\/win\.gif/gi,'ui/quest/button_finish.jpg" width="20"');
	document.getElementById('content').innerHTML = document.getElementById('content').innerHTML.replace(/guild\/combat\/draw\.gif/gi,'ui/quest/button_accept.jpg" width="20"');
}


// Problem : it displays a [!] which shows you new messages (not totally ok), however it launches a xhr and visits the message page, so at the next visited page, there 
// will be no new messages, even if you didn't go at the message page... There is the same problem with expired packages, it visits package's page, so the count of new 
// package returns to 0... 
seeNewMessage();
function seeNewMessage(){
	var divs = document.evaluate(".//a[@id='menue_messages']/div[@class='menue_new_count']",document.body,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	if(divs.snapshotLength==1){
		var numberOfNewMessages = divs.snapshotItem(0).innerHTML.replace(/[^0-9]/gi,'');
		// var numberOfNewMessages=2;
		GM_xmlhttpRequest({
			method: "GET",
			url: GCAO_siteurl + 'mod=messages&submod=messageShow&folder=0&sh='+GCAO_secureCode,
			onload: function(response){
				
				var messages = response.responseText.split(/<tr class="alt">/g);
				document.getElementById('mainmenu').getElementsByTagName('a')[0].innerHTML+=' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/exclamation.png" style="position:absolute;margin-left:10px;margin-top:1px;opacity: 0.65;" onmouseover="this.style.opacity=\'1\';document.getElementById(\'warningWeapon\').style.display=\'block\';">';
				var warningTip = document.createElement('div');
				warningTip.setAttribute('id', 'warningWeapon');
				warningTip.setAttribute('style', 'opacity: 0.75;display:none;z-index:502;position:absolute;top:179px;left:345px;border:1px solid grey;background-color:black;color:#c0c0c0;font-weight:bold;line-height:24px;padding-left:5px;padding-right:5px;')
				document.getElementById('header_game').appendChild(warningTip);
					
				
				var messagesToShow = "";
				var i =1;
				while((numberOfNewMessages>1)&&(i<26)){
					messagesToShow += '<tr>'+messages[i];
					numberOfNewMessages--;
					numberOfNewMessages--;
					i++;
				}
				
				if(numberOfNewMessages==1){
					messagesToShow += '<tr>'+messages[i].split('</tr>')[0]+'</tr>';
				}
				
				warningTip.innerHTML += '<table>'+messagesToShow.replace(/<tr/g,'<tr style="text-align:left"')+'</table>';
				
			}
		});
		
		
	}
}