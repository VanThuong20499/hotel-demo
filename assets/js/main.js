// CHuyển ảnh header
var headerImgArrs = [
    {
        path: './assets/img/photo-slide-2.jpg',
        h1: 'A Place to Relax',
        h2: 'in Maldives'
    },
    {
        path: './assets/img/photo-slide-3.jpg',
        h1: 'Touch The Sea',
        h2: 'in Monaco'
    },
    {
        path: './assets/img/photo-services-1-2.jpg',
        h1: 'Experience the Freedom',
        h2: 'in London'
    }
]
var headerImg = document.querySelector('.header__img');
var headerBtnLeft = document.querySelector('.header__navigation-btn-left');
var headerBtnRight = document.querySelector('.header__navigation-btn-right');
var headerContentH1 = document.querySelector('.header__content h1');
var headerContentH2 = document.querySelector('.header__content h2');
var dem = 0;

headerBtnRight.addEventListener('click', function(){
    headerImg.src = headerImgArrs[dem].path;
    headerContentH1.innerText = headerImgArrs[dem].h1;
    headerContentH2.innerText = headerImgArrs[dem].h2;
    dem++;
    if(dem === headerImgArrs.length){
        dem = 0;
    }
    headerImg.animate([
      {
        // transform: 'translateX(100%)',
        opacity: 0,
      },
      {
        // transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 1000,
      direction: "normal",
      easing: "ease-in"
    })
})

headerBtnLeft.addEventListener('click', function(){
    headerImg.src = headerImgArrs[dem].path;
    headerContentH1.innerText = headerImgArrs[dem].h1;
    headerContentH2.innerText = headerImgArrs[dem].h2;
    dem--;
    if(dem < 0){
        dem = headerImgArrs.length-1;
    }
    headerImg.animate([
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    ],{
      duration: 1000,
      direction: "normal",
      easing: "ease-in"
    })
})

// Click hien thi video

var playBtn = document.querySelector('.container__video-tour-play');
var video = document.querySelector('.container__video-tour-video');
playBtn.addEventListener('click', function(){
    video.classList.add('active-video');
})
video.addEventListener('click', function(e){
    if(e.target === this){
        this.classList.remove('active-video');
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


// chuyen anh GALLERY

function gallery(){
  const galleryImg = document.querySelector('.js-gallery-img');
  const nextBtn = document.querySelector('.container__gallery-item-next');
  const backBtn = document.querySelector('.container__gallery-item-back');
  const nameGallery = document.querySelector('.js-gallery-name');
  const galleryArrImgBack = document.querySelector('.js-gallery-img-back');
  const galleryArrImgNext = document.querySelector('.js-gallery-img-next');
  const galleryArrImg = [
    {
      path: './assets/img/photo-services-1-2.jpg',
      comment: 'Sky Bar & Lounge'
    },
    {
      path: './assets/img/photo-services-2-1.jpg',
      comment: 'Private Dining'
    },
    {
      path: './assets/img/photo-services-3-1.jpg',
      comment: 'Conference & Events'
    },
    {
      path: './assets/img/photo-services-4-1.jpg',
      comment: 'Wedding Venue'
    },
    {
      path: './assets/img/photo-services-5-1.jpg',
      comment: 'Spa & Beauty Center'
    },
    {
      path: './assets/img/photo-services-6-1.jpg',
      comment: 'Swimming Pool'
    },
  ]
  var count = 0;
  nextBtn.addEventListener('click', function(){
    galleryImg.style.backgroundImage  = `url('${galleryArrImg[count].path}')`;
    galleryArrImgBack.style.backgroundImage  = `url('${galleryArrImg[count <= 0 ? count = galleryArrImg.length-1 : count-1].path}')`;
    galleryArrImgNext.style.backgroundImage  = `url('${galleryArrImg[count >= galleryArrImg.length-1 ? count = 0 : count+1].path}')`;
    nameGallery.textContent = galleryArrImg[count].comment;
    count++;
    if(count >= galleryArrImg.length){
      count = 0;
    }
    galleryImg.animate([
      {
        transform: 'translateX(100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
    galleryArrImgNext.animate([
      {
        transform: 'translateX(100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
    galleryArrImgBack.animate([
      {
        transform: 'translateX(100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
  })
  
  backBtn.addEventListener('click', function(){
    galleryImg.style.backgroundImage  = `url('${galleryArrImg[count].path}')`;
    galleryArrImgNext.style.backgroundImage  = `url('${galleryArrImg[count >= galleryArrImg.length-1 ? count = 0 : count+1].path}')`;
    galleryArrImgBack.style.backgroundImage  = `url('${galleryArrImg[count <= 0 ? count = galleryArrImg.length-1 : count-1].path}')`;
    nameGallery.textContent = galleryArrImg[count].comment;
    count--;
    if(count < 0){
      count = galleryArrImg.length-1;
    }
    galleryImg.animate([
      {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
    galleryArrImgNext.animate([
      {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
    galleryArrImgBack.animate([
      {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ],{
      duration: 200,
      direction: "normal",
      easing: "ease-in-out"
    })
  })
}
gallery()

// cuộn lên đầu trang

function backTop(){
  const backTopScroll = document.querySelector('.site-backtop');
  document.addEventListener('scroll', function(){
    var scrollY = window.scrollY
    if(scrollY > 0){
      backTopScroll.style.display = 'flex';
    }
    else{
      backTopScroll.style.display = 'none';
    }
  })
}

backTop()

// Chuyển ảnh blog

function blogTransferPhotos(){
  var blogBtn = document.querySelectorAll('.container__blog-item-warp-btn i');
  var blogImg = document.querySelector('.container__blog-item-warp-btn').parentElement;
  var myImgBlog = [
    {
      path: './assets/img/photo-blog-4.jpg'
    },
    {
      path: './assets/img/photo-blog-1.jpg'
    },
    {
      path: './assets/img/photo-blog-2.jpg'
    }
  ]
  for(var i=0; i<blogBtn.length; i++){
    blogBtn[i].addEventListener('click', function(event){
      for(var i=0; i<blogBtn.length; i++){
        blogBtn[i].classList.remove('active');
      }
      this.classList.add('active');
      event.preventDefault()
      if(this === blogBtn[0]){
        blogImg.style.backgroundImage = `url('${myImgBlog[0].path}')`;
        blogImg.animate([
          {
            transform: 'translateX(-100%)'
          },
          {
            transform: 'translateX(0)'
          }
        ],{
            duration: 200,
            direction: "normal",
            easing: "ease-in"
        })
      }else if(this === blogBtn[1]){
        blogImg.style.backgroundImage = `url('${myImgBlog[1].path}')`;
        blogImg.animate([
          {
            transform: 'translateX(100%)'
          },
          {
            transform: 'translateX(0)'
          }
        ],{
            duration: 200,
            direction: "normal",
            easing: "ease-in"
        })
      }else if(this === blogBtn[2]){
        blogImg.style.backgroundImage = `url('${myImgBlog[2].path}')`;
        blogImg.animate([
          {
            transform: 'translateX(100%)'
          },
          {
            transform: 'translateX(0)'
          }
        ],{
            duration: 200,
            direction: "normal",
            easing: "ease-in"
        })
      }
    })
  }
}

blogTransferPhotos()

// chuyen anh

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
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

$('.four-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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

// Lich

function CalendarControl() {
  const checkIn = document.querySelector('[name=checkin]');
  const calendarCheckIn = document.querySelector('.calendar__check-in');
  const calendarCheckOut = document.querySelector('.calendar__check-out');
  checkIn.addEventListener('click', function(e){
    calendarCheckIn.classList.add('open');
    calendarCheckOut.classList.remove('open');
    calendarCheckIn.addEventListener('click', function(e){
      if(e.target.closest('.number-item')){
        calendarCheckIn.classList.remove('open');
      }
    })
  })
  const calendar = new Date();
  const calendarControl = {
    localDate: new Date(),
    prevMonthLastDate: null,
    calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calMonthName: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar.getFullYear(),
        calendar.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar.setMonth(calendar.getMonth() - 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar.setMonth(calendar.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentMonth = calendarControl.localDate.getMonth();
      let currentYear = calendarControl.localDate.getFullYear();
      calendar.setMonth(currentMonth);
      calendar.setYear(currentYear);
      calendarControl.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar .calendar-year-label");
      yearLabel.innerHTML = calendar.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
    },
    selectDate: function (e) {
      checkIn.value = (
        `${e.target.textContent} ${
          calendarControl.calMonthName[calendar.getMonth()]
        } ${calendar.getFullYear()}`
      );
    },
    plotSelectors: function () {
      document.querySelector(
        ".calendar"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
        <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
        <div class="calendar-year-month">
        <div class="calendar-month-label"></div>
        <div>-</div>
        <div class="calendar-year-label"></div>
        </div>
        <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
        </div>
        <div class="calendar-today-date">Today: 
          ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
          ${calendarControl.localDate.getDate()}, 
          ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
          ${calendarControl.localDate.getFullYear()}
        </div>
        <div class="calendar-body"></div></div>`;
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar .calendar-prev a");
      let nextBtn = document.querySelector(".calendar .calendar-next a");
      let todayDate = document.querySelector(".calendar .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
      );
      for (var i = 0; i < dateNumber.length; i++) {
          dateNumber[i].addEventListener(
            "click",
            calendarControl.selectDate,
            false
          );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function(dates){
      dates.reverse();
      for(let i=0;i<dates.length;i++) {
          if(document.querySelectorAll(".prev-dates")) {
              document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
          }
      }
    },
    plotNextMonthDates: function(){
     let childElemCount = document.querySelector('.calendar-body').childElementCount;
     //7 lines
     if(childElemCount > 42 ) {
         let diff = 49 - childElemCount;
         calendarControl.loopThroughNextDays(diff);
     }

     //6 lines
     if(childElemCount > 35 && childElemCount <= 42 ) {
      let diff = 42 - childElemCount;
      calendarControl.loopThroughNextDays(42 - childElemCount);
     }

    },
    loopThroughNextDays: function(count) {
      if(count > 0) {
          for(let i=1;i<=count;i++) {
              document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
          }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl.plotDates();
      calendarControl.attachEvents();
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
    }
  };
  calendarControl.init();
}

const calendarControl = new CalendarControl();

function CalendarControl2() {
  const checkOut = document.querySelector('[name=checkout]');
  const calendarCheckOut = document.querySelector('.calendar__check-out');
  const calendarCheckIn = document.querySelector('.calendar__check-in');
  checkOut.addEventListener('click', function(e){
    calendarCheckOut.classList.add('open');
    calendarCheckIn.classList.remove('open');
    calendarCheckOut.addEventListener('click', function(e){
      if(e.target.closest('.number-item')){
        calendarCheckOut.classList.remove('open');
      }
    })
  })
  const calendar = new Date();
  const calendarControl = {
    localDate: new Date(),
    prevMonthLastDate: null,
    calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    calMonthName: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar.getFullYear(),
        calendar.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar.setMonth(calendar.getMonth() - 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar.setMonth(calendar.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentMonth = calendarControl.localDate.getMonth();
      let currentYear = calendarControl.localDate.getFullYear();
      calendar.setMonth(currentMonth);
      calendar.setYear(currentYear);
      calendarControl.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar2 .calendar-year-label");
      yearLabel.innerHTML = calendar.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar2 .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
    },
    selectDate: function (e) {
      checkOut.value = (
        `${e.target.textContent} ${
          calendarControl.calMonthName[calendar.getMonth()]
        } ${calendar.getFullYear()}`
      );
    },
    plotSelectors: function () {
      document.querySelector(
        ".calendar2"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
        <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
        <div class="calendar-year-month">
        <div class="calendar-month-label"></div>
        <div>-</div>
        <div class="calendar-year-label"></div>
        </div>
        <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
        </div>
        <div class="calendar-today-date">Today: 
          ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
          ${calendarControl.localDate.getDate()}, 
          ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
          ${calendarControl.localDate.getFullYear()}
        </div>
        <div class="calendar-body"></div></div>`;
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar2 .calendar-body"
        ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar2 .calendar-body").innerHTML = "";
      calendarControl.plotDayNames();
      calendarControl.displayMonth();
      calendarControl.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl.daysInMonth(
        calendar.getMonth() + 1,
        calendar.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar2 .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar2 .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar2 .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl.highlightToday();
      calendarControl.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar2 .calendar-prev a");
      let nextBtn = document.querySelector(".calendar2 .calendar-next a");
      let todayDate = document.querySelector(".calendar2 .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar2 .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl.navigateToCurrentMonth
      );
      for (var i = 0; i < dateNumber.length; i++) {
          dateNumber[i].addEventListener(
            "click",
            calendarControl.selectDate,
            false
          );
      }
    },
    highlightToday: function () {
      let currentMonth = calendarControl.localDate.getMonth() + 1;
      let changedMonth = calendar.getMonth() + 1;
      let currentYear = calendarControl.localDate.getFullYear();
      let changedYear = calendar.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [calendar.getDate() - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function(dates){
      dates.reverse();
      for(let i=0;i<dates.length;i++) {
          if(document.querySelectorAll(".prev-dates")) {
              document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
          }
      }
    },
    plotNextMonthDates: function(){
     let childElemCount = document.querySelector('.calendar-body').childElementCount;
     //7 lines
     if(childElemCount > 42 ) {
         let diff = 49 - childElemCount;
         calendarControl.loopThroughNextDays(diff);
     }

     //6 lines
     if(childElemCount > 35 && childElemCount <= 42 ) {
      let diff = 42 - childElemCount;
      calendarControl.loopThroughNextDays(42 - childElemCount);
     }

    },
    loopThroughNextDays: function(count) {
      if(count > 0) {
          for(let i=1;i<=count;i++) {
              document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
          }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl.plotDates();
      calendarControl.attachEvents();
    },
    init: function () {
      calendarControl.plotSelectors();
      calendarControl.plotDates();
      calendarControl.attachEvents();
    }
  };
  calendarControl.init();
}

const calendarControl2 = new CalendarControl2();

