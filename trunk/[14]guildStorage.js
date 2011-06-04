//################################################################################################################################
//## GUILD STORAGE INFO / ΠΛΗΡΟΦΟΡΙΕΣ ΣΤΗΝ ΑΠΟΘΗΚΗ ΤΑΓΜΑΤΟΣ
//################################################################################################################################
function storageInfo(){
	if(document.getElementById('shop')){
		var storage = document.getElementById('shop').parentNode.parentNode;
		var storageValue = document.createElement('div');
		storageValue.setAttribute('class','contentItem');
		storageValue.setAttribute('style','width:212px;margin-top:8px;');
		storageValue.innerHTML = '<h3 style="width:188px;height:20px;">'+L_StorageInfo+'</h3><div class="contentItem_content" style="width:180px;"><p> '+L_itemNum+' : <b id="itemNumber"></b><br/>'+L_TotalValue+' : <b id="storageValue"></b> <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/res2.gif"/></p></div>';
		storage.appendChild(storageValue);
		getStorageInfo();
	}
}

function getStorageInfo(){
	if(document.getElementById('shop')){
		var value = 0;
		var number = 0;
		var totalNumber = 0;
		var c=2;
		var stop=false;
		while(stop==false && c<10){
			if(document.getElementById('p35'+c+'_1_1')){
				stop = true;
				var x = c;
			}
			c++;
		}
		for (i = 0; i <=6; i++){
			for (j = 0; j <=8; j++){
				if(document.getElementById('tOoLtIp_p35'+x+'_'+i+'_'+j) && document.getElementById('p35'+x+'_'+i+'_'+j)){
					totalNumber++;
					if(document.getElementById('p35'+x+'_'+i+'_'+j).getAttribute('style').match(/visible/i)){
						value += document.getElementById('tOoLtIp_p35'+x+'_'+i+'_'+j).innerHTML.replace(/\./gi,'').match(/(\d+) <img[^\/]+\/img\/res2/i)[1]*1;
						number++;
					}
				}
			}
		}
		document.getElementById('itemNumber').innerHTML = number+' / '+totalNumber;
		document.getElementById('storageValue').innerHTML = dottedNumber(value);
	}
}

function resetStorageInfo(){
	var oldSetToolTip = unsafeWindow.SetToolTip;
	unsafeWindow.SetToolTip = function (updateTooltip){
		if(updateTooltip){setTimeout(getStorageInfo, 900);}
		return oldSetToolTip(updateTooltip);
	}
}