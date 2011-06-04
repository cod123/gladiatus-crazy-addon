// ==UserScript==
// @name           Gladiatus Crazy AddOn New Server
// @namespace      http://www.epiratiko.webs.com/ 
// @description    The craziest add-on for gladiatus ever!
// @include        *.gladiatus.fr*
// @exclude        *board.gladiatus.*
// ==/UserScript==
//Copyright (C) 2010 - 2011, Apo59m, DarkThanos and djor

//################################################################################################################################
//## GENERAL SCRIPT'S VALUES / ΓΕΝΙΚΕΣ ΜΕΤΑΒΛΗΤΕΣ ΤΟΥ SCRIPT
//################################################################################################################################
var version = "240";
if(document.location.href.match(/^(.*\?)mod=(\w+).*sh=([0-9a-fA-F]+)/)){
	var GCAO_result = document.location.href.match(/^(.*\?)mod=(\w+).*sh=([0-9a-fA-F]+)/);
	var GCAO_allresult = GCAO_result[0]; //ex.: http://s3.gladiatus.gr/game/index.php?mod=overview&sh=3311f55ccc62c53c42170cdf78b1cf59
	var GCAO_siteurl = GCAO_result[1]; //ex.: http://s3.gladiatus.gr/game/index.php?
	var GCAO_mod = GCAO_result[2];
	var GCAO_secureCode = GCAO_result[3];
	var UrlOverview = GCAO_siteurl + 'mod=overview&sh=' + GCAO_secureCode;
	var UrlUpdate = "http://epiratiko.webs.com/GCAO/UpdateGCAO.htm";
	if(document.location.href.match(/http\:\/\/s(\d+)/i)){var GCAO_server = document.location.href.match(/http\:\/\/s(\d+)/i)[1];}
	else{var GCAO_server = "1";}
}
if(document.location.href.match(/submod=(\w+)/)){var GCAO_submod = document.location.href.match(/submod=(\w+)/)[1];}
else{var GCAO_submod = 'noSubmod';}
var day=new Date();