//var fetch = require("isomorphic-fetch");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    
    //add whatever after "colt" to make this a bad
    //request and see how the error is handled!
  var url = 'https://api.github.com/users/colt';
  fetch(url).then(handleError)
  .then(function(request){
      console.log("everything is fine");
      console.log(request);
  })
  .catch(function(error){
      //this catch will run automatically if there
      //is no internet, or some other error akin to this.
    console.log(error);
  });
});

function handleError (request){
      if(!request.ok){
          throw Error(request.status);
      } 
      return request;
}