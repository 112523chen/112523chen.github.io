var darkMode = false;
sessionStorage.setItem("darkMode",darkMode);
var b = document.body 
var nav = document.getElementsByClassName('nav_structure');

function changeToDark(){
    b.style.background = '#242933';
    b.style.color = '#d8dee9';
    nav[0].style.background = '#787e89';
}

function changeToLight(){
    b.style.background = '';
    b.style.color = '';
    nav[0].style.background = '';
}


function changeMode(){
    if(darkMode == false){
        changeToDark();
        darkMode = true;
    } else {
        changeToLight();
        darkMode = false;
    }
}
