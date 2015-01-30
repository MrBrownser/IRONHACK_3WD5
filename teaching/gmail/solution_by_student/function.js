
// show the new emails

$('#compose').click(function(){
	$("#blank-email").show().animate({
		bottom: "39px"
	}, 'fast');
});


$("#blank-close").click(function(){
	$("#blank-email").hide();
})

// form buttons send and delete

$("#send").click(function(){
	var dataInputs = $("#new_email").serialize();	
	
	$.post('/email', dataInputs ,function(data){ 
		$("#blank-email").hide();
		$("#notifications").text("email send!!").css("background-color", "#5DC9B8");
		$("#notifications").show().delay(2000).fadeOut('slow');
	});
});

$("#trash").click(function(){
	$("#blank-email").hide();
	$("#notifications").text("email deleted!").css("background-color", "#7B7B7B")
	$("#notifications").show().delay(2000).fadeOut('slow');
});

// new emails recieved!

$("#check-emails").click(function(){
	
	$.get("/email/new", function(data){ 
		
		$.each(data,function (i, e){
			console.log(i,e);
			var newEmail = 
			'<li class="clearfix" data-id="'+ i +'">'+
	          '<div class="selectors">'+
	            '<div class="checked" role="checkBox" data-checked="false"></div>'+
	            '<div class="starred" data-starred="'+ e.starred +'"></div>'+
	          '</div>'+
	          '<div class="contentInfo">'+
	          '<div class="from">' + e.from + '</div>'+
	          '<div class="subject">' + e.subject + '</div>'+
	          '<div class="preview">' + e.preview + '</div>'+
	          '</div>'+
	        '</li>';
	        //
	        $("#emails").prepend(newEmail);
	        $("#notifications").text("new email").css("background-color", "#5DC9B8");
			$("#notifications").show().delay(2000).fadeOut('slow');
		 });
	});
});

//checked boxes single and multiple

$("#emails").delegate(".checked","click",function(){
	var check = $(this).data('checked')
	if(check){
		$(this).css("background-color", "grey");
	}else{
		$(this).css("background-color", "white");
	}
	$(this).data('checked', !check);
})

$("#select-all").click(function(e){
	
	if($(this).text() === "Select"){
		$("#emails li .selectors .checked").css("background-color", "grey");
		$(this).text("Unselect");
	}else{
		$("#emails li .selectors .checked").css("background-color", "#FFF");
		$(this).text("Select");
	};
});

//show the email complete

$("#emails").delegate("div.contentInfo", "click", function(){
	var mail_id = $(this).data('id');
	$.get("/email/"+ mail_id, function(e){ 	
		
			$("#readEmail").show();
			$("#back").show();
			$("#emails").hide();
			//show all the emails
			var allEmail = 
			'<div class="fromInside">'+ e.from +'</div>'+
			'<div class="subjectInside">'+ e.subject +'</div>'+
			'<div class="allEmailText">'+ e.email +'</div>';
			$("#readEmail").html(allEmail);
	});
});

$("#back").click(function(){
	$("#readEmail").hide();
	$("#emails").show();
	$(this).hide();
});




