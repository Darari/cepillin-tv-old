$(document).ready(function(){

    var loader = document.getElementById("loader");

    /*  */
    window.addEventListener("load", function(){
        loader.style.height = "100px";
        loader.style.width = "100px";
        loader.style.borderRadius = "50%";
        loader.style.visibility = "hidden";
    });
    
    
	$('.carousel').carousel({
	  interval: 8000
	})

    $('#lightgallery').lightGallery();


	$("#contacto_enviar").click(function(){

	    var name = $("#name").val();
	    var email = $("#email").val();
	    var msg_subject = $("#message").val();

	    var valid01 = 1;
	    var valid02 = 1;
	    var valid03 = 1;
        
        if(name.length != 0){
            $('#name').css("border-color", "#a6a6a6");
            $('#name').css("border-width", "1px");
            valid01 = 1;
        } else{
            $('#name').css("border-color", "#fff000");
            $('#name').css("border-width", "7px");
            valid01 = 0;
        }
        
        if(email.length != 0){
            $('#email').css("border-color", "#a6a6a6");
            $('#email').css("border-width", "1px");
            valid02 = 1;
        } else{
            $('#email').css("border-color", "#fff000");
            $('#email').css("border-width", "7px");
            valid02 = 0;
        }
        
        if(msg_subject.length > 0){
            $('#message').css("border-color", "#a6a6a6");
            $('#message').css("border-width", "1px");
            valid03 = 1;
        } else{
            $('#message').css("border-color", "#fff000");
            $('#message').css("border-width", "7px");
            valid03 = 0;
        }

	    if(valid01 == 1 && valid02 == 1 && valid03 == 1) {

	        $.contactForm = {
	            Nombre: name,
	            Correo: email,
	            Mensaje: msg_subject
	        };
	        
	        swal({
	            title: '<br /><div class="sk-spinner sk-spinner-cube-grid"><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div></div>',
	            text: "Enviando información...",
	            allowEscapeKey: false,
	            showConfirmButton: false
	        })
	        
	        ServiceHandler.SendMail($.contactForm,function(response){
	            swal({
	                title: '¡Muchas gracias!',
	                text: 'En breve analizaremos tu información y te contactaremos..',
	                timer: 9000
	            }).then(
	                function () {
	                    window.location.href = "http://www.cepillin.tv/";
	                }, function (dismiss) {
	                    window.location.href = "http://www.cepillin.tv/";
	                }
	            );
	        });
	    } else {
	    	swal("Datos incompletos","Revisa los datos y vuelve a intentar.","warning");
	    }
	});

    window.addEventListener("load", function(){
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                  "background": "#000"
                },
                "button": {
                  "background": "#f1d600"
                },
            },
            "content": {
                "header": '¡Cookies utilizadas en este sitio web!',
                "message": 'Esta web utiliza cookies sólo estadísticos, puede ver nuestra Política de Cookies.',
                "dismiss": 'Acepto',
                "allow": 'Permitir Cookies',
                "deny": 'Rechazar',
                "link": 'Leer más',
                "href": 'http://cepillin.tv/cookies.html',
                "close": '&#x274c;',
                "policy": 'Política de Cookies',
                "target": '_blank',
            }
        })
    });
});

 $(function(){ 
     var navMain = $("#navbarCollapse");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();
	$('.page-section').each(function(i) {
		if ($(this).position().top <= scrollDistance + 15) {
			$('a.nav-link.active').removeClass('active');
			$('a.nav-link ').eq(i).addClass('active');
		}
	});
}).scroll();
