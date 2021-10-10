var Aluno1 = new Object();
Aluno1.RA = 30482023049;
Aluno1.Nome = "Rafael";

alert("Primeira maneira de atribuir valor:\n" + 
		"\nRA do Aluno1: " + Aluno1.RA + 
		"\nNome do Aluno1: " + Aluno1.Nome);

Aluno1 = {
RA: 30481913032,
Nome: "Fernanda"
};

alert("Segunda maneira de atribuir valor:\n" + 
		"\nRA do Aluno1: " + Aluno1.RA + 
		"\nNome do Aluno1: " + Aluno1.Nome);

var ra_aluno = 'RA';
var nome_aluno = 'Nome';

Aluno1[ra_aluno] = 30481823026;
Aluno1[nome_aluno] = "Pamela";

alert("Terceira maneira de atribuir valor:\n" + 
		"\nRA do Aluno1: " + Aluno1.RA + 
		"\nNome do Aluno1: " + Aluno1.Nome);