//################################################################################################################################
//## CAN I EAT THIS?
//################################################################################################################################
function canIeatThis(){
	if(document.getElementById('inv')){
		var healpoints=document.getElementById('char_leben_tt').getAttribute('onmouseover').match(/(\d+) \/ (\d+)/i);
		var lostPoints=healpoints[2]*1-healpoints[1]*1;
		if(lostPoints>0){
			document.getElementById('char_leben').setAttribute('style','font-size:0.9em;margin-top:3px;');
			document.getElementById('char_leben_tt').innerHTML+='<font style="font-size:0.8em;text-align:right;position:absolute;margin-top:-20px;margin-right:0px;width:169px;">(<font color="red">-'+lostPoints+'</font>)</font>';
		}
		
		var x=0;
		while(!document.body.getElementsByTagName('script')[x].innerHTML.match('AddCharDiv') && (x<100)){x++;}
		
		var divs = document.evaluate(".//img",document.getElementById('inv'),null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
		for(var i = 0; i< divs.snapshotLength;i++){
			var type = divs.snapshotItem(i).getAttribute('src').split('_')[0];
			type = type[type.length-1];
			if(type==7){
				var AddCharDiv =document.body.getElementsByTagName('script')[x].innerHTML.split('AddCharDiv("'+divs.snapshotItem(i).parentNode.id)[1].split('AddCharDiv("')[0];
				if(AddCharDiv.split("<td ")[2].indexOf('(')!=-1){var lifeCure = AddCharDiv.split("<td ")[3].split(':')[4].split('<')[0].replace(/[^0-9]/g,'');}
				else{var lifeCure = AddCharDiv.split("<td ")[2].split(':')[4].split('<')[0].replace(/[^0-9]/g,'');}
				
				var foo = document.getElementById('char_leben_tt').getAttribute('onmouseover').split('</td>')[1].split('>')[1];
				var lifeToCure = parseInt(foo.split(' / ')[1]) - parseInt(foo.split(' / ')[0]);
				if(lifeToCure<lifeCure){divs.snapshotItem(i).style.backgroundColor='rgba(255, 0, 0, 0.2)';}
			}
		}
	}
}