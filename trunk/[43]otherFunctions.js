//################################################################################################################################
//## TAKE GUILD'S NAME IF IT EXIST
//################################################################################################################################
function guildNameTake(){
	if(!document.getElementById('content').getElementsByTagName('input')[0]){
		var guildName=document.getElementById('content').getElementsByTagName('b')[0].innerHTML;
		Set_Cookie('guildName',guildName);
	}
}

//################################################################################################################################
//## ADVERTISEMENT TOP UP MOVE
//################################################################################################################################
function moveAdd(){
	var image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAAvCAYAAACcwK+7AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAF0BJREFUeNrtnXusJFl93z/nVY/uvn1fc+fFy4sJL2PGSsCKlI0dW0gWTv4gUmyMY2QDEqsoG8tGUbJSlD9MpGjlPCAEOQFZaDECYSQwAcebTaJIJCiOs4kDZDfisdpdYHceOzP31V3dVXUev/xRfWdm8awNdy/rXXQ+mp4u3a6uPnW+v3O+51enHkpEOEn+9xfeK94vaZdL+q4nJc18b5cUhRQ8dlRT1WMOr18FEaL3+LajWpvgypIUEvV0itaabjmnGk9RKNrlAcY6+mWLSMQVBSlElvv7uLqiXl8n+o7x2haLZh+lwHcd65tnsEWFUhoNoBTGuGcsf4weSQnrytt+LiKwqrMkEQS0sSilSCKkFFguD2mbA4wrCX1Hd3hIsbaGX7SA4EZjqvE6MQWUMuxfuog2BlsVGFdjy4Ju3qCNpp3P0UqwVUFYdoBg6xFFOabtOqwtaJsGpTXdYokrS1CJza1N2naGMYrQ90w3TmNdidJDPSil0MahlAIEULBaVihC6G+ph+FzESGGQPA9pjDEkFg2M7z3aKVIKmGtoVvMma6fwhYVkgSRSEpC33Yoqwdt2zmj8TptOwcJhL5nsraNMnb4He9ZHh6grKYYjfDd4gWrrdJ6pW2FLSu6eQMoDq/uUq2v49uWpmnp246yqinrguAja5tTRARtLLPdfZRSxJRY35yyOJzjvaee1IS2xxhFUQ1lWjYNSinOv/IVtPNDJEXWt88ikgBYzPeJvaedNSij0FqDQPQ9SRR9SPzQa+7IbfcHWN/5bMnuLPHY5QV/7Y0vfk7Lo5Qe+hjf430kxsT6mTP0XUtKScrJ1iWt2e17Xnft2iEH+3N+431/oOU2ZvXhf/Jm9e5/fP/3bGKWE+bSI48QKfnaN65w+foMpS1XntobOlytsMZgrWGxaNFaEUNkNl8wGdcU1lIUQ8fX9T3aaDbX1zBacTibMx7XlKUjhoDSmhQ8zXyB7z3rG2O2Ntdxds7e/gHWaJDEufNgjEFrtXppALQa+vphWR81DUQESYKxBhFZGcON9rJqNAkEUkos256yLADoe09Kgu89B/szRGt6H1guWgp3wHRjg9lsQYj7jCd7HB4uWC472uWwr6PJiCQwKgv29w9BDQ10UhcU1jBdn9I0S3zYpyhLdvfm9CHRdQFjLNZotBY210eM6hltu6C0GkXizFlBa402GrtqDCIyVIFi+EzplckNdZGSYMxqPaURBN9HFsseH4VF67m2O0MEjNakGCicRkvkRS8WnDXEJPgQaNvIsu1pmhYfAnVdMqn3aJo5RqtVGRNJIMRE33lmswVNs6SuCyaT8QtWW6UV9XhETEJVFFy7fkDnPc2i4yUvPoMIXLt2QNf1jMc1oGi7ntGoIoRIURQYowkh4qxGm+uIwLJZoo1iPl9SFJbxuObq1T2MMfgQmPzRZYw2VFXBZHKZECPWaFISZvMF3geMMRij6dohBlMMlIXmq99qc9v9AdZ3Yzrm2v6Cbzy+h+/Tc1Yerc0wGPeRECMpRpIkRvUVQkCU0bEsntgQRF76QzV9MHTLxTP6zRcefJJ3H8OnTtz4Fr5md/eQP/6/XyEGh1KwXHpCTGitWJtUKAVPXNxnOqkYjwr292Y0s0Mm45KUhCSJGBNlYfHtjGXrWTY9KQmjUUFVWozWNIuePnqWrae65jDmSYyCGBMhRMrC8vVvXsQ6zah2GKMhDa1Aa3WjzEdL3keUUhij6LqAc0PQ/ImR41EjSoIPkSTD9pIIiGK57CFBCJHF0mOMpg+JUVVQFpaUEiLQzHvaNrA2Kel9pE+J6aQChLb1GKvoV+WISagrR1lYYkwkEZYLT4qQGEzmaEd2dzVGK0KIeB8onOFrj1/EOsWoLm7Ug4gM9TD8QyuFyFAPWg/10HbD948MMCUIIRFX74s24Ps4BJPVhBCQJDz6xCVcoSkLiwikkOj7RNsFYkworbBG433A+0BZWL72+EWc05TO0veJrvM0yx7rzGCuL2BtuxhX2sK86bBW03WBbz62wNpBU6MVbdMRU0JEWISGWdMyrstV3SaqylKVjiSCRpjtt8yaDucMTo2Zzw5X2U+iW86xRhOTYI2+MYJXSt3Y0Y31mr2mo+sDdeVQgJjIt7tlbrs/wPq6yYKvf2OXeZtoZuo5K8/6tGJ/0Q9/Xx1FkhgIrfH789iLSAEKoxUx1PjkYBjcqFvku0F7cP1YPnXixtf7SO97ZofCH3zxkZ8GCuAolQhAut0OZDKZTOa555FvHfx5/rzc8h6AHlgCzT+88ycevbKf6BbtM37501948lhecuLG13UdApSlYWV6xcrs4urdr94zmUwmk+EWj/ArA4ynX7SDcpGuPdw96WTJfuqj9777+lNPfGixbFZzNWY4lq40zlV07ZyUEkVVD4fYYiAGj9IG5wpQGmMNMQxp64XX/UW+9fg3mNQlq0zvyOw6YLFajlnnTCaTydxiamH16oCurEpedjYQ0075a3/3l9J7/t4v4ZyjtAqtAQkolShcibMGbS2hX2KMpqwmeN+RJBJ8JIZITEJRVGxsn7nL/vwv3/PhLz94/1+KIb37W489xN71y8TQY11JigEJkcWiIXUtCjAMk9fT6ZSiVGhtUNogJUiCa1cv0Sx62tYf7VC8xfTmq+WQtc5kMpnMLcaXjrI9oCcpul6YjOrxzvYaoV+ijKJ0YDXDWbjNglLH4azfAKRIXY8pCxhVNb3vkLpibbrDzvk7MEp/+E0/+7c/bAEuvPHNd/2Du99a3PmTd/7KK199gSsXHyFJ4nDvMkZ3aJUwzrE2rul8pPULYooY1VK4mpQ8wXuKaszm1mnaNtJ14UZRbjG9GdCusr5MJpPJZG6d50tHL20goigmm2ziODw4pCocRWlQ0rNYCNbVTNYmlE5xOGsxcYaRDtIho8lZxlKysfNSru3OuP9zn7/v/R/61F1wyxzfb37wd9/xN3/mx3j9hQu/8gtve9twSqvWLBYzfN/RzA9vnK4cE8QQ8H3DsjkA1HAtTIJLTzzC9d05vQ9HDu65eaiz5ebhzkwmk8lkvtMEBRClFUY5YhROn9tiMnEoCSigHo3Z3D5FWY5wVqM0+D5Qj6YYY6nqMX3vWbQtn/70Z/jqww/d99n/+KV3HP2I+s5rAu+5+y2/KJI+sDaZTEYjF86e3YlbG2vR90u0dWil6aIpL118anS7eUEdnuKwifzRH36Zz/+3b/40w1k6h8DB6rUQkWx8mUzmBcmDDz6YK+E54I//8APSHFi2Tm2TpGI+2yelyKh0jMcF13YXnD29vVgb605SIgSPKyqu783MpUtXTdP0djZv5ij9q//y3/67T9y67T9xVue9H/zsJ4BP/FmF+vKD93/odvOCzb4mBM/6WpWVy2Qymcyx6OZdNLY0SpUUOuEMBDRFNWE83Wbn3MbnH3v0ob/11ne9r/9et62PW6gLb3zzXZ/8+O/cp92IV776Altbm0wmFfV4OpzpaXRWLpPJZDLHQhXKjCcj+jBcATeqKl7xF17NmfMv5/r165/Y2Kh//q5f+95N77YZ3/fCM80LXr92iQ/85nuzcplMJpM5FsaYZt6k0ahOkqzVWzvn2N8/5NLXf/++99z7wDuezbaf9QXsv/fAl95xz91v+U/3/fZvreYFbbmzs/202wplMplMJvO9GZ8ySi3jwcHiYmfd6Vr59rU/8oZffds7/9HHnu22T+TOLbfOC37kX7xdnvj2Y8O97zKZTCaTOR7V7vW9uFz2e694+R2v+bm7/tnipDZ84rcsiyHgfST7XiaT+UGku/yZXAnPAafW1nh4vme6Zrb57l//14uT3PaJn4EiwOG8zbehzmQymcyxUUoRUkRiPH/S2z5x43PWrR5vk50vk8lkMscjRoEEWusTPzKpT76wgXM7U6zNlzNkMplM5nikODxj0bqTP1Hy5N1JwWzZ0/X5AQyZTCaTOR7GWiaj8vtyhcCJG5/RltHqKeGZTCaTyRwH6wxm9ST3573xxZQ4mC0pCpOVy2QymcyxkQjmhZDxiSQmk5rlMt+HOpPJZDLH9BKEGIVFc/JecuLG5zufvI+MR0VWLpPJZDLHdT4wYAt74pcInLjx1ZP6vysly3w1QyaTyWSOi1IKZ9RyMnKPP++NT6K889zp9ft6H3azdJlMJpM5lpeI4Kx+4iVnNx8+6W3b70N594EHteVlWbpMJpPJHIcYIuuVYzouXvO8z/iAPeD3vY/57JZMJpPJHM+cjKIsdQm4533G986//7EAXP33/+GOV2XpMplMJnMcRJQ8/tTid0O7/xtvfwFkfEOaGtOZLF0mk8lkjmVOWsXYRxtC2njeZ3w301TdZukymUwmcxwUaraM/n/0TTjxabPvm/Gtr1UbWbpMJpPJHAeRdG05X37Rd3HvBWN8xug6S5fJZDKZ4zkfdt50tpl1J/7EgxM3vo++/x0ABuizcplMJpM5Dkk4e/bM1s8u6/2PnLSffD8yvjuAXwauZukymUwmcxy0pqqK4pSM3Mlv+/tQ3jcD7wGuZOkymUwmcyyUSoXh4mvv2Hn+36uzrKd/QwQFvDgrl8lkMpnj+Z7S2xvubuDvnPS27ac+ei/Xn3qCxbJBBIw2aK1BaZyr6No5KSWKqibGRIqBGDxKG5wrQGmMNcSgEBF+9LUv+6knv/2oEZFxli6TyWQyxzI+QU1r82PAv/r1u9/+AaUE5xylVWgNSECpROFKnDVoawn9EmM0ZTXB+44kkeAjMURiEoqiYmP7DPavvOntXLv4FWJIfOuxh9i7fpkYeqwrSTEgIbJYNKSuRQEGoet7ptMpRanQ2qC0QUqQBLvXr3TzplvPsmUymUzmuIiCpktqfVKzsz0l9EuUUZQOrIaUAstmQanjcOgyAClS12PKAkZVTe87pK5Ym+6wc/4OjNJsnnk1emNjgx9+zV/lkx//HbQb8cpXX2Bra5PJpII0x+gOrRLGOTY2ptTjCdpWxBQxqqV0EataVJhRFon1jVPFeDxBVBYuk8lkMsdP+foolNPTbE5rSueZVsLaSDMqA1oE62oma1M2N9YxpsSoiJEO0iGjUcXmdMrLf/g1KFNy/+c+zx2v+stsbW1hy7IE4J++/+P83F9/A6+/cIFfeNvbKIoCozWLxQzfdzTzQ4rCIiLEBDEEfN+wbA4AhVKKlODKxUe5du0AlY0vk8lkMsf3PZwu8D5w+twZJhOHkoAC6tGYze1TlOUIZzVKg+8D9WiKMZaqHtP3nkXb8ulPf4avPvwQH/rYAxhjsNZirb15RcPvPfAl7rn7Ldz327/F2mTCaOQ4e3aHrY01fL9EW4dWmi4aLl186rbzgjo8RdsG8oNoM5lMJvPd8J+/+KR6050vuuEa//MrB/pl5wFdIlgO9ufMZwekFBmVDlTk21+5zNnT26yNNZISIXhcUXF9b8alS1dpmp7ZvAGl+cgn/wvWWrTWg/F9ZwHu/eBn/8xCPvnkk884L9js6zoEofcBrZVKKTtgJpPJZJ6ZW00P4Mdfv56euLSLsQatK4yKOAMBTVFNGE+32Tm3wWOPPsRb3/W+Y2STx0jNmqZBRHjvPe/izp+8k+2NNa5cfIQkicO9y/7K1X3z4tNW2bLEGc/2qfME34GCFCNFOUJpjaxMUYAUPShF9AGRiDYGSULoOow12LIkxYgrqmFb3NyWNgalFAoQ1JB9PgMiCRFBa3P7z4eVbqyLAEohAjEJYXV2UBLL0SFeRBARUDCU4qh2b3+8V1Ia1lV/ejmRVXmQYUTjO9Rq34xxhOhRSpO8R1JCWweaVb0qtNGIJIweLgCN0aPNcLg6hQhqKEsMAW30jfLYoiSl4cQmlEYpMM6hFKSUAEXo2mH/tb7xSmG4s1DoPdo5UoqkkEgpobVGG01KgnN2Va2K4MNqf4e/xxBJkjDWIDGBUhitSZKIIaKAcjImBQ8CtiiOVCPGgEQhxQDqphIiiaIeEb0fpJWEsgatLaHvbqyTYsJYO9SxgLZDXKUYMGZVh2lV5zEN0aYVJEjBo7RGO4dIwhpHXD2SUlLCunKl3apc36X+6pli+ZZ2K6tAUUqtYlUAIcZAimEoryTEe5R1SBx0UsZgjEN4YWpajkZDu8y6Pi91BShGNRIDIoJ1N3VNMSJJSCne6Ltv9s+KJBKVDnHWrRVJuVBb5aIPnD7/MtA1F594lB99/ev48Z/4xWMeRj2G8YUQbix/57zg1//f//rc4f7Vn7p+7fqkbRtIESWB/cMZpIikyJlzpwkRuq4jRPA+cjCb41yBtYbgPShNCp5mvsD3nvWNMVub6zhr2Ns/wBoNkjh77jR2FchaszI9hVaABgXoVSDKkUGJYKwhJUHrocpTuulVUdIQ9CmxbHuK0pESLNuA74UkmqgrNArjhqQ5eE9RuBvBr28b/IMhpZQYYlkNKwNJ0o1VjhRJMvyXREgpsb9/CAyBNR7VhCg0zYLFosdaTVGWw4BBElobQoh0vacqS0SEZtEiSbCFQYkixESIka7rqaoSrTVJhLJ0w6Urq98mJdanYyRFZoseY9TQ2JTClQUCOGOYzZf4GOn6wPbWFEkwa5YE7ynLAlB4HyhLR4gJax1aQ0qC0QqthwFG3/VorVi2PdYZyqJgNmvQWhFjoqwcWhmcM1RlSYwRozUiwrLviSFhtEJphfcRrRXbm2scHDagNVoNv2WMpus8Wg2atG1HWRZYY7BGI0oIfURpxXhUoZSi7TrKwmGtWTVaTYqRvusIITEaFYzHI6xRNIvlKg4SGxvToUNRCvQqPo/UXy3fjBlZxepRPMvNlW4h3TI46nuPdatO3AcSQvSR5aJFVvXW9x6rDdVoRNt1xChUVcFy2dP3Af8C03RrfYTSJuvae0pn2dgYMV/0eJ8oS0fbehRD39H1CesM2mjGVYFzGq2Fwiq0USgUMSViTEO9ieB9GvoeEazWaK3ofOL6fk9VKAqr0QqMHvoSQTFvI1WhMEoRiFinV3Wh0EqjlLDKFeh9ousCRmlG45oYEm0PL3nRDtYZ1qZr7O43sjYapbLQdnNzm3nTcunr/5X33PvAs5w/PIHJuHvufgsiibXJhLW16uGdna1TmrS2uz+rQ7ekWcwQgf/zpYeRFDl3foeN9XUuXblMipHl0rNsPN4nqspSFhajNc2ip4+eZeupaocxGqMgxkQIkbKwlLXDOs1o9TmrLPLI0G6JP7wfRhfGKLou4JwZvnO7rI+h8foQSTKM4hIaJQ4fFaPxxnChiVJIGsQ02qCNetpvPi2gkxDDEIBHJnz0+/K0jHC1sOpA+j6SouD7iF91CForkjAEaB9whcUqQ1kYkgz72vcBpRRFZSmspu0DwSeUUehVttr6QIqR6aSm6wLLzrO1MQKBZTeMpLWBwg4jP20Kgu9JwROCECRRV0PDbLuAUQofI9YMo0YZBoI3GtMwJ6xYrhqr0ZqYEs4ZCmsGoxVYtp629xhrWKtLdg8XN+rQ2SGrT0mGTJWhHobse6i6Ue3ouoAPkcJZqtLSh0CKQ3nq0oGC3f0FdekoS8vhfIk2hsqtsmIEiYJ1mqqw9CHRt8PotSgszhm0gq6PBIk3dNBq6ABTkmHfjMEVZvVEaTvE5tFA65bwO4qZGNMwClaK4CPG6qfF83fGqSSIKSICSq8yA1H0fQQZPuv90KGFKBTO4OwqBoGuHeqpKu2JaRpiPLamxprvStOytCh4TnS1zvypuhaF+XPVdTQqedXLT3E4744OW7FYBs7uTNBaMZ/1xCSUhUUQjDYYqxBWxmaGTNAodcO108oI+xCoC4fWmsWy49JTM85uj4eE42lHyqDpuiFLTIr9pkWtTBUlpCRsrluMGYyvaSIikcJpynIKusYHy9kz66FwxirdStfRNLOZKawbnd2e8sofeQMX7nzrs/asEzG+TCaTyWROmn/zz++mqkp9/kXn00tf+ipOnX8VZTVhunnuWW33/wOHU+hxy+R6QQAAAAd0SU1FB9sEDREDNz2zB9oAAAAASUVORK5CYII%3D";
	document.getElementById('mainnav').setAttribute('style','bottom:-25px;');
	document.getElementById('content').setAttribute('style','margin-top:25px;');
	document.getElementById('banner_top').setAttribute('style','top:152px;background-image:url('+image+');');
	document.getElementById('banner_event').style.top='155px';
	if(document.getElementById('cooldown_bar_event')){document.getElementById('cooldown_bar_event').setAttribute('style','margin-top:30px;');}
}

//################################################################################################################################
//## SHOW PLAYER'S ID
//################################################################################################################################
function showId(){
	var playerid = document.location.href.match(/p=(\d+)/i)[1];
	var table = document.createElement("div");
	table.setAttribute('class', 'charstats_bg');
	table.setAttribute('style', 'margin-top:-4px;');
	table.innerHTML = '<span class="charstats_value21">'+L_ID+'</span><span class="charstats_value22" id="char_schaden">' + playerid + '</span></div>';
	document.getElementById('charstats').appendChild(table);
	
	var table2 = document.createElement("div");
	table2.setAttribute('style', 'background-image: url(\'img/char_status_abschluss.jpg\'); width: 173px; height: 5px; overflow: hidden;');
	document.getElementById('charstats').appendChild(table2);
}

//################################################################################################################################
//## SAVE GUILDMATES IDS
//################################################################################################################################
function saveGuildmatesIDs(){
    var mates = new Array();
	var c=1;
	if(document.getElementById('mainbox').getElementsByTagName('tr')[c].getElementsByTagName('td').length==5){
		while(document.getElementById('mainbox').getElementsByTagName('tr')[c].getElementsByTagName('td')[0]){
			// alert(document.getElementById('mainbox').getElementsByTagName('tr')[c].getElementsByTagName('td')[0].innerHTML);
			if(document.getElementById('mainbox').getElementsByTagName('tr')[c]){
				var mateID=document.getElementById('mainbox').getElementsByTagName('tr')[c].getElementsByTagName('td')[0].innerHTML.match(/&amp;p=(\d+)/i)[1];
				var mateNAME=document.getElementById('mainbox').getElementsByTagName('tr')[c].getElementsByTagName('td')[0].innerHTML.match(/>([^<]+)</i)[1];
				mates[c]=mateNAME+"<"+mateID;
				c++;
			}
		}
		Set_Cookie("GCAOguildMates",mates.join("#"),365);
	}
}

//################################################################################################################################
//## GET PLAYER'S ID FROM PLAYER'S NAME
//################################################################################################################################
function getPlayersIdFromPlayersName(){
	var PlayerName = document.getElementById('playerName').value;
	document.getElementById('player_sim_results').innerHTML='Searching id...';
	var code = '&s=s&xs='+PlayerName;
	var postUrl = GCAO_siteurl+'mod=highscore&submod=suche&sh='+GCAO_secureCode;
	var host = GCAO_siteurl.replace('//','').replace('http:','').replace('/game/index.php?','');
	
	var xhr = new XMLHttpRequest();
	var url=postUrl;
	xhr.open('POST', url, false);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(code);
	var found=false;
	if(xhr.responseText.match(/mod.player.p/i)){
		if(xhr.responseText.match(/mod.player.p.\d+[^>]+>([^<]+)<\/a>/i)[1].toLowerCase()==PlayerName.toLowerCase()){
			var playersID = xhr.responseText.match(/mod.player.p.(\d+)/i)[1];
			found = true;
		}
	}
	if(found==true){
		document.getElementById('player_sim_results').innerHTML='Id found...';
		findPlayerStats(playersID);
	}
	else{document.getElementById('player_sim_results').innerHTML='Player not found...';}
}