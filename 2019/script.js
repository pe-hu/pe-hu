'use strict'

const thish2 = "This is All About Pehu 2019.";
const thish3 = "西天満のペフで行った活動の記録をまとめたデジタルコンテンツ・書籍などを詰め込んだ、限定25部のスペシャルギフトボックス";
const thisImage = "img/inside.png";
const thisPrice = "<s>¥5,500</s><br><b>Out of Stock</b>";
const thisNote = "Limited Only 25 Editions";
const thisYouTube = "rhcUK2Ww-MQ";

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        const title = document.querySelector('#buy h2');
        const discription = document.querySelector('#buy h3');
        const button = document.querySelector('#buy button');
        const a = document.querySelector('#buy p a');

        const liAll = document.querySelectorAll('menu li');
        liAll.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (item.dataset.title) {
                    title.textContent = item.dataset.title;
                    discription.textContent = item.dataset.discription;
                    button.style.backgroundImage = "url(" + item.dataset.image + ")";
                    button.innerHTML = `<b>${item.dataset.price}</b>`;
                    if (item.dataset.youtube) {
                        button.dataset.youtube = item.dataset.youtube;
                    } else {
                        button.dataset.youtube = thisYouTube;
                    }

                    a.textContent = "more info";
                    a.href = item.dataset.link;
                    a.hidden = false;
                } else {
                    title.textContent = thish2;
                    discription.textContent = thish3;
                    button.style.backgroundImage = "url(" + thisImage + ")";
                    button.innerHTML = thisPrice;
                    button.dataset.youtube = thisYouTube;
                    a.textContent = thisNote;
                    a.href = "#";
                    a.hidden = true;
                }

                const element = document.querySelector('#buy');
                element.scrollIntoView({
                    behavior: 'smooth'
                }, false);
            }, false);
        }, false);
    };
}, false);