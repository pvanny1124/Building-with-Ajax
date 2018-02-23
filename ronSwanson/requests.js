var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhrBtn      = $("#xhr"),
    fetchBtn    = $("#fetch"),
    jqueryBtn   = $("#jquery"),
    axiosBtn    = $("#axios"),
    quote       = $("#quote");
   
var ajaxOptions = {
        method: "GET",
        url: url,
        dataType: 'json'
}

//Using XHR 
xhrBtn.on("click", function(){
   var XHR = new XMLHttpRequest();
   XHR.onreadystatechange = function() {
       if(XHR.status == 200 && XHR.readyState == 4){
           var data = JSON.parse(XHR.responseText);
           quote.html(data);
       }
   }
   
   XHR.open("GET", url);
   XHR.send();
});

//Using fetch
fetchBtn.on("click", function(){
   fetch(url)
    .then(handleError)
    .then(parseJSON)
    .then(getQuote)
    .then(printError);
});

//Using jQuery
jqueryBtn.on("click", function(){
    $.ajax(ajaxOptions)
    .done(getQuote)
    .fail(printError);
});

//Using Axios
axiosBtn.on("click", function(){
    axios.get(url)
        .then(function(res){
            quote.html(res.data);
        })
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
        return parsedData;
    });
}

function getQuote(data){
    quote.html(data);
}

function printError(error){
    console.log(error);
}