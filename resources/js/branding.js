const item = document.getElementById('title');
const item2 = document.getElementById('branding')
var darkMode = sessionStorage.getItem("darkMode");

item.addEventListener('click',ele =>{
    if(darkMode == true){
        if(item.style.color == ''){
            item.children[0].style.color = '#bb6069';
            item.children[1].style.color = '#bb6069';
        } 
    }
})
item2.addEventListener('click',ele =>{
    if(item2.innerHTML == '&lt;/112523chen&gt;'){
        item2.style.color = '#d9f7f7';
        item2.innerHTML = 'Kit Kat &hearts;';
        item2.style.paddingTop = '10%'
    } else if (item2.innerHTML == 'Kit Kat ♥'){
        item2.innerHTML = '&lt;/112523chen&gt;';
        item2.style.color = '';
        item2.style.paddingTop = '';
    }
})
