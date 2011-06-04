//################################################################################################################################
// Training Camp !
//################################################################################################################################

function training(){
	var mainnav = document.getElementById('mainnav');
	var newTab = document.createElement('li');
	newTab.className='pngfix';
	newTab.innerHTML = '<a style="cursor:pointer;" class="pngfix">'+L_Simulator+'</a>';
	// On ajoute un evenement on click. 
	mainnav.appendChild(newTab);
	newTab.addEventListener('click', function(){seeSimulator();}, true); 
	//alert('test');
}

function seeSimulator(){
	if(GCAO_lang=='fr'){
		var text='When you enter in the room, you see djor, one of the ancient French programmers, working over a new type of virtual fighting and training.<br>Near to him, there is a big super computer ready to create a hologram of any monster or any other player you want, in order to simulate a fight with you and display the results... <br><br>Are you ready to fight?';
		var Skill='Adresse';
		var Agility='Agilité';
		var Charisma='Charisme';
		var Armour='Armure';
		var Damage='Dégâts';
		var ChanceForCriticalDamage='Chance d`infliger un coup critique';
		var ChanceToBlockAHit='Chance de parer une attaque';
		var ChanceForCriticalDamage='Chance d`éviter un coup critique';
		
		var Italy='Italie';
		var Italy_1='Forêt noire';var Italy_1_1='Rat';var Italy_1_2='Lynx';var Italy_1_3='Loup';var Italy_1_4='Ours';
		var Italy_2='Port de pirates';var Italy_2_1='Esclave en fuite';var Italy_2_2='Soldat corrompu';var Italy_2_3='Assassin';var Italy_2_4='Capitaine ';
		var Italy_3='Monts Brumeux';var Italy_3_1='Recrue errante';var Italy_3_2='Harpie';var Italy_3_3='Cerbère';var Italy_3_4='Méduse';
		var Italy_4='L’antre des loups';var Italy_4_1='Sanglier';var Italy_4_2='Meute de loups';var Italy_4_3='Le loup Alpha';var Italy_4_4='Loup-garou';
		var Italy_5='Ancien temple';var Italy_5_1='Garde sectaire';var Italy_5_2='Rat-garou';var Italy_5_3='Minautore';var Italy_5_4='Seigneur minautore';
		var Italy_6='Village barbare';var Italy_6_1='Barbare';var Italy_6_2='Guerrier barbare';var Italy_6_3='Berserk';var Italy_6_4='Cador barbare';
		var Italy_7='Camp de bandits';var Italy_7_1='Soldat renégat';var Italy_7_2='Mercenaire renégat';var Italy_7_3='Assassin perfide';var Italy_7_4='Chef de bandits';

		var Germany='Germanie';
		var Germany_1='Temple souterrain';var Germany_1_1='Légionnaire';var Germany_1_2='Myrmidon';var Germany_1_3='Centurion';var Germany_1_4='Sansâme';
		var Germany_2='La forêt verte';var Germany_2_1='Sanglier géant';var Germany_2_2='Créature des marais';var Germany_2_3='Esprit des marais';var Germany_2_4='Ours-garou';
		var Germany_3='Village Maudit';var Germany_3_1='Hun';var Germany_3_2='Ancien';var Germany_3_3='Affamé';var Germany_3_4='L&#8217; Abomination';
		var Germany_4='Colline des morts';var Germany_4_1='Guerrier squelette';var Germany_4_2='Berserk squelette';var Germany_4_3='Liche';var Germany_4_4='Prince nécromant ';
		var Germany_5='Village vandale';var Germany_5_1='Guerrier vandale';var Germany_5_2='Jarl';var Germany_5_3='Batailleur ténébreux';var Germany_5_4='Chevalier de la mort';
		var Germany_6='Mine';var Germany_6_1='Garde';var Germany_6_2='Draugr';var Germany_6_3='Golem de pierre';var Germany_6_4='Guivre vorace';
		var Germany_7='Camp teutons';var Germany_7_1='Barbare';var Germany_7_2='Héros teuton';var Germany_7_3='Teuton';var Germany_7_4='Seidr';
		var Germany_8='Montagne Koman';var Germany_8_1='Infernal springbok';var Germany_8_2='Dent de Sabre';var Germany_8_3='Dragonnet';var Germany_8_4='Dragon';

		var Africa='Afrique';
		var Africa_1='Temple Vaudou';var Africa_1_1='Cobra';var Africa_1_2='Scorpion géant';var Africa_1_3='Momie réveillée';var Africa_1_4='Prêtre Seth';
		var Africa_2='Pont';var Africa_2_1='Percepteur';var Africa_2_2='Anthropophage';var Africa_2_3='Guerrier tribal ';var Africa_2_4='Chaman ostéomancien';
		var Africa_3='Caverne sanglante';var Africa_3_1='Loup sanguinaire';var Africa_3_2='Scarabée géant';var Africa_3_3='Danseur de feu';var Africa_3_4='Démon de feu';
		var Africa_4='Port perdu';var Africa_4_1='Crocodile';var Africa_4_2='Porteur mort-vivant';var Africa_4_3='Serpent aquatique géant';var Africa_4_4='Mokélé-Mbembé';
		var Africa_5='Tribu Umpokta';var Africa_5_1='Guerrier tribal';var Africa_5_2='Sorcier tribal';var Africa_5_3='Guerrier des esprits';var Africa_5_4='Grand prêtre Seth';
		var Africa_6='Caravane';var Africa_6_1='L&#8217; Espion';var Africa_6_2='Garde de caravane';var Africa_6_3='Garde d&#8217; élite ';var Africa_6_4='Marchand d&#8217; esclave';
		var Africa_7='Oasis Mesoai';var Africa_7_1='Éléphant';var Africa_7_2='Guépard';var Africa_7_3='Lion démoniaque';var Africa_7_4='Éléphant démoniaque ';
		var Africa_8='Falaise des sacrifices';var Africa_8_1='Antilope maudite';var Africa_8_2='Araignée géante';var Africa_8_3='Chaman';var Africa_8_4='Grand Chaman';
	}
	else if(GCAO_lang=='gr'){
		var text='Μόλις μπεις στο δωμάτιο, βλέπεις τον djor, έναν από τους αρχαίους Γάλλους προγραμματιστές, που δουλεύει πάνω σε ένα νέο είδος εικονικών μαχών και εκπαιδεύσεων.<br>Κοντά του βρίσκεται ένας super υπολογιστής έτοιμος να δημιουργήσει ολόγράμμα οποιουδείποτε τέρατος ή μονομάχου  εσύ θές, ετσι ώστε να προσωμοιώσει μια μάχη με εσένα και να προβάλει τα αποτελέσματα... <br><br>Είσαι έτοιμος για μάχη;';
		var Skill='Ικανότητα';
		var Agility='Επιδεξιότητα';
		var Charisma='Χάρισμα';
		var Armour='Πανοπλία';
		var Damage='Ζημιά';
		var ChanceForCriticalDamage='Πιθανότητα κρίσιμης ζημιάς';
		var ChanceToBlockAHit='Πιθανότητα να μπλοκάρεις το χτύπημα';
		var ChanceForCriticalDamage='Πιθανότητα αποφυγής κρίσιμων χτυπημάτων';
		
		var Italy='Ιταλία';
		var Italy_1='Σκοτεινό Δάσος';var Italy_1_1='Αρουραίος';var Italy_1_2='Λύγκας';var Italy_1_3='Λύκος';var Italy_1_4='Αρκούδα';
		var Italy_2='Πειρατικό λιμάνι';var Italy_2_1='Φυγάς σκλάβος';var Italy_2_2='Διεφθαρμένος στ...';var Italy_2_3='Δολοφόνος';var Italy_2_4='Αρχηγός';
		var Italy_3='Ομιχλώδη βουνά';var Italy_3_1='Λιποτάκτης';var Italy_3_2='Άρπυια';var Italy_3_3='Κέρβερος';var Italy_3_4='Μέδουσα';
		var Italy_4='Λυκοφωλιά';var Italy_4_1='Αγριόχοιρος';var Italy_4_2='Αγέλη λύκων';var Italy_4_3='Άλφα λύκος';var Italy_4_4='Λυκάνθρωπος';
		var Italy_5='Αρχαίος Ναός';var Italy_5_1='Φρουρός λάτρη';var Italy_5_2='Αρουράνθρωπος';var Italy_5_3='Μινώταυρος';var Italy_5_4='Αρχιμινώταυρος';
		var Italy_6='Βαρβαρικό Χωριό';var Italy_6_1='Βάρβαρος';var Italy_6_2='Πολεμιστής Βαρβ...';var Italy_6_3='Μαινόμενος';var Italy_6_4='Αρχηγός Βαρβάρω...';
		var Italy_7='Κρυψώνα ληστών';var Italy_7_1='Αποστάτης';var Italy_7_2='Αποστάτης μισθο...';var Italy_7_3='Φονιάς';var Italy_7_4='Αρχιληστής';
		var Germany='Γερμανία';
		var Germany_1='Ναός της Σπηλιάς';var Germany_1_1='Λεγεωνάριος';var Germany_1_2='Μυρμιδόνας';var Germany_1_3='Εκατόνταρχος';var Germany_1_4='Άψυχος';
		var Germany_2='Το πράσινο δάσος';var Germany_2_1='Γιγάντιος αγριό...';var Germany_2_2='Τέρας των βάλτω...';var Germany_2_3='Πνεύμα των βάλτ...';var Germany_2_4='Αρκουδάνθρωπος';
		var Germany_3='Καταραμένο Χωριό';var Germany_3_1='Ούννος';var Germany_3_2='Υπέργηρος';var Germany_3_3='Απέθαντος';var Germany_3_4='Στυγερότητα';
		var Germany_4='Λόφος του Θανάτου';var Germany_4_1='Σκελετός - πολε...';var Germany_4_2='Μαινόμενος σκελ...';var Germany_4_3='Βρικόλακας ';var Germany_4_4='Ηγεμόνας νεκρομ...';
		var Germany_5='Χωριό βανδάλων';var Germany_5_1='Πολεμιστής Βανδ...';var Germany_5_2='Κόμης';var Germany_5_3='Σκοτεινός υπέρμ...';var Germany_5_4='Ιππότης Θανάτου';
		var Germany_6='Ορυχείο';var Germany_6_1='Φύλακας';var Germany_6_2='Draug';var Germany_6_3='Πέτρινο γκόλεμ';var Germany_6_4='Νυχοσκούληκο';
		var Germany_7='Στρατόπεδο Τευτόνων';var Germany_7_1='Άγριος';var Germany_7_2='Τεύτονας ήρωας';var Germany_7_3='Αρχηγός Τευτόνω...';var Germany_7_4='Seidr';
		var Germany_8='Βουνό Koman';var Germany_8_1='Αντιλόπη Κολάσε...';var Germany_8_2='Τίγρη με μυτερή...';var Germany_8_3='Μωρό Δράκος';var Germany_8_4='Δράκος';
		var Africa='Αφρική';
		var Africa_1='Ναός Βουντού';var Africa_1_1='Κόμπρα';var Africa_1_2='Γιγάντιος Σκορπ...';var Africa_1_3='Αναστημένη μούμ...';var Africa_1_4='Ιερέας Seth';
		var Africa_2='Γέφυρα';var Africa_2_1='Συλλέκτης φόρων';var Africa_2_2='Ανθρωποφάγος';var Africa_2_3='Πολεμιστής φυλή...';var Africa_2_4='Σαμάνος κοκάλων';
		var Africa_3='Σπηλιά αίματος';var Africa_3_1='Αιμόλυκος';var Africa_3_2='Γιγάντιο Σκαθάρ...';var Africa_3_3='Χορευτής φωτιάς';var Africa_3_4='Δαίμονας φωτιάς';
		var Africa_4='Χαμένο λιμάνι';var Africa_4_1='Κροκόδειλος';var Africa_4_2='Απέθαντος κομισ...';var Africa_4_3='Γιγάντια ύδρα';var Africa_4_4='Σαυρόποδο';
		var Africa_5='Φυλή Umpokta';var Africa_5_1='Πολεμιστής φυλή... ';var Africa_5_2='Μάγος φυλής';var Africa_5_3='Πολεμιστής πνεύ...';var Africa_5_4='Αρχιερέας Seth';
		var Africa_6='Καραβάνι';var Africa_6_1='Κατάσκοπος';var Africa_6_2='Φύλακας καραβαν...';var Africa_6_3='Επίλεκτος φύλακ... ';var Africa_6_4='Δουλέμπορος';
		var Africa_7='Όαση Mesoai';var Africa_7_1='Ελέφαντας';var Africa_7_2='Τσιτάχ';var Africa_7_3='Δαιμονικό λιοντάρι';var Africa_7_4='Δαιμονικός ελέφ...';
		var Africa_8='Άλτης λόφων';var Africa_8_1='Καταραμένη αντι...';var Africa_8_2='Γιγάντια αράχνη';var Africa_8_3='Σαμάνος';var Africa_8_4='Αρχισαμάνος';
	}
	else if(GCAO_lang=='de'){
		var text='Als Du den Raum betrittst, erblickst Du djor, einen der uralten französischen Programmierer, der an einer neuen Art virtueller Kämpfe und Trainings arbeitet.<br>In seiner unmittelbaren Nähe steht ein Supercomputer, der auf Wunsch Hologramme eines jeden Monsters oder anderen Spielers darzustellen vermag, um einen Kampf mit Dir zu simulieren und die Ergebnisse anzuzeigen...<br><br>Bist Du bereit, zu kämpfen?';
		var Skill='Geschicklichkeit';
		var Agility='Beweglichkeit';
		var Charisma='Charisma';
		var Armour='Rüstung';
		var Damage='Schaden';
		var ChanceForCriticalDamage='Chance für kritischen Schaden';
		var ChanceToBlockAHit='Chance einen Schlag zu blocken';
		var ChanceForCriticalDamage='Chance kritische Treffer zu vermeiden';

		var Italy='Italien';
		var Italy_1='Düsterwald';var Italy_1_1='Ratte';var Italy_1_2='Luchs';var Italy_1_3='Wolf';var Italy_1_4='Bär';
		var Italy_2='Piratenhafen';var Italy_2_1='Entlaufener Sklave';var Italy_2_2='Korrupter Soldat';var Italy_2_3='Mörder';var Italy_2_4='Kapitän';
		var Italy_3='Nebelgebirge';var Italy_3_1='Flüchtiger Rekrut';var Italy_3_2='Harpie';var Italy_3_3='Cerberus';var Italy_3_4='Medusa';
		var Italy_4='Wolfshöhle';var Italy_4_1='Wildschwein';var Italy_4_2='Wolfsrudel';var Italy_4_3='Alpha-Wolf';var Italy_4_4='Werwolf';
		var Italy_5='Antiker Tempel';var Italy_5_1='Kultisten-Wache';var Italy_5_2='Werratte';var Italy_5_3='Minotaurus';var Italy_5_4='Minotauren-Chef';
		var Italy_6='Barbarendorf';var Italy_6_1='Barbar';var Italy_6_2='Barbarenkrieger';var Italy_6_3='Berserker';var Italy_6_4='Barbarenhäuptling';
		var Italy_7='Banditencamp';var Italy_7_1='Abtrünniger Soldat';var Italy_7_2='Abtrünniger Söldner';var Italy_7_3='Meuchelmörder';var Italy_7_4='Banditen-Chef';

		var Germany='Germanien';
		var Germany_1='Höhlentempel';var Germany_1_1='Legionär';var Germany_1_2='Myrmidone';var Germany_1_3='Centurio';var Germany_1_4='Seelenloser';
		var Germany_2='Der grüne Wald';var Germany_2_1='Riesenwildschwein';var Germany_2_2='Sumpfmonster';var Germany_2_3='Sumpfgeist';var Germany_2_4='Werbär';
		var Germany_3='Verfluchtes Dorf';var Germany_3_1='Hunne';var Germany_3_2='Uralter';var Germany_3_3='Nachzehrer';var Germany_3_4='Abscheulichkeit';
		var Germany_4='Totenhügel';var Germany_4_1='Skelettkrieger';var Germany_4_2='Skelettberserker';var Germany_4_3='Lich';var Germany_4_4='Nekromantenfürst';
		var Germany_5='Wandalendorf';var Germany_5_1='Wandalenkrieger';var Germany_5_2='Jarl';var Germany_5_3='Finsterer Streiter';var Germany_5_4='Todesritter';
		var Germany_6='Mine';var Germany_6_1='Wächter';var Germany_6_2='Draug';var Germany_6_3='Steingolem';var Germany_6_4='Tatzelwurm';
		var Germany_7='Teutonenlager';var Germany_7_1='Wilder';var Germany_7_2='Teutonenheld';var Germany_7_3='Teutonenherr';var Germany_7_4='Seidr';
		var Germany_8='Berg Koman';var Germany_8_1='Höllischer Springbock';var Germany_8_2='Säbelzahntiger';var Germany_8_3='Drachenwelpe';var Germany_8_4='Drache';
		
		var Africa='Afrika';
		var Africa_1='Voodootempel';var Africa_1_1='Kobra';var Africa_1_2='Riesenskorpion';
		var Africa_1_3='Erwachte Mumie';var Africa_1_4='Seth-Priester';
		var Africa_2='Brücke';var Africa_2_1='Steuereintreiber';var Africa_2_2='Menschenfresser';var Africa_2_3='Stammeskrieger';var Africa_2_4='Knochenschamane';
		var Africa_3='Bluthöhle';var Africa_3_1='Blutwolf';var Africa_3_2='Riesenkäfer';var Africa_3_3='Feuertänzer';var Africa_3_4='Feuerdämon';
		var Africa_4='Verlorener Hafen';var Africa_4_1='Krokodil';var Africa_4_2='Untoter Träger';var Africa_4_3='Riesenwasserschlange';var Africa_4_4='Mokele Mbembe';
		var Africa_5='Umpoktastamm';var Africa_5_1='Stammeskrieger';var Africa_5_2='Stammeszauberer';var Africa_5_3='Geisterkrieger';var Africa_5_4='Seth-Hohepriester';
		var Africa_6='Karawame';var Africa_6_1='Scout';var Africa_6_2='Karawanen-Wächter';var Africa_6_3='Elite-Wächter';var Africa_6_4='Sklavenhändler';
		var Africa_7='Mesoai-Oase';var Africa_7_1='Elefant';var Africa_7_2='Gepard';var Africa_7_3='Dämonen-Löwe';var Africa_7_4='Elefantendämon';
		var Africa_8='Klippspringer';var Africa_8_1='Verfluchte Antilope';var Africa_8_2='Riesenspinne';var Africa_8_3='Schamane';var Africa_8_4='Hoher Schamane';
	}
	else{
		var text='When you enter in the room, you see djor, one of the ancient French programmers, working over a new type of virtual fighting and training.<br>Near to him, there is a big super computer ready to create a hologram of any monster or any other player you want, in order to simulate a fight with you and display the results... <br><br>Are you ready to fight?';
		var Skill='Skill';
		var Agility='Agility';
		var Charisma='Charisma';
		var Armour='Armour';
		var Damage='Damage';
		var ChanceForCriticalDamage='Chance for critical damage';
		var ChanceToBlockAHit='Chance to block a hit';
		var ChanceForCriticalDamage='Chance of avoiding critical hits';
		
		var Italy='Italy';
		var Italy_1='Grimwood';var Italy_1_1='Rat';var Italy_1_2='Lynx';var Italy_1_3='Wolf';var Italy_1_4='Bear';
		var Italy_2='Pirate Harbour';var Italy_2_1='Fled Slave';var Italy_2_2='Corrupt Soldier';var Italy_2_3='Assassin ';var Italy_2_4='Captain ';
		var Italy_3='Misty Mountains';var Italy_3_1='Elusive Recruit';var Italy_3_2='Harpy';var Italy_3_3='Cerberus';var Italy_3_4='Medusa';
		var Italy_4='Wolf Cave';var Italy_4_1='Wild Boar';var Italy_4_2='Wolf Pack';var Italy_4_3='Alphawolf';var Italy_4_4='Werewolf';
		var Italy_5='Ancient Temple';var Italy_5_1='Cultist Guard';var Italy_5_2='Wererat';var Italy_5_3='Minotaur';var Italy_5_4='Minotaur Chief';
		var Italy_6='Barbarian Village';var Italy_6_1='Barbarian';var Italy_6_2='Barbarian Warrior';var Italy_6_3='Berserker';var Italy_6_4='Barbarian Chief';
		var Italy_7='Bandit Camp';var Italy_7_1='Renegade Soldier';var Italy_7_2='Renegade Mercenary';var Italy_7_3='Assassinator';var Italy_7_4='Bandit Chief';
		var Germany='Germany';
		var Germany_1='Cave Temple';var Germany_1_1='Legionnaire';var Germany_1_2='Myrmidon';var Germany_1_3='Centurion';var Germany_1_4='Soulless';
		var Germany_2='The Green Forest';var Germany_2_1='Giant Wild Boar';var Germany_2_2='Swamp Lord';var Germany_2_3='Swamp Spirit';var Germany_2_4='Werebear';
		var Germany_3='Cursed Village';var Germany_3_1='Hun';var Germany_3_2='Ancient';var Germany_3_3='Nachzehrer';var Germany_3_4='Abomination';
		var Germany_4='Death Hill';var Germany_4_1='Skeleton Warrior';var Germany_4_2='Skeleton Berserker';var Germany_4_3='Lich';var Germany_4_4='Necromancer Prince';
		var Germany_5='Vandal Village';var Germany_5_1='Vandal Warrior';var Germany_5_2='Jarl';var Germany_5_3='Dark Fighter';var Germany_5_4='Death Knight';
		var Germany_6='Mine';var Germany_6_1='Guard';var Germany_6_2='Draug';var Germany_6_3='Stone Golem';var Germany_6_4='Tatzelwurm';
		var Germany_7='Teuton Camp';var Germany_7_1='Barbarian';var Germany_7_2='Teuton Hero';var Germany_7_3='Teuton Lord';var Germany_7_4='Seidr';
		var Germany_8='Koman Mountain';var Germany_8_1='Infernal Springbok';var Germany_8_2='Sabre-Tooth Tiger';var Germany_8_3='Dragon Whelp';var Germany_8_4='Dragon';
		var Africa='Africa';
		var Africa_1='Voodoo Temple';var Africa_1_1='Cobra';var Africa_1_2='Giant Scorpion';var Africa_1_3='Awakened Mummy';var Africa_1_4='Seth Priest';
		var Africa_2='Bridge';var Africa_2_1='Tax Collector';var Africa_2_2='Man Eater';var Africa_2_3='Tribal Warrior';var Africa_2_4='Bone Shaman';
		var Africa_3='Blood Cave';var Africa_3_1='Blood Wolf';var Africa_3_2='Giant Beetle';var Africa_3_3='Fire Dancer';var Africa_3_4='Fire Demon';
		var Africa_4='Lost Harbour';var Africa_4_1='Crocodile';var Africa_4_2='Undead Holder';var Africa_4_3='Giant Water Snake';var Africa_4_4='Mokele Mbembe';
		var Africa_5='Umpokta Tribe';var Africa_5_1='Tribal Warrior';var Africa_5_2='Tribal Magician';var Africa_5_3='Spirit Warrior';var Africa_5_4='Seth High Priest';
		var Africa_6='Caravan';var Africa_6_1='Spy';var Africa_6_2='Caravan Guard';var Africa_6_3='Elite Guard';var Africa_6_4='Slave Merchant';
		var Africa_7='Mesoai-Oasis';var Africa_7_1='Elephant';var Africa_7_2='Cheetah';var Africa_7_3='Demon Lion';var Africa_7_4='Demon Elephant';
		var Africa_8='Cliff Jumper';var Africa_8_1='Cursed Antelope';var Africa_8_2='Giant Spider';var Africa_8_3='Shaman';var Africa_8_4='High Shaman';
	}
	
	//document.getElementById('content').style.display='none';
	document.getElementById('mainnav').childNodes[0].firstChild.className='pngfix ';
	document.getElementById('mainnav').childNodes[1].firstChild.className='pngfix  current';
	
	document.getElementById('content').innerHTML = '<p class="buildingDesc"><img align="left" src="http://i617.photobucket.com/albums/tt260/goldisever/Apo/gladiator_vs_lion_by_miguelcoimbra-d3470mr.jpg">'+text+'<br><br><br><br></p>'+
	'<div style="margin-top: 0px;" class="contentItem"><h3>'+L_trainingSim+'</h3><div class="contentItem_content">'+
	'<table align="center" style="border:1px solid #af8e50;background-color:#ded8c6;padding:5px;"><tr><th></th><th>'+L_playerA+'</th><th>'+L_playerB+'</th></tr><tr><th>'+Skill+'</th><th><input type="text" id="skillA"></th><th><input type="text" id="skillB"></th></tr><tr><th>'+Agility+'</th><th><input type="text" id="agilityA"></th><th><input type="text" id="agilityB"></th></tr><tr><th>'+Charisma+'</th><th><input type="text" id="charismaA"></th><th><input type="text" id="charismaB"></th></tr><tr><th>'+Armour+'</th><th><input type="text" id="armorA"></th><th><input type="text" id="armorB"></th></tr><tr><th>'+Damage+' Min</th><th><input type="text" id="damageMinA"></th><th><input type="text" id="damageMinB"></th></tr><tr><th>'+Damage+' Max</th><th><input type="text" id="damageMaxA"></th><th><input type="text" id="damageMaxB"></th></tr><tr><th>Resistance</th><th><input type="text" id="resistanceA"></th><th><input type="text" id="resistanceB"></th></tr><tr><th>Block</th><th><input type="text" id="blockA"></th><th><input type="text" id="blockB"></th></tr><tr><th>Critic</th><th><input type="text" id="criticA"></th><th><input type="text" id="criticB"></th></tr><tr><th><input id="clearButton" class="button3" type="button" value="'+L_ClearAll+'"></th><th><input id="myStatButton" class="button2" type="button" value="'+L_staticsTitle+'"></th><th id="minion"></th></tr><tr><th></th><th id="player_sim_results"></th><th>'+
	''+
	'<span id="searchById" style="display:none;"><input type="text" id="player" value="Player&#39;s id" maxlength="9" size="8" style="margin-right:10px;color:grey;" onclick="if(this.value==\'Player\\\'s id\'){this.removeAttribute(\'value\');this.style.color=\'#513F2C\'}"><input class="button3" type="button" id="findStatById" value="find"></span>'+
	'<span id="searchByName" style="display:none;"><input type="text" id="playerName" value="Player" maxlength="20" size="8" style="margin-right:10px;color:grey;" onclick="if(this.value==\'Player\'){this.removeAttribute(\'value\');this.style.color=\'#513F2C\'}"><input class="button3" type="button" id="findStatByName" value="find"></span>'+
	'<span id="searchByItaly" style="display:none;"><select id="selectEnemyItaly" style="width:164px;"><option>'+L_selectEnemy+'</option></select></span>'+
	'<span id="searchByAfrica" style="display:none;"><select id="selectEnemyAfrica" style="width:164px;"><option>'+L_selectEnemy+'</option></select></span>'+
	'<span id="searchByGermany" style="display:none;"><select id="selectEnemyGermany" style="width:164px;"><option>'+L_selectEnemy+'</option></select></span>'+
	'</th></tr></table>'+
	''+
	'<br/><br/><div align="center"><input class="button2" type="button" value="'+L_go+'" id="simul"></div>'+
	'</div></div>'+
	'<br/><br/><div style="margin-top: 0px;display:none;" class="contentItem" id="resultBox"><h3>'+L_Results+'</h3><div class="contentItem_content">'+
	'<div align="center" ><b>'+L_winnigChance+' :</b> <span id="result"></span></div>'+
	'<br/><div align="center" ><b>'+L_PlayerAAvDamage+' :</b> <span id="myAvDam"></span></div>'+
	'<div align="center" ><b>'+L_PlayerBAvDamage+' :</b> <span id="hisAvDam"></span></div></div>';
	
	document.getElementById('simul').addEventListener('click', function(){launchSimulator();}, true); 
	document.getElementById('myStatButton').addEventListener('click', function(){putMyStats();}, true);
	document.getElementById('clearButton').addEventListener('click', function(){clearAllStats();}, true);
	document.getElementById('findStatById').addEventListener('click', function(){findPlayerStats();}, true);
	document.getElementById('findStatByName').addEventListener('click', function(){getPlayersIdFromPlayersName();}, true);
	document.getElementById('minion').innerHTML = '<select id="selectEnemyMethod" style="width:164px;"><option id="emptyOption">'+L_selectMethod+'</option></select>';
	document.getElementById('selectEnemyMethod').setAttribute('onchange',"var value=document.getElementById('selectEnemyMethod').value;document.getElementById('searchById').style.display='none';document.getElementById('searchByName').style.display='none';document.getElementById('searchByItaly').style.display='none';document.getElementById('searchByAfrica').style.display='none';document.getElementById('searchByGermany').style.display='none';if(value!='select' && document.getElementById('search'+value)){document.getElementById('search'+value).style.display='block'}");
	
	addMonstersElements(Italy,'ByItaly','Method');
	addMonstersElements(Africa,'ByAfrica','Method');
	addMonstersElements(Germany,'ByGermany','Method');
	addMonstersElements(L_byName,'ByName','Method');
	addMonstersElements(L_byID,'ById','Method');
	
	addMonstersElements('-='+Italy_1,'loc','Italy');
	addMonstersElements(Italy_1_1,'ita_1_1','Italy');
	addMonstersElements(Italy_1_2,'ita_1_2','Italy');
	addMonstersElements(Italy_1_3,'ita_1_3','Italy');
	addMonstersElements('[BOSS]'+Italy_1_4,'ita_1_4','Italy');
	addMonstersElements('-='+Italy_2,'loc','Italy');
	addMonstersElements(Italy_2_1,'ita_2_1','Italy');
	addMonstersElements(Italy_2_2,'ita_2_2','Italy');
	addMonstersElements(Italy_2_3,'ita_2_3','Italy');
	addMonstersElements('[BOSS]'+Italy_2_4,'ita_2_4','Italy');
	addMonstersElements('-='+Italy_3,'loc','Italy');
	addMonstersElements(Italy_3_1,'ita_3_1','Italy');
	addMonstersElements(Italy_3_2,'ita_3_2','Italy');
	addMonstersElements(Italy_3_3,'ita_3_3','Italy');
	addMonstersElements('[BOSS]'+Italy_3_4,'ita_3_4','Italy');
	addMonstersElements('-='+Italy_4,'loc','Italy');
	addMonstersElements(Italy_4_1,'ita_4_1','Italy');
	addMonstersElements(Italy_4_2,'ita_4_2','Italy');
	addMonstersElements(Italy_4_3,'ita_4_3','Italy');
	addMonstersElements('[BOSS]'+Italy_4_4,'ita_4_4','Italy');
	addMonstersElements('-='+Italy_5,'loc','Italy');
	addMonstersElements(Italy_5_1,'ita_5_1','Italy');
	addMonstersElements(Italy_5_2,'ita_5_2','Italy');
	addMonstersElements(Italy_5_3,'ita_5_3','Italy');
	addMonstersElements('[BOSS]'+Italy_5_4,'ita_5_4','Italy');
	addMonstersElements('-='+Italy_6,'loc','Italy');
	addMonstersElements(Italy_6_1,'ita_6_1','Italy');
	addMonstersElements(Italy_6_2,'ita_6_2','Italy');
	addMonstersElements(Italy_6_3,'ita_6_3','Italy');
	addMonstersElements('[BOSS]'+Italy_6_4,'ita_6_4','Italy');
	addMonstersElements('-='+Italy_7,'loc','Italy');
	addMonstersElements(Italy_7_1,'ita_7_1','Italy');
	addMonstersElements(Italy_7_2,'ita_7_2','Italy');
	addMonstersElements(Italy_7_3,'ita_7_3','Italy');
	addMonstersElements('[BOSS]'+Italy_7_4,'ita_7_4','Italy');
	addMonstersElements('-='+Africa_1,'loc','Africa');
	addMonstersElements(Africa_1_1,'afr_1_1','Africa');
	addMonstersElements(Africa_1_2,'afr_1_2','Africa');
	addMonstersElements(Africa_1_3,'afr_1_3','Africa');
	addMonstersElements('[BOSS]'+Africa_1_4,'afr_1_4','Africa');
	addMonstersElements('-='+Africa_2,'loc','Africa');
	addMonstersElements(Africa_2_1,'afr_2_1','Africa');
	addMonstersElements(Africa_2_2,'afr_2_2','Africa');
	addMonstersElements(Africa_2_3,'afr_2_3','Africa');
	addMonstersElements('[BOSS]'+Africa_2_4,'afr_2_4','Africa');
	addMonstersElements('-='+Africa_3,'loc','Africa');
	addMonstersElements(Africa_3_1,'afr_3_1','Africa');
	addMonstersElements(Africa_3_2,'afr_3_2','Africa');
	addMonstersElements(Africa_3_3,'afr_3_3','Africa');
	addMonstersElements('[BOSS]'+Africa_3_4,'afr_3_4','Africa');
	addMonstersElements('-='+Africa_4,'loc','Africa');
	addMonstersElements(Africa_4_1,'afr_4_1','Africa');
	addMonstersElements(Africa_4_2,'afr_4_2','Africa');
	addMonstersElements(Africa_4_3,'afr_4_3','Africa');
	addMonstersElements('[BOSS]'+Africa_4_4,'afr_4_4','Africa');
	addMonstersElements('-='+Africa_5,'loc','Africa');
	addMonstersElements(Africa_5_1,'afr_5_1','Africa');
	addMonstersElements(Africa_5_2,'afr_5_2','Africa');
	addMonstersElements(Africa_5_3,'afr_5_3','Africa');
	addMonstersElements('[BOSS]'+Africa_5_4,'afr_5_4','Africa');
	addMonstersElements('-='+Africa_6,'loc','Africa');
	addMonstersElements(Africa_6_1,'afr_6_1','Africa');
	addMonstersElements(Africa_6_2,'afr_6_2','Africa');
	addMonstersElements(Africa_6_3,'afr_6_3','Africa');
	addMonstersElements('[BOSS]'+Africa_6_4,'afr_6_4','Africa');
	addMonstersElements('-='+Africa_7,'loc','Africa');
	addMonstersElements(Africa_7_1,'afr_7_1','Africa');
	addMonstersElements(Africa_7_2,'afr_7_2','Africa');
	addMonstersElements(Africa_7_3,'afr_7_3','Africa');
	addMonstersElements('[BOSS]'+Africa_7_4,'afr_7_4','Africa');
	addMonstersElements('-='+Africa_8,'loc','Africa');
	addMonstersElements(Africa_8_1,'afr_8_1','Africa');
	addMonstersElements(Africa_8_2,'afr_8_2','Africa');
	addMonstersElements(Africa_8_3,'afr_8_3','Africa');
	addMonstersElements('[BOSS]'+Africa_8_4,'afr_8_4','Africa');
	addMonstersElements('-='+Germany_1,'loc','Germany');
	addMonstersElements(Germany_1_1,'ger_1_1','Germany');
	addMonstersElements(Germany_1_2,'ger_1_2','Germany');
	addMonstersElements(Germany_1_3,'ger_1_3','Germany');
	addMonstersElements('[BOSS]'+Germany_1_4,'ger_1_4','Germany');
	addMonstersElements('-='+Germany_2,'loc','Germany');
	addMonstersElements(Germany_2_1,'ger_2_1','Germany');
	addMonstersElements(Germany_2_2,'ger_2_2','Germany');
	addMonstersElements(Germany_2_3,'ger_2_3','Germany');
	addMonstersElements('[BOSS]'+Germany_2_4,'ger_2_4','Germany');
	addMonstersElements('-='+Germany_3,'loc','Germany');
	addMonstersElements(Germany_3_1,'ger_3_1','Germany');
	addMonstersElements(Germany_3_2,'ger_3_2','Germany');
	addMonstersElements(Germany_3_3,'ger_3_3','Germany');
	addMonstersElements('[BOSS]'+Germany_3_4,'ger_3_4','Germany');
	addMonstersElements('-='+Germany_4,'loc','Germany');
	addMonstersElements(Germany_4_1,'ger_4_1','Germany');
	addMonstersElements(Germany_4_2,'ger_4_2','Germany');
	addMonstersElements(Germany_4_3,'ger_4_3','Germany');
	addMonstersElements('[BOSS]'+Germany_4_4,'ger_4_4','Germany');
	addMonstersElements('-='+Germany_5,'loc','Germany');
	addMonstersElements(Germany_5_1,'ger_5_1','Germany');
	addMonstersElements(Germany_5_2,'ger_5_2','Germany');
	addMonstersElements(Germany_5_3,'ger_5_3','Germany');
	addMonstersElements('[BOSS]'+Germany_5_4,'ger_5_4','Germany');
	addMonstersElements('-='+Germany_6,'loc','Germany');
	addMonstersElements(Germany_6_1,'ger_6_1','Germany');
	addMonstersElements(Germany_6_2,'ger_6_2','Germany');
	addMonstersElements(Germany_6_3,'ger_6_3','Germany');
	addMonstersElements('[BOSS]'+Germany_6_4,'ger_6_4','Germany');
	addMonstersElements('-='+Germany_7,'loc','Germany');
	addMonstersElements(Germany_7_1,'ger_7_1','Germany');
	addMonstersElements(Germany_7_2,'ger_7_2','Germany');
	addMonstersElements(Germany_7_3,'ger_7_3','Germany');
	addMonstersElements('[BOSS]'+Germany_7_4,'ger_7_4','Germany');
	addMonstersElements('-='+Germany_8,'loc','Germany');
	addMonstersElements(Germany_8_1,'ger_8_1','Germany');
	addMonstersElements(Germany_8_2,'ger_8_2','Germany');
	addMonstersElements(Germany_8_3,'ger_8_3','Germany');
	addMonstersElements('[BOSS]'+Germany_8_4,'ger_8_4','Germany');
	
	document.getElementById('selectEnemyItaly').addEventListener('change', function(){statMinion(this.value);}, true);
	document.getElementById('selectEnemyAfrica').addEventListener('change', function(){statMinion(this.value);}, true);
	document.getElementById('selectEnemyGermany').addEventListener('change', function(){statMinion(this.value);}, true);
}

function addMonstersElements(name,id,where){
	var option = document.createElement('option');
	option.value= id;
	option.innerHTML = name;
	document.getElementById('selectEnemy'+where).appendChild(option);
}

function findPlayerStats(id){
	if(!id || id=='' || id==null){id=document.getElementById('player').value}
	document.getElementById('player_sim_results').innerHTML=L_searchData;
	GM_xmlhttpRequest({
		method: "GET",
		url: GCAO_siteurl + 'mod=player&p='+id,
		onload: function(response){
			if(response.responseText.match('playername_achievement')){
				var skill = response.responseText.match('<span id="char_f1" class="charstats_value">(\.+)</span>')[1];
				var agility = response.responseText.match('<span id="char_f2" class="charstats_value">(\.+)</span>')[1];
				var charisma = response.responseText.match('<span id="char_f4" class="charstats_value">(\.+)</span>')[1];
				var armor = response.responseText.match('<span id="char_panzer" class="charstats_value22">(\.+)</span>')[1];
				var degatMin = response.responseText.match('<span id="char_schaden" class="charstats_value22">(\.+)</span>')[1].split(' - ')[0];
				var degatMax = response.responseText.match('<span id="char_schaden" class="charstats_value22">(\.+)</span>')[1].split(' - ')[1];
				var str = response.responseText.split('<div class="charstats_bg" id="char_panzer_tt" ');
				str = str[1].split('%');
				str2 = str[0].split('>');
				str2 = str2[str2.length-1];
				var resistance = str2;
				str2 = str[1].split('>');
				str2 = str2[str2.length-1];
				var block = str2;
				str2 = str[2].split('>');
				str2 = str2[str2.length-1];
				var critic = str2;
				document.getElementById('player_sim_results').innerHTML='';
				setPlayerBStats(skill, agility, charisma, armor, degatMin, degatMax, resistance, critic, block);
			}
			else{document.getElementById('player_sim_results').innerHTML=L_playerNotFound;}	
		}
	});
}

function putMyStats(){
		if(Get_Cookie('simstats')){
			var code=Get_Cookie('simstats');
		}else{
			var code='##0##0##0##0##0##0##0##0##0##0##0##0##0##0';
		}
		
		document.getElementById('skillA').value = code.match(/##([^#]+)/g)[3].replace(/#/g,'')*1;
		document.getElementById('agilityA').value = code.match(/##([^#]+)/g)[4].replace(/#/g,'')*1;
		document.getElementById('charismaA').value = code.match(/##([^#]+)/g)[6].replace(/#/g,'')*1;
		document.getElementById('armorA').value = code.match(/##([^#]+)/g)[7].replace(/#/g,'')*1;
		document.getElementById('damageMinA').value = code.match(/##([^#]+)/g)[8].replace(/#/g,'')*1;
		document.getElementById('damageMaxA').value = code.match(/##([^#]+)/g)[9].replace(/#/g,'')*1;
		document.getElementById('resistanceA').value = code.match(/##([^#]+)/g)[10].replace(/#/g,'')*1;
		document.getElementById('criticA').value = code.match(/##([^#]+)/g)[12].replace(/#/g,'')*1;
		document.getElementById('blockA').value= code.match(/##([^#]+)/g)[11].replace(/#/g,'')*1;
		
}

function clearAllStats(){
	document.getElementById('skillA').value = '';
	document.getElementById('agilityA').value = '';
	document.getElementById('charismaA').value = '';
	document.getElementById('armorA').value = '';
	document.getElementById('damageMinA').value = '';
	document.getElementById('damageMaxA').value = '';
	document.getElementById('resistanceA').value ='';
	document.getElementById('criticA').value = '';
	document.getElementById('blockA').value= '';
	setPlayerBStats('', '', '', '', '', '', '', '', '');
	document.getElementById('emptyOption').selected=true;
	document.getElementById('resultBox').style.display='none';
}
	
function statMinion(minion){
	if(minion!='loc'){
		if(minion=='ita_1_1'){setPlayerBStats(6,8,6,45,2,2,15,0,0);}
		else if(minion=='ita_1_2'){setPlayerBStats(13,16,12,100,4,5,0,13,0);}
		else if(minion=='ita_1_3'){setPlayerBStats(19,24,22,223,6,7,0,13,0);}
		else if(minion=='ita_1_4'){setPlayerBStats(15,25,25,488,13,17,0,9,0);}
		else if(minion=='ita_2_1'){setPlayerBStats(24,34,18,289,8,10,0,8,0);}
		else if(minion=='ita_2_2'){setPlayerBStats(24,42,37,416,12,15,0,6,8);}
		else if(minion=='ita_2_3'){setPlayerBStats(42,68,24,438,15,18,0,12,6);}
		else if(minion=='ita_2_4'){setPlayerBStats(46,71,53,808,26,32,0,10,8);}
		else if(minion=='ita_3_1'){setPlayerBStats(30,42,26,508,16,19,0,5,5);}
		else if(minion=='ita_3_2'){setPlayerBStats(42,79,66,703,23,28,0,9,0);}
		else if(minion=='ita_3_3'){setPlayerBStats(68,51,110,1399,25,31,0,18,0);}
		else if(minion=='ita_3_4'){setPlayerBStats(86,104,120,1608,35,43,0,15,5);}
		else if(minion=='ita_4_1'){setPlayerBStats(33,46,46,2282,40,49,0,12,0);}
		else if(minion=='ita_4_2'){setPlayerBStats(91,109,72,1793,48,58,0,20,0);}
		else if(minion=='ita_4_3'){setPlayerBStats(93,113,105,1528,50,61,0,20,0);}
		else if(minion=='ita_4_4'){setPlayerBStats(94,121,142,2516,66,82,0,18,0);}
		else if(minion=='ita_5_1'){setPlayerBStats(140,196,122,6204,118,145,0,8,7);}
		else if(minion=='ita_5_2'){setPlayerBStats(270,352,151,3605,133,163,0,17,0);}
		else if(minion=='ita_5_3'){setPlayerBStats(148,129,336,3481,182,223,0,12,8);}
		else if(minion=='ita_5_4'){setPlayerBStats(234,436,382,5261,192,235,0,18,12);}
		else if(minion=='ita_6_1'){setPlayerBStats(168,236,157,4040,150,184,0,6,9);}
		else if(minion=='ita_6_2'){setPlayerBStats(171,239,266,3741,140,172,0,8,9);}
		else if(minion=='ita_6_3'){setPlayerBStats(303,226,226,2771,237,290,0,15,7);}
		else if(minion=='ita_6_4'){setPlayerBStats(364,453,425,5792,162,199,0,15,10);}
		else if(minion=='ita_7_1'){setPlayerBStats(180,252,140,7372,135,166,0,10,5);}
		else if(minion=='ita_7_2'){setPlayerBStats(168,264,235,9547,142,174,0,8,5);}
		else if(minion=='ita_7_3'){setPlayerBStats(415,493,145,3854,242,298,0,13,0);}
		else if(minion=='ita_7_4'){setPlayerBStats(440,616,492,5100,230,282,0,12,9);}
		else if(minion=='afr_1_1'){setPlayerBStats(97,115,73,1852,50,62,0,15,0);}
		else if(minion=='afr_1_2'){setPlayerBStats(96,156,56,3601,54,66,0,15,0);}
		else if(minion=='afr_1_3'){setPlayerBStats(59,59,95,3563,73,89,0,9,0);}
		else if(minion=='afr_1_4'){setPlayerBStats(171,252,319,1225,105,129,0,13,7);}
		else if(minion=='afr_2_1'){setPlayerBStats(72,100,189,1306,38,47,0,8,2);}
		else if(minion=='afr_2_2'){setPlayerBStats(57,79,133,3546,87,107,0,12,0);}
		else if(minion=='afr_2_3'){setPlayerBStats(178,264,102,2113,58,71,0,11,9);}
		else if(minion=='afr_2_4'){setPlayerBStats(225,344,258,2053,113,139,0,11,9);}
		else if(minion=='afr_3_1'){setPlayerBStats(110,126,112,1614,67,83,0,13,0);}
		else if(minion=='afr_3_2'){setPlayerBStats(51,43,114,5325,88,108,0,8,0);}
		else if(minion=='afr_3_3'){setPlayerBStats(202,189,204,1460,97,119,0,20,0);}
		else if(minion=='afr_3_4'){setPlayerBStats(192,302,369,1694,73,90,0,17,0);}
		else if(minion=='afr_4_1'){setPlayerBStats(90,110,78,4180,90,110,0,11,0);}
		else if(minion=='afr_4_2'){setPlayerBStats(49,51,68,5658,98,120,0,8,9);}
		else if(minion=='afr_4_3'){setPlayerBStats(147,102,85,5369,90,111,0,13,0);}
		else if(minion=='afr_4_4'){setPlayerBStats(178,196,232,7588,125,154,0,14,0);}
		else if(minion=='afr_5_1'){setPlayerBStats(193,270,180,5152,158,195,0,7,8);}
		else if(minion=='afr_5_2'){setPlayerBStats(258,421,421,2006,92,113,0,15,5);}
		else if(minion=='afr_5_3'){setPlayerBStats(155,124,249,22874,109,134,0,17,8);}
		else if(minion=='afr_5_4'){setPlayerBStats(322,515,869,5236,283,347,0,14,9);}
		else if(minion=='afr_6_1'){setPlayerBStats(295,350,222,2188,154,189,0,10,5);}
		else if(minion=='afr_6_2'){setPlayerBStats(250,382,286,5018,112,137,0,8,12);}
		else if(minion=='afr_6_3'){setPlayerBStats(418,651,195,2779,171,210,0,10,15);}
		else if(minion=='afr_6_4'){setPlayerBStats(408,604,672,6250,162,199,0,12,8);}
		else if(minion=='afr_7_1'){setPlayerBStats(142,166,232,8514,175,215,0,9,0);}
		else if(minion=='afr_7_2'){setPlayerBStats(408,537,268,4832,133,163,0,14,0);}
		else if(minion=='afr_7_3'){setPlayerBStats(378,565,459,10084,217,267,0,16,0);}
		else if(minion=='afr_7_4'){setPlayerBStats(225,489,489,15005,292,359,0,11,0);}
		else if(minion=='afr_8_1'){setPlayerBStats(350,489,315,6939,184,226,0,7,0);}
		else if(minion=='afr_8_2'){setPlayerBStats(390,473,364,9143,192,235,0,12,0);}
		else if(minion=='afr_8_3'){setPlayerBStats(364,509,509,7148,240,294,0,13,0);}
		else if(minion=='afr_8_4'){setPlayerBStats(577,882,698,4488,339,416,0,14,8);}
		else if(minion=='ger_1_1'){setPlayerBStats(100,140,140,5593,69,85,0,7,13);}
		else if(minion=='ger_1_2'){setPlayerBStats(148,245,94,6486,74,91,0,5,15);}
		else if(minion=='ger_1_3'){setPlayerBStats(165,269,154,7918,76,93,0,7,13);}
		else if(minion=='ger_1_4'){setPlayerBStats(171,299,279,9464,140,172,0,13,0);}
		else if(minion=='ger_2_1'){setPlayerBStats(96,134,115,4797,101,124,0,8,7);}
		else if(minion=='ger_2_2'){setPlayerBStats(116,101,182,7128,89,109,0,5,15);}
		else if(minion=='ger_2_3'){setPlayerBStats(195,378,252,1950,138,170,0,13,0);}
		else if(minion=='ger_2_4'){setPlayerBStats(141,286,110,5987,271,333,0,16,0);}
		else if(minion=='ger_3_1'){setPlayerBStats(165,231,168,3657,64,79,0,16,0);}
		else if(minion=='ger_3_2'){setPlayerBStats(167,128,192,6174,112,138,0,9,0);}
		else if(minion=='ger_3_3'){setPlayerBStats(117,140,304,6514,185,227,0,15,0);}
		else if(minion=='ger_3_4'){setPlayerBStats(230,415,369,7641,142,174,0,12,0);}
		else if(minion=='ger_4_1'){setPlayerBStats(81,227,182,4288,100,122,0,10,8);}
		else if(minion=='ger_4_2'){setPlayerBStats(204,309,166,6386,125,154,0,5,15);}
		else if(minion=='ger_4_3'){setPlayerBStats(227,196,392,2629,107,132,0,15,10);}
		else if(minion=='ger_4_4'){setPlayerBStats(306,504,504,6714,144,176,0,10,15);}
		else if(minion=='ger_5_1'){setPlayerBStats(236,477,294,8429,194,238,0,5,10);}
		else if(minion=='ger_5_2'){setPlayerBStats(270,264,529,6207,249,306,0,10,5);}
		else if(minion=='ger_5_3'){setPlayerBStats(401,374,636,15695,214,260,0,12,0);}
		else if(minion=='ger_5_4'){setPlayerBStats(463,534,648,16464,285,350,0,16,0);}
		else if(minion=='ger_6_1'){setPlayerBStats(327,457,343,9453,251,309,0,5,15);}		
		else if(minion=='ger_6_2'){setPlayerBStats(476,548,548,8049,258,317,0,11,9);}			
		else if(minion=='ger_6_3'){setPlayerBStats(166,310,310,22661,222,272,0,8,8);}			
		else if(minion=='ger_6_4'){setPlayerBStats(282,514,632,19903,330,405,0,7,8);}	
		else if(minion=='ger_7_1'){setPlayerBStats(395,553,355,8647,261,320,0,12,0);}				
		else if(minion=='ger_7_2'){setPlayerBStats(342,478,598,7530,228,280,0,13,7);}					
		else if(minion=='ger_7_3'){setPlayerBStats(456,798,758,8369,263,323,0,13,12);}
		else if(minion=='ger_7_4'){setPlayerBStats(678,1156,867,10054,399,490,0,15,20);}
		else if(minion=='ger_8_1'){setPlayerBStats(526,737,327,12177,270,331,0,9,0);}
		else if(minion=='ger_8_2'){setPlayerBStats(624,666,541,11076,329,404,0,18,0);}
		else if(minion=='ger_8_3'){setPlayerBStats(590,1032,619,15060,327,401,0,17,0);}
		else if(minion=='ger_8_4'){setPlayerBStats(480,504,1092,21676,480,589,0,12,0);}
		else{
			setPlayerBStats('','','','','','','','','');
			document.getElementById('player_sim_results').innerHTML=L_noStats+' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/crying.png" style="position:absolute;">';
		}
	}else{
		setPlayerBStats('','','','','','','','','');
		document.getElementById('player_sim_results').innerHTML=L_thisIsLocation+' <img src="http://i617.photobucket.com/albums/tt260/goldisever/GCAO/tongue.png" style="position:absolute;">';
	}
}

function setPlayerBStats(skill, agility, charisma, armor, damageMin, damageMax, resistance, critic, block){
	document.getElementById('player_sim_results').innerHTML='';
	document.getElementById('skillB').value = skill;
	document.getElementById('agilityB').value = agility;
	document.getElementById('charismaB').value = charisma;
	document.getElementById('armorB').value = armor;
	document.getElementById('damageMinB').value = damageMin;
	document.getElementById('damageMaxB').value = damageMax;
	document.getElementById('resistanceB').value = resistance;
	document.getElementById('criticB').value = critic;
	document.getElementById('blockB').value= block;
}

function simulateBegin(fights){
	var skill = document.getElementById('skillA').value;
	var agility = document.getElementById('agilityA').value;
	var charisma = document.getElementById('charismaA').value;
	var block = document.getElementById('blockA').value;
	var resistance = document.getElementById('resistanceA').value;
	var ARMOR = document.getElementById('armorA').value;
	var damageMin = document.getElementById('damageMinA').value;
	var damageMax = document.getElementById('damageMaxA').value;
	var critDamage = document.getElementById('criticA').value;
	
	return simulate(skill, agility, charisma, block, resistance, ARMOR, damageMin, damageMax, critDamage, 100000, fights);
}

function launchSimulator(){
	var array = simulateBegin(1000);
	document.getElementById('result').innerHTML = parseInt(100*array[0]/(array[0]+array[1]))+'%';
	document.getElementById('myAvDam').innerHTML = array[3];
	document.getElementById('hisAvDam').innerHTML = array[4];
	document.getElementById('resultBox').style.display='block';
}