'use strict'

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

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        headline()

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            /* ダークテーマの時 */
            document.getElementById('theme').checked = true;
            changeTheme()
        } else {
            /* ライトテーマの時 */
            document.getElementById('theme').checked = false;
            changeTheme()
        }
    }
}, false)


// indexJSON()
async function indexJSON(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    archiveAll(index)
}

function archiveAll(obj) {
    const archive = document.querySelector('#archive')
    obj.archive.forEach((eachA) => {
        const p = document.createElement('p')
        archive.appendChild(p)
        const from = document.createElement('time')
        from.textContent = eachA.from;
        p.appendChild(from)
        const to = document.createElement('time')
        to.textContent = eachA.to;
        p.appendChild(to)
        const a = document.createElement('a')
        a.textContent = eachA.title;
        a.href = eachA.href;
        if (eachA.target) {
            a.setAttribute("target", eachA.target)
        }
        p.appendChild(a)
    })
}

async function fetchText(url, query) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(query).innerText = html
        }, false)
}

async function fetchHTML(url, query) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(query).innerHTML = html
        }, false)
}