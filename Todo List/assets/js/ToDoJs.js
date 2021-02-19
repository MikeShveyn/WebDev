//check Off specific todos by clicking
$("ul").on("click", "li", function(){
 $(this).toggleClass("complited");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function(){
   	$(this).remove();
   });
   event.stopPropagation();//stops from babeling another elements
})

//add new todos
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
  	//grabbing new todo text from input
  var todoText = $(this).val();
  $(this).val("");
  //creat new li and add to ul
  $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
  }
});

$("h1 span").click(function(){
 $("input[type='text']").fadeToggle();
})
