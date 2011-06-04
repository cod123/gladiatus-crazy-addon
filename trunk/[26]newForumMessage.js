//################################################################################################################################
//## NEW FORUM MESSAGE
//################################################################################################################################
var mouseoutForumMessage =true;
function newForumMessage(){
	GM_xmlhttpRequest({
		method: "GET",
		url: 'http://board.gladiatus.'+GCAO_lang+'/index.php?page=Index',
		onload: function(response){
			if(response.responseText.match('<div class="info deletable" id="pmOutstandingNotifications">')){
				var newMessage = response.responseText.split('<div class="info deletable" id="pmOutstandingNotifications">')[1].split('</div>')[0];
			}else if(response.responseText.match('<div class="info" id="pmOutstandingNotifications">')){
				var newMessage = response.responseText.split('<div class="info" id="pmOutstandingNotifications">')[1].split('</div>')[0];
			}else{var newMessage = '<p>Error</p>'}
			var line = newMessage.split('<p>')[1].split('</p>')[0].replace(/[^0-9]/g,'');
			newMessage = newMessage.split('<p>')[1].split('</p>')[0] + newMessage.split('<p>')[1].split('</p>')[1];
			
			if(response.responseText.match('pmOutstandingNotifications')){
				var heigth = 40+line*24;
				document.getElementById('header_game').getElementsByTagName('a')[3].parentNode.innerHTML+=' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/exclamation.png" style="position:absolute;margin-left:4px;margin-top:1px;opacity: 0.65;" onmouseover="this.style.opacity=\'1\';document.getElementById(\'NewForumMessage\').style.display=\'block\';" onClick="if(this.style.opacity==\'0.65\'){this.style.opacity=\'1\';document.getElementById(\'NewForumMessage\').style.display=\'block\';} else {this.style.opacity=\'0.65\';document.getElementById(\'NewForumMessage\').style.display=\'none\';}">';
				var forumNewMessageTip = document.createElement('div');
				forumNewMessageTip.setAttribute('id', 'NewForumMessage');
				forumNewMessageTip.setAttribute('style', 'opacity: 0.75; display: none; width: 300px; z-index: 502; position: absolute; top: 30px; left: 550px; border: 1px solid grey; background-color: black; color: rgb(192, 192, 192); font-weight: bold; height: '+heigth+'px; line-height: 24px; padding-left: 5px; padding-right: 5px;text-align:left;')
				forumNewMessageTip.innerHTML = newMessage;//L_newMail;
				for(var i =0;i<forumNewMessageTip.getElementsByTagName('a').length;i++){
					forumNewMessageTip.getElementsByTagName('a')[i].setAttribute('target','_blank');
				}
				document.getElementById('header_game').appendChild(forumNewMessageTip);
			}
		}
	});
}