'use strict'

async function fetchText(url = '', query = '') {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerText = html
    });
}

async function fetchHTML(url = '', query = '') {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerHTML = html
    });
}

function headline() {
  news = news.substring(2, news.length) + news.substring(0, 2)
  document.querySelector('#news').value = news;
  setTimeout("headline()", speed)
}

function changeTheme() {
  if (document.getElementById('theme').checked === true) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

function thisSize(px) {
  document.body.style.fontSize = px;
}
