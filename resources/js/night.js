var switch_dark_button = document.getElementById('dark_button');
var switch_light_button = document.getElementById('light_button');

// Websites elements
var github_links = document.getElementsByClassName("github");
var website_links = document.getElementsByClassName("website");
let brand_links = document.getElementsByClassName('links');
var important = document.getElementsByClassName('highlight');
var project_skills = document.getElementsByClassName('project_skill');


//Light to Dark Hover
switch_dark_button.addEventListener("mouseenter",()=>{
    switch_dark_button.style.color = '#4d4d4d';
    // #e6e6e6
});
switch_dark_button.addEventListener('mouseleave',()=>{
    switch_dark_button.style.color = '';
});

//Dark to Light Hover
switch_light_button.addEventListener("mouseenter",()=>{
    switch_light_button.style.color = '#ffffff';
});
switch_light_button.addEventListener('mouseleave',()=>{
    switch_light_button.style.color = '';
});


updateWebpage = () => {
    document.body.classList.toggle('dark-mode');

    Object.values(important).forEach(ele => {
        ele.classList.toggle('dark-mode');
    });

    Object.values(project_skills).forEach(ele => {
        ele.classList.toggle('dark-mode');
    })

    Object.values(github_links).forEach(ele => {
        ele.children[0].classList.toggle('dark-mode');
    });
    Object.values(website_links).forEach(ele => {
        ele.children[0].classList.toggle('dark-mode');
    });

    Object.values(brand_links).forEach(ele => {
        ele.children[0].classList.toggle('dark-mode');
    });

    if(switch_light_button.hidden == true){
        switch_light_button.hidden = false;
        switch_dark_button.hidden = true;
    } else{
        switch_light_button.hidden = true;
        switch_dark_button.hidden = false;
    }
}


switch_dark_button.addEventListener('click',ele =>{
    updateWebpage();
});
switch_light_button.addEventListener('click',ele =>{
    updateWebpage();
});

// Finds user's system preference on dark mode and updates webpage to preference
const DarkModePreference = window.matchMedia("(prefers-color-scheme:dark)").matches
DarkModePreference ? updateWebpage() : null;
