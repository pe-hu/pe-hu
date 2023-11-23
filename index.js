'use strict'

async function fetchHTML(url = '', query = '') {
  fetch(url)
  .then(response => response.text())
  .then(html => {
    document.querySelector(query).innerHTML = html
  });
}