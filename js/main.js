let username;
window.onload = function(){
    console.log("Connected")
    let button = document.querySelector("#login");
    checkLogin();
    button.addEventListener("click", function(e)
    {
        e.preventDefault();
        attemptLogin();
    }    
    );
}

function attemptLogin(){
    let kanal = CreateRequest();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    kanal.open("post","server/login.php");
    kanal.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    kanal.onreadystatechange = function(){
        if(kanal.readyState === 4){
            let response = JSON.parse(kanal.responseText);
            document.querySelector("#server").innerHTML = kanal.responseText;
            if(response["success"] == true){
                username = response["general_message"];
                document.querySelector("#profile").innerHTML = username;
                alreadyLogged("now");
            }
        }
    }
    kanal.send(`username=${username}&password=${password}`);
}

function alreadyLogged(text){
    let loginholder = document.querySelector("#loginHolder");
    loginholder.innerHTML = `<p>You're ${text} logged in</p>`;
    let logout = document.createElement("button");
    logout.classList.add("btn");
    logout.classList.add("btn-danger");
    logout.value = "Log out";
    logout.innerText = "Log out";
    logout.addEventListener("click", function(){logOut()})
    loginholder.appendChild(logout);
}

function checkLogin(){
    let kanal = CreateRequest();
    kanal.open("get", "server/isloggedin.php");
    kanal.onreadystatechange = function(){
        if(kanal.readyState === 4){
            let response = JSON.parse(kanal.responseText);
            if(response["success"] == true){
                username = response["general_message"];
                document.querySelector("#profile").innerHTML = username;
                alreadyLogged("already");
            }
        }
    }
    kanal.send();
}

function logOut(){
    let kanal = CreateRequest();
    kanal.open("get", "server/logout.php");
    kanal.onreadystatechange = function(){
        if(kanal.readyState === 4){
            let response = JSON.parse(kanal.responseText);
            if(response["success"] == true){
                window.location.href = "login.html";
            }
        }
    }
    kanal.send();
}

function CreateRequest(){
    let request = false;
    try{
        request = new XMLHttpRequest();
    }
    catch(windows){
        try{
            request = new ActiveXObject("Msxm12.XMLHTTP")
        }
        catch(oldWindows){
            request = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    return request;
}