//################################################################################################################################
//## ITEMS THAT YOU CAN BUY / ΑΝΤΙΚΕΙΜΕΝΑ ΠΟΥ ΜΠΟΡΕΙΣ ΝΑ ΑΓΟΡΑΣΕΙΣ
//################################################################################################################################
function afford(){
	if(document.getElementById('shop')){
		var item=document.getElementById('shop').getElementsByTagName('div')[1].id.match(/.\d+/i);
		
		var gold=document.getElementById('sstat_gold_val').innerHTML.replace(/\./g,'').match(/\d+/i)*1;
		var rubi=document.getElementById('sstat_ruby_val').innerHTML.replace(/\./g,'').match(/\d+/i)*1;
		for (i = 0; i <=6; i++){
			for (j = 0; j <=8; j++){
				if(document.getElementById('tOoLtIp_'+item+'_'+i+'_'+j)){
					if(document.getElementById('tOoLtIp_'+item+'_'+i+'_'+j).innerHTML.replace(/\./gi,'').match(/(\d+) <img[^\/]+\/img\/res3/i)){
						document.getElementById(item+'_'+i+'_'+j).style.background='rgba(255, 0, 0, 0.2)';
						if(document.getElementById('tOoLtIp_'+item+'_'+i+'_'+j).innerHTML.replace(/\./gi,'').match(/(\d+) <img[^\/]+\/img\/res3/i)[1]*1>rubi*1){
							document.getElementById(item+'_'+i+'_'+j).style.opacity='0.25';
						}
					}
					else{
						document.getElementById(item+'_'+i+'_'+j).style.opacity='1.00';
					}
					
					if(document.getElementById('tOoLtIp_'+item+'_'+i+'_'+j).innerHTML.replace(/\./gi,'').match(/(\d+) <img[^\/]+\/img\/res2/i)){
						if(document.getElementById('tOoLtIp_'+item+'_'+i+'_'+j).innerHTML.replace(/\./gi,'').match(/(\d+) <img[^\/]+\/img\/res2/i)[1]*1>gold*1){
							document.getElementById(item+'_'+i+'_'+j).style.opacity='0.25';
						}
					}
					else{
						document.getElementById(item+'_'+i+'_'+j).style.opacity='1.00';
					}
				}
			}
		}
	}
}
function reAfford(){
	var oldSetToolTip = unsafeWindow.SetToolTip;
	unsafeWindow.SetToolTip = function (updateTooltip){
		if(updateTooltip){setTimeout(afford, 900);}
		return oldSetToolTip(updateTooltip);
	}
}