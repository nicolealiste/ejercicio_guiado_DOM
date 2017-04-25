function translate(){
	var titile= document.getElementById("form-signin-heading");//traducirá el titulo del formulario
	var email= document.getElementById("inputEmail");//traducira el placeholder del primer input
	var password= document.getElementById("inputPassword");//traducira el placeholder del pass
	var remeber= document.getElementsByTagName("span")[0]; //traducirá el texto junto al checkbox
	//TagName devuelve en un array todos los elementos span del sitio. [0] accede al primer elemento 
	var button= document.getElementsByClassName("btn")[0];//traducirá el texto del botón
	//ClassName devuelve un array de los elementos de la clase. [0] accede al primer elemento

	titile.innerHTML="Por favor inicia sesión";
	email.placeholder="Correo Electrónico";
	password.placeholder="Contraseña";
	remeber.innerHTML="Recordar Datos";
	button.innerHTML="Iniciar Sesión";
};

translate();
function usuario() {
 var email= document.getElementById("inputEmail").value;
 var password= document.getElementById("inputPassword").value;
 trini.innerHTML="<h3>Datos Formulario</h3>"+"<br>"+"El correo electrónico ingresado es <br>"+ email+"<br>"+ "La clave ingresada es <br>"+password;       
        
};

