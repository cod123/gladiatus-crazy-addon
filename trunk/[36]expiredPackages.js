//################################################################################################################################
//## EXPIRED PACKAGES
//################################################################################################################################
function expiredPackages(diffHourMin){
	GM_xmlhttpRequest({
		method: "GET",
		url: GCAO_siteurl + 'mod=packages&sh='+GCAO_secureCode+'&page=9999',
		onload: function(response){
			var packets = response.responseText.split('<span style="float:left;margin-right:5px">');
			if(packets.length!=1){
				var lastPacket = packets[packets.length-1];
				var lastTime = lastPacket.split('<br />')[4];
				
				var day = lastTime.split(', ')[1].split('.')[0];
				var month = lastTime.split(', ')[1].split('.')[1];
				var hour = lastTime.split(' - ')[1].split(':')[0];
				var minute = lastTime.split(' - ')[1].split(':')[1];
				var seconde = lastTime.split(' - ')[1].split(':')[2];
				
				var d = new Date();
				var currenthay = d.getDate();
				var currentMonth = d.getMonth()+1; //+1 because getMonth gives [0-11], not [1-12] for month
				var currentHour = d.getHours()+1; // +1 because it's better to have the next hour... 
				var currentMinute = d.getMinutes();
				var currentSecond = d.getSeconds();
				
				// Ecart à déterminer : ~12h
				var diffHour;
				// In the same month
				if(month==currentMonth){
					// in the same day
					if(day==currenthay){
						diffHour = hour-currentHour;
					}else{
						diffHour= hour-currentHour+24*(day-currenthay);
					}
				}
				// Not in the same month
				else{
					// Number of days in the month
					if((currentMonth==1)||(currentMonth==3)||(currentMonth==5)||(currentMonth==7)||(currentMonth==8)||(currentMonth==10)||(currentMonth==12))
						var numberDays = 31;
					else if(currentMonth==2)
						var numberDays = 28;
					else
						var numberDays = 30;
					
					diffHour= hour-currentHour+24*(day+numberDays-currenthay);
				}
				
				if(diffHour<diffHourMin)
					document.getElementById('menue_packages').innerHTML += '<img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/exclamation.png" style="position:absolute;margin-left:5px;opacity: 0.90;" onmouseout="this.style.opacity=\'0.90\';" onmouseover="this.style.opacity=\'1\';" onClick="'+GCAO_siteurl + 'mod=packages&sh='+GCAO_secureCode+'&page=9999" title="'+L_PackagesWillExpire+' ! '+diffHour+' '+L_hours+'">';
				
			}
		}
	});
}