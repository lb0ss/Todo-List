//Only listen to elements that already exists when page loads(here is the ul element)
//so that not only the initial lis can be deleted and crossed out. 
$("ul").on("click", "li", function(){  
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){  //"gray won't work here, the system defines the color in rgb in default."
		 //turn it black
		$(this).css({
	 //else, turn it gray
		color:"black",
		textDecoration:"none"	
	 });	
	}	
	 else {
	$(this).css({
	 //else, turn it gray
	color:"gray",
	textDecoration:"line-through"	
	 });	
	}

});

 // A condense way to for marking completion effect

//  $("li").click(function(){
// 	//if li is gray
// 	 $(this).toggleClass("completed");
// });

//click on x to delete todo
//Same principle as the firs chunk of code. Use .on() rather than .click()
$("ul").on("click", "i", function(event){
  $(this).parent().fadeOut(500,function(){
  $(this).remove();
});
  event.stopPropagation(); //stop the event from triggering events of parenting elements.
});

$("input[type='text']").keypress(function(event){
 if(event.which === 13){
 	//grabbing new todo text
 	var todoText = $(this).val();
 	//reset the input
 	$(this).val("");
 	//create a new li and add to ul
 	$("ul").append("<li><i class='fa fa-trash'></i> "+ todoText + "</li>");
 }	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});





