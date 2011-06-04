//################################################################################################################################
//## PRICE RATIO
//################################################################################################################################
function priceRatio(){
	if(document.getElementById('market_item_table')){
		var style = document.createElement('style');
		style.innerHTML='input.button2 {background-image: url("http://i617.photobucket.com/albums/tt260/goldisever/GCAO/button3.jpg");border: 0 none;color: #453011;font-size: 11px;font-weight: bold;height: 26px;width: 79px;}';
		document.getElementById('content').appendChild(style);
		
		if(document.getElementById('market_item_table').getElementsByTagName('th')[0].innerHTML.length>9){
			document.getElementById('market_item_table').getElementsByTagName('th')[0].innerHTML = 'Items';
		}
		var items = document.getElementById('market_item_table').getElementsByTagName('tr').length-1;
		
		document.getElementById('market_item_table').parentNode.parentNode.style.margin=' 0px -30px 0px -10px';
		document.getElementById('market_item_table').parentNode.parentNode.parentNode.childNodes[3].style.margin=' 0px -30px 0px -10px';
		
		var ratioHead=document.createElement('th');
		ratioHead.innerHTML='<u title="'+L_ratioTitle+'">Ratio</u>';
		ratioHead.setAttribute('style','text-align:right;color:#612D04;');
		document.getElementById('market_item_table').getElementsByTagName('tr')[0].insertBefore(ratioHead , document.getElementById('market_item_table').getElementsByTagName('tr')[0].getElementsByTagName('th')[5]);
		
		var ratioTd;var sellPrice;var value;var price;var data;var ratio;var color;var life;var foodratio;var kathetos;
		
		var x=0;
		while(!document.body.getElementsByTagName('script')[x].innerHTML.match('AddCharDiv') && (x<100)){x++;}
		var dataScript = document.getElementsByTagName('script')[x].innerHTML;
			
		for(i=1;i<=items;i++){
			ratioTd=document.createElement('td');
			ratioTd.setAttribute('style','text-align:right;padding-right:5px;padding-left:0px;');
			sellPrice=document.getElementById('market_item_table').getElementsByTagName('tr')[i].getElementsByTagName('td')[2].innerHTML.replace(/\./g,'').match(/(\d+)/i)[1];
			data=dataScript.match(/AddCharDiv..buy.[^"]+.([^"]+)./i)[1].replace(/\./g,'');
			foodratio='';
			kathetos='';
			if(data.match(/\d+ [^<]+<\/td>[^\+]+\+\d+ /i)){
				life=data.match(/(\d+) [^<]+<\/td>[^\+]+\+\d+ /i)[1]*1;
				intel=data.match(/\d+ [^<]+<\/td>[^\+]+\+(\d+) /i)[1]*1;
				foodratio=life/sellPrice;
				foodratio=roundNumber(foodratio);
				foodratio='<b color="black">'+foodratio+'</b>';
				kathetos=' | ';
			}
			price=data.match(/\d+ <img/g)[0].match(/\d+/i);
			value=data.match(/\d+ <img/g)[1].match(/\d+/i);
			dataScript=dataScript.replace("AddCharDiv('buy",'[DONE]');
			ratio=sellPrice/((parseInt(price)+parseInt(value))/2);
			ratio=roundNumber(ratio);
			if(ratio<0.3){color='green';}
			else if(ratio<5.99){color='gray';}
			else if(ratio<9.99){color='#FF9000';}
			else{color='red';}
			if(GM_getValue('rr', false) == false){if(kathetos==''){ratio='<center>-</center>';color='black';}else{ratio='';kathetos='';}}
			ratioTd.innerHTML=foodratio+kathetos+'<font color="'+color+'"><b>'+ratio+'</b></font>';
			document.getElementById('market_item_table').getElementsByTagName('tr')[i].insertBefore(ratioTd , document.getElementById('market_item_table').getElementsByTagName('tr')[i].getElementsByTagName('td')[5]);
		}
	}
}