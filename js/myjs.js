$(document).ready(function() {

    var frase =[
      {"value":"Are you ready?"},
      {"value":"Ready for what?"},
      {"value":"ARE YOU READY FOR JOHN CENA!?"},
      {"value":"Get your ticket for just $49.99"},
      {"value":"Thanks:p"}
    ];
    
    var counter=0;
    next(0);
    $( "body" ).click(function() {
        counter++;
        next(counter);
    });
    
    function next(counter){
        $("#textoCentrado").velocity({opacity: 0, blur: 30}, 500, function(){
            document.getElementById('textoCentrado').innerHTML= frase[counter].value;
            $("#textoCentrado").velocity("reverse");   
        });
    }
});