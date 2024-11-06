'use strict'

async function worksJson(requestURL) {
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

    document.title = obj.title + ' | ' + obj.ruby;
    ogtitle.content = document.title;
    title.textContent = obj.title;
    ruby.textContent = obj.ruby;
    news = obj.description;
    for (const descriptionEach of descriptionAll) {
        descriptionEach.content = obj.description;
    };

    if (obj.img) {
        for (const imgEach of obj.img) {
            const img = document.createElement('img');
            img.src = imgEach;
            works.appendChild(img);
        };

        works.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            const maxScrollLeft = works.scrollWidth - works.clientWidth;
            if (
                (works.scrollLeft <= 0 && e.deltaY < 0) ||
                (works.scrollLeft >= maxScrollLeft && e.deltaY > 0)
            ) return;
            works.scrollLeft += e.deltaY;
        });
    };

    if (obj.html) {
        works.id = obj.html;
        const url = "works/" + obj.html + ".html";
        fetch(url)
            .then(response => response.text())
            .then(html => {
                works.innerHTML = html;
            }, false);
        document.querySelector('#size').remove()
    };

    const info = document.querySelector('#progress');
    if (obj.details) {
        for (const eachP of obj.details) {
            const p = document.createElement('p');
            p.innerHTML = eachP;
            info.appendChild(p);
        };
    };

    const complete = document.querySelector('#complete');
    complete.remove();

    const footer = document.querySelector('footer');
    if (obj.links) {
        const p = document.createElement('p');
        footer.appendChild(p);
        const small = document.createElement('small');
        small.textContent = '関連ページ Related pages';
        p.appendChild(small);
        for (const eachA of obj.links) {
            const a = document.createElement('a');
            p.appendChild(a);
            a.textContent = eachA.text;
            a.href = eachA.href;
            if (eachA.target) {
                a.setAttribute("target", eachA.target);
            };
        };
    };

    const button = document.createElement('input');
    button.setAttribute("type", "button");
    button.value = "🔙";
    button.addEventListener("click", function () {
        history.back();
    })
    footer.appendChild(button);

    window.addEventListener("load", () => {
        const mainAll = document.querySelectorAll("main");
        for (const main of mainAll) {
            if (main.hidden === true) {
                main.hidden = false;
            } else if (main.hidden === false) {
                main.hidden = true;
            };
        };
    }, false);
};