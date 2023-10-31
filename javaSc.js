
var xx=new Typed(".dynamic",{
    strings: ["C++","Python","Java"],
    typeSpeed:150,
    backSpeed:150,
    loop: true
    })
    

    // login new window

function func(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById('password').value;

    if(user == '11' && pass == '22'){
        window.open("index.html")
    
    }
    else{
        alert("Wrong Username or Password");
    }

}