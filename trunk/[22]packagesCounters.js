//################################################################################################################################
//## PACKAGE COUNTERS
//################################################################################################################################
function packetCounters(){
	var counterBar=document.createElement("tr");
	counterBar.innerHTML='<td><div class="title2_box"><div class="title2_inner"><table><tr><td valign="top">'+
	'&bull; <b>'+L_Packages+': <span id="paket_number">0</span></b>'+
	'<table id="paket_counter_table1" style="display:none;padding-left:4px;"><tr><td>'+L_packedValue+'</td><td>:</td><td id="paket_value_1"></td></tr><tr><td>'+L_PackedGold+'</td><td>:</td><td id="paket_value_2"></td></tr></table>'+
	'</td><td style="width:10px;"></td><td valign="top">'+
	'&bull; <b>'+L_invItems+': <span id="inv_number">0</span></b>'+
	'<table id="paket_counter_table2" style="display:none;padding-left:4px;"><tr><td>'+L_invValue+'</td><td>:</td><td id="inventory_value_1"></td></tr></table>'+
	'</td></tr></table></div></div></td>';
	
	var counterBar2=document.createElement("tr");
	counterBar2.setAttribute('id','searchTotPakBox');
	counterBar2.innerHTML='<td><div class="title2_box"><div class="title2_inner"><table><tr><td valign="top" width="150px">'+
	'<input id="searchTotPakValue" type="button" class="button3" value="'+L_total+'"><input id="hasBeenLaunched" type="hidden" value="0"></td> <td width="150"><span align="center" id="total_pak_value" value="0"></span>  <img id="totalImage" style="display:none;" src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"/></td> <td text-align="right"> <span align="right" style="display:none;" id="total_page"><input type="hidden" id="currentPage" value="0"><input type="hidden" id="maxPage" value="0"></div></span> ' +
	'</td></tr></table></div></div></td>';
	
	document.getElementById('content').getElementsByTagName('table')[1].appendChild(counterBar);
	document.getElementById('content').getElementsByTagName('table')[1].appendChild(counterBar2);
	
	if(document.body.getElementsByTagName('script')[10].innerHTML.match('AddCharDiv')){var x=10;}
	else if(document.body.getElementsByTagName('script')[11].innerHTML.match('AddCharDiv')){var x=11;}
	else if(document.body.getElementsByTagName('script')[12].innerHTML.match('AddCharDiv')){var x=12;}
	else if(document.body.getElementsByTagName('script')[13].innerHTML.match('AddCharDiv')){var x=13;}
	else if(document.body.getElementsByTagName('script')[14].innerHTML.match('AddCharDiv')){var x=14;}
	
	if(document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/i)){
		if(document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/g).length>0){
			var pakets=document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/g).length;
			document.getElementById('paket_number').innerHTML=pakets;
			var sumValues=0;
			var sumValues2=0;
			for(i=0;i<pakets;i++){
				if(document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/g)[i]){
					var txt=document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/g)[i];
					if(txt.match(/<img/g)){
						var value=document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("paket_\w+.*?\/table/g)[i].match(/>([^<]+)<img/i)[1].replace(/\./g,'').match(/(\d+)/i)[1];
						sumValues=parseInt(sumValues)+parseInt(value);
					}
					else if(txt.match(/>\d+[^<]+</i)){
						var value=txt.match(/>(\d+[^<]+)</i)[1].replace(/\./g,'').match(/(\d+)/i)[1];
						sumValues2=parseInt(sumValues2)+parseInt(value);
					}else{
						var value = 0 ;
					}
				}
			}
			document.getElementById('paket_counter_table1').style.display='block';
			document.getElementById('paket_value_1').innerHTML=dottedNumber(sumValues)+' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"/>';
			document.getElementById('paket_value_2').innerHTML=dottedNumber(sumValues2)+' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"/>';
		}
	}
	if(document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("p\w+_\w+_\w+".*?\/table/g)){
		if(document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("p\w+_\w+_\w+".*?\/table/g).length>0){
			var inv=document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("p\w+_\w+_\w+".*?\/table/g).length;
			document.getElementById('inv_number').innerHTML=inv;
			var sumValues=0;
			for(i=0;i<inv;i++){
				try{var value=document.body.getElementsByTagName('script')[x].innerHTML.match(/AddCharDiv\("p\w+_\w+_\w+".*?\/table/g)[i].match(/>([^<]+)<img/i)[1].replace(/\./g,'').match(/(\d+)/i)[1];}
				catch(err){var value=0;}
				sumValues=parseInt(sumValues)+parseInt(value);
			}
			document.getElementById('paket_counter_table2').style.display='block';
			document.getElementById('inventory_value_1').innerHTML=dottedNumber(sumValues)+' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"/>';
		}
	}
	
	document.getElementById('searchTotPakValue').addEventListener('click', function(){searchTotPakValue();}, true);
	if(!document.getElementById('content').innerHTML.match(/page=\d+">\d+</g)){
		document.getElementById('searchTotPakBox').style.display='none';
	}
	var bar = document.createElement('div');
	if(document.getElementById('banner_top') && document.getElementById('banner_event'))
		var top = 847;
	else
		var top = 847-25;
	bar.innerHTML = '<div class="cooldown_bar" style="left:580px;top:'+top+'px;cursor:pointer;"><div id="pageBar" style="width: 0%;" class="cooldown_bar_fill cooldown_bar_fill_progress"></div><div class="cooldown_bar_text" id="cooldown_bar_fill_page">0</div></div>';
	document.getElementById('total_page').appendChild(bar);
}

function searchTotPakValue(){
	if(document.getElementById('hasBeenLaunched').value == 0){

		var last = false;
		document.getElementById('hasBeenLaunched').value = 1;
		var divs = document.evaluate(".//div[@class='paging_numbers']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		divs = document.evaluate("(.//a)|(.//span)",divs.snapshotItem(0),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		var pageMax = parseInt(divs.snapshotItem(divs.snapshotLength-1).innerHTML);
		document.getElementById('maxPage').value=pageMax;
		
		document.getElementById('currentPage').value=0;
		document.getElementById('total_pak_value').innerHTML = 0;
		document.getElementById('totalImage').setAttribute('style','');
		document.getElementById('total_page').setAttribute('style','');
		document.getElementById('cooldown_bar_fill_page').innerHTML='0 / '+pageMax+' (0%)';
		document.getElementById('pageBar').style.width='0%';
		for(var j=1;j<pageMax+1;j++){
			totalPackValue(j);
		}
	}
}

function totalPackValue(page){
	GM_xmlhttpRequest({
		method: "GET",
		url: GCAO_siteurl + 'mod=packages&sh='+GCAO_secureCode+'&page='+page,
		onload: function(response){
			for(var i = 0; i<response.responseText.match(/AddCharDiv\("paket_\w+.*?\/table/g).length;i++) {
				try{
					var txt=response.responseText.match(/AddCharDiv\("paket_\w+.*?\/table/g)[i];
					if(txt.match(/<img/g)){
						var value=response.responseText.match(/AddCharDiv\("paket_\w+.*?\/table/g)[i].match(/>([^<]+)<img/i)[1].replace(/\./g,'').match(/(\d+)/i)[1];
					}
					else if(txt.match(/>\d+[^<]+</i)){
						var value=txt.match(/>(\d+[^<]+)</i)[1].replace(/\./g,'').match(/(\d+)/i)[1];
					}
					else{var value=0;}
					document.getElementById('total_pak_value').innerHTML = dottedNumber(parseInt(document.getElementById('total_pak_value').innerHTML.replace(/\./g,'')) + parseInt(value));
				}
				catch(err){var value=0;}
			}
			document.getElementById('currentPage').value=parseInt(document.getElementById('currentPage').value)+1;
			var test = Math.floor(100*parseInt(document.getElementById('currentPage').value)/parseInt(document.getElementById('maxPage').value))+'%';
			document.getElementById('pageBar').style.width = test;
			document.getElementById('cooldown_bar_fill_page').innerHTML = document.getElementById('currentPage').value+' / '+document.getElementById('maxPage').value+' ('+test+')';
			
			if(document.getElementById('currentPage').value==document.getElementById('maxPage').value)
				document.getElementById('pageBar').className = "cooldown_bar_fill cooldown_bar_fill_ready";
				
		}
	});
}