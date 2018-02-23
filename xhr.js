//Goal: get request from //api.github.com/zen

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    //if status is DONE
    if(XHR.readyState == 4){
        if(XHR.status == 200){
        console.log(XHR.responseText);
        } else {
            console.log("There was a problem");
        }
    }
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();