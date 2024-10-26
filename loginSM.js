const myh3 = document.getElementById("myh3");
const fullName = String(document.getElementById("fullName").value);


function login(){
    myh3.textContent = `Hello, ${fullName}!`;
    
}

function navigateToPage(){
    window.location.href = "profile.html";
}
