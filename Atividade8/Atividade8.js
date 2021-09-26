alert("Essa é uma pesquisa a respeito do filme que acabou de assistir.");

var idade;
var sexo;
var opiniao;
var media = 0;
var maisVelha = 0;
var maisNova = 20;
var opPessima = 0;
var opPositiva = 0;
var mulheres = 0;
var homens = 0;

for (var cont = 0; cont < 45; cont++) {
	idade = prompt("Qual sua idade?");
	sexo = prompt("Qual seu gênero? (F/M)");
	opiniao = prompt("Digite sua opinião a respeito do filme, sendo: \n4 = ótima \n3 = boa \n2 = regular \n1 = péssima \nInforme somente o número.");
	
	if (idade <= maisNova)
	{
		maisNova = idade;
	}
	
	if (idade >= maisVelha)
	{
		maisVelha = idade;
	}
	
	if (opiniao == 1)
	{
		opPessima++;
	}
	
	if (opiniao == 4 || opiniao == 3)
	{
		opPositiva++;
	}
	
	if (sexo == "F" || sexo == "f")
	{
		mulheres++;
	}
	
	if (sexo == "M" || sexo == "m")
	{
		homens++;
	}
	
	media += parseFloat(idade);
}
media = media / cont;
opPositiva = opPositiva / cont;

alert("A pessoa mais nova que participou tem: " + maisNova + " anos.");
alert("A pessoa mais velha que participou tem: " + maisVelha + " anos.");
alert("A média de idades é igual a: " + media);
alert("A quantidade de pessoas que responderam péssimo foi: " + opPessima);
alert("A porcentagem de pessoas que responderam bom ou ótimo foi: " + opPositiva + "%");
alert("O número de mulheres que responderam foi: " + mulheres);
alert("O número de homens que responderam foi: " + homens);