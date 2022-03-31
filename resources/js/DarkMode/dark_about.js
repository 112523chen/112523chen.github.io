var darkMode = false;
sessionStorage.setItem("darkMode",darkMode);
var b = document.body 
var nav = document.getElementsByClassName('nav_structure');
var links = document.getElementsByClassName('nav_text');
var table_element = document.getElementsByTagName("table");

function changeToDark(){
    b.style.background = '#242933';
    b.style.color = '#d8dee9';
    nav[0].style.background = '#787e89';
    table_element[0].style.background = '#4d6075';
    Object.values(links).forEach(element => {
        element.style.color = '#d8dee9';
    });
}

function changeToLight(){
    b.style.background = '';
    b.style.color = '';
    nav[0].style.background = '';
    table_element[0].style.background = '';
    Object.values(links).forEach(element => {
        element.style.color = '';
    });
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
