//################################################################################################################################
//## PLAYER'S IMAGE / ΕΚΟΝΑ ΠΑΙΧΤΗ
//################################################################################################################################
function RedirectPlayerImage(){
	if(GCAO_mod=='overview' && GCAO_submod=='noSubmod' && (GCAO_allresult.match(/doll=[1-2]/i) || !GCAO_allresult.match(/doll/i))){
		myPlayerImage();}
	else if(GCAO_mod=='player' && GCAO_submod=='noSubmod' && GCAO_allresult.match(/p=/i) && (GCAO_allresult.match(/doll=2/i) || !GCAO_allresult.match(/doll/i))){
		otherPlayerImage();}
	else if(GCAO_mod=='reports' && GCAO_submod=='showArenaReport'){
		reportPlayerImage();}
	else if(GCAO_mod=='reports' && GCAO_submod=='showCombatReport' && GCAO_allresult.match(/t=[014]/i)){
		report0PlayerImage();}
	else if(GCAO_mod=='reports' && GCAO_submod=='showCombatReport' && GCAO_allresult.match(/t=3/i)){
		report3PlayerImage();}
}

function myPlayerImage(){
	if(GM_getValue('PlayerImage' + window.location.host, '')!=''){
		var img_Player=GM_getValue('PlayerImage' + window.location.host, '');
		doc.getElementById('p8_1_1').parentNode.setAttribute('id','PlayerImage');
		doc.getElementById('PlayerImage').setAttribute('style','width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-image:url(\''+img_Player+'\');background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
	}
}

function otherPlayerImage(){
	if(doc.getElementById('content').innerHTML.match(/##GTI=/i)){
		var img_Player=doc.getElementById('content').innerHTML.match(/##GTI=([^#]+)##/i)[1];
		doc.getElementById('p8_1_1').parentNode.setAttribute('id','PlayerImage');
		doc.getElementById('PlayerImage').setAttribute('style','width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-image:url(\''+img_Player+'\');background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
	}
}

function report0PlayerImage(){
	if(GM_getValue('PlayerImage' + window.location.host, '')!=''){
		var img_Player=GM_getValue('PlayerImage' + window.location.host, '');
		doc.getElementById('attackerAvatar1').getElementsByTagName('div')[3].setAttribute('id','PlayerImage');
		doc.getElementById('PlayerImage').setAttribute('style','background-image: url(\''+img_Player+'\'); width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
	}
}

function report3PlayerImage(){
	if(doc.getElementById('attackerAvatar1').innerHTML.match(/p=(\d+)/i)){
		var p1=doc.getElementById('attackerAvatar1').innerHTML.match(/p=(\d+)/i)[1];
		var link1=GCAO_siteurl+'mod=player&p='+p1+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link1,
			onload: function(response){
				if(response.responseText.match(/##GTI=/i)){
					var img_Player1=response.responseText.match(/##GTI=([^#]+)##/i)[1];
					doc.getElementById('attackerAvatar1').getElementsByTagName('div')[3].setAttribute('id','PlayerImage1');
					doc.getElementById('PlayerImage1').setAttribute('style','background-image: url(\''+img_Player1+'\'); width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
				}
			}
		});
	}
	if(doc.getElementById('defenderAvatar11').innerHTML.match(/p=(\d+)/i)[1]){
		var p11=doc.getElementById('defenderAvatar11').innerHTML.match(/p=(\d+)/i)[1];
		var link11=GCAO_siteurl+'mod=player&p='+p11+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link11,
			onload: function(response){
				if(response.responseText.match(/##GTI=/i)){
					var img_Player11=response.responseText.match(/##GTI=([^#]+)##/i)[1];
					doc.getElementById('defenderAvatar11').getElementsByTagName('div')[3].setAttribute('id','PlayerImage11');
					doc.getElementById('PlayerImage11').setAttribute('style','background-image: url(\''+img_Player11+'\'); width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
				}
			}
		});
	}
}

function reportPlayerImage(){
	doc.getElementById('content').getElementsByTagName('table')[2].getElementsByTagName('td')[0].setAttribute('id','attackerAvatar1');
	doc.getElementById('content').getElementsByTagName('table')[2].getElementsByTagName('td')[2].setAttribute('id','defenderAvatar11');
	
	if(doc.getElementById('attackerAvatar1').innerHTML.match(/p=(\d+)/i)){
		var p1=doc.getElementById('attackerAvatar1').innerHTML.match(/p=(\d+)/i)[1];
		var link1=GCAO_siteurl+'mod=player&p='+p1+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link1,
			onload: function(response){
				if(response.responseText.match(/##GTI=/i)){
					var img_Player1=response.responseText.match(/##GTI=([^#]+)##/i)[1];
					doc.getElementById('attackerAvatar1').getElementsByTagName('div')[3].setAttribute('id','PlayerImage1');
					doc.getElementById('PlayerImage1').setAttribute('style','background-image: url(\''+img_Player1+'\'); width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
				}
			}
		});
	}
	if(doc.getElementById('defenderAvatar11').innerHTML.match(/p=(\d+)/i)){
		var p11=doc.getElementById('defenderAvatar11').innerHTML.match(/p=(\d+)/i)[1];
		var link11=GCAO_siteurl+'mod=player&p='+p11+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link11,
			onload: function(response){
				if(response.responseText.match(/##GTI=/i)){
					var img_Player11=response.responseText.match(/##GTI=([^#]+)##/i)[1];
					doc.getElementById('defenderAvatar11').getElementsByTagName('div')[3].setAttribute('id','PlayerImage11');
					doc.getElementById('PlayerImage11').setAttribute('style','background-image: url(\''+img_Player11+'\'); width: 168px; height: 194px; margin-left: auto; margin-right: auto;background-repeat:no-repeat;-moz-background-size: 100% 100%;-o-background-size: 100% 100%;-webkit-background-size: 100% 100%;background-size: 100% 100%;');
				}
			}
		});
	}
}

//################################################################################################################################
//## SAVE PLAYER'S IMAGE / ΑΠΟΘΗΚΕΥΣΗ ΕΙΚΟΝΑΣ ΠΑΙΧΤΗ
//################################################################################################################################
function PlayerImageSave(){
	//document.getElementById('content').getElementsByTagName('div')[1].innerHTML = document.getElementById('content').getElementsByTagName('div')[1].innerHTML.replace(/submod\=edit/i, 'submod=edit&img=save').replace(/name\="save"/i, 'name="save" id="save"');
	document.getElementById('content').getElementsByTagName('form')[0].setAttribute('action','index.php?mod=settings&submod=edit&img=save&sh='+GCAO_secureCode);
	
	var perigrafi = document.getElementById('rpg').innerHTML;
	if (perigrafi.match(/\[f c\=#DED2AD\]\[f s\=10\]##GTI\=(.*)##\[\/f\]\[\/f\]/i)){
		var link = perigrafi.match(/\[f c\=#DED2AD\]\[f s\=10\]##GTI\=(.*)##\[\/f\]\[\/f\]/i);
		document.getElementById('rpg').innerHTML = perigrafi.replace(link[0], '');
		link = link[1];
	}
	else if(perigrafi.match(/\[f c\=#E5D9BD\]\[f s\=10\]##GTI\=(.*)##\[\/f\]\[\/f\]/i)){
		var link = perigrafi.match(/\[f c\=#E5D9BD\]\[f s\=10\]##GTI\=(.*)##\[\/f\]\[\/f\]/i);
		document.getElementById('rpg').innerHTML = perigrafi.replace(link[0], '');
		link = link[1];
	}
	else{var link = '';}
	
	if(document.location.href.match(/img\=save/)){
		GM_setValue('PlayerImage' + window.location.host, link);
	}
	
	var newPlImg = document.createElement('span');
	newPlImg.setAttribute('id', 'ChangePlImg')
	newPlImg.innerHTML = '<br><b>'+L_changePlayerImage+':</b><p><input id="ImageUrl" size="73" value="' + link + '"></p>';
	document.getElementById('content').getElementsByTagName('div')[10].appendChild(newPlImg);
	
	document.getElementsByTagName('form')[0].setAttribute('onsubmit',"if(document.getElementById('ImageUrl').value!=''){document.getElementById('rpg').value = document.getElementById('rpg').value + '[f c=#DED2AD][f s=10]##GTI=' + document.getElementById('ImageUrl').value + '##[/f][/f]';document.getElementById('rpg').innerHTML = document.getElementById('rpg').value + '[f c=#DED2AD][f s=10]##GTI=' + document.getElementById('ImageUrl').value + '##[/f][/f]';}");
	
	document.getElementById('toggleLinkColor').removeAttribute('class');
	document.getElementById('toggleLinkColor').removeAttribute('href');
	document.getElementById('toggleLinkColor').setAttribute('onclick',"if(document.getElementById('togglePanelColor').style.display=='block'){document.getElementById('togglePanelColor').style.display='none'}else{document.getElementById('togglePanelColor').style.display='block'}");
	document.getElementById('togglePanelColor').setAttribute('onclick','document.getElementById(\'togglePanelColor\').style.display=\'none\';');
	document.getElementById('rpg').setAttribute('onclick','document.getElementById(\'togglePanelColor\').style.display=\'none\';');
	
	var tran_Char=document.getElementById('content').innerHTML.match(/\(\d+ ([^)]+)\)/i)[1];
	var charNum=document.getElementById('rpg').innerHTML.length+document.getElementById('ImageUrl').value.length;
	var charCounter = document.createElement('div');
	charCounter.setAttribute('id', 'charCounterDiv')
	charCounter.innerHTML='<span id="charCounter">'+charNum+'</span>/4000 '+tran_Char+' <span id="ImageProblem" style="display:none;color:red;">'+L_Overfloated+':<br> - '+L_plImageWillBeLost+'.<br> - '+L_plDecriptionWillBeCut+'.</span>';
	var location = document.getElementById('rpg');
	location.parentNode.insertBefore(charCounter, location);
	
	document.getElementById('rpg').setAttribute('onkeyup','if(document.getElementById(\'ImageUrl\').value.length>0){var addin=37;}else{var addin=0;}var x=document.getElementById(\'rpg\').value.length+document.getElementById(\'ImageUrl\').value.length+addin;document.getElementById(\'charCounter\').innerHTML=\'\'+x;if(x>4000){document.getElementById(\'ImageProblem\').style.display=\'block\'}else{document.getElementById(\'ImageProblem\').style.display=\'none\'}');
	document.getElementById('ImageUrl').setAttribute('onkeyup','if(document.getElementById(\'ImageUrl\').value.length>0){var addin=37;}else{var addin=0;}var x=document.getElementById(\'rpg\').value.length+document.getElementById(\'ImageUrl\').value.length+addin;document.getElementById(\'charCounter\').innerHTML=\'\'+x;if(x>4000){document.getElementById(\'ImageProblem\').style.display=\'block\'}else{document.getElementById(\'ImageProblem\').style.display=\'none\'}');

	var defaultImagesBox = document.createElement('span');
	defaultImagesBox.innerHTML = '<input type="button" id="DisplayDefaultImages" class="button1" value="'+L_defImages+'" onclick="this.style.display=\'none\'">';
	document.getElementById('ChangePlImg').appendChild(defaultImagesBox);
	
	document.getElementById("DisplayDefaultImages").addEventListener("click", ShowImages, false);
}

function ShowImages(){
	var defaultImagesBox = document.createElement('span');
	defaultImagesBox.setAttribute('id', 'Box');
	defaultImagesBox.innerHTML = '<input type="button" class="button1" value="'+L_defImages+'" onclick="if(document.getElementById(\'DefaultImages\').style.display==\'none\'){document.getElementById(\'DefaultImages\').style.display=\'block\';}else{document.getElementById(\'DefaultImages\').style.display=\'none\';}">'+
	'<br><span id="DefaultImages""><img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/gigantas.jpg" style="margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/forestelf.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/satiros.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/rusalka.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/pigasos.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<br><img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/minotauros.jpg" style="margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/medousa.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/magicboy.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/leonidas.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/kuklopas.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<br><img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/kleopatra.jpg" style="margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/kesaras.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/kentauros.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/gorgona.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/aladin.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<br><img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/farao.jpg" style="margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/dragoni.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/copgirl.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/basilias.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/amazona.jpg" style="margin-left:3px;margin-top:8px;width:90px;cursor:pointer;" onclick="document.getElementById(\'ImageUrl\').value=this.getAttribute(\'src\');">'+
	'<br><i>'+L_imgMadeFrom+' <b>Miguel Coimbra</b> (<a href="http://www.miguelcoimbra.com/" target="_blank">Homepage</a>)</i></span>';
	document.getElementById('ChangePlImg').appendChild(defaultImagesBox);
}