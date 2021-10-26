const branding = document.getElementById('title');

branding.addEventListener('click',ele => {
    if (branding.style.color == 'red'){
        branding.style.color = 'skyblue';
        branding.innerHTML = 'Kit Kat &hearts;';
    } else
        branding.style.color = 'red';
});
