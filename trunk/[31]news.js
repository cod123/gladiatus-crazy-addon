//################################################################################################################################
//## NEWS
//################################################################################################################################
function GCAnews(){
	var mainnav = document.getElementById('mainnav');
	var newTab = document.createElement('li');
	newTab.className='pngfix';
	newTab.innerHTML = '<a style="cursor:pointer;" class="pngfix">GCA News ! </a>';
	mainnav.appendChild(newTab);
	newTab.addEventListener('click', function(){seeGCANews();}, true); 
}

function seeGCANews(){
	GM_setValue('ShowNewsAlert',false);
	for(var i =0;i<document.getElementById('mainnav').childNodes.length-1;i++)
		document.getElementById('mainnav').childNodes[i].firstChild.className='pngfix ';
	document.getElementById('mainnav').childNodes[document.getElementById('mainnav').childNodes.length-1].firstChild.className='pngfix  current';
	document.getElementById('content').innerHTML = '<div class="title_box"><div class="title_inner">Gladiatus Crazy Add-on News</div></div>';
	document.getElementById('content').innerHTML += '<div class="title2_box"><div class="title2_inner" style="margin-left: -6px;">'
	+'<table width="100%"><tbody id="GCAO_CommentBox"></tbody></table></div></div>';
	document.getElementById('GCAO_CommentBox').innerHTML='<center>Downloading the latest news.</center>';
	GM_xmlhttpRequest({
		method: "GET",
		url: 'http://epiratiko.webs.com/apps/util/Comments/listPagedCommentsJS.jsp?userID=57974758&limit=20&pageNumber=1&commentSettingID=16841277&callBack=fw.Instances.get("fwRb16841277-comments").populateCommentDiv&loadRatings=false&ratingCallback=fw.Instances.get("fwRb16841277-comments").instance.parent.getRatingCallback&rand=0.23108505620818276&repeatLimit=40',
		onload: function(response){
			document.getElementById('GCAO_CommentBox').innerHTML='';
			//.replace(/class=..blogCommentProfileImage../g,'style="display:none;"')
			var comments = response.responseText.replace(/"/g, '').split('[');
			// For each comment
			for(var i = 1;i<comments.length;i++){
				var comment = comments[i].split(',');
				var name = comment[2];
				var message = '';
				// if there are colons in the message... 
				for(var j = 3;j<comment.length-4;j++){
					message += comment[j];
					if((comment.length-5)!=j) message +=',';
				}
				var time = comment[comment.length-4];
				document.getElementById('GCAO_CommentBox').innerHTML += newComment(name,message,time);
			}
		}
	});
}

function newComment(name,message,time){
	var checkname=name.toLowerCase();
	if(checkname.match(/gif.>(\w+)/i)){checkname=checkname.match(/gif.>(\w+)/i)[1];}
	else if(checkname.match(/>(\w+)<.a/i)){checkname=checkname.match(/>(\w+)<.a/i)[1];}
	if(checkname=="greatapo"){var image="http://board.gladiatus.fr/wcf/images/avatars/avatar-2288.jpg"}
	else if(checkname=="djor"){var image="http://board.gladiatus.fr/wcf/images/avatars/avatar-2336.jpg"}
	else if(checkname=="darkthanos"){var image="http://board.gladiatus.fr/wcf/images/avatars/avatar-2287.jpg"}
	else{var image="http://images.webs.com/static/global/profile_images/noProfilePic_male_100x100.gif"}
	name=name.replace(/<img[^>]+>/g,'');
	return '<table class="commentTable fw-even" title="posted '+time+'"><tbody><tr>'
	+'<td style="border:1px solid #af8e50;background-color:#ded8c6;padding:5px;width:449px;"><b><img border="0" align="left" src="'+image+'" class="blogCommentProfileImage" valign="top" style="margin-right:10px; width:40px;">'
	+name+':</b> <br>'+message+'</td></tr></tbody></table>';
}

//################################################################################################################################
//## CHECK FOR NEWS
//################################################################################################################################
function checkForNews(){
	GM_xmlhttpRequest({
		method: "GET",
		url: 'http://epiratiko.webs.com/apps/util/Comments/listPagedCommentsJS.jsp?userID=57974758&limit=20&pageNumber=1&commentSettingID=16841277&callBack=fw.Instances.get("fwRb16841277-comments").populateCommentDiv&loadRatings=false&ratingCallback=fw.Instances.get("fwRb16841277-comments").instance.parent.getRatingCallback&rand=0.23108505620818276&repeatLimit=40',
		onload: function(response){
			var comments = response.responseText.replace(/"/g, '').split('[');
			if(comments[1].match(/(\d+),/gi)){
				var commentNumber = comments[1].match(/(\d+),/gi)[1].replace(',','');
				if(commentNumber!=GM_getValue('LastCommentNumber',0)){
					GM_setValue('dayChecked',day.getDate());
					GM_setValue('LastCommentNumber',commentNumber);
					GM_setValue('ShowNewsAlert',true);
				}
			}
		}
	});
}

function showNewsAlert(){
	document.getElementById('mainmenu').getElementsByTagName('a')[2].innerHTML+=' <img id="NewsAlertImage" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/exclamation.png" style="position:absolute;margin-left:10px;margin-top:1px;opacity: 0.65;" onmouseout="document.getElementById(\'mainmenu\').getElementsByTagName(\'a\')[2].setAttribute(\'href\',\''+GCAO_result[1]+'mod=guild&sh='+GCAO_secureCode+'\');this.style.opacity=\'0.65\';document.getElementById(\'newsAlert\').style.display=\'none\';" onmouseover="document.getElementById(\'mainmenu\').getElementsByTagName(\'a\')[2].removeAttribute(\'href\');this.style.opacity=\'1\';document.getElementById(\'newsAlert\').style.display=\'block\';">';
	var alertTip = document.createElement('div');
	alertTip.setAttribute('id', 'newsAlert');
	alertTip.setAttribute('style', 'opacity: 0.75;display:none;width:300px;z-index:502;position:absolute;top:237px;left:345px;border:1px solid grey;background-color:black;color:#c0c0c0;font-weight:bold;height:24px;line-height:24px;padding-left:5px;padding-right:5px;')
	alertTip.innerHTML = L_newsAlert;
	document.getElementById('header_game').appendChild(alertTip);
	document.getElementById('NewsAlertImage').addEventListener('click', function(){seeGCANews();}, true); 
}