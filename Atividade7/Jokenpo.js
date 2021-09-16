alert("Bem vindo ao Jokenpô! Para jogar escreva em letras maiúsculas.");

var escolha;
var computer;

escolha = prompt("Digite se você quer papel, pedra ou tesoura.");
	var sorteio = Math.random();
	if(sorteio <= 0.33)
	{
		computer = "PEDRA";
		alert("Computador escolheu PEDRA.");
	}
	else if(sorteio <= 0.66)
	{
		computer = "PAPEL";
		alert("Computador escolheu PAPEL.");
	}
	else
	{
		computer = "TESOURA";
		alert("Computador escolheu TESOURA.");
	}
	
	if(escolha == computer)
	{
		alert("Empate!!");
	}
	else
	{
		if(escolha == "PEDRA" && computer == "TESOURA")
		{
			alert("Você venceu! Parábens!");
		}
		else if(escolha == "PAPEL" && computer == "PEDRA")
		{
			alert("Você venceu! Parábens!");
		}
		else if(escolha == "TESOURA" && computer == "PAPEL")
		{
			alert("Você venceu! Parábens!");
		}
		else if(escolha == "PEDRA" && computer == "PAPEL")
		{
			alert("Você perdeu! Tente novamente!");
		}
		else if(escolha == "PAPEL" && computer == "TESOURA")
		{
			alert("Você perdeu! Tente novamente!");
		}
		else if(escolha == "TESOURA" && computer == "PEDRA")
		{
			alert("Você perdeu! Tente novamente!");
		}
		else
		{
			alert("Escolha não informada corretamente!");
		}
	}
//}
