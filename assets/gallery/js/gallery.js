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

// click chuyen anh

var galleryBtn = document.querySelectorAll('.container__gallery-item');
var rowImg = document.querySelector('.js-render-img');
var photoArr = [
    {
        name: 'ROOMS',
        path: '../img/photo-room-1.jpg'
    },
    {
        name: 'ROOMS',
        path: '../img/photo-room-2.jpg'
    },
    {
        name: 'ROOMS',
        path: '../img/photo-room-3.jpg'
    },
    {
        name: 'ROOMS',
        path: '../img/photo-room-4.jpg'
    },
    {
        name: 'SKY BAR & LOUNGE',
        path: '../img/photo-services-1-1.jpg'
    },
    {
        name: 'SKY BAR & LOUNGE',
        path: '../img/photo-services-1-2.jpg'
    },
    {
        name: 'SKY BAR & LOUNGE',
        path: '../img/photo-services-2-1.jpg'
    },
    {
        name: 'SKY BAR & LOUNGE',
        path: '../img/photo-services-2-2.jpg'
    },
    {
        name: 'WELNESS & SPA',
        path: '../img/photo-services-5-1.jpg'
    },
    {
        name: 'WELNESS & SPA',
        path: '../img/photo-services-5-2.jpg'
    },
    {
        name: 'WELNESS & SPA',
        path: '../img/photo-services-6-1.jpg'
    },
    {
        name: 'WELNESS & SPA',
        path: '../img/photo-services-6-2.jpg'
    },
    {
        name: 'RESTAURANT',
        path: '../img/photo-services-1-1.jpg'
    },
    {
        name: 'RESTAURANT',
        path: '../img/photo-services-2-1.jpg'
    },
    {
        name: 'RESTAURANT',
        path: '../img/photo-services-2-2.jpg'
    },
    {
        name: 'RESTAURANT',
        path: '../img/photo-services-3-2.jpg'
    },
    {
        name: 'WEDDING',
        path: '../img/photo-services-3-2.jpg'
    },
    {
        name: 'WEDDING',
        path: '../img/photo-services-4-2.jpg'
    },
    {
        name: 'WEDDING',
        path: '../img/photo-services-6-1.jpg'
    },
    {
        name: 'WEDDING',
        path: '../img/photo-services-6-2.jpg'
    },
    {
        name: 'CONFERENCE',
        path: '../img/photo-services-3-1.jpg'
    },
    {
        name: 'CONFERENCE',
        path: '../img/photo-services-3-2.jpg'
    },
    {
        name: 'CONFERENCE',
        path: '../img/photo-services-4-1.jpg'
    }
]

for(var i=0; i<galleryBtn.length; i++){
    galleryBtn[i].addEventListener('click', function(e){
        document.querySelector('.container__gallery-item.active').classList.remove('active');
        this.classList.add('active');
        var newPhoto = []
        for(var j=0; j<photoArr.length; j++){
            if(e.target.innerText == photoArr[j].name){
                newPhoto.push(photoArr[j])
                renderImg(newPhoto);
                clickShowImg();
            }
            if(e.target.innerText == 'ALL PHOTOS'){
                renderImg(photoArr);
                clickShowImg();
            }
        }
        rowImg.animate([
            {
                opacity: '0',
            },
            {
                opacity: '1',
            }
          ],{
            duration: 1000,
            direction: "normal",
            easing: "ease-in-out"
          })
    })
}

function renderImg(photoArr){
    var html = photoArr.map(function(value){
        return `
        <div class="col l-3 m-4 c-12">
            <div class="container__gallery-img" style="background-image: url(${value.path});">
                <p>+</p>
            </div>
        </div>
        `
    })
    rowImg.innerHTML = html.join('');
}

renderImg(photoArr);

function clickShowImg(){
    const clickImg = document.querySelector('.click__img');
    const clickImgBtn = document.querySelectorAll('.container__gallery-img');
    const clickImgActive = document.querySelector('.click__img-active');
    for(var i=0; i<clickImgBtn.length; i++){
        clickImgBtn[i].addEventListener('click', function(){
            clickImg.classList.add('active-img');
            clickImgActive.style.backgroundImage = this.style.backgroundImage
        })
        clickImg.addEventListener('click', function(e){
            if(e.target === clickImg){
                clickImg.classList.remove('active-img');
                e.preventDefault();
            }
        })
    }
}

clickShowImg();