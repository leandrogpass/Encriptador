const textoIngresado = document.querySelector(".ingresoTexto");
const mostrarTexto = document.querySelector(".mostrarTexto");
var borrarMuneco = document.querySelector(".imagen-mostrarTexto");

//Funciones de Encriptación

function botonEncriptar(){
	const textoEncriptado = encriptarTexto(textoIngresado.value).toLowerCase();
	textoIngresado.value = "";
	mostrarTexto.value = textoEncriptado;
	borrarMuneco.style.zIndex = 0;
}


function encriptarLetra(letra){
				
		switch (letra){
			case "e":
			letraEncriptada = "enter";
			break;
			case "i":
			letraEncriptada = "imes";
			break;
			case "a":
			letraEncriptada = "ai";
			break;
			case "o":
			letraEncriptada = "ober";
			break;
			case "u":
			letraEncriptada = "ufat";
			break;
			default:
			letraEncriptada = letra;
			break;
		}
		return letraEncriptada;
	}

	var textoEncriptado = "";
	function encriptarTexto(texto){
				
		for (var i = 0; i < texto.length; i++) {
			letraEncriptada = encriptarLetra(texto.charAt(i));
			textoEncriptado = textoEncriptado + letraEncriptada;
		}	
		return textoEncriptado;
	}

//Funciones de Desencriptacion

function botonDesencriptar(){
	const textoDesencriptado = desencriptar(textoIngresado.value);
	textoIngresado.value = "";
	mostrarTexto.value = textoDesencriptado;
	borrarMuneco.style.zIndex = 0;
}

function desencriptar(texto){

 	textoDesencriptado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
 				
	return textoDesencriptado;
 }

function copiar(){
	const textoCopy = document.querySelector(".mostrarTexto").value;
	navigator.clipboard.writeText(textoCopy);
	mostrarTexto.value = "";
	textoEncriptado = "";
	borrarMuneco.style.zIndex = 2;
	window.alert("El texto fue copiado");
}


	

