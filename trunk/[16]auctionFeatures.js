 //################################################################################################################################
//## AUCTION / ΔΗΜΟΠΡΑΤΗΡΙΟ
//################################################################################################################################

//Number of items and bids / Αριθμός αντικειμένων και προσφορών
function auctionnumbers() {
	if(document.getElementById('auction_table')){
		var rows = document.forms.length - 1;
		var links = document.getElementById('auction_table').getElementsByTagName('a').length - rows;
	
		var numbersDiv = document.createElement('div');
		numbersDiv.setAttribute('id', 'mystylecolor');
		numbersDiv.setAttribute('class', 'title2_box');
		numbersDiv.setAttribute('style', 'margin-left:-17px;margin-right:-17px;margin-top:20px;');
		numbersDiv.innerHTML = '<div class=\"title_inner\"><center>'+L_itemNum+': ' + rows + '<br>'+L_bidNum+': ' + links + '</center></div>';
		document.getElementById('auction_filter').appendChild(numbersDiv);
	}
}

//Background color / Χρώμα παρασκηνίου
function auctionbgcolor() {
	var rows = document.forms.length - 1;
	
	if(document.getElementById('auction_table')){
		var colorcss = '';
		if (rows<=180){
			var x=0;
			while(!document.body.getElementsByTagName('script')[x].innerHTML.match('AddCharDiv') && (x<100)){x++;}
			var contentHTML = document.getElementsByTagName('script')[x].innerHTML;
			
			var itemboxa = contentHTML.match(/"auction_\d+"/gi);
			var srccol = /\d.........................................................................................................................................................................................................Tahoma;\\'><tr><td style\=\\'color:(....)/gi;
			var colorbox = contentHTML.match(srccol);
			var itemcode,color,RGBcolor;
			
			for (i = 0; i <rows; i++){
				itemcode = itemboxa[i].match(/auction_\d+/gi);
				color = colorbox[i].match(/color:..../gi);
				if (color=='color:lime'){RGBcolor = '0, 255, 0, 0.1'}
				else if (color=='color:#515'){RGBcolor = '0, 70, 255, 0.2'}
				else if (color=='color:#E30'){RGBcolor = '227, 3, 224, 0.2'}
				else if (color=='color:#FF6'){RGBcolor = '255, 106, 0, 0.2'}
				else if (color=='color:whit'){RGBcolor = '255, 255, 255, 0.2'}
				else{RGBcolor = '90, 156, 255, 0.2'}
		
				colorcss = colorcss + '#' + itemcode + '{background: rgba(' + RGBcolor + ');}';
			}
		var colorStyleDiv = document.createElement('div');
		colorStyleDiv.setAttribute('id', 'mystylecolor');
		colorStyleDiv.innerHTML = '<style type="text/css">' + colorcss + '</style>';
		document.getElementById('auction_filter').appendChild(colorStyleDiv);
		}
	}
}

//More levels at search / Αναλυτικότερα επίπεδα στην αναζήτηση
function auctionitemlevel() {
		var minlevel = document.getElementById('auction_filter').innerHTML.match(/option value\="(\d+)/i)[1];
		
		var lvl = document.getElementById('icon_level').parentNode.getElementsByTagName('div')[1].innerHTML*1;
		var addedLevel = lvl * 0.25;
		var plusToInteger = addedLevel;
		var addFix = 0;
		while (plusToInteger > 1){plusToInteger = plusToInteger-1;}
		if (plusToInteger > 0.24){addFix = 1;}
		addedLevel = addedLevel-plusToInteger;
		if (lvl>36){var maxlevel = lvl+14;}
		else{var maxlevel = lvl+addedLevel+5+addFix;}
		
		var is = maxlevel-minlevel+1;
		var option = "";
		for (i = 0; i <is; i=i+2){
			var fnumber = -(is-maxlevel-i-1);
			if(document.getElementsByName('fl')[1]){
				var selectedlevel = document.getElementsByName('fl')[1].value;
			}
			if(selectedlevel == null){selectedlevel = minlevel}
			if(fnumber==selectedlevel){var OptSelect = 'selected="selected"'}
			else{var OptSelect = ""}
			option = option + '<option value="' + fnumber + '" ' + OptSelect + '>' + fnumber + '+</option>' ;
		}
		document.getElementsByName('fl')[0].innerHTML = option ;
}

//Autofill inputs / Μικρότερη προσφορά μέσα στο input
function autoFillAuctionFields(){
	var divs = document.evaluate(".//div[@class='auction_bid_div']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	if(divs.snapshotLength) {
		for(var i = 0; i < divs.snapshotLength; i++) {
			if(!divs.snapshotItem(i).innerHTML.match(/: ([0-9]*\.*[0-9]*) <"/i)){
				var price = divs.snapshotItem(i).innerHTML.match(new RegExp(": ([0-9]*\.*[0-9]*) <"));
				if(!price) continue;
				price = price[1].replace(/\./g, "");
				var input = document.evaluate(".//input[@name='bid_amount']", divs.snapshotItem(i), null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
				if(input.snapshotLength){input.snapshotItem(0).value = price;}
			}
		}
	}
}

//Items where you can hide gold
function howToHideGoldInAuctions(){
	var rows = document.forms.length - 1;
	var divs = document.evaluate(".//div[@class='auction_bid_div']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	
	if(document.getElementById('auction_table')){
		var colorcss = '';
		if (rows<=180){
			if(document.getElementsByTagName('script')[10].innerHTML.match('auction_')){var contentHTML = document.getElementsByTagName('script')[10].innerHTML;}
			else if(document.getElementsByTagName('script')[11].innerHTML.match('auction_')){var contentHTML = document.getElementsByTagName('script')[11].innerHTML;}
			else if(document.getElementsByTagName('script')[12].innerHTML.match('auction_')){var contentHTML = document.getElementsByTagName('script')[12].innerHTML;}
			else if(document.getElementsByTagName('script')[13].innerHTML.match('auction_')){var contentHTML = document.getElementsByTagName('script')[13].innerHTML;}
			
			var itemboxa = contentHTML.match(/"auction_\d+"/gi);
			var srccol = /\d.........................................................................................................................................................................................................Tahoma;\\'><tr><td style\=\\'color:(....)/gi;
			var colorbox = contentHTML.match(srccol);
			var itemcode,color;
			
			for (var i = 0; i <rows; i++){
				itemcode = itemboxa[i].match(/auction_\d+/gi);
				color = colorbox[i].match(/color:..../gi);
				var rubis = divs.snapshotItem(i).innerHTML.split('&nbsp;')[1].split('<a')[0];
				
				//No bid
				if(divs.snapshotItem(i).getElementsByTagName('a').length==1){
					var rubis = divs.snapshotItem(i).innerHTML.split('&nbsp;')[1].split('<a')[0];
					if (color=='color:#515'){var rubisMin = 46;}
					else if (color=='color:lime'){var rubisMin = 40;}
					else if (color=='color:#E30'){var rubisMin = 52;}//purple
					else if (color=='color:whit'){var rubisMin = 40;}

					if(parseInt(rubis)>=rubisMin)
						divs.snapshotItem(i).getElementsByTagName('input')[0].style.backgroundColor="#FFCC66";
				}
				// alert(color+'   '+rubisMin);
			}
		}
	}
}

//################################################################################################################################
//## AUCTION EXTEND ITEM'S TABLE
//################################################################################################################################
function auctionExtendTable(){
	var itemNum=document.forms.length - 1;
	if(document.getElementById('auction_table') && itemNum>5){
		if(GM_getValue('an', true) == true){var top=27;}
		else{var top=62;}
		document.getElementById('auction_table').setAttribute('style',"margin: "+top+"px -1px 0px -280px;padding-left:279px;padding-top:10px;background:url('http://i617.photobucket.com/albums/tt260/goldisever/GCAO/aemidle.png') repeat-y left top;z-index:35;");
		document.getElementById('auction_table').getElementsByTagName('table')[0].style.margin=' 0px 0px 0px -269px';
		
		var bgDown=document.createElement('img');
		bgDown.src='http://i617.photobucket.com/albums/tt260/goldisever/GCAO/aedown.png';
		bgDown.setAttribute('style',"position:absolute;margin-left:-279px;z-index:50;");
		document.getElementById('auction_table').appendChild(bgDown);
		
		var bgTop=document.createElement('img');
		bgTop.src='http://i617.photobucket.com/albums/tt260/goldisever/GCAO/aetop.png';
		bgTop.setAttribute('style',"position:absolute;margin-left:-279px;margin-top:-20px;z-index:35;");
		document.getElementById('auction_table').insertBefore(bgTop,document.getElementById('auction_table').getElementsByTagName('table')[0]);
		
		for(i=5;i<=itemNum;i=i+6){
			document.getElementById('auction_table').getElementsByTagName('td')[i-1].id='td1';
			document.getElementById('auction_table').getElementsByTagName('td')[i].id='td2';
		}
		
		var style=document.createElement('style');
		style.innerHTML='.auction_bid_div {height:115px;} #td1{position:absolute;width:265px;margin-top:-252px;margin-left:538px;}#td2{position:absolute;width:265px;margin-top:-126px;margin-left:538px;}';
		document.getElementById('content').appendChild(style);
	}
}