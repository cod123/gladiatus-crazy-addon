﻿//################################################################################################################################
//## AUCTION STATUS / ΚΑΤΑΣΤΑΣΗ ΔΗΜΟΠΡΑΤΗΡΙΟΥ
//################################################################################################################################
function AuctionStatus(){
	var loadingImage="data:image/gif;base64,R0lGODlhKQAGAPEBAAAAAP///////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAkPAAIAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAKQAGAAACK4Qvh2rJriCLINgA0sX65up11vRtZQiOIpdi03qqbcya7wzn+Hw/PeVjFAAAIfkECQ8AAwAsAAAAACkABgAAAiyEP4dqya6gCjQA2UC1aV9dfR5IfQ/JoWLYhSq2lq38qvXpzWlun37EMAEZBQAh+QQJDwADACwAAAAAKQAGAAACK4Q/h2rJrqAKNIBUrWwg3159HkiJ4WaW2Elabaox8LyWbx0/9z7qfiRDoQoAIfkECQ8AAwAsAAAAACkABgAAAi2EP4dqya6gCjSAVC2ul/X8cQC4UaEpNSNXWiv6anH3zK1B2nqdg15Ki/yGjAIAIfkECQ8AAwAsAAAAACkABgAAAiyEP4dqya6gCjSAVC2uF+T+eJxIdd9Wohpjjie5vm/4wW1qq2Bks1LjC4YYBQAh+QQJDwADACwAAAAAKQAGAAACKoQ/h2rJrqAKNIBULa4X5P5JR+hxGwWaJSoa5KvCLOPG9ixrNN32/M8oAAAh+QQJDwADACwAAAAAKQAGAAACLIQ/h2rJrqAKNIBULa4X5P54nEh131aiGmOOJ7m+b/jBbWqrYGSzUuMLhhgFACH5BAkPAAMALAAAAAApAAYAAAIthD+HasmuoAo0gFQtrpf1/HEAuFGhKTUjV1or+mpx98ytQdp6nYNeSov8howCACH5BAkPAAMALAAAAAApAAYAAAIrhD+HasmuoAo0gFStbCDfXn0eSInhZpbYSVptqjHwvJZvHT/3Pup+JEOhCgAh+QQJDwADACwAAAAAKQAGAAACLIQ/h2rJrqAKNADZQLVpX119Hkh9D8mhYtiFKraWrfyq9enNaW6ffsQwARkFADs%3D";
	var img_left = 'data:image/png;base64,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%3D';
	var img_center = 'data:image/jpeg;base64,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%3D';
	var img_right = 'data:image/png;base64,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';
	var AuctionStatusDiv = document.createElement('div');
	AuctionStatusDiv.setAttribute('id', 'AuctionStatusDiv');
	AuctionStatusDiv.setAttribute('style', 'position:absolute;z-index:10;top:114px;right:110px;');
	AuctionStatusDiv.innerHTML="<table cellspacing=\"0\" cellpadding=\"0\" style=\"border-spacing:0px;border:0px;\"><tr><td style=\"width:20px;height:30px;background: transparent url('"+img_left+"') no-repeat;\"></td><td style=\"height:30px;background: transparent url('"+img_center+"') repeat-x;\"><span id=\"AuctionStatus\" style=\"line-height:13px;\"><table style='font-size:11px;line-height:9px;'><tr><td id='A1'><img style=\"margin-top:6px;margin-left:2px;opacity:0.5;\" src=\""+loadingImage+"\"/></td></tr><tr><td id='A2'></td></tr></table></td><td style=\"width:20px;height:30px;background: transparent url('"+img_right+"') no-repeat;\"></td></tr></table>";
	document.getElementById('header_game').appendChild(AuctionStatusDiv);
	GM_xmlhttpRequest({
		method: "GET",
		url: GCAO_siteurl + 'mod=auction&sh=' + GCAO_secureCode + '&fl=160',
		onload: function(response){
			if(!response.responseText.match('bx0')){
				var AuctionTranslation = response.responseText.match('class="submenuitem_aktive" target="_self">([^<]+)</a>')[1];
				var Status = response.responseText.match('<span class="description_span_right"><b>(\.+)</b></span>')[1];
				document.getElementById('A1').innerHTML = AuctionTranslation + " : <b>" + Status + "</b>";
			}
		}
	});
	if(GM_getValue('sa', true) == true){
		GM_xmlhttpRequest({
			method: "GET",
			url: GCAO_siteurl + 'mod=auction&ttype=3&sh=' + GCAO_secureCode + '&fl=160',
			onload: function(response){
				if(!response.responseText.match('bx0')){
					var AuctionTranslation = response.responseText.match('class="pngfix  current" style="cursor:pointer;">([^<]+)</a></li></ul>')[1];
					var Status = response.responseText.match('<span class="description_span_right"><b>(\.+)</b></span>')[1];
					document.getElementById('A2').innerHTML=AuctionTranslation+" : <b>"+Status+"</b>";
				}
			}
		});
	}
}