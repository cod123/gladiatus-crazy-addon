//################################################################################################################################
//## DROPPED ITEMS
//################################################################################################################################
// Function which allow to search dropped objects in the reports list (expedition or donjon)
function searchObjects(){
	if(!document.getElementById('bx0')){
		var divs = document.evaluate(".//div[@class='report_statistic']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		var divsIMG = document.evaluate(".//img[substring(@src,5)='/img/interface/package.gif']",divs.snapshotItem(0),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		var divsTR = document.evaluate(".//tr",divs.snapshotItem(0),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);

		var array = new Array();

		//Allow to know in which row the package is (array[5]= 8 means the 5th object is at the 8th row)
		for(var i =0; i<divsTR.snapshotLength;i++)
			if(divsTR.snapshotItem(i).innerHTML.match('package.gif'))
				array[array.length] = i-1;

		for(var i =0; i<divsIMG.snapshotLength;i++){
			var divsTD = document.evaluate(".//td",divsIMG.snapshotItem(i).parentNode.parentNode,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
			var uurl = GCAO_siteurl + divsTD.snapshotItem(4).firstChild.getAttribute('href').substring(10); //Begin with "index.php?" and we don't want (already in GCAO_siteurl var)
			getObject(divsIMG,array,uurl,i);
		}
	}
}
// Get the html table of the object i in the reports list at the url uurl
function getObject(divsIMG,array,uurl,i){
	// alert(uurl+'   '+i);
	GM_xmlhttpRequest({
		method: "GET",
		url: uurl,
		onload: function(response){
			divsIMG.snapshotItem(i).removeAttribute('title');
			divsIMG.snapshotItem(i).setAttribute('onmouseover','document.getElementById(\'object'+i+'\').style.display=\'block\'');
			divsIMG.snapshotItem(i).setAttribute('onmouseout','document.getElementById(\'object'+i+'\').style.display=\'none\'');
			var warningTip = document.createElement('div');
			warningTip.setAttribute('id', 'object'+i);
			// HTML table of the object (with good ' and " ...) 
			var text = response.responseText.split('return escape(\'')[11].split('\')"><img')[0].replace(/\\'/g,'"');
			warningTip.setAttribute('style', 'opacity: 0.90; display: none; z-index: 502; position: absolute; top: '+(320+array[i]*22)+'px; left: 890px; background-color: black; color: rgb(192, 192, 192); font-weight: bold; text-align: left;');
			warningTip.innerHTML = text;
			document.getElementById('header_game').appendChild(warningTip);
		}
	});
}