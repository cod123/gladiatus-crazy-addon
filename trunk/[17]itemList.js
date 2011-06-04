//################################################################################################################################
//## ITEM LIST / ΛΙΣΤΑ ΑΝΤΙΚΕΙΜΕΝΩΝ
//################################################################################################################################
function itemList(){
	//Param string with options "n[name]v[value]c[color]|n[name1]v[value1]c[color1]..." v[value] and c[color] are optional
	//USE THE COLORS: 
	//Items names: [for green items: #0D960D] [for pink items: #E303E0] [for blue items: #0046FF]
	//Upgrades: blue, yellow, green, purple, red, orange (yellow and orange will auto change by script so you can read the letters in game)
	if(GCAO_lang=='fr'){
		var prefixList = 'n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Matéus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]';
		var suffixList = 'n[Agression]|n[Assassinat]|n[Delicatesse]|n[Dragon]|n[Elimination]|n[Enfer]|n[Paradis]';
		var foodList = '';
		var tempImpList = '';
		var impList = '';
	}else if(GCAO_lang=='gr'){
		var prefixList='n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Mateus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]|n[Δαιμονοφονιάδες]';
		var suffixList='n[Ο κατακερματισμός της]|n[ΚΑΘΑΡΟΤΗΤΟΣ]|n[Κατεδάφιση του]|n[Πολεμικών τεχνών]|n[Της αυτοδιοίκησης]|n[Της προσευχής]|n[Του διατάγματος]|n[της αλαζονείας]|n[της αλήθειας]|n[της ανάκαμψης]|n[της ανάπλασης]|n[της αναπόδρασης]|n[της ανδρικής ταυτότητας]|n[της ανεξαρτησίας]|n[της απόκρυψης]|n[της αρμονίας]|n[της βιαιότητας]|n[της γενναιοδωρίας]|n[της γης]|n[της διαμάχης]|n[της δολοφονίας]|n[της δύναμης]|n[της ελευθερίας]|n[της Επίθεσης]|n[της επιτυχίας]|n[της επιχειρηματικότητας]|n[της ετοιμότητας]|n[της ευγένειας]c[rgb(0, 70, 255)]|n[της ικανοποίησης]|n[της κολάσεως]c[rgb(0, 70, 255)]|n[της καταστροφής]|n[της μαθητείας]|n[της μάχης]|n[της μεγαλοπρέπειας]|n[της μοχθηρίας]|n[της ορειβασιας]|n[της πίστης]|n[της ποιότητος]|n[της πρόληψης]|n[της προσβολής]|n[της προστασίας]|n[της σιωπής]|n[της σύγχυσης]|n[της ταραχής]|n[της Τελετής]|n[της τρέλας]|n[της χάρης]|n[της υπόσχεσης]|n[της υποχώρησης]|n[του Άρη]|n[του βαπτίσματος]|n[του εμποδίου]|n[του ενδιαφέροντος]|n[του ευνουχισμού]|n[του ηλιου]|n[του θύματος]|n[του μπλοκαρίσματος]|n[του παραδείσου]c[rgb(0, 70, 255)]|n[του φεγγαριού]|n[των καταραμένων]|n[των τραυμάτων  ]|n[of Chakra]';
		var foodList='n[Κοτόπουλο]|n[Κρέας]|n[Μήλο]|n[Μπανάνες]|n[Μπριζόλα]|n[Τυρί]|n[Φίλτρο ζωής]|n[Ψάρι]|n[Ψωμάκι]|n[Ψωμί]';
		var tempImpList='n[Λευκάγκαθα]|n[Μουκάλια δύναμης]v[δύναμης]c[blue]|n[Μουκάλια ικανότητας]v[ικανότητας]c[yellow]|n[Μουκάλια επιδεξιότητας]v[επιδεξιότητας]c[green]|n[Μουκάλια φυσικής κατάστασης]v[φυσικής κατάστασης]c[#FF7F00]|n[Μουκάλια χαρίσματος]v[χαρίσματος]c[purple]|n[Μουκάλια εξυπνάδας]v[εξυπνάδας]c[red]n[Ρίζα από τάιγκα]';
		var impList='n[Εξοπλισμός]|n[Κίτρινη πούδρα]c[yellow]|n[Κόκκινη πούδρα]c[red]|n[Μπλέ πούδρα]c[blue]|n[Μυλόπετρα]|n[Μωβ πούδρα]c[purple]|n[Πορτοκαλί πούδρα]c[#FF7F00]|n[Πράσινη πούδρα]c[green]|n[Σφουγγάρι καθαρίσματος]';
	}else if(GCAO_lang=='cr'){
		var prefixList = 'n[Ichoruovo]|n[Opiehnzovo]|n[Talethovo]|n[Trafanovo]|n[Luciusovo]|n[Tantusovo]|n[Gaiovo]|n[Mateovo]|n[Marcusovo]|n[Adendathielovo]|n[Ameliovo]|n[Amovielovo]|n[Anchoronsovo]|n[*Appius]|n[Asaysethovo]|n[Asendakovo]|n[Ashitillovo]|n[Baciasovo]|n[Barbekuusovo]|n[*Beasthammers]|n[Berryho]|n[Bilgovo]|n[*Calodiens]|n[Chabdynovo]|n[Chaliniovo]|n[*Chealoths]|n[Cheggovsovo]|n[Chuckovo]|n[Ciallanovo]|n[Cisienovo]|n[*Decimus]|n[*Denovs]|n[Dexterovo]|n[Doitremovo]|n[*Doomeniks]|n[Elrarangovo]|n[Elvilmandelovo]|n[Elywenovo]|n[Evotavovo]|n[Fernabastovo]|n[Fitschisovo]|n[Fraboovo]|n[Frickoysovo]|n[Fustrielsovo]|n[Galarandovo]|n[Gidrasovo]|n[Gonakovo]|n[Grankovo]|n[*Grasscrawlers]|n[Heudoisovo]|n[Heuhoisovo]|n[Ibiwanovo]|n[Isundelovo]|n[Jennifeřino]|n[Kedyssiovo]|n[Kerrannasovo]|n[Korksovo]|n[Kosmonasovo]|n[Leandronimusovo]|n[Liloelsovo]|n[Lothayovo]|n[Lulusovo]|n[Lurtscharasovo]|n[*Manius]|n[Medonisovo]|n[Melaneosovo]|n[*Mermereus]|n[Mimasovo]|n[*Monychustas]|n[*Mooncruchers]|n[Narithovo]|n[Orleldovo]|n[Peragovo]|n[Phalangensovo]|n[*Poirins]|n[Purmannsovo]|n[Rakrestovo]|n[Rayolovo]|n[Redosovo]|n[Reinkesovo]|n[Ronaldasovo]|n[Rynightovo]|n[Sentarionsovo]|n[*Servius]|n[Sextovo]|n[Shivasovo]|n[*Skiterus]|n[Sphingensovo]|n[Spuriovo]|n[Stoybaersovo]|n[Sugovo]|n[Thorstenovo]|n[*Tinothiels]|n[Tûnêsésovo]|n[Umbrosovo]|n[Umfetasovo]|n[Umilawenovo]|n[Uridovo]|n[Uróthienovo]|n[Vuthielovo]|n[Xenphlamesovo]|n[Xusovo]|n[Yasovo]|n[Zickezackesovo]|n[Zimbrisovo]|n[Lulusovo]|n[Zeindrovo]';
        var suffixList = 'n[nebes]|n[pekla]|n[výhody]|n[rozkoše]|n[harmonie]|n[země]|n[draka]|n[kritického zásahu]|n[smrti]|n[lásky]';
        var foodList = 'n[Pečivo]v[chleb]|n[Jablko]|n[Banány]|n[Kuře]';
        var tempImpList = 'n[Lahve charismatu]v[charisma]c[purple]|n[Lahve dovednosti]v[bystrost]c[yellow]|n[Lahve obratnosti]v[obratnost]c[green]|n[Lahve síly]v[síly]c[blue]|n[Lahve inteligence]v[inteligence]c[red]|n[Lahve odolnosti]v[odolnosti]c[orange]';
        var impList = 'n[Brousek]|n[Ochranné vybavení]c[#4C3430]|n[Houba]c[grey]|n[Fialový prach]c[purple]|n[Žlutý prach]c[yellow]|n[Modrý prášek]c[blue]|n[Rudý prášek]c[red]|n[Oranžový prach]c[orange]';
	}else if(GCAO_lang=='us' || GCAO_lang=='com'){
		var prefixList = 'n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Mateus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF5)]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]';
		var suffixList = 'n[No translation available]v[ ]';
		var foodList = 'n[Apple]|n[Bananas]|n[Bread]|n[Bread rolls]|n[Cheese]|n[Chicken]|n[Fish]|n[Healing potion]|n[Meat haunch]|n[Steak]';
		var tempImpList = 'n[Bottles of strength]c[blue]|n[Bottles of aptness]c[yellow]|n[Bottles of agility]c[green]|n[Bottles of constitution]c[orange]|n[Bottles of charisma]c[purple]|n[Bottles of Inteligence]c[red]|n[Howthorn]|n[Taigaroot]';
		var impList = 'n[Blue powder]c[blue]|n[Detergent sponge]|n[Green powder]c[green]|n[Grindstone]|n[Orange powder]c[orange]|n[Protective gear]|n[Red powder]c[red]|n[Violet powder]c[purple]|n[Yellow powder]c[yellow]';
	}else if(GCAO_lang=='lv'){
		var prefixList = 'n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Mateus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF5)]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]';
		var suffixList = 'n[No translation available]v[ ]';
		var foodList = 'n[Ābols]|n[Banāni]|n[Maize]|n[Maizes rullīši]|n[Siers]|n[Cālis]|n[Zivs]|n[Dzīvības dzira]|n[Gaļas gurns]|n[Steiks]';
		var tempImpList = 'n[Spēka pudele]c[blue]|n[HVZ pudele]c[yellow]|n[Veiklības pudele]c[green]|n[Konstitūcijas pudele]c[orange]|n[Valdzinājuma pudele]c[purple]|n[Inteliģences pudele]c[red]|n[Vilkābele]|n[Taigas sakne]';
		var impList = 'n[Zilais pulveris]c[blue]|n[Tīrošā švamme]|n[Zaļais pulveris]c[green]|n[Galoda]|n[Oranžais pulveris]c[orange]|n[Aizsargājošs apģērbs]|n[Sarkanais pulveris]c[red]|n[Violetais pulveris]c[purple]|n[Dzletenais pulveris]c[yellow]';
	}else if(GCAO_lang=='de'){
		var prefixList = 'n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Mateus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF5)]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]';
		var suffixList = 'n[Hölle]|n[Paradies]';
		var foodList = 'n[Apfel]|n[Bananen]|n[Brot]|n[Brötchen]|n[Käse]|n[Hähnchen]|n[Fisch]|n[Heiltrank]|n[Fleischkeule]|n[Steak]';
		var tempImpList = 'n[Flasche der Stärke]c[blue]|n[Flasche des Geschicks]c[yellow]|n[Flasche der Beweglichkeit]c[green]|n[Flasche der Konstitution]c[orange]|n[Flasche des Charismas]c[purple]|n[Flasche der Intelligenz]c[red]|n[Weißdornen]|n[Taigawurzel]|n[Gingkoblätter]';
		var impList = 'n[Blaues Pulver]c[blue]|n[Reinigender Schwamm]|n[Grünes Pulver]c[green]|n[Schleifstein]|n[Orangenes Pulver]c[orange]|n[Rüstungsset]|n[Rotes Pulver]c[red]|n[Violettes Pulver]c[purple]|n[Gelbes Pulver]c[yellow]';
	}else{
		var prefixList = 'n[Adendathiels]|n[Amelias]|n[Amoviels]|n[Anchorons]|n[Appius]|n[Asayseths]|n[Asendacs]|n[Ashitills]|n[Bacias]|n[Barbekuus]|n[Beasthammers]|n[Berrys]|n[Bilgs]|n[Calodiens]c[#0D960D]|n[Chabdyns]|n[Chalinis]|n[Chealoths]|n[Cheggovs]|n[Chucks]|n[Ciallans]|n[Cisiens]|n[Dairus]|n[Decimus]|n[Denovs]|n[Dexterus]|n[Doitrems]|n[Doomeniks]|n[Elrarangs]|n[Elvilmandels]|n[Elywens]|n[Evotavs]|n[Fernabasts]|n[Fitschis]|n[Frabos]|n[Frickoys]|n[Frientas]|n[Fustriels]|n[Gadriewens]|n[Gaius]c[#E303E0]|n[Galarands]|n[Gidras]|n[Gonaks]|n[Granks]|n[Grasscrawlers]|n[Heudois]|n[Heuhois]|n[Ibiwans]|n[Ichorus]c[#E303E0]|n[Ismaels]|n[Isundels]|n[Jennifers]|n[Kedyssis]|n[Kerrannas]|n[Korks]|n[Kosmonas]|n[Leandronimus]|n[Liloels]|n[Lothays]|n[Lucius]c[#E303E0]|n[Lulus]|n[Lurtscharas]|n[Mandalus]|n[Manius]|n[Marcus]|n[Mateus]c[#E303E0]|n[Medonis]|n[Melanchaetas]|n[Melaneos]|n[Mermereus]|n[Mimas]|n[Monychustas]|n[Mooncruchers]|n[Nariths]|n[Opiehnzas]c[#E303E0]|n[Orlelds]|n[Peragos]|n[Phalangens]|n[Poirins]|n[Purmanns]|n[Rakrests]|n[Rayols]|n[Redos]|n[Reinkes]|n[Ronaldas]|n[Rynightes]|n[Sentarions]|n[Servius]|n[Sextus]|n[Shivas]|n[Skiterus]|n[Solitanis]|n[Sphingens]|n[Spurius]|n[Stoybaers]|n[Sugos]|n[Taliths]c[#0046FF]|n[Tanias]|n[Tantus]c[#E303E0]|n[Thorstens]|n[Tinothiels]|n[Titus]|n[Trafans]c[#0046FF5)]|n[Tuneses]|n[Umbros]|n[Umfetas]|n[Umilawens]|n[Uridos]|n[Urothiens]|n[Vuthiels]|n[Watzmanns]|n[Xenphlames]|n[Xus]|n[Yas]|n[Zeindras]c[#0D960D]|n[Zickezackes]|n[Zimbris]|n[Zombers]';
		var suffixList = 'n[No translation available]v[ ]';
		var foodList = 'n[No translation available]v[ ]';
		var tempImpList = 'n[No translation available]v[ ]';
		var impList = 'n[No translation available]v[ ]';
	}
	
	if(document.getElementById('auction_filter')){
		if(!document.location.href.match('ttype=3')){
			var L_food=document.getElementById('auction_filter').getElementsByTagName('tr')[2].getElementsByTagName('option')[9].innerHTML;
			var L_upgrades=document.getElementById('auction_filter').getElementsByTagName('tr')[2].getElementsByTagName('option')[10].innerHTML;
			var L_enisxisis=document.getElementById('auction_filter').getElementsByTagName('tr')[2].getElementsByTagName('option')[11].innerHTML;
		}
		var L_search=document.getElementById('auction_filter').getElementsByTagName('input')[1].value;
	}
	var L_selectEnixsiseis=L_select+' '+L_enisxisis;
	var L_selectUpgrades=L_select+' '+L_upgrades;
	var L_selectFood=L_select+' '+L_food;
	
	if(document.getElementById('auction_filter') || document.getElementById('market_item_table')){
		var img_clear = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAI0SURBVFhH1ZdPSxtBGMZfU1Hrn2yWVugfUS+BkGM/gIJ4K+1H8WLOPfTiJd+h50JBsPTqd0gIwVKRlJ5KiFktTQ12dzvP1meyziqziePBFx5m9p1nXn++jpPs1N7ORiyO44k3J72zC8dVRVC34LrqcumxLPvzrssK606xwz8Lr5z8kM3VTlLnqHOajF/8XSd1d70PSZ1rwPV6/U7Fa7Wa3AR8+O7Nnepuvf8sBM4cicFgIJPIRhQMY5lEZl3nZ/g28EgtTCIrcBzHAhWLxUR8Nkdz3dbhSN1F0LP5R4n4bI7mem5gGj3Py0Ajx+AvYgeOFeToBn2xAOj/OQo5BnO5gfv9vvaWSiUNjTkDnrzAoWKFvv/6q/evLE4nOQhzBjzMW4GjKBKq1+tpv+/7AjGwlvbaOkwAjCfnI+i1pWmBGFhLe8cCBlC3282wIJeGxdwWl8qS1tdgBM29yJk+K3AQBGLK3JTHY+758VvE1CSezLUWhqGkVS6XM81DzvTZOjwMI0lr++XoGHAvcqbP2uH0n7pSqWh/u90WiIG1sc6wur/CK71endF1DjpDgRhYow9jbuBqtaq9rVZLw2HOgIfQtg4T4u36rLbun1xoOMwZ8NCfG5jGZrOZ+QdDjjEuMPd9Ov5zrZMARI6RG5j3aqPREOi2Tzpz3dph9QERKn38NkiE+U0y13N32Ly2bM82YKxHqovjyqz74L5ePswv8HhXcv1agzeO+6hbeP50wTkszt191f0Hfd8fmwxC+yAAAAAASUVORK5CYII%3D';

		if(GCAO_mod=='auction'){ //auction
            var itemType = Number(document.getElementById('auction_filter').getElementsByTagName('select')[1].innerHTML.match(/option value="(\d+)" selected="selected"/i)[1]);
            document.getElementById('auction_filter').getElementsByTagName('input')[1].setAttribute('id', "submitButton");
            var submitButton = document.getElementById('submitButton');
            var clearButton = '<div id="Clear" style="background-image: url(' + img_clear + ');background-position: 0px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;" onmouseover="document.getElementById(\'Clear\').setAttribute(\'style\',\'background-image: url(' + img_clear + ');background-position: 22px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;\')" onmouseout="document.getElementById(\'Clear\').setAttribute(\'style\',\'background-image: url(' + img_clear + ');background-position: 0px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;\')" onclick="document.getElementById(\'auction_filter\').getElementsByTagName(\'input\')[0].value=\'\'" title="Clear"></div>';
            document.getElementById('auction_filter').getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerHTML += clearButton;

            displayWarnGuildShorAuctionButton();

            if(itemType <= 6 || itemType == 8 || itemType == 9){ //all, weapons, shields, armors, helmets, gloves, boots, rings, amulets
                //prefixes
                createElemenWithID("tr","prefix_search",document.getElementById('auction_filter').getElementsByTagName('tr')[1]);
                document.getElementById('prefix_search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_Items+':</td><td style="width: 50%;"><select id="SelectPrefix" name="SelectPrefix"><option value="SP">- '+L_selectItem+' -</option>\n' + makeOpitonsFromItemList(prefixList) + '</select></td>';
                //suffixes
                createElemenWithID("tr","suffix_search",document.getElementById('auction_filter').getElementsByTagName('tr')[2]);
                document.getElementById('suffix_search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_Type+':</td><td style="width: 50%;"><select id="SelectSuffix" name="SelectSuffix">\n<option value="SS">- '+L_selectType+' -</option>\n' + makeOpitonsFromItemList(suffixList) + '</select></td>';

                if (itemType == 1){ //weapons
                    // minimal damage filter script
                    createElemenWithID("script","damageFunction",document.getElementById('auction_filter'));
                    document.getElementById('damageFunction').setAttribute('type', 'text/javascript');
                    document.getElementById('damageFunction').innerHTML = "\n"+'function filterItemsByDamage(requiredDamage){'+"\n"+
                    '   var items = document.getElementsByTagName(\'script\')[11].innerHTML;'+"\n"+
                    '   var i=0;'+"\n"+
                    '   var auctionItemCell;'+"\n"+
                    '   //get items IDs'+"\n"+
                    '   var itemsIDRegExp = /"auction_(\\d+)"/gi;'+"\n"+
                    '   var itemsID=new Array();'+"\n"+
                    '   var temp;'+"\n"+
                    '   temp = itemsIDRegExp.exec(items);'+"\n"+
                    '   while(temp != null){'+"\n"+
                    '       itemsID[i]=temp[1];'+"\n"+
                    '       //reset visibility'+"\n"+
                    '       auctionItemCell = document.getElementById(\'auction_\'+itemsID[i]).parentNode.parentNode.parentNode.parentNode.parentNode;'+"\n"+
                    '       auctionItemCell.setAttribute(\'style\',\'visibility:visible\');'+"\n"+
                    '       if((i+2)%2!=0){'+"\n"+
                    '           auctionItemCell.parentNode.setAttribute(\'style\',\'display:table-row\');'+"\n"+
                    '       }'+"\n"+
                    '       i++;'+"\n"+
                    '       temp = itemsIDRegExp.exec(items);'+"\n"+
                    '   }'+"\n"+
                    ''+"\n"+
                    '   //get items damage'+"\n"+
                    '   var itemsDamageRegExp = /\.+? \\d+ - (\\d+)/gi;'+"\n"+
                    '   var itemsDamage;'+"\n"+
                    '   var itemsCount=0;'+"\n"+
                    '   var hidden=false;'+"\n"+
                    '   var y=0;'+"\n"+
                    '   i=0;'+"\n"+
                    '   itemsDamage = itemsDamageRegExp.exec(items);'+"\n"+
                    '   while(itemsDamage != null){'+"\n"+
                    '       if((i+2)%2==0){ //if we are on auction item, not owned'+"\n"+
                    '          auctionItemCell = document.getElementById(\'auction_\'+itemsID[y]).parentNode.parentNode.parentNode.parentNode.parentNode;'+"\n"+
                    '          if(Number(itemsDamage[1])<Number(requiredDamage)){ // did not match'+"\n"+
                    '               auctionItemCell.setAttribute(\'style\',\'visibility:hidden\');'+"\n"+
                    '               if((y+2)%2!=0 && hidden){ //2nd cell in row and 1st is hidden - hide whole row'+"\n"+
                    '                   if(!document.getElementById("td1")){'+"\n"+
                    '                      auctionItemCell.parentNode.setAttribute(\'style\',\'display:none\');'+"\n"+
                    '                   }'+"\n"+
                    '               }'+"\n"+
                    '               hidden=true;'+"\n"+
                    '          } else{ //match'+"\n"+
                    '               itemsCount++;'+"\n"+
                    '               hidden=false;'+"\n"+
                    '          }'+"\n"+
                    '       }'+"\n"+
                    '       i++'+"\n"+
                    '       if(((i+2)%2)==0){ //move to next itemID'+"\n"+
                    '           y++;'+"\n"+
                    '       }'+"\n"+
                    '       itemsDamage = itemsDamageRegExp.exec(items);'+"\n"+
                    '   }'+"\n"+
                    '   //view result'+"\n"+
                    '   document.getElementById(\'damageFilterResult\').innerHTML = \''+L_wearponsFound+': <b>\'+itemsCount+\'</b>\';'+"\n"+
                    '   document.getElementById(\'damageFilterResult\').style.display = \'block\';'+"\n"+
                    '}'+"\n";
                    // minimal damage filter
                    createElemenWithID("tr","Item_Damage_Search",document.getElementById('auction_filter').getElementsByTagName('tr')[3]);
                    document.getElementById('Item_Damage_Search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_minDamage+':</td><td style="width: 50%;"><input type="int" name="SelectDamage" id="SelectDamage" value="0" maxlength="5" size="3"><input style="margin-left:5px;" onclick="filterItemsByDamage(document.getElementById(\'SelectDamage\').value)" value="'+L_search+'" class="button3" type="button"><div id="damageFilterResult" class="title_box" style="display:none"></div></td>';
                }
                submitButton.setAttribute('onclick',"if(document.getElementById('SelectPrefix').value!='SP'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value=document.getElementById('SelectPrefix').value;}if(document.getElementById('SelectSuffix').value!='SS' && document.getElementById('SelectPrefix').value!='SP'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value+= ' '+document.getElementById('SelectSuffix').value;}else if(document.getElementById('SelectSuffix').value!='SS'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value=document.getElementById('SelectSuffix').value;}");
            } else if(itemType == 7){ //food
                createElemenWithID("tr","Food_Search",document.getElementById('auction_filter').getElementsByTagName('tr')[1]);
                document.getElementById('Food_Search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_food+':</td><td style="width: 50%;"><select id="SelectFood" name="SelectFood">\n<option value="SF">- '+L_selectFood+' -</option>\n' + makeOpitonsFromItemList(foodList) + '</select></td>';
                submitButton.setAttribute('onclick',"if(document.getElementById('SelectFood').value!='SF'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value=document.getElementById('SelectFood').value;}");
            } else if(itemType == 11){ //temporary improvements
                createElemenWithID("tr","TempImp_Search",document.getElementById('auction_filter').getElementsByTagName('tr')[1]);
                document.getElementById('TempImp_Search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_upgrades+':</td><td style="width: 50%;"><select id="SelectTempImp" name="SelectTempImp">\n<option value="STI">- '+L_selectUpgrades+' -</option>\n' + makeOpitonsFromItemList(tempImpList) + '</select></td>';
                submitButton.setAttribute('onclick',"if(document.getElementById('SelectTempImp').value!='STI'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value=document.getElementById('SelectTempImp').value;}");
            } else if(itemType == 12){ //improvements
                createElemenWithID("tr","Imp_Search",document.getElementById('auction_filter').getElementsByTagName('tr')[1]);
                document.getElementById('Imp_Search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_enisxisis+':</td><td style="width: 50%;"><select id="SelectImp" name="SelectImp">\n<option value="SI">- '+L_selectEnixsiseis+' -</option>\n' + makeOpitonsFromItemList(impList) + '</select></td>';
                submitButton.setAttribute('onclick',"if(document.getElementById('SelectImp').value!='SI'){document.getElementById('auction_filter').getElementsByTagName('input')[0].value=document.getElementById('SelectImp').value;}");
            } else if(itemType == 15){ //mercenaries
            //todo filter by values
            }
		}else if(GCAO_mod=='market'){ //market
            var clearButton = '<div id="Clear" style="background-image: url(' + img_clear + ');background-position: 0px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;" onmouseover="document.getElementById(\'Clear\').setAttribute(\'style\',\'background-image: url(' + img_clear + ');background-position: 22px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;\')" onmouseout="document.getElementById(\'Clear\').setAttribute(\'style\',\'background-image: url(' + img_clear + ');background-position: 0px 0px;position:absolute;margin-top:-24px;margin-left:208px;width:22px;height:22px;\')" onclick="document.getElementById(\'content\').getElementsByTagName(\'input\')[5].value=\'\'" title="Clear"></div>';
            document.getElementById('content').getElementsByTagName('tr')[8].getElementsByTagName('td')[1].innerHTML += clearButton;
            createElemenWithID("tr","Item_Name_Search",document.getElementById('content').getElementsByTagName('tr')[9]);
			document.getElementById('Item_Name_Search').innerHTML = '<td style="width: 50%; text-align: center;">'+L_Items+':</td><td style="width: 50%;">\n<select id="SelectItem" name="SelectItem"><option value="SI">- '+L_selectItem+' -</option>\n' + makeOpitonsFromItemList(prefixList) + '</select></td>';
			document.getElementById('content').getElementsByTagName('input')[6].setAttribute('onclick',"if(document.getElementById('SelectItem').value!='SI'){document.getElementById('content').getElementsByTagName('input')[5].value=document.getElementById('SelectItem').value;}")
		}
	}
}

// name: makeOpitonsFromItemList(OptionList)
// @param string with options "n[name]v[value]c[color]|n[name1]v[value1]c[color1]..." v[value] and c[color] are optional
// @return string with option html tags
function makeOpitonsFromItemList(OptionList){
    var options = OptionList.split("|");
    var nameRegExp = /n\[(.+?)\]/i;
    var valueRegExp = /v\[(.+?)\]/i;
    var colorRegExp = /c\[(.+?)\]/i;
    var name = ""; var value = ""; var color = ""; var htmlOptionList = "";
    for (i in options){
        name  = (nameRegExp.test(options[i]))  ? options[i].match(nameRegExp)[1]  : "Option not found";
        value = (valueRegExp.test(options[i])) ? options[i].match(valueRegExp)[1] : name;
        color = (colorRegExp.test(options[i])) ? options[i].match(colorRegExp)[1] : "";
        shadow = (colorRegExp.test(options[i])) ? 'text-shadow: 0pt 0pt 2px '+options[i].match(colorRegExp)[1]+';' : "";
		if(color=='yellow'){color='#BFAF00';}else if(color=='orange'){color='#FF7F00';}
        htmlOptionList += '<option value="' + value + '" style="color: ' + color + '; ' + shadow + '">' + name + '</option>\n';
    }
    return htmlOptionList;
}

function createElemenWithID(element,id,location){
    var option = document.createElement(element);
    option.setAttribute('id', id);
    if(location){location.parentNode.insertBefore(option, location);}
}

function displayWarnGuildShorAuctionButton(){
	var time= document.getElementById('header_game').getElementsByTagName('span')[6].innerHTML.match(/(\d+:\d+)/i)[1];
	var L_Auction = document.getElementById('sidebar_inner').innerHTML.match('class="submenuitem_aktive" target="_self">([^<]+)</a>')[1];
	var L_AuctionType = document.getElementById('mainnav').innerHTML.match('current" style="cursor:pointer;">([^<]+)</a>')[1];
    var message='['+time+'] '+L_Auction+' ('+L_AuctionType+') : '+L_veryShort;
	var auctionStatus = document.getElementById('content').getElementsByTagName('p')[1].innerHTML;

	if ((auctionStatus.match(/<span class="description_span_right"><b>(.+?)<\/b><\/span>/i)[1])==L_veryShort){
		createElemenWithID("div","warn_guild_div",document.getElementById('content').getElementsByTagName('p')[2]);
		document.getElementById('warn_guild_div').style.margin = "0px 45%";
		document.getElementById('warn_guild_div').innerHTML = '<input id="announButton" value="'+L_anunGuild+'" class="button1" type="submit" name="sendmails" /><span id="messageText" style="display:none;">'+message+'</span>';
		document.getElementById("announButton").addEventListener("click", sentAuctionGuildMessage, false);
	}
}

function sentAuctionGuildMessage(){
	var message=document.getElementById('messageText').innerHTML;
	if(Get_Cookie("GCAOguildMates")){
        var temp = Get_Cookie("GCAOguildMates").split("#");
        var mate = new Array();
        var code = "";
        for(var i=0; i < temp.length; i++){
            mate = temp[i].split("<");
            code += '&qq'+mate[1]+'=0O0O00';
        }
		code+= '&message='+message;
		GM_xmlhttpRequest({
			method: "POST",
			url: GCAO_siteurl+'mod=guild_main&submod=admin_mail&sh='+GCAO_secureCode,
			headers: {
			'Host': GCAO_siteurl.replace('http://','').replace('/game/index.php?',''),
			'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; el; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'Accept-Language': 'el-gr,el;q=0.8,en-us;q=0.5,en;q=0.3',
			'Accept-Encoding': 'gzip,deflate',
			'Accept-Charset': 'ISO-8859-7,utf-8;q=0.7,*;q=0.7',
			'Keep-Alive': '115',
			'Connection': 'keep-alive',
			'Referer': GCAO_siteurl.replace('game/index.php?',''),
			'Content-Type': 'application/x-www-form-urlencoded',
			},
			data : code,
			onload: function(response){
				document.getElementById('announButton').value=L_MessageWasSent;
			}
		});
	}
}