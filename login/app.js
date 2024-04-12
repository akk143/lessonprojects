const getfirstname = document.getElementById('firstname'),
      getlastname = document.getElementById('lastname'),
      getemail = document.getElementById('email'),
      getage = document.getElementById('age'),
      getpassword = document.getElementById('password'),
      getcfmpassword = document.getElementById('cfmpassword');
const getshowpassword = document.querySelector('.show-password'),
      getshowcfmpassword = document.querySelector('.show-cfmpassword');



getfirstname.addEventListener('keyup',function(){
    // console.log(getfirstname.value);
    const trimval = getfirstname.value.trimLeft();
    getfirstname.value = trimval;
});


getlastname.addEventListener('keyup',function(){
    // console.log(getlastname.value);
});



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

getshowpassword.addEventListener('click', function() {
    getpassword.type = (getpassword.type === "password") ? "text" : "password";
    getshowpassword.innerHTML = (getpassword.type === "password") ? `<i class="fas fa-lock"></i>` : `<i class="fas fa-lock-open"></i>`;
});

getshowcfmpassword.addEventListener('click', function() {
    getcfmpassword.type = (getcfmpassword.type === "password") ? "text" : "password";
    getshowcfmpassword.innerHTML = (getcfmpassword.type === "password") ? `<i class="fas fa-lock"></i>` : `<i class="fas fa-lock-open"></i>`;
});




