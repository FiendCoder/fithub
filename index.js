document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');

  const currentRight = parseInt(window.getComputedStyle(dropdownMenu).right);

  dropdownMenu.style.right = currentRight === 0 ? '-25rem' : '0';
}

function closeMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownMenu.style.right = '-25rem';
}

function toggleSidebar() {
  const sidebarMenu = document.getElementById('sidebarMenu');

  const currentLeft = parseInt(window.getComputedStyle(sidebarMenu).left);

  sidebarMenu.style.left = currentLeft === 0 ? '-25rem' : '0';
}
function closeSidebar() {
  document.getElementById('sidebarMenu').style.left = '-25rem';
}

function calculateBMI() {
  const weight = document.getElementById('weightInput').value;

  const height = document.getElementById('heightInput').value;


  if (weight && height) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let weightImplication = '';
    if (bmi < 18.5) {
      weightImplication = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      weightImplication = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      weightImplication = 'Overweight';
    } else {
      weightImplication = 'Obese';
    }

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('weightImplication').textContent = weightImplication;
  } else {
    alert('Please enter both weight and height to calculate BMI.');
  }
}


window.onload = function () {
  let currentURL = window.location.href;
  let dayLinks = document.querySelectorAll('.days');

  dayLinks.forEach(function (link) {
    if (link.href === currentURL) {
      link.classList.add('active');
    }
  });
};
window.onload = function () {
  let currentURL = window.location.href;
  let galleryNavButtons = document.querySelectorAll('.gallery-nav-btn');
  galleryNavButtons.forEach(function (link) {
    if (link.href === currentURL) {
      link.classList.add('active');
    }
  });
};