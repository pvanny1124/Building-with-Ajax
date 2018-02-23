var priceDisp = document.querySelector("#price");
var btn = document.querySelector("button");
var currency = "USD";

btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.status == 200 && XHR.readyState == 4){
                var data = JSON.parse(XHR.responseText);
                var price = data.bpi[currency].rate;
                priceDisp.innerHTML = price + " " + currency;
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();

 });