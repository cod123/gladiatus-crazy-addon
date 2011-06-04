//################################################################################################################################
//## ALL STATS FROM OVERVIEW / ΟΛΑ ΤΑ ΣΤΑΤΙΣΤΙΚΑ ΑΠΟ ΠΡΟΕΠΙΣΚΟΠΗΣΗ
//################################################################################################################################
function GetOverviewStats(){
	GM_xmlhttpRequest({
		method: "GET",
		url: UrlOverview,
		onload: function(response){
			if(response.responseText.match(/playername.achievement.>([^<]+)<\/div>/i)){
				var playername=response.responseText.match(/playername.achievement.>([^<]+)<\/div>/i)[1];
				Set_Cookie('playerName',playername,1);
			}
			
			var life = response.responseText.match(/id\="char_leben" class\="charstats_value">(\d+) %<\/span>/i)[1]*1;
			var exactLife = response.responseText.match(/onmouseover="return escape\((.+)nowrap.'>(\d+) \/ (\d+)/i);
			var exactLifeA = exactLife[2];
			var exactLifeB = exactLife[3];
			var TranLife = response.responseText.match(/nowrap.'>([^:.<>]+):<\/td>/i)[1];
			
			if(document.getElementById('HealthBarDiv')){
				document.getElementById('cooldown_bar_fill_life').style.width=life+'%';
				if(GM_getValue('rb', false) == false){
					document.getElementById('cooldown_bar_text_life').innerHTML=TranLife+' : '+life+'%';
					document.getElementById('HealthBarDiv').setAttribute('onmouseout', "document.getElementById('cooldown_bar_text_life').innerHTML='"+TranLife+' : '+life+'%'+"';");
					document.getElementById('HealthBarDiv').setAttribute('onmouseover', "document.getElementById('cooldown_bar_text_life').innerHTML='"+exactLifeA+" / "+exactLifeB+"';");
				}else{
					document.getElementById('cooldown_bar_text_life').innerHTML=exactLifeA+' / '+exactLifeB+' ('+life+'%)';
				}
				document.getElementById('HealthBarDiv').setAttribute('title', TranLife);
			}
			
			var TranLevel = response.responseText.match('charstats_value21">([^<]+)</span>')[1];
			var Level = response.responseText.match('charstats_value22">([^<]+)</span>')[1];

			var TranStats = response.responseText.match(/charstats_text">([^<]+)<\/span>/gi);
			var Stats = response.responseText.match(/charstats_value">([^<]+)<\/span>/gi);
			var allstat = new Array();
			var allstat2 = new Array();
			
			if(document.getElementById('ButtonsDiv')){
				for (x=1;x<=7;x++){
					allstat2[x] = TranStats[x].match(/charstats_text">([^<]+)<\/span>/i)[1];
					allstat[x] = Stats[x].match(/charstats_value">([^<]+)<\/span>/i)[1];
					document.getElementById('Tran'+x).innerHTML=allstat2[x];document.getElementById('st_'+x).innerHTML=allstat[x];
				}
			}
			else{
				for (x=1;x<=7;x++){
					allstat2[x] = TranStats[x].match(/charstats_text">([^<]+)<\/span>/i)[1];
					allstat[x] = Stats[x].match(/charstats_value">([^<]+)<\/span>/i)[1];
				}
			}
			
			var TranStats2 = response.responseText.match(/charstats_value21">([^<]+)<\/span>/gi);
			var TranARMOR = TranStats2[1].match(/charstats_value21">([^<]+)<\/span>/i)[1];
			var TranDAMAGE = TranStats2[2].match(/charstats_value21">([^<]+)<\/span>/i)[1];
			
			var Stats2 = response.responseText.match(/charstats_value22">([^<]+)<\/span>/gi);
			var ARMOR = Stats2[1].match(/charstats_value22">([^<]+)<\/span>/i)[1];
			var DAMAGE = Stats2[2].match(/charstats_value22">([^<]+)<\/span>/i)[1];
			
			if(document.getElementById('ButtonsDiv')){
				document.getElementById('TranLIFE').innerHTML=TranLife;document.getElementById('st_LIFE').innerHTML=life+' %';
				document.getElementById('TranLEVEL').innerHTML=TranLevel;document.getElementById('st_LEVEL').innerHTML=Level;
				document.getElementById('TranARMOR').innerHTML=TranARMOR;document.getElementById('st_ARMOR').innerHTML=ARMOR;
				document.getElementById('TranDAMAGE').innerHTML=TranDAMAGE;document.getElementById('st_DAMAGE').innerHTML=DAMAGE;
			}
			
			var DamageMin=DAMAGE.match(/(\d+)...(\d+)/i)[1];
			var DamageMax=DAMAGE.match(/(\d+)...(\d+)/i)[2];
			
			var resistance=response.responseText.match(/\d+ %/gi)[2].match(/(\d+)/i)[1];
			var block=response.responseText.match(/\d+ %/gi)[3].match(/(\d+)/i)[1];
			var critDamage=response.responseText.match(/\d+ %/gi)[4].match(/(\d+)/i)[1];
			
			var ChanceOfAvoidCriticalHits=response.responseText.match(/>\d+ %/gi)[1].match(/(\d+)/i)[1];
			var ChanceToBlockAHit=response.responseText.match(/>\d+ %/gi)[2].match(/(\d+)/i)[1];
			var ChanceForCriticalDamage=response.responseText.match(/>\d+ %/gi)[3].match(/(\d+)/i)[1];
			
			var LifePointsLeft=exactLifeA;var Strength=allstat[2];var Skill=allstat[3];var Agility=allstat[4];var Constitution=allstat[5];var Charisma=allstat[6];var Armour=ARMOR;
			var code=''+
			"##"+Level+
			"##"+LifePointsLeft+
			"##"+Strength+
			"##"+Skill+
			"##"+Agility+
			"##"+Constitution+
			"##"+Charisma+
			"##"+Armour+
			"##"+DamageMin+
			"##"+DamageMax+
			"##"+ChanceOfAvoidCriticalHits+
			"##"+ChanceToBlockAHit+
			"##"+ChanceForCriticalDamage;
			
			//alert(code);
			Set_Cookie('simstats',code);
			
			if(response.responseText.match(/AddCharDiv..p3_1_1.[^"]+""/i) && GM_getValue('wd', false) == true){
				document.getElementById('mainmenu').getElementsByTagName('a')[0].innerHTML+=' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/exclamation.png" style="position:absolute;margin-left:10px;margin-top:1px;opacity: 0.65;" onmouseout="this.style.opacity=\'0.65\';document.getElementById(\'warningWeapon\').style.display=\'none\';" onmouseover="this.style.opacity=\'1\';document.getElementById(\'warningWeapon\').style.display=\'block\';">';
				var warningTip = document.createElement('div');
				warningTip.setAttribute('id', 'warningWeapon');
				warningTip.setAttribute('style', 'opacity: 0.75;display:none;width:180px;z-index:502;position:absolute;top:179px;left:345px;border:1px solid grey;background-color:black;color:#c0c0c0;font-weight:bold;height:24px;line-height:24px;padding-left:5px;padding-right:5px;')
				warningTip.innerHTML = L_weaponAlert;
				document.getElementById('header_game').appendChild(warningTip);
			}
		}
	});
}