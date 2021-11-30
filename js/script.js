/*global $, console*/



$(function () {

  'use strict';

   //// dropdown on dropdown

  $('.nav-dropholder .droptwo').on("click", function(e) {
    $(this).find('.dropdown-menu').toggle();
    e.stopPropagation();
    // e.preventDefault();
  });

  //// open aside menu
  $('.btn-collapse-aside-menu').on("click", function () {
    $('body').toggleClass('aside-menu-open');
  });

  //// close aside event
  $('.btn-collapse-aside-event').on("click", function () {
    $('body').toggleClass('aside-event-close');
  });

  //// list-folders aside
  $('.list-folders li .folder-title').on("click", function () {
    $(this).closest('li').toggleClass('open-folder').siblings().removeClass('open-folder');
  });
  $('.list-folders li:has(> ul)').addClass('has-folder');

  //// dropdown selected
  $(".dropdown-main .dropdown-menu li").click(function(){
      $(this).closest('.dropdown-main').find(".dropdown-title").text($(this).text());
  });

    //// adv search
    $('.btn-more-search').on("click", function () {
      $(this).closest('.more-search-footer').toggleClass('open-adv-search');
    });


  //// pages taps
  var swiper = new Swiper('.pages-tabs-holder', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.pages-tabs-arrow.swiper-button-next',
      prevEl: '.pages-tabs-arrow.swiper-button-prev',
    },
  });

//// Sortable taps
  $( "#sortableTabs").sortable({
    axis: "x",
  });

  //// home slider
  var swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'fade',
    navigation: {
      nextEl: '.main-slider-arrow.swiper-button-next',
      prevEl: '.main-slider-arrow.swiper-button-prev',
    },
  });

  //// tooltip script
  $('[data-toggle="tooltip"]').tooltip();

  //// nav search
  $(".nav-search-input input").focusin(function () {
    $(this).closest('.nav-search-holder').addClass('input-search-focus');
  });

  $(".nav-search-input input").focusout(function () {
    $(this).closest('.nav-search-holder').removeClass('input-search-focus');
  });

  //// collaps slider
  $(".btn-main-slider-arrow").click(function () {
    $('.main-slider').toggleClass('small-slider');
  });

/////sortable-path
  $( "#sortable-path" ).sortable();
  $( "#sortable-path" ).disableSelection();












  ///////// chart1

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var randomScalingFactor = function () {
    return Math.round(Math.random() * 50);
  };

  var config = {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: true,
      }]
    },
    options: {
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            // labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            // labelString: 'Value'
          },
          ticks: {
            min: 0,
            max: 50,

            // forces step size to be 5 units
            stepSize: 5
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    }
  };




  ///////// chart2


  var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
  };

  var config2 = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.orange,
          window.chartColors.yellow,
          window.chartColors.green,
          window.chartColors.blue,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue'
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'left',
      },

      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  };


  //////// run charts

  window.onload = function () {
    var ctx2 = document.getElementById('canvastwo').getContext('2d');
    window.myDoughnut = new Chart(ctx2, config2);

    var ctx1 = document.getElementById('canvasone').getContext('2d');
    window.myLine = new Chart(ctx1, config);


  };

});

/////// aside events

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-aside');

  var calendarAside = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2020-06-12',
    defaultView: 'timeGridDay',
    direction: 'rtl',
    initialView: 'timeGridDay',
    headerToolbar: {
      left: false,
      center: 'title',
      right: false
    },
    height: 'auto',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    events: [{
        title: 'All Day Event',
        start: '2020-06-01',
      },
      {
        title: 'Long Event',
        start: '2020-06-07',
        end: '2020-06-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-16T16:00:00'
      },
      {
        title: 'مؤتمر جديد',
        start: '2020-06-11',
        end: '2020-06-13'
      },
      {
        title: 'غداء الفريق',
        start: '2020-06-12T10:30:00',
        end: '2020-06-12T12:30:00',
        backgroundColor: '#FF3C9E',
      },
      {
        title: 'اجتماع مشروع عام ١٤٤٠',
        start: '2020-06-12T12:00:00',
        end: '2020-06-12T13:30:00',
        backgroundColor: '#9574FF',
      },
      {
        title: 'مناقشة مشروع الكترونى جديد',
        start: '2020-06-12T14:00:00',
        end: '2020-06-12T15:30:00',
        backgroundColor: '#569F87',
      },
      {
        title: 'Happy Hour',
        start: '2020-06-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2020-06-12T20:00:00'
      },
      {
        title: 'اجتماع يومى',
        start: '2020-06-12T02:00:00',
        backgroundColor: '#FF9800',
      },

      {
        title: 'اجتماع يومى',
        start: '2020-06-12T02:30:00',
        end: '2020-06-12T05:30:00',
        backgroundColor: '#8BC34A',
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-06-28'
      }
    ]
  });

  calendarAside.render();
});


/////// aside events

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2020-06-12',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    height: 'auto',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    events: [
      {
        title: 'All Day Event',
        start: '2020-06-01',
      },
      {
        title: 'Long Event',
        start: '2020-06-07',
        end: '2020-06-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2020-06-11',
        end: '2020-06-13'
      },
      {
        title: 'Meeting',
        start: '2020-06-12T10:30:00',
        end: '2020-06-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-06-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-06-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2020-06-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2020-06-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2020-06-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-06-28'
      }
    ]
  });

  calendar.render();
});