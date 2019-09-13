function writeCookie(name, value, days){
	var expires = "";

	if(days){
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString(); 
	}
	var cookieString = name + "=" + value + expires + " path=/";
	alert(navigator.cookieEnabled);
	document.cookie = cookieString;

}

window.onload = function(eve){
	document.getElementById("messager").onblur = function(eve){
		validate(5, 11, this, document.getElementById('messager_help'));
	}
	document.getElementById("zipcode").onblur = function(eve){
		validateNumber(this, document.getElementById('zipcode_help'));
	}
	document.getElementById("date").onblur = function(eve){
		validateDate(this, document.getElementById('messager_help_date'));
	}
	document.getElementById("email").onblur = function(eve){
		validateEmail(this.value, document.getElementById('messager_help_email'));
	}
}

function validateEmail(inputStr, helpText){
	var regex = /^[\w.-_]+@[\w-]+(\.\w{2,4})+$/;
	var helpMessage = "formato invalidado pela expressão regex para email";
	if(!regex.test(inputStr)){
		if(helpText != null){
			helpText.innerHTML = helpMessage;
		}
		return false
	}else{
		if(helpText != null){
			helpText.innerHTML = "";
		}
	}
}

function validate(minLength, maxLength, campo, helpText){
	if(!validateNonEmpty(campo, helpText)){	
		return false;
	}
	if(!validateLength(minLength, maxLength, campo, helpText)){
		return false;
	}
}

function validateDate(campo, helpText){
	if(!validateNonEmpty(campo, helpText)){	
		return false;
	}
	validateRegex(campo.value, helpText);
}

function validateRegex(inputStr, helpText){
	var regex = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
	var helpMessage = "formato invalidado pela expressão regex";
	if(!regex.test(inputStr)){
		if(helpText != null){
			helpText.innerHTML = helpMessage;
		}
		return false
	}else{
		if(helpText != null){
			helpText.innerHTML = "";
		}
	}
}

function validateLength(minLength, maxLength, campo, helpText){
	if(campo.value.length <= minLength && helpText != null){
		helpText.innerHTML = "Campo com tamanho mínimo.";
		return false;
	}else if(campo.value.length >= maxLength && helpText != null){
		helpText.innerHTML = "Campo com tamanho máximo.";
		return false;
	}else{
		helpText.innerHTML = "";
		return true;	
	}	
}

function enviar(form){ 
	if (validate(1, 32, form["messager"], document.getElementById('messager_help'))) {
		return true;
	}else{
		helpText.innerHTML = "";
		return true;	
	}	
}

function validateNumber(campo, helpText){
	if (isNaN(campo.value)) {
		helpText.innerHTML = "O campo deve possuir somente números.";
		return false;
	}else{
		helpText.innerHTML = "";
		return true;	
	}	
}

function validateNonEmpty(campo, helpText){
	if(campo.value.length == 0 && helpText != null){
		helpText.innerHTML = "Campo obrigatório.";
		return false;
	}else{
		helpText.innerHTML = "";
		return true;	
	}
	
}

function readCookie(name){
			var searchName = name + "=";
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var c = cookies[i];
				while(c.charAt(0) == ' ')
					c = c.substring(1, c.length);
				if(c.indexOf(searchName) == 0)
					return c.substring(searchName.length, c.length);
			}
			return null;
		}