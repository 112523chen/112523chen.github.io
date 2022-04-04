const back = document.body;
const main_b = document.getElementById("change");
const link_b = document.getElementsByClassName("button")
function changeMode(){
    if(main_b.innerHTML == 'Dark Mode'){
        back.style.backgroundColor = '#242933';
        main_b.innerHTML = 'Light Mode';
        main_b.style.paddingLeft = '4.5%';
        main_b.style.paddingRight = '4.5%';
    } else if(main_b.innerHTML == 'Light Mode'){
        back.style.backgroundColor = '#939fb8';
        main_b.innerHTML = 'Dark Mode';
        main_b.style.paddingLeft = '5%';
        main_b.style.paddingRight = '5%';
    }
}
