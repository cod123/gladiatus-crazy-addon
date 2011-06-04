//################################################################################################################################
//## START (everything runs from here) / ΑΡΧΗ (από εδώ τρέχουν όλα)
//################################################################################################################################
if(document.getElementById('icon_rubies')){
	try{Main();}catch(e){DE(e);}
}
else if(document.getElementById('p8_1_1') && document.getElementById('char_leben')){otherPlayerImage();}

function Main(){
	if(GCAO_mod=='settings'){
		if(document.location.href.match(/GCAO=SaveMePlease/i)){c(saveSettings());}
		c(PlayerImageSave());
		c(settings());
		document.getElementById("saveGCAOstats").addEventListener("click", saveMePlease, false);
	}
	if(document.getElementById('banner_top') && document.getElementById('banner_event') && (document.getElementById('banner_top').style.display=='' || document.getElementById('banner_top').style.display=='block')){c(moveAdd());}
	if(GM_getValue('lb', true) == true && GM_getValue('sp', false) == false){c(HealthBar());}
	if(GM_getValue('bu', true) == true){c(Buttons());}
	if(GM_getValue('au', true) == true){c(AuctionStatus());}
	if(GM_getValue('sp', false) == false){c(GetOverviewStats());}
	if(GM_getValue('ch', true) == true){c(Chat());}
	if(GM_getValue('pi', true) == true){c(RedirectPlayerImage());}
	if(GM_getValue('op', true) == true){
		c(onlineGuildmates());
		document.getElementById("wio").addEventListener("click", ShowOnlineBox, false);
	}
	if(GM_getValue('pa', false) == true){c(expiredPackages(12));}
	if(GM_getValue('fm', false) == true && GM_getValue('sp', false) == false){c(newForumMessage());}
	if(GM_getValue('nq', false) == true && GM_getValue('sp', false) == false && GCAO_mod!='quests'){c(newQuest());}
	
	if(GCAO_mod=='training'){
		if(GM_getValue('ba', true) == true){
			c(basikes());
			c(addTrainingCostSimulator());
		}
	}
	else if(GCAO_mod=='overview'){
		if(GCAO_submod=='stats'){c(morePlayerStats());}
		if(GCAO_submod=='noSubmod'){
			if(GM_getValue('dh', false) == true && document.getElementById('char_healing_tt')){document.getElementById('char_healing_tt').style.display="block";}
			if(GM_getValue('lp', true) == true){c(canIeatThis());}
		}
	}
	else if(GCAO_mod=='player'){
		if(GCAO_submod=='stats'){c(morePlayerStats());}
		else if(GCAO_submod=='noSubmod' && !document.location.href.match(/&doll=[2-6]/i)){
			if(GM_getValue('si', true) == true && GM_getValue('sp', false) == false){c(simulator());}
			if(GM_getValue('id', false) == true){c(showId());}
			if(GM_getValue('dh', false) == true){if(document.getElementById('char_healing_tt')){document.getElementById('char_healing_tt').style.display="block";}}
		}
	}
	else if(GCAO_mod=='messages'){
		if(GCAO_submod=='messageShow' || GCAO_submod=='messageMoveDelete'){
			if(GM_getValue('ms', true) == true){
				c(messages());
				c(msgButtons());
			}
		}else if(GCAO_submod=='messageNew'){
			if(document.getElementById('message')){
				document.getElementById('message').focus();
			}
		}
	}
	else if(GCAO_mod=='auction'){
		if(GM_getValue('cb', true) == true){c(auctionbgcolor());}
		if(GM_getValue('an', true) == true){c(auctionnumbers());}
		if(GM_getValue('ml', true) == true){c(auctionitemlevel());}
		if(GM_getValue('af', true) == true){c(autoFillAuctionFields());}
		if(GM_getValue('ca', true) == true){c(confirmRubies());}
		if(GM_getValue('ea', false) == true){c(auctionExtendTable());}
		if(GM_getValue('hg', true) == true){c(howToHideGoldInAuctions());}
		if(GM_getValue('il', true) == true){c(itemList());}
	}
	else if(GCAO_mod=='market'){
		if(GM_getValue('il', true) == true){c(itemList());}
		if(GM_getValue('pr', true) == true){c(priceRatio());}
	}
	else if(GCAO_mod=='inventory'){
		if(GM_getValue('hi', true) == true){c(afford());c(reAfford());}
	}
	else if(GCAO_mod=='packages'){
		if(GM_getValue('dc', true) == true){c(packetCounters());}
	}
	else if(GCAO_mod=='guild_main'){
		if(GCAO_submod=='admin_mail' && GM_getValue('mc', true) == true){c(guildMailChanges());}
		else if(GCAO_submod=='memberlist'){c(saveGuildmatesIDs());}
		else if(GCAO_submod=='noSubmod' && GM_getValue('pi', true) == true){c(guildImage());}
	}
	else if(GCAO_mod=='guild_storage'){
		if(GM_getValue('st', true) == true){c(storageInfo());c(resetStorageInfo());}
	}
	else if(GCAO_mod=='guild'){
		if(GCAO_submod=='adminDescription' || GCAO_submod=='adminDescriptionEdit'){c(GuildImageSave());}
		else if(GCAO_submod=='noSubmod'){c(guildNameTake());}
	}
	else if(GCAO_mod=='guild_warcamp'){
		if(GCAO_submod=='guild_member_reports') c(warCampMemberGold());
		else if(GCAO_submod=='guild_combatreports' && GCAO_allresult.match(/gcid=\d+/i) && GM_getValue('pi', true) == true){c(reportGuildImage());}
		else if(GCAO_submod=='noSubmod' && GM_getValue('gg', true) == true){c(guildWarMoreStats());}
	}
	else if(GCAO_mod=='guild_training'){
		if(GM_getValue('gs', true) == true){c(training());}
	}
	else if(GCAO_mod=='guild_market'){
		if(GM_getValue('pr', true) == true){c(priceRatio());}
	}
	else if(GCAO_mod=='guild_safe' && GM_getValue('sc', true) == true){
		if(GCAO_submod=='noSubmod'){c(guildSafeEdit());}
		if(GCAO_submod=='guild_safe_log'){c(guildSafeLog());}
	}
	else if(GCAO_mod=='guild_bath'){
		c(GCAnews());
	}
	else if(GCAO_mod=='guild_medic' && GM_getValue('gm', true) == true){
		c(guildMedicBox());
	}
	else if(GCAO_mod=='location' && GM_getValue('ce', true) == true){c(expeditionConfirmRubies());}
	else if(GCAO_mod=='reports' && (GCAO_submod=='showDungeons' || GCAO_allresult.match('t=-1') || GCAO_allresult.match('showExpeditions'))){c(searchObjects());}
	if(GM_getValue('at', false) == true || GM_getValue('kt', false) == true){c(lastTimeAttackedCounter());}
	if(GM_getValue('fi', true) == true){c(styleFixes());}
	if(GM_getValue('li', true) == true){c(links());}
	if(GM_getValue('rt', true) == true){window.addEventListener('click', rememberTabs, true);}
	if(GM_getValue('cu', 0)!=0){c(changeTheCursor());}
	if(GM_getValue('dayChecked', 0)!=day.getDate()){c(checkForNews());}
	if(GM_getValue('ShowNewsAlert', false)==true){c(showNewsAlert());}
}