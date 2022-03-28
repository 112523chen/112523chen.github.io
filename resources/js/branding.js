const item = document.getElementById('title');
var count = 0;

item.addEventListener('click',ele =>{
    if(item.style.color == ''){
        item.children[0].style.color = 'lightblue';
        item.children[1].style.color = '#bb6069';
    }
    if((item.children[0].style.color == 'lightblue')&(count > 0)){
        item.children[0].innerHTML = 'Kit Kat &hearts;';
    }
    count++;
})
