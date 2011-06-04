//################################################################################################################################
//## OPTIONS / ΡΥΘΜΙΣΕΙΣ
//################################################################################################################################
function settings(){
	var settingsDiv = document.createElement('div');
	settingsDiv.setAttribute('id', 'AddOnSettingsBox');
	settingsDiv.setAttribute('style', 'margin-left:20px;margin-right:20px;');
	settingsDiv.innerHTML = '<div class="title_box"><div class="title_inner" id="title">'+L_GCASettings+'</div> </div>'+
	'<div class="title2_box"><div class="title2_inner"><span id="Settings">'+
	'<b>- '+L_HeaderSettings+':</b><br>'+
	'<input type="checkbox" name="lb" id="GCAO_s1">'+L_DisplayLife+'<br>'+
	'<input type="checkbox" name="rb" id="GCAO_s32" style="margin-left:20px;">'+L_DisplayLifePercent+'<br>'+
	'<input type="checkbox" name="bu" id="GCAO_s2">'+L_DisplayLinkButtons+'<br>'+
	'<input type="checkbox" name="au" id="GCAO_s3">'+L_DisplayAuctionStatus+'<br>'+
	'<input type="checkbox" name="sa" id="GCAO_s19" style="margin-left:20px;">'+L_DisplayMerchantStatus+'<br>'+
	'<input type="checkbox" name="op" id="GCAO_s16">'+L_DisplayOnlinePlayersButton+'<br>'+
	'<input type="checkbox" name="li" id="GCAO_s17">'+L_DisplayLinkBox+'<br>'+
	'<br><b>- '+L_TimersSettings+':</b><br>'+
	'<input type="checkbox" name="at" id="GCAO_s35">'+L_DisplayLastBeingAttacked+'<br>'+
	'<input type="checkbox" name="kt" id="GCAO_s43">'+L_DisplayLastBeingAttacked2+'<br>'+
	'<br><b>- '+L_AuctionSettings+':</b><br>'+
	'<input type="checkbox" name="af" id="GCAO_s4">'+L_FillAuctionPrices+'<br>'+
	'<input type="checkbox" name="cb" id="GCAO_s5">'+L_ChangeItemsBgColor+'<br>'+
	'<input type="checkbox" name="ml" id="GCAO_s6">'+L_AuctionMoreItemsLavels+'<br>'+
	'<input type="checkbox" name="an" id="GCAO_s7">'+L_DisplayItemNumAndBids+'<br>'+
	'<input type="checkbox" name="il" id="GCAO_s8">'+L_DisplayItemList+'<br>'+
	'<input type="checkbox" name="ea" id="GCAO_s28">'+L_ExpandAuctionTable3+'<br>'+
	'<input type="checkbox" name="hg" id="GCAO_s39">'+L_HideGoldInAuction+'<br>'+
	'<br><b>- '+L_SimulatorSettings+':</b><br>'+
	'<input type="checkbox" name="si" id="GCAO_s11">'+L_enSimulator+'<br>'+
	'<font style="margin-left:20px;">'+L_setFightNum+'</font>: <input type="int" name="sf" id="GCAO_sf" value="1000" maxlength="5" size="3"> ('+L_maximum+' 20.000)<br>'+
	'<br><b>- '+L_guildSettings+':</b><br>'+
	'<input type="checkbox" name="st" id="GCAO_s18">'+L_guildStoreInfo+'<br>'+
	'<input type="checkbox" name="gg" id="GCAO_s20">'+L_moreGuildStats+'<br>'+
	'<input type="checkbox" name="sc" id="GCAO_s40">'+L_guildSafeChanges+'<br>'+
	'<input type="checkbox" name="gm" id="GCAO_s41">'+L_guildMedicChanges+'<br>'+
	'<input type="checkbox" name="gs" id="GCAO_s22">'+L_monsterSimulator+'<br>'+
	'<input type="checkbox" name="mc" id="GCAO_s38">'+L_gmailChanges+' (messagebar, checkboxes)<br>'+
	'<input type="checkbox" name="pr" id="GCAO_s27">'+L_ratioOpt+'<br>'+
	'<input type="checkbox" name="rr" id="GCAO_s33" style="margin-left:20px;">'+L_enPriceRatio+'<br>'+
	'<b style="margin-left:20px;">[Formula]</b>: Food ratio = life/price , Price ratio = sell price/{(price+value)/2}<br>'+
	'<br><b>- '+L_alertSettings+':</b><br>'+
	'<input type="checkbox" name="ca" id="GCAO_s25">'+L_immedBuy+'<br>'+
	'<input type="checkbox" name="ce" id="GCAO_s26">'+L_reduceTimeEx+'<br>'+
	'<input type="checkbox" name="nq" id="GCAO_s30">'+L_questOpt+'<br>'+
	'<input type="checkbox" name="fm" id="GCAO_s29">'+L_forumMessageOpt+'<br>'+
	'<input type="checkbox" name="wd" id="GCAO_s31">'+L_weaponAlertOpt+'<br>'+
	'<input type="checkbox" name="pa" id="GCAO_s44">'+L_packageAlertOpt+'<br>'+
	'<br><b>- '+L_otherSettings+':</b><br>'+
	'<input type="checkbox" name="ms" id="GCAO_s9">'+L_msgchangesOpt+'<br>'+
	'<input style="margin-left:20px;" type="checkbox" name="bb" id="GCAO_s34">'+L_enBBCODE+'<br>'+
	'<input type="checkbox" name="ch" id="GCAO_s36">'+L_enChat+'<br>'+
	'<input type="checkbox" name="rt" id="GCAO_s37">'+L_enRememberTabs+'<br>'+
	'<input type="checkbox" name="pi" id="GCAO_s10">'+L_enImages+'<br>'+
	'<input type="checkbox" name="dc" id="GCAO_s24">'+L_disPackageCounters+'<br>'+
	'<input type="checkbox" name="id" id="GCAO_s21">'+L_disID+'<br>'+
	'<input type="checkbox" name="dh" id="GCAO_s23">'+L_disHeal+'<br>'+
	'<input type="checkbox" name="ba" id="GCAO_s12">'+L_disTrainingChages+'<br>'+
	'<input type="checkbox" name="hi" id="GCAO_s13">'+L_enHighlight+'<br>'+
	'<input type="checkbox" name="lp" id="GCAO_s42">'+L_foodBackColor+'<br>'+
	'<input type="checkbox" name="fi" id="GCAO_s14">'+L_enStyleFixes+'<br>'+
	'<font style="margin-left:5px;">'+L_customCursor+': <select name="cu" id="GCAO_cu"><option value="0" id="cu_0">Default</option><option value="1" id="cu_1">WoW</option><option value="2" id="cu_2">Oxygen Black</option><option value="3" id="cu_3">Oxygen White</option><option value="4" id="cu_4">Sword</option></select></font><br>'+
	'<br><b>- '+L_speedSettings+':</b><br>'+
	'<input type="checkbox" name="sp" id="GCAO_s15">'+L_stopPulling+'<br><b style="margin-left:20px;">'+L_willStop+'</b>:<br><font style="margin-left:20px;">Life Bar, Simulator, new quest alert, new forum message alert, weapon down alert</font>'+
	''+
	'<br><br><input class="button2" value="'+L_Save+'" type="button" id="saveGCAOstats"/>' +
	'<input style="margin-left:44px;" type="button" class="button1" onclick="document.getElementById(\'title\').innerHTML=\''+L_aboutTitle+'\';document.getElementById(\'Settings\').style.display=\'none\';document.getElementById(\'AboutUs\').style.display=\'block\';" value="'+L_AboutUs+'"/>'+
	'<input style="margin-left:44px;display:none;" type="button" class="button2" onclick="document.getElementById(\'title\').innerHTML=\'Gladiatus Crazy Add On News\';document.getElementById(\'Settings\').style.display=\'none\';document.getElementById(\'News\').style.display=\'block\';" value="News"/>'+
	'</span><span id="AboutUs" style="display:none;">'+
	'<b>- '+L_descriptionTitle+':</b>'+
	'<br>'+L_description+
	'<br><br><b>- '+L_Programmers+':</b><br> &bull; GreatApo<br> &bull; DarkThanos<br> &bull; djor'+
	'<br><br><b>- '+L_Translators+':</b><br> &bull; [English] GreatApo<br> &bull; [Greek] GreatApo & DarkThanos<br> &bull; [French] djor<br> &bull; [Latvian] redpepper007 <br> &bull; [German] Flaminius (s1), chrome (s3) and terror.G. (s3)'+
	'<br><br><b>- '+L_Hostpage+':</b> <a href="http://www.epiratiko.webs.com/crazyaddons.htm" target="_blank">www.epiratiko.webs.com</a>'+
	'<br><br><b>- '+L_ContactUs+':</b>'+
	'<br> '+L_Contact1+
	'<br> '+L_Contact2+
	'<br> '+L_Contact3+
	'<br><br><b>- '+L_thanksTo+':</b><br><div style="padding-left:20px;"><b>'+L_MonsterHunters+':</b><br>maximus48[FR], snow[FR], Zafistus[FR], pendu[FR], Nls_01[FR], The-Achille[FR], Jinsu[FR], Rincevent[FR], @roi-guerrier@[FR], Neox[FR], naruto12121998[FR], chupadu84[FR], tituslegrand[FR], Spli[FR], stxr[GR], imbri[US], brich21[US], cody6052[US], Baleful[US]'+
	'<br><b>'+L_ItemHunters+':</b><br>gstefan[GR], Despistado[S]</div>'+
	'<br><input class="button2" value="'+L_Settings+'" type="button" onclick="document.getElementById(\'title\').innerHTML=\''+L_GCASettings+'\';document.getElementById(\'AboutUs\').style.display=\'none\';document.getElementById(\'Settings\').style.display=\'block\';"/>' +
	'<input style="margin-left:44px;" type="button" class="button1 disabled" disabled="disabled" value="'+L_AboutUs+'"/>'+
	'<input style="margin-left:44px;display:none;" type="button" class="button2" onclick="document.getElementById(\'title\').innerHTML=\'Gladiatus Crazy Add On News\';document.getElementById(\'AboutUs\').style.display=\'none\';document.getElementById(\'News\').style.display=\'block\';" value="News"/>'+
	'</span>'+
	'<span id="News" style="display:none;">'+
	'<span id="NewsContent"></span>'+
	'<br><br><input class="button2" value="'+L_Settings+'" type="button" onclick="document.getElementById(\'title\').innerHTML=\''+L_GCASettings+'\';document.getElementById(\'News\').style.display=\'none\';document.getElementById(\'Settings\').style.display=\'block\';"/>' +
	'<input style="margin-left:44px;" type="button" class="button1" onclick="document.getElementById(\'title\').innerHTML=\''+L_aboutTitle+'\';document.getElementById(\'News\').style.display=\'none\';document.getElementById(\'AboutUs\').style.display=\'block\';" value="'+L_AboutUs+'"/>'+
	'<input style="margin-left:44px;" type="button" class="button2 disabled" disabled="disabled" value="News"/>'+
	'</span>'+
	'</div></div>'+
	'<br><div class="title_box"><div class="title_inner" id="title">'+L_donateTitle+'</div></div>'+
	'<div class="title2_box"><div class="title2_inner">'+
	'<p>'+L_donateText+' :)'+
	'<br><center><form border="0" action="https://www.paypal.com/cgi-bin/webscr" method="post">'+
	'<input type="hidden" name="cmd" value="_s-xclick">'+
	'<input type="hidden" name="hosted_button_id" value="NLTXXPMHCVLYC">'+
	'<input type="image" style="border:0px solid black;width:150px;" src="http://i617.photobucket.com/albums/tt260/goldisever/Apo/donate-button.png" name="submit" alt="PayPal - The safer, easier way to pay online!">'+
	'<img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/scr/pixel.gif" width="1" height="1">'+
	'</form></center></p>'+
	'</div></div>';
	document.getElementById('content').appendChild(settingsDiv);
	
	if(GM_getValue('lb', true) == true){document.getElementById('GCAO_s1').checked=true;}
	if(GM_getValue('bu', true) == true){document.getElementById('GCAO_s2').checked=true;}
	if(GM_getValue('au', true) == true){document.getElementById('GCAO_s3').checked=true;}
	if(GM_getValue('af', true) == true){document.getElementById('GCAO_s4').checked=true;}
	if(GM_getValue('cb', true) == true){document.getElementById('GCAO_s5').checked=true;}
	if(GM_getValue('ml', true) == true){document.getElementById('GCAO_s6').checked=true;}
	if(GM_getValue('an', true) == true){document.getElementById('GCAO_s7').checked=true;}
	if(GM_getValue('il', true) == true){document.getElementById('GCAO_s8').checked=true;}
	if(GM_getValue('ms', true) == true){document.getElementById('GCAO_s9').checked=true;}
	if(GM_getValue('pi', true) == true){document.getElementById('GCAO_s10').checked=true;}
	if(GM_getValue('si', true) == true){document.getElementById('GCAO_s11').checked=true;}
	if(GM_getValue('ba', true) == true){document.getElementById('GCAO_s12').checked=true;}
	if(GM_getValue('hi', true) == true){document.getElementById('GCAO_s13').checked=true;}
	if(GM_getValue('fi', true) == true){document.getElementById('GCAO_s14').checked=true;}
	if(GM_getValue('sp', false) == true){document.getElementById('GCAO_s15').checked=true;}
	if(GM_getValue('op', true) == true){document.getElementById('GCAO_s16').checked=true;}
	if(GM_getValue('li', true) == true){document.getElementById('GCAO_s17').checked=true;}
	if(GM_getValue('sf', 1000) != 1000){document.getElementById('GCAO_sf').value = GM_getValue('sf', 1000);}
	if(GM_getValue('st', true) == true){document.getElementById('GCAO_s18').checked=true;}
	if(GM_getValue('sa', true) == true){document.getElementById('GCAO_s19').checked=true;}
	if(GM_getValue('gg', true) == true){document.getElementById('GCAO_s20').checked=true;}
	if(GM_getValue('id', false) == true){document.getElementById('GCAO_s21').checked=true;}
	if(GM_getValue('gs', true) == true){document.getElementById('GCAO_s22').checked=true;}
	if(GM_getValue('dh', true) == true){document.getElementById('GCAO_s23').checked=true;}
	if(GM_getValue('dc', true) == true){document.getElementById('GCAO_s24').checked=true;}
	if(GM_getValue('ca', true) == true){document.getElementById('GCAO_s25').checked=true;}
	if(GM_getValue('ce', true) == true){document.getElementById('GCAO_s26').checked=true;}
	if(GM_getValue('pr', true) == true){document.getElementById('GCAO_s27').checked=true;}
	if(GM_getValue('ea', false) == true){document.getElementById('GCAO_s28').checked=true;}
	if(GM_getValue('fm', false) == true){document.getElementById('GCAO_s29').checked=true;}
	if(GM_getValue('nq', false) == true){document.getElementById('GCAO_s30').checked=true;}
	if(GM_getValue('wd', true) == true){document.getElementById('GCAO_s31').checked=true;}
	if(GM_getValue('rb', false) == true){document.getElementById('GCAO_s32').checked=true;}
	if(GM_getValue('rr', false) == true){document.getElementById('GCAO_s33').checked=true;}
	if(GM_getValue('bb', false) == true){document.getElementById('GCAO_s34').checked=true;}
	if(GM_getValue('at', false) == true){document.getElementById('GCAO_s35').checked=true;}
	if(GM_getValue('ch', true) == true){document.getElementById('GCAO_s36').checked=true;}
	if(GM_getValue('rt', true) == true){document.getElementById('GCAO_s37').checked=true;}
	if(GM_getValue('mc', true) == true){document.getElementById('GCAO_s38').checked=true;}
	if(GM_getValue('hg', true) == true){document.getElementById('GCAO_s39').checked=true;}
	if(GM_getValue('sc', true) == true){document.getElementById('GCAO_s40').checked=true;}
	if(GM_getValue('gm', true) == true){document.getElementById('GCAO_s41').checked=true;}
	if(GM_getValue('lp', true) == true){document.getElementById('GCAO_s42').checked=true;}
	if(GM_getValue('kt', false) == true){document.getElementById('GCAO_s43').checked=true;}
	if(GM_getValue('pa', false) == true){document.getElementById('GCAO_s44').checked=true;}
	
	document.getElementById('cu_'+GM_getValue('cu', 0)).setAttribute('selected','selected');
}

function saveSettings(){
	var link = document.location.href;
	while(link.match(/\w\w=true/i)){
		var set = link.match(/(\w\w)=true/i)[1];
		GM_setValue(set, true);
		link = link.replace(/\w\w=true/i, '');
	}
	while(link.match(/\w\w=false/i)){
		var set = link.match(/(\w\w)=false/i)[1];
		GM_setValue(set, false);
		link = link.replace(/\w\w=false/i, '');
	}
	if(link.match(/sf=(\d+)/i)){
		var number = link.match(/sf=(\d+)/i)[1]*1;
		GM_setValue('sf', number);
		link = link.replace(/sf=(\d+)/i, '');
	}
	if(link.match(/cu=(\d+)/i)){
		var number = link.match(/cu=(\d+)/i)[1]*1;
		GM_setValue('cu', number);
		link = link.replace(/cu=(\d+)/i, '');
	}
}

function saveMePlease(){
	var checkNumberOfFights = document.getElementById('GCAO_sf').value+'';
	checkNumberOfFights = checkNumberOfFights.replace(/\d+/gi, "");
	if(checkNumberOfFights==''){
		if(document.getElementById('GCAO_sf').value==0){var numberOfFights = 1000;}
		else if(document.getElementById('GCAO_sf').value<=20000){var numberOfFights = document.getElementById('GCAO_sf').value;}
		else{var numberOfFights = 20000;}
	}
	else{var numberOfFights = 1000;}
	
	var s="&sf="+numberOfFights;
	s+="&cu="+document.getElementById('GCAO_cu').value;
	for(i=1;i<45;i++){
		var x=document.getElementById('GCAO_s'+i);
		s+="&"+x.name+"="+x.checked;
	}
	window.location=GCAO_siteurl+'mod=settings&sh='+GCAO_secureCode+'&GCAO=SaveMePlease'+s;
}