window.onload = function(){
    // adding events
    document.getElementById("biete").addEventListener("click",function(){
        window.location.replace("http://localhost:5000/register-user")
    });
    
    document.getElementById("suche").addEventListener("click",function(){
        window.location.replace("http://localhost:5000/register-company")
    });
}
