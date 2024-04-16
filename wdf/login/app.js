const getfirstname = document.getElementById('firstname'),
      getlastname = document.getElementById('lastname'),
      getemail = document.getElementById('email'),
      getage = document.getElementById('age'),
      getpassword = document.getElementById('password'),
      getcfmpassword = document.getElementById('cfmpassword');
const getshowpassword = document.querySelector('.show-password'),
      getshowcfmpassword = document.querySelector('.show-cfmpassword');
const registerform = document.getElementById('register');
const errormsg = document.getElementById('passworderror');
const getvalidage = document.getElementById('validage');



getfirstname.addEventListener('keyup', function () {
    const trimval = getfirstname.value.trimLeft();
    getfirstname.value = trimval;
});

function validpassword() {
    if (getpassword.value !== getcfmpassword.value) {
        errormsg.innerText = "Passwords didn't match";
        errormsg.style.color = "red";

        setTimeout(function(){
            errormsg.innerText = "";
         },2000);

        return false;
    } else {
        errormsg.textContent = "";
        return true;
    }
}

function validage() {
    if (getage.value < 18 ) {
        getvalidage.innerText = "Your age must be over 18";
        getvalidage.style.color = "red";

        setTimeout(function(){
            getvalidage.innerText = "";
        },2000);

        return false;
    } else {
        return true;
    }
}


// getshowpassword.addEventListener('click',function(){
//     if(getpassword.type === "password"){
//         getpassword.type = "text";
//         getshowpassword.innerHTML = `<i class="fas fa-lock-open"></i>`;
//     }else{
//         getpassword.type = "password";
//         getshowpassword.innerHTML = `<i class="fas fa-lock"></i>`;
//     }
// });



// getshowcfmpassword.addEventListener('click',function(){
//     if(getcfmpassword.type === "password"){
//         getcfmpassword.type = "text";
//         getshowcfmpassword.innerHTML = `<i class="fas fa-lock-open"></i>`;
//     }else{
//         getcfmpassword.type = "password";
//         getshowcfmpassword.innerHTML = `<i class="fas fa-lock"></i>`;
//     }
// });



getshowpassword.addEventListener('click', function () {
    getpassword.type = (getpassword.type === "password") ? "text" : "password";
    getshowpassword.innerHTML = (getpassword.type === "password") ? `<i class="fas fa-lock"></i>` : `<i class="fas fa-lock-open"></i>`;
});



getshowcfmpassword.addEventListener('click', function () {
    getcfmpassword.type = (getcfmpassword.type === "password") ? "text" : "password";
    getshowcfmpassword.innerHTML = (getcfmpassword.type === "password") ? `<i class="fas fa-lock"></i>` : `<i class="fas fa-lock-open"></i>`;
});


function limitedage(){
    if (getage.value.length > 2) {
        getage.value = this.value.slice(1, 2); // Limit to 2 digits
    }
}


getage.addEventListener('input',limitedage);


function formsubmit(e){
    if (!validpassword() || !validage()) {
        e.preventDefault();
    } else {
        console.log("Form submitted successfully");
        alert("Form submitted successfully");
        window.location.reload();
    }
}

registerform.addEventListener('submit',formsubmit);
getage.addEventListener('input',limitedage);


