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

function sizeHight(px, height) {
    document.body.style.fontSize = px;
    document.querySelector('#works').style.height = height;
}

document.addEventListener('readystatechange', event => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        /* ダークテーマの時 */
        document.getElementById('theme').checked = true;
        changeTheme()
    } else {
        /* ライトテーマの時 */
        document.getElementById('theme').checked = false;
        changeTheme()
    }

    if (event.target.readyState === 'interactive') {
        headline()
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
};

// weare()
async function weare(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    thisWork(index);
};

function thisWork(obj) {
    const title = document.querySelector('#title rb');
    const ruby = document.querySelector('#title rt');
    const works = document.querySelector('#works');
    const ogtitle = document.querySelector('meta[property="og:title"]');
    const descriptionAll = document.querySelectorAll('meta[name="description"], meta[property="og:description"]');

    document.title = obj.title;
    ogtitle.content = obj.title;
    title.textContent = obj.title;
    ruby.textContent = obj.ruby;
    news = obj.description;
    for (const descriptionEach of descriptionAll) {
        descriptionEach.content = obj.description;
    };

    for (const imgEach of obj.img) {
        const img = document.createElement('img');
        img.src = imgEach;
        works.appendChild(img);
    };

    const info = document.querySelector('#info');
    if (obj.details) {
        for (const eachP of obj.details) {
            const p = document.createElement('p');
            p.innerHTML = eachP;
            info.appendChild(p);
        };
    };

    const archive = document.querySelector('#archive');
    const archiveRT = document.querySelector('#archive ruby rt');
    const archiveRB = document.querySelector('#archive ruby rb');
    if (obj.links) {
        archiveRT.textContent = "Related Pages";
        archiveRB.textContent = "関連ページ";
        archive.open = true;
        for (const eachA of obj.links) {
            const p = document.createElement('p');
            const a = document.createElement('a');
            archive.appendChild(p);
            p.appendChild(a);
            a.textContent = eachA.text;
            a.href = eachA.href;
            if (eachA.target) {
                a.setAttribute("target", eachA.target);
            };
        };
    };

    window.addEventListener("load", () => {
        const mainAll = document.querySelectorAll("main");
        for (const main of mainAll) {
            if (main.hidden === true) {
                main.hidden = false;
            } else if (main.hidden === false) {
                main.hidden = true;
            };
        };

        const scrollElement = document.querySelector('#works');
        scrollElement.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
            if (
                (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
                (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
            ) return;
            scrollElement.scrollLeft += e.deltaY;
        });
    }, false);
};

async function fetchText(url, query) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            document.querySelector(query).innerText = text;
        }, false);
};

async function fetchHTML(url, query) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(query).innerHTML = html;
        }, false);
};