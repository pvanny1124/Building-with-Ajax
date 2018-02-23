$('#btn').click(function(){
  $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: 'json'
  })
  .done(addP)
  .fail(function(error){
        alert("Oh no, failed!"); 
  });
})

function addP(data){
     $("p").text(data[0]);
}