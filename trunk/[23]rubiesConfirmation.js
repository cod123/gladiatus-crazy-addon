//################################################################################################################################
//## RUBIES CONFIRMATION BOXES
//################################################################################################################################

//For expedition
function expeditionConfirmRubies(){
	var expeditions = document.evaluate(".//input[@class='expedition_button']",document.getElementById('content'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	// If there is a timer 
	if(document.getElementById('ticker1'))
		for(var i = 0;i<expeditions.snapshotLength;i++)
			expeditions.snapshotItem(i).setAttribute('onclick','if(confirm("'+L_sure+'")) '+expeditions.snapshotItem(i).getAttribute('onclick'));
}

//For auction
function confirmRubies(){
	var buyouts = document.getElementsByName('buyout');
	for(var i = 0;i<buyouts.length;i++)
		buyouts[i].addEventListener('click', grabClick, true);
}

function grabClick(event){
	if(event.button == 0) {
		if(!confirm(L_sure)){
			event.stopPropagation();
			event.preventDefault();
		}
		return;
	}
}