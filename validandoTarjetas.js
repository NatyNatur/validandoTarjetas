function gettingNumbers(){ //función para pedirle al usuario que ingrese los números de su tarjeta
	do {
		var success = true; // variable auxiliar
		var creditCard = prompt("Ingresa los números de tu tarjeta de crédito"); 
			if (creditCard.length === 0 ) {
				alert ("Por favor, ingresa los números"); 
				success = false; 
				}
			if (creditCard.match(/[a-zA-Z]/g)) {
				alert("Por favor, ingresa solo números");
				success = false;
				}
			}
	 while (success === false); // mientras las condiciones resulten falsas, seguirá ejecutándose el ciclo pidiendo números
return creditCard;
}
var creditCardNumbers = gettingNumbers();


function creditCard(creditCardNumbers) { // función que comprueba si el número de tarjeta ingresado es válido
	var array = []; // creo un arreglo vacío que recibirá lo realizado en el ciclo
	for (var i = 0; i < creditCardNumbers.length; i++) { // recorre la variable tipo string que ingresó el usuario
		return array;
		}
		var reversedArray = []; // nuevo arreglo vacío que recibirá los datos ingresados a la inversa y convertidos en números
		for (array[i].reverse(); i < array.length; i++) {  
			return parseInt(reversedArray); 
		}
		for (var j = 1; j < reversedArray.length; j++) {
			if (reversedArray[j] % 2 === 0) {
				var doubleNumber = reversedArray[j] * 2;
				if (doubleNumber > 10) {
					doublenumber.toString();
					var sum = parseInt(doublenumber(0)) + parseInt(doublenumber(1));
					reversedArray[j] = sum; 
				} else {
					return reversedArray[j];
				}
			} else {
				return reversedArray[j];
			}
		}
}