document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo= 60;
necesarios = 100;
function sumarPuntos() {
	puntos++;
	document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
	randNum = Math.round(Math.random()*450);
	randNum2 = Math.round(Math.random()*450);
	document.getElementById("player").style.marginTop =randNum + "px";
	document.getElementById("player").style.marginLeft =randNum2 + "px";
	if (puntos == 100) {
		alert("Felicidades! Has ganado.")
	
		 setTimeout(function(){
            window.close();
        },3000); //Dejara un tiempo de 3 seg para que el usuario vea que se envio el formulario correctamente
	}
}

function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML =  "&nbsp;&nbsp;&nbsp;Tiempo:  "+tiempo;
	if (tiempo == 0) {
		alert("Perdiste. Intentalo otra vez!");
		tiempo = 0;
		puntos = 0;
	}

}

setInterval(restarTiempo,1000);