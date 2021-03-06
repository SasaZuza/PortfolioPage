// Variables that select Items from DOM (classes, item, tags from HTML page)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu - by default menu will be closed so it's false
let showMenu = false;

// When button is clicked click event and function bellow is activated
menuBtn.addEventListener('click', toggleMenu);

// Regulate the opening and closing menu button
function toggleMenu() {
  if (!showMenu) {
    // Adds all those elements to menu after button is clicked
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State to true
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State to false
    showMenu = false;
  }
}

// Functions for typed text effects on all pages
$(document).ready(function() {
  'use strict';

  var typedIndex = $('.typed-index');
  $(function() {
    typedIndex.typed({
      strings: ['Full-Stack Web Developer'],
      typeSpeed: 100,
      loop: true
    });
  });

  var typedWork = $('.typed-work');
  $(function() {
    typedWork.typed({
      strings: ['Check out some of my projects:'],
      typeSpeed: 100,
      loop: true
    });
  });

  var typedContact = $('.typed-contact');
  $(function() {
    typedContact.typed({
      strings: ['How to reach me:'],
      typeSpeed: 100,
      loop: true
    });
  });
});

// Zing chart configuration
var myConfig = {
  type: 'radar',
  backgroundColor: 'rgb(65, 61, 49)',
  plot: {
    aspect: 'area',
    animation: {
      effect: 3,
      sequence: 1,
      speed: 700
    }
  },
  scaleV: {
    visible: false
  },
  scaleK: {
    values: '0:7:1',
    labels: [
      'HTML',
      'CSS',
      'Sass',
      'Bootstramp',
      'Java Script',
      'React',
      'Vue',
      'MongoDB'
    ],
    item: {
      fontColor: 'white',
      backgroundColor: '#ee991a',
      borderColor: '#aeaeae',
      borderWidth: 1,
      padding: '5 5',
      borderRadius: 25
    },
    refLine: {
      lineColor: '#c10000'
    },
    tick: {
      lineColor: '#59869c',
      lineWidth: 2,
      lineStyle: 'dotted',
      size: 15
    },
    guide: {
      lineColor: '#607D8B',
      lineStyle: 'solid',
      alpha: 0.3,
      backgroundColor: '#0CCE6B #EF2D56'
    }
  },
  series: [
    {
      values: [85, 80, 85, 65, 70, 70, 50, 60],
      text: 'farm',
      backgroundColor: '#ee991a'
    }
  ]
};

zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: '100%',
  width: '100%'
});

// Functions for project details toggle buttons

// Tribute page functions
function blog() {
  document.getElementById('blogDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function emloyeeMenager() {
  document.getElementById('employeeDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function eStore() {
  document.getElementById('storeDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function caffeBar() {
  document.getElementById('caffeDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function weatherApp() {
  document.getElementById('weatherDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function randomQuoteMashine() {
  document.getElementById('quoteDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function jsCalculator() {
  document.getElementById('calculatorDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}

// Tribute page functions
function tributePage() {
  document.getElementById('tributeDiv').style.display = 'block';
  document.getElementById('projectsList').style.display = 'none';
}
