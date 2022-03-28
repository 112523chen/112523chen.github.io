const back = document.body;
const main_b = document.getElementById("change");
const link_b = document.getElementsByClassName("button")
function f(){
    if(main_b.innerHTML == 'Dark Mode'){
        back.style.backgroundColor = '#242933';
        main_b.innerHTML = 'Light Mode';
    } else if(main_b.innerHTML == 'Light Mode'){
        back.style.backgroundColor = '#939fb8';
        main_b.innerHTML = 'Dark Mode';
    }
}
