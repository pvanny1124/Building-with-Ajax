var fetch = require("isomorphic-fetch");
//import is not suppored by nodeJS yet
//in order to use fetch, you have to use the fetch api.
//npm install it with: npm install --save isomorphic-fetch es6-promise

//fetch is an alternative to using XMLhttpRequests
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//second parameter of fetch are the "options" such as method and body. there are way more!
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        name: "blue",
        login: "bluecat"
        //stringify converts name to "name" and login to "login" to convert into JSON!
    })
}).then(function(response){
    console.log(response);
    //response is a promise! parse with json() method
    return response.json().then(function(data){
        console.log(data.bpi.EUR.rate);
    });
})