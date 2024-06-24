'use strict'

const jsArr = [
    ["../motto", "p_motto"],
    ["../motto", "e_motto"],
    ["../motto", "h_motto"],
    ["../motto", "u_motto"]
]

// indexJSON()
async function weare(requestURL) {
    const request = new Request(requestURL)
    const response = await fetch(request)
    const jsonIndex = await response.text()
    const index = JSON.parse(jsonIndex)
    thisWork(index)
}

function thisWork(obj) {
    const works = document.querySelector('#works')
    const title = document.querySelector('#works h1 ruby rb')
    const ruby = document.querySelector('#works h1 ruby rt')
    const details = document.querySelector('#details')
    const section = document.querySelector('#details section')
    const descriptionAll = document.querySelectorAll('meta[name="description"], meta[property="og:description"]')

    news = obj.description;
    for (const descriptionEach of descriptionAll) {
        descriptionEach.content = obj.description;
    }

    title.textContent = obj.title;
    ruby.textContent = obj.ruby;
    details.open = true;
    details.hidden = false;
    for (const imgEach of obj.img) {
        const img = document.createElement('img')
        img.src = imgEach;
        works.appendChild(img)
    }

    if (obj.details) {
        section.innerHTML = "";
        for (const eachP of obj.details) {
            const p = document.createElement('p')
            p.innerHTML = eachP;
            section.appendChild(p)
        }
    }

    if (obj.links) {
        const footer = document.querySelector('footer')
        const b = document.createElement('b')
        b.textContent = "関連ページ Related Pages"
        footer.appendChild(b)
        for (const eachA of obj.links) {
            const a = document.createElement('a')
            a.href = eachA.href;
            if (eachA.target) {
                a.setAttribute("target", eachA.target)
            }
            a.textContent = eachA.text;
            footer.appendChild(a)
        }
    }
}

// ?id=ID
let params = new URLSearchParams(location.search)
if (params.get("id")) {
    weare(params.get("id") + ".json")
    addEventListener("load", (event) => {
        const mainAll = document.querySelectorAll("main")
        for (const main of mainAll) {
            if (main.hidden === true) {
                main.hidden = false;
            } else if (main.hidden === false) {
                main.hidden = true;
            }
        }
    }, false)
}

function sizeHight(px, height) {
    document.body.style.fontSize = px;
    document.querySelector('#works').style.height = height;
}