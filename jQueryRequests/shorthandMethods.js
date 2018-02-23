$("#getBtn").click(function(){
    $.get("https://api.github.com/users/colt")
    .done(function(data){
        console.log(data);
    })
});


$("#getJSONBtn").click(function(){
    //Parses JSON automatically
   $.getJSON("https://api.github.com/users/colt")
   .done(function(data){
       console.log(data);
   })
   .fail(function(error){
       console.log(error);
   })
});