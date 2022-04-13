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

// map

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }