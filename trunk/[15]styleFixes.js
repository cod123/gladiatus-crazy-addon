//################################################################################################################################
//## STYLE FIXES / ΔΙΩΡΘΩΣΕΙΣ ΤΟΥ STYLE
//################################################################################################################################
function styleFixes(){
	var StyleFixesElement = document.createElement('div');
	StyleFixesElement.innerHTML="<style>.paging_button{height:26px;} ul#mainnav li a {line-height: 10px;padding-top:14px;} .selection {width:130px;}</style>";
	document.getElementById('header_game').appendChild(StyleFixesElement);
	
	if(document.getElementById('ticker1')){//Buttom while traveling fix
		document.getElementsByTagName('input')[0].setAttribute('class','button1');
	}
	else if(GCAO_mod=='guild_library' && GCAO_submod=='noSubmod'){
		if(document.getElementsByTagName('b')[3].innerHTML=='Μπλοκαρισμένο(ς)'){
			document.getElementsByTagName('b')[3].innerHTML = 'Μπλοκ.';
		}
	}
	else if(GCAO_mod=='guild_main' && GCAO_submod=='noSubmod'){
		if(document.getElementById('mainbox').getElementsByTagName('td')[1]){
			document.getElementById('mainbox').setAttribute('style','max-width: 600px; overflow: hidden; width: 530px;margin-left:-16px;');
		}
	}
	
}