window.addEventListener('scroll',function()
{
    let navbar= document.getElementById('navbar');

    if(window.pageYOffset >= 90)
    {
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})


function search()
 {
    let searched_item = document.getElementById('searched_item').value;
    
    if(searched_item === 'mens tshirt')
    {
        location.href="mensshirt.html";
    }
    else if(searched_item === 'mens')
    {
        location.href="men.html";
    }
    else if(searched_item === 'womens')
    {
        location.href="women.html";
    }
    else if(searched_item === 'grocery')
    {
        location.href="grocery.html";
    }
    else if(searched_item === 'decoration')
    {
        location.href="home.html";
    }
    else if(searched_item === 'kids')
    {
        location.href="kids.html";
    }
    else if(searched_item === 'electronics')
    {
        location.href="electronic.html";
    }
    else if(searched_item === 'makeup')
    {
        location.href="makeup.html";
    }
    else if(searched_item === 'watch')
    {
        location.href="watch.html";
    }
    else if(searched_item === 'whey protien')
    {
        location.href="protien.html";
    }
    else if(searched_item === 'ladies tshirt')
    {
        location.href="ladiestshirt.html";
    }
    else if(searched_item === 'smartphones')
    {
        location.href="smartphones.html";
    }
    else
    {
        alert('wrong input');
    }
 }