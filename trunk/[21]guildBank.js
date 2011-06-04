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