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