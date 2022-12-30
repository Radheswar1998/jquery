$(document).ready(function(){
				$("#fname").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[A-Za-z. ]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#fullNameError").text("Only Charcters are Allowed..");
						$("#fullNameError").css("color", "red");
					} else {
						$("#fullNameError").text("");
					}
					return isValid;
				});
				
				$("#p_no").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[0-9]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#phoneNumberError").text("Only Number Allowed..");
						$("#phoneNumberError").css("color", "red");
					} else {
						$("#phoneNumberError").text("");
					}
					return isValid;
				});
				$("#email").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					console.log(String.fromCharCode(keyCode));
					var regex = /^[^@]+@[^@]{2,}\.[^@]{2,}$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#emailError").text("Enter Valid Email..");
						$("#emailError").css("color", "red");
					} else {
						$("#emailError").text("");
					}
					return isValid;
				});
			});