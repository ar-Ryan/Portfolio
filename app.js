var Btn = document.querySelector(".contact-btn")
var Contactlist = document.querySelector(".contactList")


function showcontactlinks(){
    Contactlist.style = "background-color: black ;"
}


Btn.addEventListener('click', showcontactlinks);