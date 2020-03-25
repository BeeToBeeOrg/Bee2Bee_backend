window.onload = function(){
    // adding events
    document.getElementById("add-user").addEventListener("click",function(){
       register(
           {
               firstName: "John",
               lasName: "Dave",
               skills:["dancing", "cleaning"],
               residence:{
                   city:"Berlin",
                   street:"Baumstarße 32a",
                   district:"Baumstreet",
                   post_code:"007"
               },
               income: "2.300",
               group:false
           }
       )
    });
    
    
}

function register(user){
    axios.post('http://localhost:3000/users',{
        firstName: user.firstName,
        lastName: user.lastName,
        skills: user.skills,
        residence: user.residence,
        income: user.income,
        group: user.group,
    }).then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
       console.log(error);
      });
      
     
}