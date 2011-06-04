//################################################################################################################################
//## CHANGE CURSOR
//################################################################################################################################
function changeTheCursor(){
	var choosedCur=GM_getValue('cu', 0);
	
	if(choosedCur==1){
	//WoW
		var normalCur='http://epiratiko.webs.com/GCAO/cursors/hand.cur';
		var pointerCur='http://epiratiko.webs.com/GCAO/cursors/greyhand.cur';
		var moveCur='http://epiratiko.webs.com/GCAO/cursors/bluehand.cur';
		var textCur='http://epiratiko.webs.com/GCAO/cursors/blacktext.cur';
		var attackCur='http://epiratiko.webs.com/GCAO/cursors/sword.cur';
	}else if(choosedCur==2){
	//Oxygen Black
		var normalCur='http://epiratiko.webs.com/GCAO/cursors/blackcur.cur';
		var pointerCur='http://epiratiko.webs.com/GCAO/cursors/backhand.cur';
		var moveCur='http://epiratiko.webs.com/GCAO/cursors/blackmove.cur';
		var textCur='http://epiratiko.webs.com/GCAO/cursors/blacktext.cur';
		var attackCur='http://epiratiko.webs.com/GCAO/cursors/backhand.cur';
	}else if(choosedCur==3){
	//Oxygen White
		var normalCur='http://epiratiko.webs.com/GCAO/cursors/whitecur.cur';
		var pointerCur='http://epiratiko.webs.com/GCAO/cursors/whitehand.cur';
		var moveCur='http://epiratiko.webs.com/GCAO/cursors/whiremove.cur';
		var textCur='http://epiratiko.webs.com/GCAO/cursors/whitetext.cur';
		var attackCur='http://epiratiko.webs.com/GCAO/cursors/whitehand.cur';
	}else if(choosedCur==4){
	//Sword
		var normalCur='http://epiratiko.webs.com/GCAO/cursors/Sword_main.cur';
		var pointerCur='http://epiratiko.webs.com/GCAO/cursors/Sword_link.cur';
		var moveCur='http://epiratiko.webs.com/GCAO/cursors/Sword_move.cur';
		var textCur='http://epiratiko.webs.com/GCAO/cursors/Sword_text.cur';
		var attackCur='http://epiratiko.webs.com/GCAO/cursors/Sword_backgroundactivity.cur';
	}
	
	var cursorStyle=document.createElement('style');
	cursorStyle.innerHTML="body , select {cursor:url("+normalCur+"),default}";
	cursorStyle.innerHTML+="body a , .charmercsel , .bbcode_button , input[type=\"checkbox\"] , input[type=\"radio\"] , input[type=\"submit\"] , input[type=\"button\"] , input[type=\"image\"] , .achievement_last_ten , .header , #select tr.hover td , #select tr.hover th , #select tr th.selection , #select tr.select td , #select tr , .achievement_header {cursor:url("+pointerCur+"),pointer}";
	cursorStyle.innerHTML+="input , textarea {cursor:url("+textCur+"),text}";
	cursorStyle.innerHTML+="#inv img , #char img , #shop img {cursor:url("+moveCur+"),move}";
	if(GCAO_mod=='packages'){cursorStyle.innerHTML+=" #content div div table div img {cursor:url("+moveCur+"),move}";}
	if(GCAO_mod=='player'){cursorStyle.innerHTML+=" #content input[type=\"button\"] {cursor:url("+attackCur+"),move}";}
	if(document.getElementById('p8_1_1')){document.getElementById('p8_1_1').style.cursor="url("+pointerCur+"),pointer";}
	document.body.appendChild(cursorStyle);
	
	if(document.getElementById('mainnav').getElementsByTagName('a')[0]){
		for(i=0;i<document.getElementById('mainnav').getElementsByTagName('a').length;i++){
			document.getElementById('mainnav').getElementsByTagName('a')[i].style.cursor="url("+pointerCur+"),pointer";
		}
	}
	if(document.getElementById('ButtonsDiv')){
		if(document.getElementById('ButtonsDiv').getElementsByTagName('img')[0]){
			for(i=0;i<document.getElementById('ButtonsDiv').getElementsByTagName('img').length;i++){
				document.getElementById('ButtonsDiv').getElementsByTagName('img')[i].style.cursor="url("+pointerCur+"),pointer";
			}
		}
	}
	if(GCAO_mod=='arena' && document.getElementById('content').getElementsByTagName('img')[0]){
		for(i=0;i<document.getElementById('content').getElementsByTagName('img').length;i++){
			if(document.getElementById('content').getElementsByTagName('img')[i].src.match(/fordern/i)){
				document.getElementById('content').getElementsByTagName('img')[i].style.cursor="url("+attackCur+"),pointer";
			}
		}
	}else if(GCAO_mod=='overview' && GCAO_submod=='achievements'){
		for(i=0;i<document.getElementById('content').getElementsByTagName('div').length;i++){
			if(document.getElementById('content').getElementsByTagName('div')[i].getAttribute('class')){
				if(document.getElementById('content').getElementsByTagName('div')[i].getAttribute('class').match('title_inner')){
					document.getElementById('content').getElementsByTagName('div')[i].setAttribute('style',"cursor: url("+pointerCur+"),pointer");
				}
			}
		}
	}else if(GCAO_mod=='dungeon'){
		if(document.getElementById('content').getElementsByTagName('area')){
			for(i=0;i<document.getElementById('content').getElementsByTagName('area').length;i++){
				document.getElementById('content').getElementsByTagName('area')[i].setAttribute('style',"cursor: url("+attackCur+"),pointer");
			}
		}
	}
	if(document.getElementById('wio')){document.getElementById('wio').style.cursor="url("+pointerCur+"),pointer";}
	if(document.getElementById('cooldown_bar_fill_life')){document.getElementById('cooldown_bar_fill_life').parentNode.style.cursor="url("+pointerCur+"),pointer";}
}