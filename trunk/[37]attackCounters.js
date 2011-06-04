//################################################################################################################################
//## LAST TIME ATTACKED COUNTER
//################################################################################################################################
function lastTimeAttackedCounter(){
		document.getElementById('header_menue').setAttribute('style','z-index:3;');
		document.getElementById('menue_news').setAttribute('style','height:39px;');
		document.getElementById('menue_messages').setAttribute('style','height:39px;');
		document.getElementById('menue_packages').setAttribute('style','height:39px;');
		document.getElementById('menue_reports').setAttribute('style','height:39px;');
		var bgTimerImg=document.createElement('span');
		bgTimerImg.setAttribute('style', 'margin:0px;position:absolute;top:41px;left:149px;width:192px;height:108px;z-index:2;background:url(\'http://i617.photobucket.com/albums/tt260/goldisever/GCAO/timerback.png\');');
		document.getElementById('header_game').appendChild(bgTimerImg);
		if(GM_getValue('at', false) == true){mouEperikseTaArxidia('Arena',175);}
		if(GM_getValue('kt', false) == true){mouEperikseTaArxidia('CircusTurma',260);}
}

function mouEperikseTaArxidia(loc,pos){
	if(loc=='Arena'){var t_img='<img align=\'absmiddle\' src=\'http://i617.photobucket.com/albums/tt260/goldisever/GCAO/icon_arena.gif\' height=18px/>';}
	else{var t_img='<img align=\'absmiddle\' src=\'http://i617.photobucket.com/albums/tt260/goldisever/GCAO/icon_grouparena.gif\' height=18px/>';}
	var loadingImage="data:image/gif;base64,R0lGODlhKQAGAPEBAAAAAP///////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAkPAAIAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAKQAGAAACK4Qvh2rJriCLINgA0sX65up11vRtZQiOIpdi03qqbcya7wzn+Hw/PeVjFAAAIfkECQ8AAwAsAAAAACkABgAAAiyEP4dqya6gCjQA2UC1aV9dfR5IfQ/JoWLYhSq2lq38qvXpzWlun37EMAEZBQAh+QQJDwADACwAAAAAKQAGAAACK4Q/h2rJrqAKNIBUrWwg3159HkiJ4WaW2Elabaox8LyWbx0/9z7qfiRDoQoAIfkECQ8AAwAsAAAAACkABgAAAi2EP4dqya6gCjSAVC2ul/X8cQC4UaEpNSNXWiv6anH3zK1B2nqdg15Ki/yGjAIAIfkECQ8AAwAsAAAAACkABgAAAiyEP4dqya6gCjSAVC2uF+T+eJxIdd9Wohpjjie5vm/4wW1qq2Bks1LjC4YYBQAh+QQJDwADACwAAAAAKQAGAAACKoQ/h2rJrqAKNIBULa4X5P5JR+hxGwWaJSoa5KvCLOPG9ixrNN32/M8oAAAh+QQJDwADACwAAAAAKQAGAAACLIQ/h2rJrqAKNIBULa4X5P54nEh131aiGmOOJ7m+b/jBbWqrYGSzUuMLhhgFACH5BAkPAAMALAAAAAApAAYAAAIthD+HasmuoAo0gFQtrpf1/HEAuFGhKTUjV1or+mpx98ytQdp6nYNeSov8howCACH5BAkPAAMALAAAAAApAAYAAAIrhD+HasmuoAo0gFStbCDfXn0eSInhZpbYSVptqjHwvJZvHT/3Pup+JEOhCgAh+QQJDwADACwAAAAAKQAGAAACLIQ/h2rJrqAKNADZQLVpX119Hkh9D8mhYtiFKraWrfyq9enNaW6ffsQwARkFADs%3D";
	var beAttackedSpan=document.createElement('span');
	beAttackedSpan.setAttribute('id', 'beAttackedSpanMain'+loc);
	beAttackedSpan.setAttribute('style', 'margin:0px;position:absolute;top:83px;left:'+pos+'px;font-weight:bold;z-index:3;');
	beAttackedSpan.innerHTML=t_img+'<span style="color:red;margin-left:0px;margin-top:2px;" id="beAttackedSpan'+loc+'"><img style="margin-top:6px;opacity:0.5;" src="'+loadingImage+'"/></span>';
	document.getElementById('header_game').appendChild(beAttackedSpan);
	
	var url=GCAO_siteurl+"mod=reports&submod=show"+loc+"&sh="+GCAO_secureCode;
	var xmlhttp=false;
	if (!xmlhttp && typeof XMLHttpRequest!='undefined'){try {xmlhttp = new XMLHttpRequest();}catch (e) {xmlhttp = false;}}
	if (xmlhttp){
		xmlhttp.open("GET", url,true);
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4){
				if(!xmlhttp.responseText.match('bx0')){
					if(xmlhttp.responseText.match(/current[^>]+>([^<]+)<.a>/i)){
						var L_title=xmlhttp.responseText.match(/current[^>]+>([^<]+)<.a>/i)[1];
					}else{var L_title=loc;}
					document.getElementById('beAttackedSpanMain'+loc).setAttribute('title',L_title);
					if(xmlhttp.responseText.match(/shield.passive.gif/i)){
						/**Time of attack**/
						var time=xmlhttp.responseText.match(/<td style="min-width:90px">[^.]+\d+.\d+.\d+ (\d+:\d+:\d+)[^<]+<\/td>[^<]+<td>[^<]+<img src="[^s]+shield-passive.gif"/i)[1];
						/**Date of attack**/
						var sdate=xmlhttp.responseText.match(/<td style="min-width:90px">[^.]+\d+.\d+.\d+ \d+:\d+:\d+[^<]+<\/td>[^<]+<td>[^<]+<img src="[^s]+shield-passive.gif"/i)[0].match(/(\d+)\./i)[1]
						/**Time of attack in Seconds**/
						var time=time.match(/\d+/g)[0]*60*60+time.match(/\d+/g)[1]*60+time.match(/\d+/g)[2]*1;
						
						var mytime=new Date();
						/**Current Day**/
						var mydate=mytime.getDate();
						/**Current Time in Second**/
						var myPCtime=mytime.getHours()*60*60+mytime.getMinutes()*60+mytime.getSeconds();
						
						/**Server Day**/
						var serverDate=document.getElementById('header_game').getElementsByTagName('span')[6].innerHTML.match(/(\d+).\d+/i)[1];
						if(serverDate.match(/0\d/i)){serverDate.replace('0','')}
						/**Server Time in Second**/
						var serverTime=document.getElementById('header_game').getElementsByTagName('span')[6].innerHTML.match(/(\d+):(\d+)/i);
						serverTime=serverTime[1]*60*60+serverTime[2]*60;
						
						/**Server Time Difference**/
						if(mydate==serverDate){var dif=myPCtime-serverTime;}
						else if(mydate<serverDate){
							if(mydate==1 && serverDate!=2){var dif=myPCtime-serverTime+24*60*60;}
							else{var dif=myPCtime-serverTime-24*60*60;}
						}
						else if(mydate>serverDate){
							if(mydate!=2 && serverDate==1){var dif=myPCtime-serverTime-24*60*60;}
							else{var dif=myPCtime-serverTime+24*60*60;}
						}
						
						var check=true;
						/**Time from Attack in Seconds**/
						if(mydate==sdate){
							var x=myPCtime-dif-time;
						}else if(mydate<sdate){
							if(dif<0){var x=myPCtime-dif-time;}
							else{var x='NaN';check=false;}
						}else{
							if(dif>0){var x=myPCtime-dif-time+(mydate-sdate)*24*60*60;}
							else{var x='NaN';check=false;}
						}
						
						if(check){
							var y=''+(x-(x%3600))/3600+':'+((x%3600)-(x%60))/60+':'+x%60+'';
							document.getElementById('beAttackedSpan'+loc).innerHTML=y;
							document.getElementById('header_game').appendChild(beAttackedSpan);
							var beAttackScript=document.createElement('script');
							beAttackScript.innerHTML='var clockReseterAttacked'+loc+'='+x+';beAttackClock'+loc+'();function beAttackClock'+loc+'(){if((clockReseterAttacked'+loc+'-(clockReseterAttacked'+loc+'%3600))/3600<1){document.getElementById("beAttackedSpan'+loc+'").style.color="green";}else{document.getElementById("beAttackedSpan'+loc+'").style.color="red";}if((clockReseterAttacked'+loc+'-(clockReseterAttacked'+loc+'%3600))/3600<10){var h="0";}else{var h="";}if(((clockReseterAttacked'+loc+'%3600)-(clockReseterAttacked'+loc+'%60))/60<10){var m="0";}else{var m="";}if(clockReseterAttacked'+loc+'%60<10){var s="0";}else{var s="";}document.getElementById("beAttackedSpan'+loc+'").innerHTML=""+h+(clockReseterAttacked'+loc+'-(clockReseterAttacked'+loc+'%3600))/3600+":"+m+((clockReseterAttacked'+loc+'%3600)-(clockReseterAttacked'+loc+'%60))/60+":"+s+clockReseterAttacked'+loc+'%60;clockReseterAttacked'+loc+'=clockReseterAttacked'+loc+'+1;setTimeout("beAttackClock'+loc+'()",1000);}';
							document.body.appendChild(beAttackScript);
						}else{
							document.getElementById('beAttackedSpan'+loc).innerHTML=' NaN';
						}
					}
					else{
						document.getElementById('beAttackedSpan'+loc).innerHTML=' NaN';
					}
				}
			}
		}
		xmlhttp.send(null);
	}
}