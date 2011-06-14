 //################################################################################################################################
//## GUILD SAFE
//################################################################################################################################
function guildSafeEdit(){
	var allbutton=document.createElement("input");
	allbutton.id="allin";
	allbutton.setAttribute("type","button");
	allbutton.setAttribute("class","button3");
	allbutton.setAttribute("value",L_addAll);
	allbutton.setAttribute("style","margin-right:17px;");
	allbutton.setAttribute("onclick","document.getElementById('content').getElementsByTagName('input')[0].value=document.getElementById('content').getElementsByTagName('form')[0].parentNode.innerHTML.match(/>([^<]+)<img/i)[1].replace(/ /g,'').replace(/\\\./g,'');");
	document.getElementById('content').getElementsByTagName('input')[0].parentNode.parentNode.setAttribute("valign","top");
	document.getElementById('content').getElementsByTagName('input')[0].parentNode.appendChild(allbutton);
}

function guildSafeLog(){
	if(document.getElementById('content').getElementsByTagName('table')[0]){
		var style = document.createElement("style");
		style.setAttribute('id', 'NoGuildPlayersStyle');
		style.innerHTML = '.notInGuild {display:none;}';
		document.getElementById('content').appendChild(style);
		
		var pieBox = document.createElement("div");
		pieBox.setAttribute('class', 'contentItem');
		pieBox.setAttribute('style', 'margin-left:20px;width:500px;');
		pieBox.innerHTML = '<h3 style="width:476px;">Statistic Pie</h3><div class="contentItem_content" style="width:468px;"><img id="pieImg" style="position:absolute;"><div style="margin-left:140px;">1. <font id="Name1" color="red"> - </font><br/>2. <font id="Name2" color="green"> - </font><br/>3. <font id="Name3" color="blue"> - </font><br/>4. <font id="Name4" style="color:yellow;text-shadow: 0pt 0pt 2px #000000;"> - </font><br/>5. <font id="Name5" color="fuchsia"> - </font><br/>6. <font id="Name6" color="aqua"> - </font><br/><br/><div style="position:absolute;margin-left:170px;margin-top:-126px;">7. <font id="Name7" style="color:#FFB700;text-shadow: 0pt 0pt 2px #000000;"> - </font><br/>8. <font id="Name8" style="color:#D2B48C;text-shadow: 0pt 0pt 2px #000000;"> - </font><br/>9. <font id="Name9" style="color:#FFD700;text-shadow: 0pt 0pt 2px #000000;"> - </font><br/>10. <font id="Name10" color="#7F7F7F"> - </font><br/>11. <font id="Name11" color="#BF0000"> - </font><br/>12. <font id="Name12" color="#00BF00"><b>Others</b></font><br/><br/></div></div>';
		document.getElementById('content').appendChild(pieBox);
		
		var num=document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr').length;
		var sum=0;
		var temp='';
		for(i=1;i<num;i++){
			temp=document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[2].innerHTML;
			temp=temp.replace(/\./g,'');
			sum=sum+parseInt(temp);
			if(document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerHTML=='-'){
				document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].setAttribute('class','notInGuild');
				if(!document.getElementById('ShowNoGuildPlayersButton')){
					var value=document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[0].innerHTML;
					var button = document.createElement("tr");
					button.setAttribute('id', 'ShowNoGuildPlayersButton');
					button.setAttribute('colspan', '4');
					button.innerHTML = '<td><input type="button" class="button2" value="'+value+'" onclick="this.style.display=\'none\';document.getElementById(\'NoGuildPlayersStyle\').innerHTML=\'.notInGuild {display:inherited;}\'"></td>';
					document.getElementById('content').getElementsByTagName('tbody')[0].appendChild(button);
				}
			}
		}
		document.getElementById('content').getElementsByTagName('div')[2].innerHTML+= ' <font style="float:right;padding-right:10px;">('+L_total+': '+dottedNumber(sum)+' <img border="0" align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif">)</font>'
		
		var hisMoney=0;
		var percent=0;
		var othersPerCent=100;
		var code='http://www.webou.net:2082/backend/piegraph.cgi?';
		var name='';
		for(i=1;i<num;i++){
			hisMoney=document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[2].innerHTML.replace(/\./gi,'')*1;
			percent=Math.round((hisMoney/sum)*1000)/10;
			document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[2].innerHTML+=' <b>('+percent+'%)</b>';
			if(i<=11){
				name=document.getElementById('content').getElementsByTagName('table')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[0].innerHTML;
				if(name.match(/">([^<]+)<\/a>/i)){
					name=name.match(/">([^<]+)<\/a>/i)[1];
				}
				document.getElementById('Name'+i).innerHTML='<b>'+name+'</b> <font style="color:#612D04;text-shadow: 0pt 0pt 0px #ffffff;">('+percent+'%)</font>';
				code+=i+'='+(percent*10)+'&';
				othersPerCent=othersPerCent-percent;
			}
		}
		othersPerCent=Math.round(othersPerCent*10)/10;
		document.getElementById('Name12').innerHTML+=' <font color="#612D04">('+othersPerCent+'%)</font>';
		code+='12='+(othersPerCent*10)+'&action=pie';
		document.getElementById('pieImg').setAttribute('src',code);
	}
	if(document.getElementById('content').getElementsByTagName('table')[1]){
		var num2=document.getElementById('content').getElementsByTagName('table')[1].getElementsByTagName('tr').length;
		for(i=1;i<num2;i++){
			temp=document.getElementById('content').getElementsByTagName('table')[1].getElementsByTagName('tr')[i].getElementsByTagName('td')[3].innerHTML;
			temp=temp.replace('Sun','<font color="red"><b>Sun</b></font>').replace('Mon','<font color="#660000"><b>Mon</b></font>').replace('Tue','<font color="#006600"><b>Tue</b></font>').replace('Wed','<font color="orange"><b>Wed</b></font>').replace('Thu','<font color="#666666"><b>Thu</b></font>').replace('Fri','<font color="purple"><b>Fri</b></font>').replace('Sat','<font color="#003399"><b>Sat</b></font>');
			document.getElementById('content').getElementsByTagName('table')[1].getElementsByTagName('tr')[i].getElementsByTagName('td')[3].innerHTML=temp;
		}
	}
}