var url = "https://randomuser.me/api/";
var btn      = document.querySelector("#btn"),
    fullName = document.querySelector("#fullname"),
    username = document.querySelector("#username"),
    avatar   = document.querySelector("#avatar"),
    email    = document.querySelector("#email"),
    city     = document.querySelector("#city");

btn.addEventListener("click", function(){
    fetch(url)
    .then(handleError)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function handleError(request){
      if(!request.ok){
          throw Error(request.status);
      } 
      return request;
}

function parseJSON(res){
    return res.json().then(function(parsedData){
        return parsedData.results[0];
    });
}

function updateProfile(data){
    //Update name
    fullName.innerHTML = data.name.first + " " + data.name.last;
    
    //Update username
    username.innerHTML = data.login.username;
    
    //Update avatar
    avatar.src = data.picture.medium
    
    //Update email;
    email.innerHTML = data.email;
    
    //Update city
    city.innerHTML = data.location.city;
}

function printError(error){
    console.log(error);
}