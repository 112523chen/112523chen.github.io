const branding = document.getElementById('title');
const message = document.getElementById('branding');
const titles = document.getElementById('identity');
var darkMode = sessionStorage.getItem("darkMode");

branding.addEventListener('click',ele =>{
    if(darkMode == true){
        if(branding.children[0].style.color == ''){
            branding.children[0].style.color = '#bb6069';
            branding.children[1].style.color = '#bb6069';
        } else{
            branding.children[0].style.color = '';
            branding.children[1].style.color = '';
        }
    }
})

message.addEventListener('click',ele =>{
    if(message.innerHTML == '&lt;/112523chen&gt;'){
        message.style.color = '#d9f7f7';
        message.innerHTML = 'Kit Kat &hearts;';
        message.style.paddingTop = '10%'
    } else if (message.innerHTML == 'Kit Kat ♥'){
        message.innerHTML = '&lt;/112523chen&gt;';
        message.style.color = '';
        message.style.paddingTop = '';
    }
})
