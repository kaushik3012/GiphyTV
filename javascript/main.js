/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){
    
    var input = document.querySelector("input").value;
    var finalInput = input.replace(/\s/g, '+');
    ajax(finalInput);

});


document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
    //if the key ENTER is pressed...
    if(e.key === 'Enter') {
        var input = document.querySelector("input").value;
        var finalInput = input.replace(/\s/g, '+');
        ajax(finalInput);      
        
    }
});



/* 2. do the data stuff with the API */
function ajax(input) {
    var url="http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e) {
        var data = e.target.response;
        pushToDOM(data);
    });
}






/* 3. Show me the GIFs */
function pushToDOM(input) {

    var response = JSON.parse(input);
    var imageUrls = response.data;    
    var container = document.querySelector(".js-container");

    container.innerHTML = "";
    

    for(i = 0; i<20;i++) {
        
        // concatenate a new IMG tag
        setTimeout(function(){
                var src = imageUrls[i].images.fixed_height.url;
                container.innerHTML = "";
                container.innerHTML += "<div class=\"gif\"><img src='"+ src +"' class='container__image' /></div>";
                i++;
        }, 3000*i);
    }
    

}