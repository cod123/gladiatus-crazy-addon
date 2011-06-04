//################################################################################################################################
//## SIMULATOR / ΠΡΟΣΟΜΙΩΤΗΣ
//################################################################################################################################
function simulator(){
	if(!document.getElementById('ticker1')){
		if(Get_Cookie('simstats')){
			var code=Get_Cookie('simstats');
		}else{
			var code='##0##0##0##0##0##0##0##0##0##0##0##0##0##0';
		}
		
		var Level = code.match(/##([^#]+)/g)[0].replace(/#/g,'')*1;
		var LifePointsLeft = code.match(/##([^#]+)/g)[1].replace(/#/g,'')*1;
		var Strength = code.match(/##([^#]+)/g)[2].replace(/#/g,'')*1;
		var Skill = code.match(/##([^#]+)/g)[3].replace(/#/g,'')*1;
		var Agility = code.match(/##([^#]+)/g)[4].replace(/#/g,'')*1;
		var Constitution = code.match(/##([^#]+)/g)[5].replace(/#/g,'')*1;
		var Charisma = code.match(/##([^#]+)/g)[6].replace(/#/g,'')*1;
		var Armour = code.match(/##([^#]+)/g)[7].replace(/#/g,'')*1;
		var DamageMin = code.match(/##([^#]+)/g)[8].replace(/#/g,'')*1;
		var DamageMax = code.match(/##([^#]+)/g)[9].replace(/#/g,'')*1;
		var ChanceOfAvoidCriticalHits = code.match(/##([^#]+)/g)[10].replace(/#/g,'')*1;
		var ChanceToBlockAHit = code.match(/##([^#]+)/g)[11].replace(/#/g,'')*1;
		var ChanceForCriticalDamage = code.match(/##([^#]+)/g)[12].replace(/#/g,'')*1;
		
		var img_winpercent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZMAAAAUCAYAAABI3tC1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAANzSURBVHhe7Z3LaxNRFMZP0kWagm9BrXOT/AmCKx9FpUhx4V9QarvQYlArVQKC0l1xI4gItihUrRbFStClW1Es3VQL4sZF2sQX+EoCIe9xToamVCxtx5m5czvfQOlm5n7n/A7l49xzZxrQNE0PBALEl67rjd+4QAAEQAAEQGA1BNg/Gj9sJvGH71fzDO4BAV8SeDF0nNLptLTcg8Eg1et1KfrQloLdcVG76srr1Go1qlarFBBC6P3js5TO5B1PAAIgoBoBoW2gifg+amlpUS10xAsCrhBgIykUCmZncur+O8NMcq4IQwQEVCIgtI306MwBam1tVSlsxAoCrhGoVCqUz+dNMzl5d8Zo47OuiUMIBFQhIMQmenyug8LhsLSQeYuLtxNkXNCWQd15Tbvqyus0zSQajeq9t6cNM/ntfAZQAAHFCAixmZ6cPyTVTBRDhnB9RoDNJJfLmTOTvoaZ/PIZAqQLAisTEGILTQ4ewTbXyqhwh08JlMtlc5uLzaRndIoy6Z8+RYG0QWB5AprYSsmLnRQKhYAJBEDgHwR4AJ/NZs2ZyYmRN4aZ/AAoEACBvwhoYhslE0eldiZ8hl/WO2DQXp9/EnbVldcpFouLnUn3zVeGmXxfn9SQFQj8BwFNbKdnl7qkzkzsGpZawQBtK9S8/4xddeV1uDNpzkyOXUnSp1TG+wQQIQi4TGB3TKOX13ukmgl3JQtfqXA5/UZHBG23qTuvZ1ddeZ0l21xdl5/SZ5iJ8xWEgnIE2g0zeX2jT+o2l3LQELCvCCw5zdWZmDDMRN7nInxFHskqRaA9JmjqVr9UM7Hr0xdWwEPbCjXvP2NXXXmdUqlkbnNFIhH98IVx+pKa9z4BRAgCLhPYFYvQ9Ohpamtrc1l5Uc6uLQkrCUDbCjXvP2NXXXkdPhrcPM3VMTBGX+fmvE8AEYKAywR2RqM0MzYgdWbicsqQA4E1EWAzaXQmfDT44Nk7MJM14cPNfiHAZvL23qDUzsQvrJGnmgR4m6v5ba798RGYiZp1RNQOE2AzmX2QQGfiMGcsry6B5hvwPDPZ23uNvs2n1M0GkYOAQwR2RGL0YXIInYlDfLGs+gS4M2nOTPZ0X1U/I2QAAg4R+Ph8WKqZ2DUstYIH2laoef8Zu+q65D0T7kwWFpb139y8jx4RggAIgAAILEeAjwj/AeCmf+KijFlGAAAAAElFTkSuQmCC';
		var SimulatorBox = document.createElement('div');
		SimulatorBox.setAttribute('id', 'SimulatorBox');
		SimulatorBox.setAttribute('style', 'cursor:progress;margin-top:10px;width:290px;padding:5px;border: 2px solid rgb(178, 139, 96);text-align:justify;');
		document.getElementById('content').getElementsByTagName('td')[3].appendChild(SimulatorBox);
		
		document.getElementById('SimulatorBox').innerHTML = '<b>'+L_Simulator+':</b>'+
		'<span id="percent" style="position:absolute;color:white;margin-left:150px;margin-top:18px;"></span>'+
		'<span id="ProsTitle" style="position:absolute;color:white;margin-left:-40px;margin-top:19px;"><b>'+L_arena+':</b></span>'+
		'<table cellpadding="0px" cellspacing="0px"><tr>'+
		'<td style="background-image: url(' + img_winpercent + '); background-position: 0px 0px;width:1px;height:20px;"></td>'+
		'<td id="SetWidth" style="background-image: url(' + img_winpercent + '); background-position: 0px 0px;width:200px;height:20px;cursor:pointer;"></td>'+
		'<td style="background-image: url(' + img_winpercent + '); background-position: -402px 0px;width:1px;height:20px;"></td>'+
		'</tr></table>' +
		'<table width="242px"><tr><td>' +
		'<span id="more" style="position:absolute;z-index: 20;margin-left:-3px;margin-top:-18px;display:none;cursor:pointer;"><br>' +
		'<table width="242px" id="morein" style="color:#ffffff;background: black; opacity: 0.85; border: 1px solid rgb(153, 153, 153); padding:3px;cursor:default;"></table></span>'+
		'</td></tr></table>';
		
		var fights=GM_getValue('sf', 1000);
		var results = simulate(Skill, Agility, Charisma, ChanceToBlockAHit, ChanceOfAvoidCriticalHits, Armour, DamageMin, DamageMax, ChanceForCriticalDamage, LifePointsLeft, fights);
		var won = results[0];
		var wonP = Math.round(won/fights*10000)/100;
		var lost = results[1];
		var lostP = Math.round(lost/fights*10000)/100;
		var draw = results[2];
		var drawP = Math.round(draw/fights*10000)/100;
		var myAvDamage = results[3];
		var hisAvDamage = results[4];
		var myRemainingLife = results[5];
		var hisRemainingLife = results[6];
		
		if(wonP>80){var color="green"}
		else if(wonP>=70){var color="black"}
		else{var color="red"}	
		var imgposition = -(101-wonP)*2;
		if(won==lost){var FightResulte='Draw';}
		else{var FightResulte=wonP+'%';}

		document.getElementById('SetWidth').setAttribute('style','background-image: url(http://i617.photobucket.com/albums/tt260/goldisever/Apo/winbar.png); background-position:'+imgposition+'px 0px;width:200px;height:20px;cursor:pointer;');
		document.getElementById('percent').innerHTML = '<b><font color="'+color+'">'+FightResulte+'</font></b>';
		document.getElementById('morein').innerHTML += '<tr><td>' +
		'<b style="color: rgb(186, 151, 0);">'+L_Battles+': </b><font color="#c0c0c0">'+dottedNumber(fights)+'</font>'+
		'<table width="100%">'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_Won+'</font></td><td><font color="white">:</font></td><td><font color="green">'+dottedNumber(won)+'</font></td><td><font color="grey">('+wonP+'%)</font></td></tr>'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_Lost+'</font></td><td><font color="white">:</font></td><td><font color="red">'+dottedNumber(lost)+'</font></td><td><font color="grey">('+lostP+'%)</font></td></tr>'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_Draws+'</font></td><td><font color="white">:</font></td><td><font color="#B8B8B8">'+dottedNumber(draw)+'</font></td><td><font color="grey">('+drawP+'%)</font></td></tr>'+
		'</table>'+
		'<b style="color: rgb(186, 151, 0);">'+L_Damage+':'+
		'<table width="100%">'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_myAvDamage+'</font></td><td><font color="white">:</font></td><td><font color="grey">'+dottedNumber(myAvDamage)+'</font></td></tr>'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_hisAvDamage+'</font></td><td><font color="white">:</font></td><td><font color="grey">'+dottedNumber(hisAvDamage)+'</font></td></tr>'+
		'</table>'+
		'</table>'+
		'<b style="color: rgb(186, 151, 0);">'+L_Life+':'+
		'<table width="100%">'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_myRemLife+'</font></td><td><font color="white">:</font></td><td><font color="grey">'+dottedNumber(myRemainingLife)+'</font></td></tr>'+
		'<tr><td>&nbsp;&nbsp;</td><td><font color="white">'+L_hisRemLife+'</font></td><td><font color="white">:</font></td><td><font color="grey">'+dottedNumber(hisRemainingLife)+'</font></td></tr>'+
		'</table></td></tr>';
		document.getElementById('SetWidth').setAttribute('onmouseover',"document.getElementById('more').style.display='block';");
		document.getElementById('SetWidth').setAttribute('onmouseout',"document.getElementById('more').style.display='none';");
		document.getElementById('more').setAttribute('onmouseover',"document.getElementById('more').style.display='block';");
		document.getElementById('more').setAttribute('onmouseout',"document.getElementById('more').style.display='none';");
		document.getElementById('ProsTitle').setAttribute('onmouseover',"document.getElementById('more').style.display='block';");
		document.getElementById('ProsTitle').setAttribute('onmouseout',"document.getElementById('more').style.display='none';");
		document.getElementById('SimulatorBox').style.cursor='default';
	}
}

/**################################################################################################################################
## Djor's Simulator / Προσομοιωτής του Djor
################################################################################################################################**/
/**
	Arguments : my stats
**/
function simulate(skill, agility, charisma, block, resistance, ARMOR, damageMin, damageMax, critDamage, life, fights){
/* Results */
	var win = 0 ;
	var lose = 0 ;
	var draw = 0 ;

	/* number of simulated battles */
	//var fights = 1000;
	
	/* We search Opponent stats */
	if(document.getElementById('skillB')){
		var opponentSkill = document.getElementById('skillB').value;
		var opponentAgility = document.getElementById('agilityB').value;
		var opponentCharisma = document.getElementById('charismaB').value;
		var opponentArmor = document.getElementById('armorB').value;
		var opponentDamageMin = document.getElementById('damageMinB').value;
		var opponentDamageMax = document.getElementById('damageMaxB').value;
		var opponentResistance = document.getElementById('resistanceB').value;
		var opponentCrit = document.getElementById('criticB').value;
		var opponentBlock = document.getElementById('blockB').value;
		var opponentLife = 100000;
	}
	else{
		var opponentSkill = document.getElementById('char_f1').innerHTML;
		var opponentAgility = document.getElementById('char_f2').innerHTML;
		var opponentCharisma = document.getElementById('char_f4').innerHTML;
		var opponentArmor = document.getElementById('char_panzer').innerHTML;
		var damages = document.getElementById('char_schaden').innerHTML.split(' - ');
		
		var opponentDamageMin = damages[0];
		var opponentDamageMax = damages[1];
		
		var searchCrit = document.getElementById('char_schaden_tt').getAttribute('onmouseover');
		searchCrit = searchCrit.split(' %')[0].split('>');
		var opponentCrit = searchCrit[searchCrit.length-1];
		
		var searchBlock = document.getElementById("char_panzer").parentNode.getAttribute('onmouseover');
			
		searchBlock = searchBlock.split(" %");
		var opponentResistance = searchBlock[0].substring(searchBlock[0].length-2,searchBlock[0].length);
		if(opponentResistance[0]==">") opponentResistance = opponentResistance[1];
		var opponentBlock = searchBlock[1].substring(searchBlock[1].length-2,searchBlock[1].length);
		if(opponentBlock[0]==">") opponentBlock = opponentBlock[1];
		
		var opponentLife = document.getElementById('char_leben_tt').getAttribute('onmouseover');
		opponentLife = opponentLife.split("</td><td style=\\'padding-left:20px;text-align:right; color:#BA9700; font-weight: bold; font-size:9pt\\' nowrap=\\'nowrap\\'>")
		opponentLife = opponentLife[1].split("<");
		opponentLife = opponentLife[0].split(" / ");
		opponentLife = opponentLife[0];
	}
	
	/* we transform everything in integer */
	skill = parseInt(skill);
	agility = parseInt(agility);
	charisma = parseInt(charisma);
	block = parseInt(block);
	resistance = parseInt(resistance);
	ARMOR = parseInt(ARMOR);
	damageMin = parseInt(damageMin);
	damageMax = parseInt(damageMax);
	critDamage = parseInt(critDamage);
	opponentSkill = parseInt(opponentSkill);
	opponentAgility = parseInt(opponentAgility);
	opponentCharisma = parseInt(opponentCharisma);
	opponentBlock = parseInt(opponentBlock);
	opponentResistance = parseInt(opponentResistance);
	opponentDamageMin = parseInt(opponentDamageMin);
	opponentDamageMax = parseInt(opponentDamageMax);
	opponentCrit = parseInt(opponentCrit);
	opponentLife = parseInt(opponentLife);

	/* Simulator */
	var chanceOfHittingTheOpponent = 100*skill/(skill+opponentAgility);
	var chanceOfBeingHitten = 100*opponentSkill/(opponentSkill+agility);
	
	/* Double hits*/
	if(charisma>opponentCharisma){
		var myDoubleHit = charisma-opponentCharisma;
		if(myDoubleHit>100) myDoubleHit=100;
		var hisDoubleHit = 0;
	}else{
		var myDoubleHit = 0;
		var hisDoubleHit = opponentCharisma-charisma;
		if(hisDoubleHit>100) hisDoubleHit=100;
	}

	/* critics */
	if(critDamage>opponentResistance)
		var myCritChance = critDamage - opponentResistance;
	else 
		var myCritChance = 0 ;
		
	if(opponentCrit>resistance)
		var hisCritChance = opponentCrit - resistance;
	else 
		var hisCritChance = 0 ;
		
	var myArmorMin = Math.floor(ARMOR/66 - ARMOR/660-1);
	var myArmorMax = Math.floor(ARMOR/66 + ARMOR/660);
	
	var hisArmorMin = Math.floor(opponentArmor/66 - opponentArmor/660-1);
	var hisArmorMax = Math.floor(opponentArmor/66 + opponentArmor/660);
	
	var myAverageDamages = 0;
	var hisAverageDamages = 0;
	
	/* simulate for "fights" battles */
	for(j=0;j<fights;j++){
		var rounds = 10;
		var myTotalDamages = 0;
		var hisTotalDamages = 0;
		var winByLackOfLife = false;
		var loseByLackOfLife = false;
		
		var i = 0;
			
		while((i<rounds)&&(!winByLackOfLife)&&(!loseByLackOfLife)){
			var arrayTemp = aRound(myDoubleHit,hisDoubleHit,chanceOfHittingTheOpponent,damageMin,damageMax,myCritChance,opponentBlock,hisArmorMin,hisArmorMax,chanceOfBeingHitten,opponentDamageMin,opponentDamageMax,hisCritChance,block,myArmorMin,myArmorMax);
			myTotalDamages = myTotalDamages + arrayTemp[0];
			hisTotalDamages = hisTotalDamages + arrayTemp[1];
			if(myTotalDamages>opponentLife-1) {
				winByLackOfLife = true;
				myTotalDamages = opponentLife-1;
			}
			if(hisTotalDamages>life-1){
				loseByLackOfLife = true;
				hisTotalDamages = life-1;
			}
			i++;
		}
		
		if(winByLackOfLife==true){win++;}
		else{
			if(loseByLackOfLife==true){lose++;}
			else{
				if(myTotalDamages>hisTotalDamages){win++;}
				else if(myTotalDamages<hisTotalDamages){lose++;}	
				else if(myTotalDamages==hisTotalDamages){draw++;}
			}
		}
		myAverageDamages += myTotalDamages;
		hisAverageDamages += hisTotalDamages;
	}

	myAverageDamages = Math.floor(myAverageDamages/fights);
	hisAverageDamages = Math.floor(hisAverageDamages/fights);
	myRemainingLife = life - hisAverageDamages;
	if(myRemainingLife<=0){myRemainingLife=1}
	hisRemainingLife = opponentLife -myAverageDamages;
	if(hisRemainingLife<=0){hisRemainingLife=1}

	return new Array(win,lose,draw,myAverageDamages,hisAverageDamages, myRemainingLife, hisRemainingLife);
}


/*
	Simulate a round : each player does one attack, two if it is a double hit.
*/	
function aRound(myDoubleHit,hisDoubleHit,chanceOfHittingTheOpponent,damageMin,damageMax,myCritChance,opponentBlock,hisArmorMin,hisArmorMax,chanceOfBeingHitten,opponentDamageMin,opponentDamageMax,hisCritChance,block,myArmorMin,myArmorMax){
	var randomnumber100 = Math.floor(Math.random()*100);

	var myNumberOfHit = 1;
	var hisNumberOfHit = 1;
	
	if(randomnumber100<myDoubleHit)
		myNumberOfHit = 2;
	if(randomnumber100<hisDoubleHit)
		hisNumberOfHit = 2;
	
	var myDamages = 0 ;
	var hisDamages = 0 ;
	
	myDamages = myDamages + aHit(chanceOfHittingTheOpponent,damageMin,damageMax,myCritChance,opponentBlock,hisArmorMin,hisArmorMax);
	if(myNumberOfHit == 2)
		myDamages = myDamages + aHit(chanceOfHittingTheOpponent,damageMin,damageMax,myCritChance,opponentBlock,hisArmorMin,hisArmorMax);
	
	var hisDamages = hisDamages + aHit(chanceOfBeingHitten,opponentDamageMin,opponentDamageMax,hisCritChance,block,myArmorMin,myArmorMax);
	if(hisNumberOfHit == 2)
		hisDamages = hisDamages + aHit(chanceOfBeingHitten,opponentDamageMin,opponentDamageMax,hisCritChance,block,myArmorMin,myArmorMax);
	
	var array = new Array(myDamages,hisDamages,myNumberOfHit,hisNumberOfHit);
	
	// alert(chanceOfHittingTheOpponent+' '+damageMin+' '+damageMax+' '+myCritChance+' '+opponentBlock+' '+hisArmorMin+' '+hisArmorMax);
	// alert(chanceOfBeingHitten+' '+opponentDamageMin+' '+opponentDamageMax+' '+hisCritChance+' '+block+' '+myArmorMin+' '+myArmorMax);
	return array;
}

/*
	Return a random hit, it depends on your damages, his armor, his block, his resistance, etc... 
*/
function aHit(chanceOfHittingTheOpponent,damageMin,damageMax,myCritChance,opponentBlock,hisArmorMin,hisArmorMax){
	var myHit = 0;
	
	// if my hit touch my opponent
	var randomnumber1002 = Math.floor(Math.random()*101);
	if(randomnumber1002<chanceOfHittingTheOpponent){
		myHit = damageMin + Math.floor(Math.random()*(damageMax-damageMin+1));

		// critic ? 
		var randomnumber1003 = Math.floor(Math.random()*101);
		if(randomnumber1003<myCritChance)
			myHit = myHit*2;
		
		// block ? 
		var randomnumber1004 = Math.floor(Math.random()*101);
		if(randomnumber1004<opponentBlock)
			myHit = myHit/2;

		// armor
		var randomnumber1005 = hisArmorMin + Math.floor(Math.random()*(hisArmorMax-hisArmorMin+1));
		if(randomnumber1005<myHit)
			myHit = myHit-randomnumber1005;
		else
			myHit = 0;
	}
	
	return myHit;
}