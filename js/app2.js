var operandoa;
var operandob;
var operacion;
var cantidadDecimal = false;
var resultado = false;
var signo = null;
var reducir = 0;

function calculadora() {
	var display = document.getElementById("display");
	var cero = document.getElementById("0");
	var uno = document.getElementById("1");
	var dos = document.getElementById("2");
	var tres = document.getElementById("3");
	var cuatro = document.getElementById("4");
	var cinco = document.getElementById("5");
	var seis = document.getElementById("6");
	var siete = document.getElementById("7");
	var ocho = document.getElementById("8");
	var nueve = document.getElementById("9");
	var mas = document.getElementById("mas");
	var menos = document.getElementById("menos");
	var por = document.getElementById("por");
	var dividido = document.getElementById("dividido");
	var igual = document.getElementById("igual");
	var on = document.getElementById("on");
	var punto = document.getElementById("punto");
	var sign = document.getElementById("sign");
	var raiz = document.getElementById("raiz");

	
   /*=============================================
	=            ANIMACION TECLAS               =
	=============================================*/

	cero.addEventListener("mousedown", function() {
		cero.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	cero.addEventListener("mouseout", function() {
		cero.setAttribute("style", "transform:scale(1,1)")
	})

	uno.addEventListener("mousedown", function() {
		uno.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	uno.addEventListener("mouseout", function() {
		uno.setAttribute("style", "transform:scale(1,1)")
	})

	dos.addEventListener("mousedown", function() {
		dos.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	dos.addEventListener("mouseout", function() {
		dos.setAttribute("style", "transform:scale(1,1)")
	})

	tres.addEventListener("mousedown", function() {
		tres.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	tres.addEventListener("mouseout", function() {
		tres.setAttribute("style", "transform:scale(1,1)")
	})

	cuatro.addEventListener("mousedown", function() {
		cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	cuatro.addEventListener("mouseout", function() {
		cuatro.setAttribute("style", "transform:scale(1,1)")
	})

	cinco.addEventListener("mousedown", function() {
		cinco.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	cinco.addEventListener("mouseout", function() {
		cinco.setAttribute("style", "transform:scale(1,1)")
	})

	seis.addEventListener("mousedown", function() {
		seis.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	seis.addEventListener("mouseout", function() {
		seis.setAttribute("style", "transform:scale(1,1)")
	})

	siete.addEventListener("mousedown", function() {
		siete.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	siete.addEventListener("mouseout", function() {
		siete.setAttribute("style", "transform:scale(1,1)")
	})

	ocho.addEventListener("mousedown", function() {
		ocho.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	ocho.addEventListener("mouseout", function() {
		ocho.setAttribute("style", "transform:scale(1,1)")
	})

	nueve.addEventListener("mousedown", function() {
		nueve.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	nueve.addEventListener("mouseout", function() {
		nueve.setAttribute("style", "transform:scale(1,1)")
	})

	mas.addEventListener("mousedown", function() {
		mas.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	mas.addEventListener("mouseout", function() {
		mas.setAttribute("style", "transform:scale(1,1)")
	})

	menos.addEventListener("mousedown", function() {
		menos.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	menos.addEventListener("mouseout", function() {
		menos.setAttribute("style", "transform:scale(1,1)")
	})

	por.addEventListener("mousedown", function() {
		por.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	por.addEventListener("mouseout", function() {
		por.setAttribute("style", "transform:scale(1,1)")
	})

	dividido.addEventListener("mousedown", function() {
		dividido.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	dividido.addEventListener("mouseout", function() {
		dividido.setAttribute("style", "transform:scale(1,1)")
	})

	punto.addEventListener("mousedown", function() {
		punto.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	punto.addEventListener("mouseout", function() {
		punto.setAttribute("style", "transform:scale(1,1)")
	})

	igual.addEventListener("mousedown", function() {
		igual.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	igual.addEventListener("mouseout", function() {
		igual.setAttribute("style", "transform:scale(1,1)")
	})

	sign.addEventListener("mousedown", function() {
		sign.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	sign.addEventListener("mouseout", function() {
		sign.setAttribute("style", "transform:scale(1,1)")
	})

	on.addEventListener("mousedown", function() {
		on.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	on.addEventListener("mouseout", function() {
		on.setAttribute("style", "transform:scale(1,1)")
	})

	raiz.addEventListener("mousedown", function() {
		raiz.setAttribute("style", "transform:scale(0.95,0.95)")
	})
	raiz.addEventListener("mouseout", function() {
		raiz.setAttribute("style", "transform:scale(1,1)")
	})
}