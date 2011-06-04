//################################################################################################################################
//## REMEMBER TABS
//################################################################################################################################
function rememberTabs(event){
	var pageTarget=event.target+'';
	if (!pageTarget.match(/http/i)){pageTarget=event.target.parentNode+'';}
	if(pageTarget.match(/http/i)){
		if(pageTarget.match(/mod=(\w+)/i)){
			RTmod=pageTarget.match(/mod=(\w+)/i)[1];
			if(pageTarget.match(/submod=(\w+)/i)){var RTsubmod=pageTarget.match(/submod=(\w+)/i)[1];}
			else{var RTsubmod = 'noSubmod';}
			//&& RTmod!=GCAO_mod
			if(!pageTarget.match(/inv=\d+/i)){
				if(RTmod=='overview' || RTmod=='inventory' || RTmod=='packages' || RTmod=='guild_storage' || RTmod=='auction' || RTmod=='market' || RTmod=='guild_market' || RTmod=='guild_library'){
					if(Get_Cookie('PlayerInv')){
						if(event.target.href){
							event.target.href+='&inv='+Get_Cookie('PlayerInv');
						}else{
							event.target.parentNode.href+='&inv='+Get_Cookie('PlayerInv');
						}
					}
					if(RTmod=='inventory'){
						var sub=pageTarget.match(/sub=(\d+)/i)[1];
						if(Get_Cookie('Merchandsub'+sub)){
							event.target.href+='&subsub='+Get_Cookie('Merchandsub'+sub);
						}
					}
				}
			}else{
				Set_Cookie('PlayerInv',pageTarget.match(/inv=(\d+)/i)[1]);
				if(RTmod=='inventory'){
					if(pageTarget.match(/&subsub=(\d+)/i)[1]){
						var sub=pageTarget.match(/&sub=(\d+)/i)[1];
						Set_Cookie('Merchandsub'+sub,pageTarget.match(/&subsub=(\d+)/i)[1]);
					}
				}
			}
		}
	}
}