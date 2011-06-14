 //################################################################################################################################
//## Add raided gold in the war camp member reports list
//################################################################################################################################
function warCampMemberGold(){
	var p = document.evaluate(".//p[@class='buildingDesc']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	p.snapshotItem(0).innerHTML += '<br/><br/><input id="launchRaidedGold" type="button" class="button2" value="'+L_findGold+'" style="position:absolute;left:500px;top:399px;"><input id="hasBeenLaunched" type="hidden" value="0">   ';
	
	// the bar
	var bar = document.createElement('div');
	if(document.getElementById('banner_top') && document.getElementById('banner_event'))
		var top = 401-25;
	else
		var top = 401;
	bar.innerHTML = '<div class="cooldown_bar" style="left:630px;top:'+top+'px;cursor:pointer;"><div id="pageBar" style="width: 0%;" class="cooldown_bar_fill cooldown_bar_fill_progress"></div><div class="cooldown_bar_text" id="cooldown_bar_fill_page">0</div></div>';
	p.snapshotItem(0).innerHTML += bar.innerHTML;
	
	document.getElementById('launchRaidedGold').addEventListener('click', function() { seeRaidedGold();	}, true); 
}
	
function seeRaidedGold(){
	if(document.getElementById('hasBeenLaunched').value == 0){
		document.getElementById('hasBeenLaunched').value = 1;

		// Compact the dates column
		var dates = document.evaluate("(.//th[@class='warcamp_member_report_date'])|(.//td[@class='warcamp_member_report_date'])",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);

		for(var i =0;i<dates.snapshotLength;i++){
			dates.snapshotItem(i).style.width="100px";
			dates.snapshotItem(i).style.minWidth="100px";
		}	
		
		var trs = document.evaluate(".//div[@class='report_statistic']/table/tbody/tr",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		var divs = document.evaluate(".//div[@class='report_statistic']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		divs.snapshotItem(0).innerHTML = divs.snapshotItem(0).innerHTML.replace(/<th class=\"warcamp_member_report_details\">/i, '<th><img border="0" align="absmiddle" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"></th><th class="warcamp_member_report_details">');
		var row = 1;
		var goldArray = new Array();
		var counter = 0;
		
		var inp = document.createElement('input');
		inp.setAttribute('type','hidden');
		inp.setAttribute('value',0);
		inp.setAttribute('id','counterReports');
		document.getElementById('content').appendChild(inp);
		searchRaidedGold(divs,trs,row,goldArray,counter);
	}
}
	
	
function isInTheGuild(str){
	if(str.match(/color:(green|blue)/i))
		return true;
	else
		return false;
}


	
function searchRaidedGold(divs,trs,row,goldArray,counter){
	if(row<trs.snapshotLength){
		var tds = document.evaluate(".//td",trs.snapshotItem(row),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		
		GM_xmlhttpRequest({
			method: "GET",
			url: GCAO_siteurl + tds.snapshotItem(4).innerHTML.split('index.php?')[1].split('"')[0].replace(/amp;/g,''),
			onload: function(response){
				if(response.responseText.split("absmiddle").length>1){
					var gold = response.responseText.split("absmiddle")[0];
					goldArray[row] = gold.split(':')[gold.split(':').length-1].split('<')[0].replace(/[^(.|0-9)]/g,'');
					
					if(goldArray[row].length>5)
						goldArray[row] = '<b>'+goldArray[row]+'</b>';
					if(isInTheGuild(tds.snapshotItem(1).innerHTML))
						goldArray[row] = '<span style="color:green">'+goldArray[row]+'</span>';
					else if(isInTheGuild(tds.snapshotItem(2).innerHTML))
						goldArray[row] = '<span style="color:red">'+goldArray[row]+'</span>';
				}
				else
					goldArray[row]='';
					
				document.getElementById('counterReports').value++;
				
				
				var test = Math.floor(100*parseInt(document.getElementById('counterReports').value)/parseInt(trs.snapshotLength-1))+'%';
				document.getElementById('pageBar').style.width = test;
				document.getElementById('cooldown_bar_fill_page').innerHTML = document.getElementById('counterReports').value+' / '+(trs.snapshotLength-1) +' ('+test+')';
				
				if(document.getElementById('counterReports').value==trs.snapshotLength-1)
					document.getElementById('pageBar').className = "cooldown_bar_fill cooldown_bar_fill_ready";
									
				if(document.getElementById('counterReports').value==trs.snapshotLength-1){
				
					for(var i =0; i<goldArray.length;i++)
						divs.snapshotItem(0).innerHTML = divs.snapshotItem(0).innerHTML.replace(/<td class=\"warcamp_member_report_details\">/i, '<td>'+goldArray[i+2]+'</td><td title="done" class="warcamp_member_report_details">');
				}
			}
		});
		row++;
		searchRaidedGold(divs,trs,row,goldArray,counter)
	}
}