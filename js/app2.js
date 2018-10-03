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

	//Eventos

	cero.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 0;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "0";
			}
		}
	}

	uno.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 1;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "1";
			}
		}
	}

	dos.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 2;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "2";
			}
		}
	}

	tres.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 3;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "3";
			}
		}
	}

	cuatro.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 4;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "4";
			}
		}
	}

	cinco.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 5;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "5";
			}
		}
	}

	seis.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 6;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "6";
			}
		}
	}

	siete.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 7;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "7";
			}
		}

	}

	ocho.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 8;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "8";
			}
		}
	}

	nueve.onclick = function(e) {
		if (display.textContent == "0") {
			display.textContent = 9;
		} else {
			if (display.textContent.length < 8) {
				display.textContent = (display.textContent) + "9";
			}
		}
	}

	/*=============================================
	=            OPERACIONES            =
	=============================================*/
	mas.onclick = function(e) {
		operandoa = display.textContent;
		operacion = "+";
		limpiar();
		cantidadDecimal = false;
	}

	menos.onclick = function(e) {
		operandoa = display.textContent;
		operacion = "-";
		limpiar();
		cantidadDecimal = false;
	}

	por.onclick = function(e) {
		operandoa = display.textContent;
		operacion = "*";
		limpiar();
		cantidadDecimal = false;
	}

	dividido.onclick = function(e) {
		operandoa = display.textContent;
		operacion = "/";
		limpiar();
		cantidadDecimal = false;
	}

	igual.onclick = function(e) {
		operandob = display.textContent;
		resolver();
		acomodarDisplay();
		duplicar();
		cantidadDecimal = false;
	}

	on.onclick = function(e) {
		display.textContent = 0;
		cantidadDecimal = false;

	}

	sign.onclick = function(e) {
		opuest();
		cantidadDecimal = false;

	}

	punto.onclick = function(e) {

		if (!cantidadDecimal) {
			display.textContent += ".";
			cantidadDecimal = true;
		}

	}

	/*=============================================
	=            METODOS            =
	=============================================*/
	function duplicar() {
		(res = display.textContent)*2;
	}

	function limpiar() {
		display.textContent = "";
	}

	function opuest() {

		var numeroEnPantalla = display.textContent;
		var nuevoNumero = parseInt(numeroEnPantalla) * -1;
		display.textContent = nuevoNumero;

	}

	function resetear() {
		display.textContent = "";
		operandoa = 0;
		operandob = 0;
		operacion = "";
	}

	/*=============================================
	= FUNCION PARA QUE NO DESBORDE LA PANTALLA  =
	=============================================*/

	function acomodarDisplay() {
		var cadena = display.innerHTML
		var numero = parseFloat(cadena)
		limite = 8
		if (cadena.indexOf(".") != -1) {
			limite++
		}
		if (cadena.indexOf("-") != -1) {
			limite++
		}

		if (cadena.length > limite) {
			if (numero - numero.toFixed(0) == 0) {
				display.innerHTML = numero
			} else {
				display.innerHTML = parseFloat(cadena).toPrecision(8)
			}

		}
	}

	function resolver() {
		var res = 0;
		switch (operacion) {

			case "+":
				res = parseFloat(operandoa) + parseFloat(operandob);
				acomodarDisplay();
				break;

			case "-":
				res = parseFloat(operandoa) - parseFloat(operandob);
				acomodarDisplay();
				break;

			case "*":
				res = parseFloat(operandoa) * parseFloat(operandob);
				acomodarDisplay();
				break;

			case "/":
				res = parseFloat(operandoa) / parseFloat(operandob);
				acomodarDisplay();
				break;

		}
		resetear();
		display.textContent = res;
	}


}