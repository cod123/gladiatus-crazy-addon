

//################################################################################################################################
//## GUILD'S IMAGE / ΕΙΚΟΝΑ ΤΑΓΜΑΤΟΣ
//################################################################################################################################
function guildImage(){
	if(document.getElementById('content').innerHTML.match(/##GTGI=([^#]+)##/i)){
		var img_Guild=document.getElementById('content').innerHTML.match(/##GTGI=([^#]+)##/i)[1];
		if(document.getElementById('blackoutDialogLeave')){
			document.getElementById('content').getElementsByTagName('img')[1].setAttribute('id','GuildImage');
		}
		else{
			document.getElementById('content').getElementsByTagName('img')[0].setAttribute('id','GuildImage');
		}
		document.getElementById('GuildImage').setAttribute('height','232px');
		document.getElementById('GuildImage').setAttribute('width','209px');
		document.getElementById('GuildImage').setAttribute('src',img_Guild);
	}
}

function reportGuildImage(){
	if(document.getElementById('content').innerHTML.match(/i=\d+/g)[0]){
		var g1=document.getElementById('content').innerHTML.match(/i=\d+/g)[0];
		var link1=GCAO_siteurl+'mod=guild_main&'+g1+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link1,
			onload: function(response){
				if(response.responseText.match(/##GTGI=/i)){
					var img_Guild1=response.responseText.match(/##GTGI=([^#]+)##/i)[1];
					document.getElementById('content').getElementsByTagName('img')[0].setAttribute('id','GuildImage1');
					document.getElementById('GuildImage1').setAttribute('height','232px');
					document.getElementById('GuildImage1').setAttribute('width','209px');
					document.getElementById('GuildImage1').setAttribute('src',img_Guild1);
				}
			}
		});
	}
	if(document.getElementById('content').innerHTML.match(/i=\d+/g)[1]){
		var g11=document.getElementById('content').innerHTML.match(/i=\d+/g)[1];
		var link11=GCAO_siteurl+'mod=guild_main&'+g11+'&sh='+GCAO_secureCode;
		GM_xmlhttpRequest({
			method: "GET",
			url: link11,
			onload: function(response){
				if(response.responseText.match(/##GTGI=/i)){
					var img_Guild11=response.responseText.match(/##GTGI=([^#]+)##/i)[1];
					document.getElementById('content').getElementsByTagName('img')[1].setAttribute('id','GuildImage11');
					document.getElementById('GuildImage11').setAttribute('height','232px');
					document.getElementById('GuildImage11').setAttribute('width','209px');
					document.getElementById('GuildImage11').setAttribute('src',img_Guild11);
				}
			}
		});
	}
}

//################################################################################################################################
//## SAVE GUILD'S IMAGE / ΑΠΟΘΗΚΕΥΣΗ ΕΙΚΟΝΑΣ ΤΑΓΜΑΤΟΣ
//################################################################################################################################
function GuildImageSave(){
	document.getElementById('content').getElementsByTagName('input')[0].id='save';
	var perigrafi = document.getElementById('description').innerHTML;
	if (perigrafi.match(/\[f c=#DED2AD\]\[f s=10\]##GTGI=([^#]+)##\[\/f\]\[\/f\]/i)){
		var link = perigrafi.match(/\[f c=#DED2AD\]\[f s=10\]##GTGI=([^#]+)##\[\/f\]\[\/f\]/i);
		document.getElementById('description').innerHTML = perigrafi.replace(link[0], '');
		link = link[1];
	}
	else if(perigrafi.match(/\[f c=#E5D9BD\]\[f s=10\]##GTGI=([^#]+)##\[\/f\]\[\/f\]/i)){
		var link = perigrafi.match(/\[f c=#E5D9BD\]\[f s=10\]##GTGI=([^#]+)##\[\/f\]\[\/f\]/i);
		document.getElementById('description').innerHTML = perigrafi.replace(link[0], '');
		link = link[1];
	}
	else{var link = '';}
	var newGImg = document.createElement('span');
	newGImg.setAttribute('id', 'ChangeGImg')
	newGImg.innerHTML = '<br><br><b>'+L_changeGuildImage+':</b><p><input id="ImageUrl" size="73" value="' + link + '"></p>';
	insertAfter(newGImg,document.getElementById('description'));
	document.getElementsByTagName('form')[0].setAttribute('onsubmit',"if(document.getElementById('ImageUrl').value!=''){document.getElementById('description').value = document.getElementById('description').value + '[f c=#DED2AD][f s=10]##GTGI=' + document.getElementById('ImageUrl').value + '##[/f][/f]';document.getElementById('description').innerHTML = document.getElementById('description').value + '[f c=#DED2AD][f s=10]##GTGI=' + document.getElementById('ImageUrl').value + '##[/f][/f]';}");	

	document.getElementById('descCounter').style.display='none';
	
	var charNum=document.getElementById('description').innerHTML.length+document.getElementById('ImageUrl').value.length+38;
	var charCounter = document.createElement('span');
	charCounter.setAttribute('id', 'charCounter');
	charCounter.innerHTML=charNum;
	var location = document.getElementById('descCounter');
	location.parentNode.insertBefore(charCounter, location);
	
	var warningSpan=document.createElement('tr');
	warningSpan.innerHTML='<td><span id="ImageProblem" style="display:none;color:red;margin-left:5px;">'+L_Overfloated+':<br> - '+L_gImageWillBeLost+'.<br> - '+L_gDescrtipionWillBeCut+'.</span></td>';
	var location=document.getElementById('descCounter').parentNode.parentNode;
	insertAfter(warningSpan, location);
	
	document.getElementById('description').setAttribute('onkeyup','if(document.getElementById(\'ImageUrl\').value.length>0){var addin=38;}else{var addin=0;}var x=document.getElementById(\'description\').value.length+document.getElementById(\'ImageUrl\').value.length+addin;document.getElementById(\'charCounter\').innerHTML=x;if(x>10000){document.getElementById(\'ImageProblem\').style.display=\'block\'}else{document.getElementById(\'ImageProblem\').style.display=\'none\'}');
	document.getElementById('ImageUrl').setAttribute('onkeyup','if(document.getElementById(\'ImageUrl\').value.length>0){var addin=38;}else{var addin=0;}var x=document.getElementById(\'description\').value.length+document.getElementById(\'ImageUrl\').value.length+addin;document.getElementById(\'charCounter\').innerHTML=x;if(x>10000){document.getElementById(\'ImageProblem\').style.display=\'block\'}else{document.getElementById(\'ImageProblem\').style.display=\'none\'}');
}
