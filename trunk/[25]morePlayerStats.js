//################################################################################################################################
//## MORE PLAYER STATS
//################################################################################################################################
function morePlayerStats(){
	var battles = document.getElementById('content').getElementsByTagName('td')[0].innerHTML.replace(/\./g, '');
	var bwin = document.getElementById('content').getElementsByTagName('td')[1].innerHTML.replace(/\./g, '');
	var L_win = document.getElementById('content').getElementsByTagName('th')[1].innerHTML.replace(/:/g, '');
	var blost = document.getElementById('content').getElementsByTagName('td')[2].innerHTML.replace(/\./g, '');
	var L_lost = document.getElementById('content').getElementsByTagName('th')[2].innerHTML.replace(/:/g, '');
	var wgold = document.getElementById('content').getElementsByTagName('td')[4].innerHTML.replace(/\./g, '').replace(/ <(.+)>/g, '');
	var lgold = document.getElementById('content').getElementsByTagName('td')[5].innerHTML.replace(/\./g, '').replace(/ <(.+)>/g, '');
	if(blost==0){var ratio = 0;}
	else{var ratio = Math.round(((bwin*1)/(blost*1))*100)/100;}
	if(battles==0){var posostonikon = 0;}
	else{var posostonikon = Math.round(((bwin*1)/(battles*1))*10000)/100;}
	var sWGold = (wgold*1)-(lgold*1);

	var color1 = "";
	if (ratio>1){color1 = "green";}
	else if (ratio<1){color1 = "red";}
	var color2 = "";
	if (posostonikon>=50){color2 = "green";}
	else if (posostonikon<50){color2 = "red";}
	var color3 = "";
	if (sWGold>0){color3 = "green";}
	else if (sWGold<0){color3 = "red";}
	
	sWGold = dottedNumber(sWGold);
		
	var LocationLink = document.getElementById('content').getElementsByTagName('tr')[3];
	var statsNewElement = document.createElement('tr');
	statsNewElement.setAttribute('Id','Ratio');
	LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
	document.getElementById('Ratio').innerHTML = '<th>'+L_win+'/'+L_lost+' ratio:</th><td style="white-space: nowrap; color: ' + color1 + ';">' + ratio + '</td>';

	LocationLink = document.getElementById('content').getElementsByTagName('tr')[5];
	statsNewElement = document.createElement('tr');
	statsNewElement.setAttribute('Id','PosostoNikon');
	LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
	document.getElementById('PosostoNikon').innerHTML = '<th>'+L_win+' %:</th><td style="white-space: nowrap; color: ' + color2 + ';">' + posostonikon + '%</td>';

	
	LocationLink = document.getElementById('content').getElementsByTagName('tr')[6];
	statsNewElement = document.createElement('tr');
	statsNewElement.setAttribute('Id','empty');
	statsNewElement.innerHTML = '&nbsp';
	LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
	
	LocationLink = document.getElementById('content').getElementsByTagName('tr')[9];
	statsNewElement = document.createElement('tr');
	statsNewElement.setAttribute('Id','WinGold');
	LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
	document.getElementById('WinGold').innerHTML = '<th>'+L_totalGold+':</th><td style="white-space: nowrap; color: ' + color3 + ';">' + sWGold + ' <img border="0" align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"></td>';
	
	LocationLink = document.getElementById('content').getElementsByTagName('tr')[10];
	statsNewElement = document.createElement('tr');
	statsNewElement.setAttribute('Id','empty');
	statsNewElement.innerHTML = '&nbsp';
	LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
	
	if (document.getElementById('stats_wealth')){
		var aksia1 = document.getElementById('stats_wealth').getElementsByTagName('td')[0].innerHTML.replace(/\./g, '').replace(/ <(.+)>/g, '');
		var aksia2 = document.getElementById('stats_wealth').getElementsByTagName('td')[1].innerHTML.replace(/\./g, '').replace(/ <(.+)>/g, '');
		var totalValue = (aksia1*1) + (aksia2*1);
		totalValue = dottedNumber(totalValue);
		
		LocationLink = document.getElementById('stats_wealth').getElementsByTagName('tr')[0];
		statsNewElement = document.createElement('tr');
		statsNewElement.setAttribute('Id','TotalValue');
		LocationLink.parentNode.insertBefore(statsNewElement, LocationLink);
		document.getElementById('TotalValue').innerHTML = '<th>'+L_totalItemValue+':</th><td style="white-space: nowrap;">' + totalValue + ' <img border="0" align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"></td>';
	}
}