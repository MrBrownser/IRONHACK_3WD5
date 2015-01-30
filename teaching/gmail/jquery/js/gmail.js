$(document).ready(function(){

	var SERVER = 'https://vast-earth-2490.herokuapp.com';

// ######################### CHECK NEW EMAILS #########################
	
	$("#check-emails").bind("click", check_new_emails);

	function check_new_emails(){
		var url = SERVER + '/email/new';
		$("#emails").prepend("<li id='loadingNotif'>Retrieving data from server...</li>");
		$.get(url, show_emails);
	};

	function display_email(id, mail){
		var string_email = "<li data-id='" + id + "' class='clearfix'>";
		string_email += "<div class='selectors'>";
		string_email += "<div class='checked' role='checkBox' data-checked='false'></div>";
		string_email += "<div class='starred' data-starred='true'></div>";
		string_email += "</div>";
		string_email += "<div class='contentInfo'>";
		string_email += "<div class='from'>" + mail.from + "</div>";
		string_email += "<div class='subject'>" + mail.subject + "</div>";
		string_email += "<div class='preview'>" + mail.preview + "</div>";
		string_email += "</div>";
		string_email += "</li>";
		$("#emails").prepend(string_email);
	};

	function show_emails(received_data){
		$("#loadingNotif").remove();
		if ( (Object.keys(received_data).length) > 0 ){
			for (var key in received_data){
				if (received_data.hasOwnProperty(key) ){
					display_email(key, received_data[key]);
				}
			}
		} else {
			//CSS PONER MENSAJE DE AVISO/ERROR CON BOOTSTRAP - NO HAY MENSAJES PENDIENTES
			// $("#emails").append("<li>No emails to show<br>(Tip: Click again...)</li>");
		}
		// $("#emails").append() mejor poner otra funcion que escriba los correos.
	};

// ######################### CHECK A CONCRETE EMAIL #########################

	$("#emails li").bind("click", check_email);

	function check_email(){
		console.log($(this));
		// var url = SERVER + "/email/" + $(this).;
	}
		

});