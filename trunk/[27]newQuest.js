//################################################################################################################################
//## NEW QUEST AVAILABLE
//################################################################################################################################
function newQuest(){
	if(!document.getElementById('bx0')){
		GM_xmlhttpRequest({
			method: "GET",
			url: GCAO_siteurl + 'mod=quests&sh=' + GCAO_secureCode,
			onload: function(response){
				if(response.responseText.match(/quest_slot_button quest_slot_button_finish/gi)){
					var doneMissions=response.responseText.match(/quest_slot_button quest_slot_button_finish/gi).length;
					var object=document.getElementById('mainmenu').getElementsByTagName('a')[1].innerHTML;
					if(object.match(/\(\d+\)/i)){
						var num=object.match(/(\(\d+\))/i)[1];
						document.getElementById('mainmenu').getElementsByTagName('a')[1].innerHTML=object.replace(num,'');
					}
					document.getElementById('mainmenu').getElementsByTagName('a')[1].innerHTML+=' (<font color="green">'+doneMissions+'</font>)';
				}
				if(response.responseText.match('quest_header_cooldown')){
					var timeleft=response.responseText.match(/\d+:(\d+:\d+)/i)[1];
					var minute = timeleft.split(':')[0];
					var seconde = timeleft.split(':')[1];
					document.getElementById('mainmenu').getElementsByTagName('a')[1].innerHTML+= '<font style="margin-left:5px;" weight="bold"><span id="quest">(<span id="minute">'+minute+'</span>:<span id="seconde">'+seconde+'</span>)</span></font>';
					var timer = setInterval(function(){
						var secondTemp = document.getElementById('seconde').innerHTML;
						if(secondTemp[0]=="0"){secondTemp=secondTemp[1];}
						if(secondTemp=="0"){
							var minuteTemp = document.getElementById('minute').innerHTML;
							if(minuteTemp[0]=="0") minuteTemp=minuteTemp[1];
							if(minuteTemp=="0"){
								clearInterval(timer);
								document.getElementById('quest').innerHTML = '<font style="margin-left:5px;" weight="bold">(<font color="#FAF311">'+L_New+'</font>)</font>';
							}else{
								document.getElementById('seconde').innerHTML = 59;
								if(parseInt(minuteTemp)<11){document.getElementById('minute').innerHTML = "0" + ""+ (minuteTemp-1);}
								else{document.getElementById('minute').innerHTML--;}
							}
						}else if(parseInt(document.getElementById('seconde').innerHTML)<11){document.getElementById('seconde').innerHTML = "0" + ""+ (secondTemp-1);}
						else{document.getElementById('seconde').innerHTML--;}
					},1000);
				}else{
					var quests=response.responseText.match(/: (\d+) \/ (\d+)/i);
					if(quests[1]==quests[2]){var status='<font color="red">'+L_Full+'</font>';}
					else{var status='<font color="#FAF311">'+L_New+'</font>';}
					document.getElementById('mainmenu').getElementsByTagName('a')[1].innerHTML+= '<font style="margin-left:5px;" weight="bold">('+status+')</font>';
				}
			}
		});
	}
}