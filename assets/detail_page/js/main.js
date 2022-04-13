// Click hien thi video

var playBtn = document.querySelector('.container__video-btn');
var video = document.querySelector('.container__video-play');
playBtn.addEventListener('click', function(){
    video.style.display = 'flex';
})
video.addEventListener('click', function(e){
    if(e.target === this){
        this.style.display = 'none';
    }
})

// CLick heading tablet

var headerNavBtn = document.querySelector('.header__nav-btn');
var headerNav = document.querySelector('.header__nav');
var headerNavItem = document.querySelectorAll('.header__nav-items');
headerNavBtn.addEventListener('click', function(){
    if(headerNav.style.backgroundColor === 'rgb(36, 50, 74)'){
        headerNav.style.backgroundColor = "";
        for(var i=0; i<headerNavItem.length; i++){
            headerNavItem[i].style.display = "none";
        }
    }else{
        headerNav.style.backgroundColor = "#24324a";
        for(var i=0; i<headerNavItem.length; i++){
            headerNavItem[i].style.display = "block";
        }
    }
})

// chuyen anh

$('.js-tesst').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.multiple-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.five-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  