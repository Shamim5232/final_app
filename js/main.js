$('.meetClintSlider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed: 800,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
   
})
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed: 800,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let MenuSticky= document.querySelector('#MenuSticky');

window.addEventListener('scroll',function(params) {
    if(window.pageYOffset > 300){
        MenuSticky.classList.add("sticky");
    }else{
        MenuSticky.classList.remove("sticky");
    }
})
