//################################################################################################################################
//## BASICS WHILE TRAINING / ΒΑΣΙΚΕΣ ΣΤΗΝ ΕΚΠΑΙΔΕΥΣΗ
//################################################################################################################################
function basikes(){
    var tot = 0;
    if(document.getElementById('char_f0_tt')){
    var stats = new Array(2);
    for (x=0;x<=5;x++){
    stats[x,0] = document.getElementById('char_f'+x+'_tt').getAttribute('onmouseover');
    stats[x,1] = stats[x,0].match(/\\'>(\d+)/g)[2].match(/(\d+)/g)[0];
    stats[x,0] = stats[x,0].match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    stats[x,2] = nextPoints(stats[x,0]);
    document.getElementById('char_f'+x).setAttribute('style','color: #540400;display: block;float: right;font-weight: bold;position: relative;right: 5px;text-align: right;top: -15px;width: 130px;');
    document.getElementById('char_f'+x).innerHTML += ' | <font color="#505050">' + stats[x,0] + '</font> | <font color="green">+' + stats[x,2] + '</font>';
     
    if(x==0){tot += statCost(5, stats[x,0], 2.6, 0);}
    else if((x==1)||(x==4)){tot += statCost(5, stats[x,0], 2.5, 0);}
    else if((x==2)||(x==3)){tot += statCost(5, stats[x,0], 2.3, 0);}
    else if(x==5){tot += statCost(5, stats[x,0], 2.4, 0);}
     
    }
    var divs = document.evaluate(".//div[@class='title_inner']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
    divs.snapshotItem(0).innerHTML += ' : <font style="font-weight:normal;">'+dottedNumber(tot)+' <img border="0" align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"> '+L_spent+'</font>';
    }
}
     
// return the cost of a stat from begin to end.
/**
coeff : 26 <-> Strength
2.5 <-> skill/charisma
2.4 <-> intelligence
2.3 <-> agility/constitution
**/
function statCost(begin, end, coeff, reduc){
    var count = 0;
    begin = parseInt(begin);
    end = parseInt(end);
     
    for(var i = begin; i < end; i++)
    count += parseInt(Math.pow(i-4,coeff)*(1-reduc));
     
    return count;
}
     
//How much the max will increase / Πόσο θα αυξηθεί το μέγιστο
function nextPoints(stat){
    stat = stat*1;
    if(stat%2==1){var nextPoints=2;}
    else{var nextPoints=1;}
    return nextPoints;
}
     
function resetStats(){
    var reset = 5;
    document.getElementById("inputStat1").value = reset;
    document.getElementById('inputStat2').value = document.getElementById('char_f0_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat3").value = reset;
    document.getElementById('inputStat4').value = document.getElementById('char_f1_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat5").value = reset;
    document.getElementById('inputStat6').value = document.getElementById('char_f2_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat7").value = reset;
    document.getElementById('inputStat8').value = document.getElementById('char_f3_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat9").value = reset;
    document.getElementById('inputStat10').value = document.getElementById('char_f4_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat11").value = reset;
    document.getElementById('inputStat12').value = document.getElementById('char_f5_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
    document.getElementById("inputStat13").innerHTML = "";
    document.getElementById("inputStat14").innerHTML = "";
    document.getElementById("inputStat15").innerHTML = "";
    document.getElementById("inputStat16").innerHTML = "";
    document.getElementById("inputStat17").innerHTML = "";
    document.getElementById("inputStat18").innerHTML = "";
    document.getElementById("inputStat19").innerHTML = "";
    document.getElementById("inputStat20").innerHTML = "";
}
     
function addTrainingCostSimulator(){
	var div = document.createElement('div');
	
	var L_Strength = document.getElementById('char_f0_tt').getElementsByTagName('span')[0].innerHTML;
	var L_Skill = document.getElementById('char_f1_tt').getElementsByTagName('span')[0].innerHTML;
	var L_Agility = document.getElementById('char_f2_tt').getElementsByTagName('span')[0].innerHTML;
	var L_Constitution = document.getElementById('char_f3_tt').getElementsByTagName('span')[0].innerHTML;
	var L_Charisma = document.getElementById('char_f4_tt').getElementsByTagName('span')[0].innerHTML;
	var L_Intelligence = document.getElementById('char_f5_tt').getElementsByTagName('span')[0].innerHTML;

    document.getElementById('content').appendChild(div);
	div.innerHTML +='<div class="contentItem" style="margin-top: 0px;">'
    +'<h3>'+L_SimOfTraining+'</h3>'
    +'<div class="contentItem_content">'
	+'<style>'
	+'input.button4 {background-image: url("http://i617.photobucket.com/albums/tt260/goldisever/GCAO/button4.jpg");border:0 none;color:#453011;font-size:11px;font-weight:bold;height:26px;width:37px;}'
	+'</style>'
    +'<table align="center" style="border:1px solid #af8e50;background-color:#ded8c6;padding:5px;">'
    +'<tr>'
    +'<th align="center" width="50"> '+L_Stat+' </th>'
    +'<th align="center" width="40"> '+L_From+' </th>'
    +'<th align="center" width="50"> '+L_To+' </th>'
    +'<th align="center">  </th>'
    +'<th align="center" width="150" > '+L_Cost+' <img align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"></th>'
    +''
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Strength+'</th>'
    +'<th><input type="text" id="inputStat1" size="7"></th>'
    +'<th><input type="text" id="inputStat2" size="7"></th>'
	+'<th align="center"><input type="button" id="addOne1" class="button4" onclick="document.getElementById(\'inputStat2\').value++;" value="+1">'
	+'<input type="button" id="removeOne1" class="button4" onclick="document.getElementById(\'inputStat2\').value=document.getElementById(\'inputStat2\').value-1;" value="-1" style="margin-left:4px;"></th>'
    +'<th align="center"><span id="inputStat14"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Skill+' </th>'
    +'<th><input type="text" id="inputStat3" size="7"></th>'
    +'<th><input type="text" id="inputStat4" size="7"></th>'
	+'<th align="center"><input type="button" id="addOne2" class="button4" onclick="document.getElementById(\'inputStat4\').value++;" value="+1">'
	+'<input type="button" id="removeOne2" class="button4" onclick="document.getElementById(\'inputStat4\').value=document.getElementById(\'inputStat4\').value-1;" value="-1" style="margin-left:4px;"></th>'
    +'<th align="center"><span id="inputStat15"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Agility+' </th>'
    +''
    +'<th><input type="text" id="inputStat5" size="7"></th>'
    +'<th><input type="text" id="inputStat6" size="7"></th>'    
	+'<th align="center"><input type="button" id="addOne3" class="button4" onclick="document.getElementById(\'inputStat6\').value++;" value="+1">'
	+'<input type="button" id="removeOne3" class="button4" onclick="document.getElementById(\'inputStat6\').value=document.getElementById(\'inputStat6\').value-1;" value="-1" style="margin-left:4px;"></th>'

    +'<th align="center"><span id="inputStat16"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Constitution+' </th>'
    +'<th><input type="text" id="inputStat7" size="7"></th>'
    +'<th><input type="text" id="inputStat8" size="7"></th>'
	+'<th align="center"><input type="button" id="addOne4" class="button4" onclick="document.getElementById(\'inputStat8\').value++;" value="+1">'
	+'<input type="button" id="removeOne4" class="button4" onclick="document.getElementById(\'inputStat8\').value=document.getElementById(\'inputStat8\').value-1;" value="-1" style="margin-left:4px;"></th>'
    +'<th align="center"><span id="inputStat17"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Charisma+' </th>'
    +'<th><input type="text" id="inputStat9" size="7"></th>'
    +'<th><input type="text" id="inputStat10" size="7"></th>'
	+'<th align="center"><input type="button" id="addOne5" class="button4" onclick="document.getElementById(\'inputStat10\').value++;" value="+1">'
	+'<input type="button" id="removeOne5" class="button4" onclick="document.getElementById(\'inputStat10\').value=document.getElementById(\'inputStat10\').value-1;" value="-1" style="margin-left:4px;"></th>'
    +'<th align="center"><span id="inputStat18"></span></th>'
    +''
    +'</tr>'
    +'<tr>'
    +'<th align="center">'+L_Intelligence+' </th>'
    +'<th><input type="text" id="inputStat11" size="7"></th>'
    +'<th><input type="text" id="inputStat12" size="7"></th>'
	+'<th align="center"><input type="button" id="addOne6" class="button4" onclick="document.getElementById(\'inputStat12\').value++;" value="+1">'
	+'<input type="button" id="removeOne6" class="button4" onclick="document.getElementById(\'inputStat12\').value=document.getElementById(\'inputStat12\').value-1;" value="-1" style="margin-left:4px;"></th>'
    +'<th align="center"><span id="inputStat19"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th align="center" colspan="2">'+L_TrainingCampLevel+'</th>'
    +'<th align="center">'
    +'<select id="inputStat0" onChange="calculStats()" name="selection" >'
    +'<option value="0">0</option>'
    +'<option value="1">1</option>'
    +''
    +'<option value="2">2</option>'
    +'<option value="3">3</option>'
    +'<option value="4">4</option>'
    +'<option value="5">5</option>'
    +'<option value="6">6</option>'
    +'<option value="7">7</option>'
    +'<option value="8">8</option>'
    +'<option value="9">9</option>'
    +'<option value="10">10</option>'
    +''
    +'<option value="11">11</option>'
    +'<option value="12">12</option>'
    +'<option value="13">13</option>'
    +'<option value="14">14</option>'
    +'<option value="15">15</option>'
    +'</select>'
    +'</th>'
    +'<th align="right">'+L_Reduction+' </th>'
    +'<th align="center"><span id="inputStat20"></span></th>'
    +'</tr>'
    +''
    +'<tr>'
    +'<th colspan="2" align="center"></th>'
    +'<th align="right" colspan="2"><b>'+L_TotalCost+'</b></th>'
    +'<th align="center"><span id="inputStat13"></span></th>'
    +'</tr>'
    +'<tr>'
    +'<th colspan="5" align="center">'
    +'<input class="button2" type="button" value="'+L_staticsTitle+'" id="myStats" title="'+L_TotalCostTitle+'">'
    +'<input class="button2" type="button" value="'+L_Calculate+'" id="calculate" title="'+L_CalculateTitle+'" style="margin-left:20px;">'
    +'<input class="button3" type="button" onClick="resetStats()" value="'+L_ClearAll+'" id="reset" title="'+L_ClearAllTitle+'" style="margin-left:20px;">'
    +'</th>'
    +'</tr>'
    +'</table></div>';

    document.getElementById('myStats').addEventListener('click',function(){putMyStats2();},true);
    document.getElementById('calculate').addEventListener('click',function(){calculStats();},true);
    document.getElementById('reset').addEventListener('click',function(){resetStats();},true);

    resetStats();
	for (x=1;x<=6;x++){
		document.getElementById('addOne'+x).addEventListener('click',function(){calculStats();},true);
		document.getElementById('removeOne'+x).addEventListener('click',function(){calculStats();},true);
		var y=x*2;
		var z=x-1;
		document.getElementById('inputStat'+y).value = document.getElementById('char_f'+z+'_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
	}
}

function putMyStats2(){
	for (x=1;x<=6;x++){
		var y=2*x-1;
		var z=x-1;
		document.getElementById('inputStat'+y).value = document.getElementById('char_f'+z+'_tt').getAttribute('onmouseover').match(/\\'>(\d+)/g)[1].match(/(\d+)/g)[0];
	}
}
 
function calculStats(){
    var reduc = 2*document.getElementById("inputStat0").value/100;
    var cout_force = statCost(document.getElementById("inputStat1").value, document.getElementById("inputStat2").value, 2.6, reduc);
    var cout_adresse = statCost(document.getElementById("inputStat3").value, document.getElementById("inputStat4").value, 2.5, reduc);
    var cout_agilite = statCost(document.getElementById("inputStat5").value, document.getElementById("inputStat6").value, 2.3, reduc);
    var cout_constitution = statCost(document.getElementById("inputStat7").value, document.getElementById("inputStat8").value, 2.3, reduc);
    var cout_charisme = statCost(document.getElementById("inputStat9").value, document.getElementById("inputStat10").value, 2.5, reduc);
    var cout_intelligence = statCost(document.getElementById("inputStat11").value, document.getElementById("inputStat12").value, 2.4, reduc);
    var cout_total = cout_force + cout_adresse + cout_agilite + cout_constitution + cout_charisme + cout_intelligence;
    document.getElementById("inputStat13").innerHTML = dottedNumber(cout_total);
    document.getElementById("inputStat14").innerHTML = displayProp(cout_force,cout_total);
    document.getElementById("inputStat15").innerHTML = displayProp(cout_adresse ,cout_total);
    document.getElementById("inputStat16").innerHTML = displayProp(cout_agilite ,cout_total);
    document.getElementById("inputStat17").innerHTML = displayProp(cout_constitution ,cout_total);
    document.getElementById("inputStat18").innerHTML = displayProp(cout_charisme ,cout_total);
    document.getElementById("inputStat19").innerHTML = displayProp(cout_intelligence ,cout_total);
    document.getElementById("inputStat20").innerHTML = dottedNumber(parseInt(cout_total*reduc/(1-reduc)));
}
     
function displayProp(nbr1,nbr2){
	if(nbr2!=0){return dottedNumber(nbr1)+" ("+parseInt(nbr1*100/nbr2)+"%)";}
	else{return dottedNumber(nbr1)+" (0%)";}
}
