var b = document.body 
var nav = document.getElementsByClassName('nav_structure');
var links = document.getElementsByClassName('nav_text');
var project_links = document.getElementsByClassName("project_link");

var foot = document.getElementsByTagName('footer');
var out_links = document.getElementsByClassName("out_links");

var dark_button = document.getElementById('dark');
var light_button = document.getElementById('light');

function changeToDark(){
    b.style.background = '#242933';
    b.style.color = '#d8dee9';
    nav[0].style.background = '#787e89';
    foot[0].style.backgroundColor = '#787e89';
    dark_button.parentElement.hidden = true;
    light_button.parentElement.hidden = false;
    Object.values(links).forEach(element => {
        element.style.color = '#d8dee9';
    });
    Object.values(project_links).forEach(ele => {
        ele.style.color = '#d8dee9';
    });
    Object.values(out_links).forEach(element => {
        element.style.color = '#d8dee9';
    });
} 

function changeToLight(){
    b.style.background = '';
    b.style.color = '';
    nav[0].style.background = '';
    foot[0].style.backgroundColor = '';
    Object.values(links).forEach(element => {
        element.style.color = '';
    });
    Object.values(project_links).forEach(element => {
        element.style.color = '';
    });
    Object.values(out_links).forEach(element => {
        element.style.color = '';
    });
}


function changeMode(){
    if(darkMode == false){
        changeToDark();
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme','dark');
        darkMode = true;
    } else {
        changeToLight();
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme','light');
        darkMode = false;
    }
}

dark_button.addEventListener('mouseenter',ele =>{
    dark_button.style.color = 'darkgray';
});
dark_button.addEventListener('mouseleave',ele =>{
    dark_button.style.color = '';
});
dark_button.addEventListener('click',ele =>{
    changeMode();
});

light_button.addEventListener('mouseenter',ele =>{
    light_button.style.color = 'darkgray';
});
light_button.addEventListener('mouseleave',ele =>{
    light_button.style.color = '';
});
light_button.addEventListener('click',ele =>{
    changeMode();
});

//
var theme = sessionStorage.getItem("theme");
if(theme == 'dark'){
    changeToDark();
    var darkMode = true;
} else{
    var darkMode = false;
}