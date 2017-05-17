$(document).ready(function () {

		console.log("web load");
		
		$("#find").click(function(){

			var str=$("#input").val();
			console.log(str);

			console.log("txet is"+str);
			if (str) {
			console.log("5");
			$("#first-floor").css("display","block");

			$("#first-floor").find("li").eq(str-1).addClass("current");


			console.log();
		}
		});

		// 以上为一个小测试；；；；；；；
		
	});