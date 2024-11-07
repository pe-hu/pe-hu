daily();

function daily() {
    d = new Date().getDate();
    document.querySelector('#screensaver').style.backgroundImage = 'url(img/' + d + '.jpg)';
}
