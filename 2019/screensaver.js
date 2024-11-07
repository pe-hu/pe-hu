document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        screensaver();
    } else if (event.target.readyState === 'complete') {
        const scrollElement = document.querySelector('ul');
        scrollElement.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
            if (
                (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
                (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
            ) return;

            e.preventDefault();
            scrollElement.scrollLeft += e.deltaY;
        });
    };
});

async function fetchHTML(url = '', query = '') {
    fetch(url)
        .then(response => response.text())
        .then(innerHTML => {
            document.querySelector(query).innerHTML = innerHTML
        });
};

function screensaver() {
    const screensaver = document.querySelector('#screensaver');
    const events = [
        'keydown',
        'mousemove',
        'scroll',
        'wheel',
        'touchstart',
        'click'
    ];

    let timeoutId,
        sec = 31;

    // タイマー設定
    function setTimer() {
        timeoutId = setTimeout(start, sec * 1000);
    }

    // スクリーンセーバー起動
    function start() {
        screensaver.style.opacity = 1;
        screensaver.hidden = false;
    }

    // イベント設定
    function setEvents(func) {
        let len = events.length;
        while (len--) {
            addEventListener(events[len], func, false);
        }
    }

    function reset() {
        clearTimeout(timeoutId);
        setTimer();
        screensaver.style.opacity = 0;
        screensaver.hidden = true;
    }

    setTimer();
    setEvents(reset);
}