var xx=new Typed(".dynamic",{
    strings: ["C++","Python","Java"],
    typeSpeed:150,
    backSpeed:150,
    loop: true
    })


    // load form

    const rr=document.querySelector("#registration .form");
    window.addEventListener("load",function(){
        showPopup();
    })
    function showPopup(){
        const timeLimit=4
        let i=0;
        const timer=setInterval(function(){
            i++;
            if(i==timeLimit){
                clearInterval(timer);
                rr.classList.add("show");
            }
            console.log(i)
        },1000)
    }

    // menu click

    $('#menu-btn').click(function(){
        $('nav .navigation ul').addClass('active')
    });
    

    $('#menu-close').click(function(){
        $('nav .navigation ul').removeClass('active' )
    });
    


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