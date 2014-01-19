if (Posts.find().count() === 0) {
  var tnr = [{
    title: 'Începerea sesiunii de toamnă a Bacalaureatului aduce cursul Leu/Euro la un nou maxim istoric',
    url: 'http://www.timesnewroman.ro/politic/10050-inceperea-sesiunii-de-toamna-a-bacalaureatului-aduce-cursul-leu-euro-la-un-nou-maxim-istoric'
  }, {
    title: '28 de zboruri anulate pe Otopeni, din cauza unui BMW alb lăsat pe avarii în mijlocul pistei',
    url: 'http://www.timesnewroman.ro/monden/11233-28-de-zboruri-anulate-pe-otopeni-din-cauza-unui-bmw-alb-lasat-pe-avarii-in-mijlocul-pistei'
  }, {
    title: 'I-a băgat în faliment! Viorica din Clejani a provocat daune uriaşe, probând haine într-un magazin',
    url: 'http://www.timesnewroman.ro/monden/10411-i-a-bagat-in-faliment-viorica-din-clejani-a-provocat-daune-uriase-proband-haine-intr-un-magazin'
  }, {
    title: 'Nou! După berea cu lămâie şi cea cu fructe, pe piaţă face ravagii berea cu legume şi tarhon',
    url: 'http://www.timesnewroman.ro/life-death/10317-nou-dupa-berea-cu-lamaie-si-cea-de-fructe-pe-piata-face-ravagii-berea-cu-legume-si-tarhon'
  }, {
    title: '"Otrăviţi maidanezii cu cianura de la Roşia Montană", desemnată cea mai bună glumă din internet',
    url: 'http://www.timesnewroman.ro/life-death/10243-otraviti-maidanezii-cu-cianura-de-la-rosia-montana-desemnata-cea-mai-buna-gluma-din-internet'
  }, {
    title: 'Clipe de groază pentru clienţii Carrefour: un angajat a căzut în bazinul cu raci',
    url: 'http://www.timesnewroman.ro/life-death/10186-clipe-de-groaz-pentru-clientii-carrefour-un-angajat-a-cazut-in-bazinul-cu-raci'
  }, {
    title: 'Oprescu despre greva RATB: "Să mai zică lumea că nu sprijin transportul cu bicicleta în Capitală"',
    url: 'http://www.timesnewroman.ro/politic/10459-oprescu-despre-greva-ratb-sa-mai-zica-lumea-ca-nu-sprijin-transportul-cu-bicicleta-in-capitala'
  }, {
    title: 'Nici Biserica, nici Armata! Românii au cea mai mare încredere în prietenul lor cel mai bun',
    url: 'http://www.timesnewroman.ro/life-death/10111-nici-biserica-nici-armata-romanii-au-cea-mai-mare-incredere-in-prietenul-lor-cel-mai-bun'
  }, {
    title: 'Ponta: "În cazul miniştrilor, se consideră şpagă doar dacă suma trece de 1 milion de euro"',
    url: 'http://www.timesnewroman.ro/politic/10062-ponta-in-cazul-ministrilor-se-considera-spaga-doar-daca-suma-trece-de-1-milion-de-euro'
  }, {
    title: 'Doctorul Ciomu, chemat de urgenţă să-i opereze pe suporterii maghiari răniţi azi în Bucureşti',
    url: 'http://www.timesnewroman.ro/sport/10195-doctorul-ciomu-chemat-de-urgenta-sa-i-opereze-pe-suporterii-maghiari-raniti-azi-in-bucuresti'
  }, {
    title: 'Tânăr din Caracal, ridicat de Poliţie după ce a mers cu marijuana la notar să o legalizeze',
    url: 'http://www.timesnewroman.ro/monden/10217-tanar-din-caracal-ridicat-de-politie-dupa-ce-a-mers-cu-marijuana-la-notar-sa-o-legalizeze'
  }, {
    title: 'Cu sala arhiplină! Un cinema din Mizil a aplicat reţeta ProTv şi a proiectat Die Hard şi Home Alone',
    url: 'http://www.timesnewroman.ro/life-death/10428-cu-sala-arhiplina-un-cinema-din-mizil-a-aplicat-reteta-protv-si-a-proiectat-die-hard-si-home-alone'
  }, {
    title: 'Odată cu începerea şcolii, preţul ţigărilor la bucată a atins un nou maxim istoric',
    url: 'http://www.timesnewroman.ro/politic/10259-odata-cu-inceperea-scolii-pretul-tigarilor-la-bucata-a-atins-un-nou-maxim-istoric'
  }, {
    title: 'Pedeapsă divină! Un tânăr s-a înecat cu mâncarea pe care a postat-o pe Facebook',
    url: 'http://www.timesnewroman.ro/life-death/9968-pedeapsa-divina-un-tanar-s-a-inecat-cu-mancarea-pe-care-a-postat-o-pe-facebook'
  }, {
    title: 'CFR nu e în stare de nimic. Întârzierile trenurilor au fost afişate pe tabelă cu o oră întârziere',
    url: 'http://www.timesnewroman.ro/life-death/10386-cfr-nu-e-in-stare-de-nimic-intarzierile-trenurilor-au-fost-afisate-pe-tabela-cu-o-ora-intarziere'
  }];
  
  var real = [{
    title: 'Trei deputaţi, un senator, prefectul şi preşedintele CJ Suceava, la inaugurarea unui lift',
    url: 'http://www.stiri-azi.ro/ziare/articol/articol/trei-deputati-un-senator-prefectul-si-presedintele-cj-suceava-la-inaugurarea-unui-lift/sumar-articol/115956702/'
  }, {
    title: 'Ieşenii, obligaţi să ţină peştii în acvarii opace',
    url: 'http://www.mediafax.ro/life-inedit/iesenii-obligati-sa-tina-pestii-in-acvarii-opace-1078231'
  }, {
    title: 'Un cangur fugărit de copii în Arad a fost prins de poliţişti, însă a murit în maşina unui agent: "Cel mai probabil a murit pe fondul stresului şi al oboselii"',
    url: 'http://www.mediafax.ro/social/un-cangur-fugarit-de-copii-in-arad-a-fost-prins-de-politisti-insa-a-murit-in-masina-unui-agent-cel-mai-probabil-a-murit-pe-fondul-stresului-si-al-oboselii-11901626'
  }, {
    title: 'CNN l-a prezentat drept noul rege al ţiganilor pe Patriarhul Daniel',
    url: 'http://www.cotidianul.ro/cnn-l-a-prezentat-drept-noul-rege-al-tiganilor-pe-patriarhul-daniel-223383/'
  }, {
    title: 'Un barbat a fost impuscat in cap in timpul unei dezbateri aprinse despre filosofia lui Kant, la o coada pentru bere',
    url: 'http://www.hotnews.ro/stiri-international-15591171-rusia-barbat-fost-impuscat-cap-timpul-unei-dezbateri-aprinse-despre-filosofia-lui-kant-coada-pentru-bere.htm'
  }, {
    title: 'Băsescu, aprobat de Guţă: "S-a aliniat majorităţii. Manelele are linii melodice melodioase"',
    url: 'http://www.antena3.ro/romania/basescu-aprobat-de-guta-s-a-aliniat-majoritatii-manelele-are-linii-melodice-melodioase-92934.html'
  }, {
    title: 'Primăria din Borsa a fost închisă pe perioadă nedeterminată dupa o decizie a primarului. Prefectul județului: Primăria nu e închisă, s-a pierdut cheia de la intrare',
    url: 'http://www.hotnews.ro/stiri-esential-15413825-situatie-fara-precedent-intr-oras-din-romania-primaria-din-borsa-fost-inchisa-perioada-nedeterminata-dupa-decizie-primarului-prefectul-judetului-primaria-nu-inchisa-pierdut-cheia-intrare.htm'
  }, {
    title: 'Familia a comandat sicriu din aur pentru regele Cioabă',
    url: 'http://www.rtv.net/familia-a-comandat-sicriu-din-aur-pentru-regele-cioaba_94188.html'
  }, {
    title: 'Mircea Sandu va oferi bilete la meciul România - Ungaria familiei copilului ucis de câinii comunitari',
    url: 'http://www.prosport.ro/fotbal-intern/nationala/mircea-sandu-va-oferi-bilete-la-meciul-romania-ungaria-familiei-copilului-ucis-de-cainii-comunitari-11292745'
  }, {
    title: 'Primaria Satu Mare a inaugurat 10 cosuri de gunoi',
    url: 'http://www.hotnews.ro/stiri-administratie_locala-15372283-primaria-satu-mare-inaugurat-10-cosuri-gunoi.htm'
  }, {
    title: 'Radio Trinitas: prima aplicație oficială a Patriarhiei Romane',
    url: 'http://www.stiri-azi.ro/ziare/articol/articol/radio-trinitas-prima-aplicatie-oficiala-a-patriarhiei-romane/sumar-articol/87536480/'
  }, {
    title: 'Comisia Europeană a inclus România pe harta trenurilor de mare viteză',
    url: 'http://www.digi24.ro/Stiri/Digi24/Actualitate/Stiri/Comisia+Europeana+a+inclus+Romania+pe+harta+trenurilor+de+mare+v'
  }, {
    title: 'Un câine poliţist, arestat în cadrul unui control la o vamă din Republica Moldova',
    url: 'http://www.antena3.ro/externe/un-caine-politist-arestat-in-cadrul-unui-control-la-o-vama-din-republica-moldova-232281.html'
  }, {
    title: 'Proteste la Londra, din cauza gazelor de sist. 6 persoane s-au lipit cu super glue de o clădire',
    url: 'http://stirileprotv.ro/stiri/international/proteste-la-londra-din-cauza-gazelor-de-sist-6-persoane-s-au-lipit-cu-super-glue-de-o-cladire.html'
  }];
  
  _.each(tnr, function(post) {
    post.fake = true;
  });
  
  _.each(real, function(post) {
    post.fake = false;
  });
  
  var allPosts = tnr.concat(real)
  
  _.each(allPosts, function(post) {
    Posts.insert(post);
  });
}