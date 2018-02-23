var url = "https://opentdb.com/api.php?amount=1";
axios.get(url)
.then(function(res){
    console.log(res.data.results[0].question);
})
.catch(function(err){
    console.log(err);
});

//////////////////////////////////////////
//COMMENT ABOVE CODE FOR BOTTOM TO WORK ON ITS OWN
/////////////////////////////////////////
var btn = document.querySelector("button");
var section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest(){
  axios.get("https://jsonplaaskjldceholder.typicode.com/comments", {
    params: {
      postId: 1
    }
  })
  .then(addComments)
  .catch(handleErrors)
 }

function addComments(res){
  res.data.forEach(function(comment){
    appendComment(comment);
  });
}

function appendComment (comment){
  var newP = document.createElement("p");
  newP.innerText = comment.email;
  section.appendChild(newP);
}

function handleErrors(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }

