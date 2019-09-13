var assentos = [false, true, false, true, true, true, false, true, false];
var assentoMarcado = -1;

function initAssentos(){
	for (var i = 0; i < assentos.length; i++) {
		if(assentos[i]){
			document.getElementById('seat' + i).src = "imagensCinema/seat_avail.png";
			document.getElementById('seat' + i).title = "Assento disponível";
		}else{
			document.getElementById('seat' + i).src = "imagensCinema/seat_unavail.png";
			document.getElementById('seat' + i).title = "Assento indisponível";

		}
	}
}

window.onload = teste;

function teste(){
	alert("onload");
}

function findPoltrona(){
	if (assentoMarcado >= 0) {
		assentoMarcado = -1;
		initAssentos();
	}

	for (var i = 0; i < assentos.length; i++) {
		if(assentos[i] && assentos[i + 1]){
			assentoMarcado = 1;
			document.getElementById('seat' + i).src = "imagensCinema/seat_select.png";
			document.getElementById('seat' + i).title = "seu assento";

			document.getElementById('seat' + (i + 1)).src = "imagensCinema/seat_select.png";
			document.getElementById('seat' + (i + 1)).title = "seu assento";

			var confirma = confirm("Assento "+ (i + 1) +" e "+ (i + 2) +" está disponível, confirmar?")

			if(!confirma){
				assentoMarcado = -1;
				document.getElementById('seat' + i).src = "imagensCinema/seat_avail.png";
				document.getElementById('seat' + i).title = "Assento disponível";
			}else{
				break;
			}
		}
	}
}