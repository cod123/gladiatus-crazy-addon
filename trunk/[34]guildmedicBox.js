//################################################################################################################################
//## GUILD MEDIC BOX
//################################################################################################################################
function guildMedicBox(){
	if(document.getElementById('content').getElementsByTagName('p')[0]){
		var healPercent=document.getElementById('content').getElementsByTagName('p')[0].innerHTML.match(/(\d+)%/i)[1];
		var healpoints=document.getElementById('char_leben_tt').getAttribute('onmouseover').match(/(\d+) \/ (\d+)/i);
		var currentPoints=healpoints[1]*1;
		var maxPoints=healpoints[2]*1;
		var lifePercent=Math.round(currentPoints/maxPoints*100);
		var medicPoints=Math.round(maxPoints*(healPercent/100));
		var afterHealPoints=currentPoints+medicPoints;
		if(afterHealPoints>maxPoints){afterHealPoints=maxPoints;}
		var afterPersent=Math.round(afterHealPoints/maxPoints*100);
		
		var newDiv = document.createElement('div');
		newDiv.setAttribute('class','title2_box');
		newDiv.setAttribute('style','width:298px;margin-left:220px;margin-top:90px;');
		newDiv.innerHTML = '<div class="title2_inner"><table>'+
		'<tr><td>'+L_currentLife+'</td><td>:</td><td>'+currentPoints+' / '+maxPoints+'</td><td>('+lifePercent+'%)</td></tr>'+
		'<tr><td>'+L_lostLife+'</td><td>:</td><td><font color="red">-'+(maxPoints-currentPoints)+'</font></td><td>('+(100-lifePercent)+'%)</td></tr>'+
		'<tr><td>'+L_healLife+'</td><td>:</td><td><font color="green">+'+medicPoints+'</font></td><td>('+healPercent+'%)</td></tr>'+
		'<tr><td>'+L_afterLife+'</td><td>:</td><td>'+afterHealPoints+'</td><td>('+afterPersent+'%)</td></tr>'+
		'</table></div>';
		document.getElementById('content').appendChild(newDiv);
	}
}