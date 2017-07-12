$(document).ready(function(){
	console.log("Let's get ready to party with jQuery!");
	$("article img").addClass("image-center");
	$("article p:last").remove();
	$("h1").css("font-size", (Math.floor(Math.random()*100))+"px");
	$("ol").append($("<li>",{text: "Neither do puppies!"}));
	var $aside = $("aside");
	$aside.empty().append($("<p>",{text: "Sorry about the silly list. "
		+ "It was really silly. So we made it go away."}));
	$(".col-sm-4").on("change", function(){
		var $input = $("input");
		$("body").css("background-color", "rgba(" 
			+ $input.eq(0).val() + "," 
			+ $input.eq(2).val() + "," 
			+ $input.eq(1).val() + ", 1)");
	});
	$("img").on("click", function(){
		$(this).remove();
	});
});