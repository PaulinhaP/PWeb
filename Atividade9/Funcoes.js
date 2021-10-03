var maior;
var numero1;
var numero2;
var numero3;

num1 = prompt("Digite um valor numérico: ");
num2 = prompt("Digite outro valor numérico: ");
num3 = prompt("Digite mais um valor numérico: ");

function numeros(numero1, numero2, numero3){
	if((numero1) > (numero2))
	{
		if((numero1) > (numero3))
		{
			return numero1;
		}
		else
		{
			return numero3;
		}
	}
	else
	{
		if((numero2) > (numero3))
		{
			return numero2;
		}
		else
		{
			return numero3;
		}
	}
}

maior = numeros(num1, num2, num3);

alert("O maior valor numérico digitado foi: " + maior);

var ordem = [num1, num2, num3];
ordem.sort(function(a, b){return a-b});

alert("Os números digitados em ordem crescente é: " + ordem);