$(document).ready(function(){

	var SERVER = 'https://vast-earth-2490.herokuapp.com';

// ######################### CHECK NEW EMAILS #########################
	
	$("#check-emails").bind("click", check_new_emails);

	function check_new_emails(){
		$("#readEmail").css("display", "none");
		// $("#emails").prepend("<li id='loadingNotif'>Retrieving data from server...</li>");
		clean_notifications();
		$("#notifications").append("<div><p> Retrieving data from server... </p></div>");

		var url = SERVER + '/email/new';
		$.get(url, show_emails);
	};

	function display_email(id, mail){
		var string_email = "<li data-id='" + id + "' class='clearfix'>";
		string_email += "<div class='selectors'>";
		string_email += "<div class='checked' role='checkBox' data-checked='false'></div>";
		string_email += "<div class='star'></div>";
		string_email += "</div>";
		string_email += "<div class='contentInfo'>";
		string_email += "<div class='from'>" + mail.from + "</div>";
		string_email += "<div class='subject'>" + mail.subject + "</div>";
		string_email += "<div class='preview'>" + mail.preview + "</div>";
		string_email += "</div>";
		string_email += "</li>";
		$("#emails").prepend(string_email);
		clean_notifications();
	};

	function show_emails(received_data){
		// $("#loadingNotif").remove();
		clean_notifications();
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
	};

	function clean_notifications(){
		$("#notifications").children().remove();
	}

// ######################### CHECK A CONCRETE EMAIL #########################

	$("#emails").delegate("li", "click", check_email);
	$("#closeButton").bind("click", close_view);

	function check_email(){
		var url = SERVER + "/email/" + $(this).attr("data-id");
		$.get(url, show_email);
	};

	function show_email(dataReceived){
		$("#readEmail").css("display", "inherit");
		$("#readEmail .fromInside").text(dataReceived.from);
		$("#readEmail .subjectInside").text(dataReceived.subject);
		$("#readEmail .allEmailText").text(dataReceived.email);
	};

	function close_view(){
		$("#readEmail").css("display", "none");
	}

// ######################### CREATE AND SEND A NEW EMAIL #########################

	$("#compose").bind("click", create_new_email);
	
	$("#blank-close").bind("click", reset_and_close_form);
	$("#trash").bind("click", reset_and_close_form);
	
	function reset_and_close_form(){
		$("#new_email")[0].reset();
		$("#blank-email").css("display", "none");
	};

	function create_new_email(){
		reset_and_close_form();
		$("#blank-email").css("display", "inherit");
	};

	$("#send").bind("click", send_mail);

	function send_mail(){
		clean_notifications();
		$("#notifications").append("<div><p> Sending new email, wait please... </p></div>");
		var new_email = $("#new_email").serialize();
		$.post(SERVER + "/email", new_email, process_response);
		reset_and_close_form();
	};

	function process_response(post_response){
		clean_notifications();
		$("#notifications").append("<div><p>" + post_response + "</p></div>");
	};

// ######################### STAR AN EMAIL #########################
	
	$("#emails").delegate(".star", "click", change_star);

	function change_star(event){
		$(this).toggleClass("starred");
		event.stopPropagation();
	};


// ######################### CHECK! #########################

});