
let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let phonenumber = document.getElementById("txtPhone");
let state = document.getElementById("txtState");
let city = document.getElementById("txtCity");
let work = document.getElementById("txtWork");
let form = document.querySelector("form")


function validateInput(){
    console.log("validate input");
    if(userName.value.trim() ===""){
        onError(userName , "")
    }else{
        onSuccess(userName)
    }
    if(email.value.trim()===""){
        onError( email , "")
    }
    else{
        if(!isValidEmail(email.value.trim())){
            onError(email, "")
        }else{
            onSuccess(email)
        }
    }
    if(phonenumber.value.trim() ===""){
        onError(phonenumber , "")
    }else{
        onSuccess(phonenumber)
    }
    if(state.value.trim() ===""){
        onError(state , " ")
    }else{
        onSuccess(state)
    }
    if(city.value.trim() ===""){
        onError(city , " ")
    }else{
        onSuccess(city)
    }
    if(work.value.trim() ===""){
        onError(work , "")
    }else{
        onSuccess(work)
    }
}
document.querySelector("button")
.addEventListener("click" , (event) => {
    event.preventDefault();
    validateInput();
})

function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error")
    parent.classList.add("success")
}
function onError(input , message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error")
    parent.classList.remove("success")
}