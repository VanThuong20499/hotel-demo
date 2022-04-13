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
});

// chuyen anh
function transferPhoto(){
    var blogImg = document.querySelector('.container__blog-img');
    var prevBtn = document.querySelector('.container__blog-img-btn-prev');
    var nextBtn = document.querySelector('.container__blog-img-btn-next');
    var imgArr = [
        {
            path: '../img/photo-blog-big-1.jpg'
        },
        {
            path: '../img/photo-blog-big-2.jpg'
        },
        {
            path: '../img/photo-blog-big-3.jpg'
        }
    ];
    var count = 0;
    if(blogImg){
        nextBtn.addEventListener('click', function(){
            count++;
            if(count >= imgArr.length){
                count = imgArr.length-1;
                return;
            }
            blogImg.src = `${imgArr[count].path}`;
            blogImg.animate([
                {
                    transform: 'translateX(100%)',
                },
                {
                    transform: 'translateX(0)',
                }
            ],{
                duration: 200,
                direction: "normal",
                easing: "ease-in"
            })
        })
        prevBtn.addEventListener('click', function(){
            count--;
            if(count < 0){
                count = 0;
                return;
            }
            blogImg.src = `${imgArr[count].path}`;
            blogImg.animate([
                {
                    transform: 'translateX(-100%)',
                },
                {
                    transform: 'translateX(0)',
                }
            ],{
                duration: 200,
                direction: "normal",
                easing: "ease-in"
            })
            autoNextImg(2500);
        })
        function autoNextImg(ms){
            setTimeout(function(){
                count++;
                if(count >= imgArr.length){
                    count = imgArr.length-1;
                    return;
                }else{
                    autoNextImg(2500);
                }
                blogImg.src = `${imgArr[count].path}`;
                blogImg.animate([
                    {
                        transform: 'translateX(100%)',
                    },
                    {
                        transform: 'translateX(0)',
                    }
                ],{
                    duration: 200,
                    direction: "normal",
                    easing: "ease-in"
                })
            },ms)
        }
        autoNextImg(2500);
    }
}

transferPhoto();

// chuyển ảnh

function blogListing(){
    var transferPhotos = document.querySelectorAll('.btn-transfer-photos span');
    var blogImg = document.querySelector('.btn-transfer-photos').parentElement;
    var myImg = [
        {
            path: '../img/photo-blog-3.jpg'
        },
        {
            path: '../img/photo-blog-4.jpg'
        },
        {
            path: '../img/photo-blog-2.jpg'
        },
    ]
    if(blogImg){
        for(var i=0; i<transferPhotos.length; i++){
            var transferPhoto = transferPhotos[i]
            transferPhoto.addEventListener('click', function(){
                for(var i=0; i<transferPhotos.length; i++){
                    transferPhotos[i].classList.remove('active');
                }
                if(this === transferPhotos[0]){
                    blogImg.style.backgroundImage = `url('${myImg[0].path}')`;
                    blogImg.animate([
                        {
                            transform: 'translateX(-100%)',
                        },
                        {
                            transform: 'translateX(0)',
                        }
                    ],{
                        duration: 100,
                        direction: "normal",
                        easing: "ease-in"
                    });
                }
                else if(this === transferPhotos[1]){
                    blogImg.style.backgroundImage = `url('${myImg[1].path}')`;
                    blogImg.animate([
                        {
                            transform: 'translateX(100%)',
                        },
                        {
                            transform: 'translateX(0)',
                        }
                    ],{
                        duration: 100,
                        direction: "normal",
                        easing: "ease-in"
                    });
                }
                else{
                    blogImg.style.backgroundImage = `url('${myImg[2].path}')`;
                    blogImg.animate([
                        {
                            transform: 'translateX(100%)',
                        },
                        {
                            transform: 'translateX(0)',
                        }
                    ],{
                        duration: 100,
                        direction: "normal",
                        easing: "ease-in"
                    });
                }
                this.classList.add('active');
            })
        }
    }
}

blogListing()