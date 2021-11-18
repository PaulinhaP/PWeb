function validarDados() {
	if (document.forms.formulario.elements[0].value == "" || document.forms.formulario.elements[0].value.length < 10) {
		alert("O campo NOME deve ter no mínimo 10 caracteres!");
		document.forms.formulario.elements[0].focus();
		return false;
    };

    if (document.forms.formulario.elements[1].value == "" || document.forms.formulario.elements[1].value.indexOf('@') == -1 || document.forms.formulario.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha o campo E-MAIL corretamente!");
        document.forms.formulario.elements[1].focus();
        return false;
    }

    if (document.forms.formulario.elements[2].value == "" || document.forms.formulario.elements[2].value.length < 20) {
        alert("O campo COMENTÁRIO deve ter no mínimo 20 caracteres!");
        document.forms.formulario.elements[2].focus();
        return false;
    }
		
	var r = document.getElementsByName("radiobox");
	var i;
	if (r[0].checked){
		alert("Volte sempre a esta página.");
	}
	else if (r[1].checked){
		alert("Que bom que você voltou a visitar esta página!");
	}
	else
	{
		alert("Necessário escolher uma das opções sobre acesso a página.");
		return false;
	}
	
    return true;
}
	
	