'use strict'

switch (document.readyState) {
  case "loading":
    jsArr.forEach(function (thisJS) {
      const js = document.createElement('script');
      js.src = thisJS[0] + '/' + thisJS[1] + '.js?d=' + new Date().valueOf();
      document.head.appendChild(js);
    }, false)
    break;
}

function getRandom(randomArray) {
  let random = randomArray[Math.floor(Math.random() * randomArray.length)]
  return random;
}

function randomMotto(query, thisArr) {
  const eachArr = getRandom(Object.entries(thisArr))
  const thisMotto = document.querySelector(query)
  thisMotto.innerText = eachArr[0]
  thisMotto.setAttribute('lang', Object.values(eachArr[1])[0])
  thisMotto.setAttribute('value', Object.values(eachArr[1])[1])
}

function allArr(query, arrAll) {
  Object.entries(arrAll).forEach((shuffleEach) => {
    document.querySelector(query).innerHTML += `
    <dt><i>${Object.values(shuffleEach[1])[0]}</i><br/>${shuffleEach[0]}</dt>
    <dd>${Object.values(shuffleEach[1])[1]}</dd>
    `;
  })
}

function shuffAll() {
  allArr('#p_motto', p_all)
  allArr('#e_motto', e_all)
  allArr('#h_motto', h_all)
  allArr('#u_motto', u_all)
}

window.addEventListener("load", () => {
  const mottoAll = document.querySelectorAll('#motto span')
  for (const mottoEach of mottoAll) {
    mottoEach.addEventListener('click', function () {
      const uttr = new SpeechSynthesisUtterance()
      uttr.text = this.innerText;
      uttr.lang = this.lang;
      uttr.rate = 0.75;
      speechSynthesis.speak(uttr)
    }, false)
  }
}, false)