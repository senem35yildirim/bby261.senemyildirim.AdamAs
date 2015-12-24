var kelimeler = new Array('kütüphane','arşiv','bilimsel bilgi','big Deal', 'erişim','literatür','kitaplık','ünak''ULAKNET','dizin','üst veri','yakınsama','veri tabanı');
var kelimeSayisi = kelimeler.length; 
 var secilenKelimeNo = Math.floor(Math.random() * kelimeSayisi); 
 var secilenKelime = kelimeler[secilenKelimeNo]; 
 var harfSayisi = secilenKelime.length; 
 var hataSayisi = 0;
 
 var harfTutucu = new Array(); 


 for (var j=0; j<harfSayisi; j++){ 
         harfTutucu[j] = ' _ '; 
         harfTutucu[secilenKelime.indexOf(' ',j)] = ' - '; 
} 
 
 
 function harfKontrol(secilenHarf){ 
//     for (var i=0; i<harfSayisi; i++){ 
         bulunanHarfNo = secilenKelime.indexOf(secilenHarf); 
         if (bulunanHarfNo == -1){
          hataliysa_ara()   
         } else {
         harfTutucu[bulunanHarfNo] = secilenHarf; 
         document.getElementById("harfTutucuGoster").innerHTML = harfTutucu.join('&nbsp');
         }
    // } 
 } 

function hataliysa_ara(){
hataSayisi += 1
console.log(hataSayisi)
if (hataSayisi == 4){
console.log("kaybetti")
document.getElementById('klavye').innerHTML="ASILDIN !"
}
adamAs()
}

function adamAs(){
	switch(hataSayisi) {
    	case 0:
        	document.getElementById('adam').src="4.jpg"
        break;
    	case 1:
        	document.getElementById('adam').src="0.png"
        break;
			case 2:
					document.getElementById('adam').src="2.png"
				break;
			case 3:
					document.getElementById('adam').src="1.png"
				break;
            case 4:
					document.getElementById('adam').src="3.png"
				break;
	}
}