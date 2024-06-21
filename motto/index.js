'use strict'

switch (document.readyState) {
  case "loading":
    jsArr.forEach(function (thisJS) {
      const js = document.createElement('script')
      js.src = thisJS[0] + '/' + thisJS[1] + '.js?d=' + new Date();
      document.head.appendChild(js);
    }, false)
    break;
}

function getRandom(randomArray) {
  let random = randomArray[Math.floor(Math.random() * randomArray.length)];
  return random;
}

function randomMotto(query, thisArr) {
  const eachArr = getRandom(Object.entries(thisArr));
  const thisMotto = document.querySelector(query)
  thisMotto.innerText = eachArr[0];
  thisMotto.setAttribute('lang', Object.values(eachArr[1])[0]);
  thisMotto.setAttribute('value', Object.values(eachArr[1])[1]);
}

function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const shuffleArr = Math.floor(Math.random() * (i + 1));
    [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
  }
  return array;
}

function shuffleMotto(query, shuffleArr) {
  const shuffleAll = shuffle(Object.entries(shuffleArr));
  shuffleAll.forEach((shuffleEach) => {
    document.querySelector(query).innerHTML += `
    <dt><i>${Object.values(shuffleEach[1])[0]}</i><br/>${shuffleEach[0]}</dt>
    <dd>${Object.values(shuffleEach[1])[1]}</dd>
    `;
  })
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    window.setInterval(function () {
      randomMotto('#p', p_all)
      randomMotto('#e', e_all)
      randomMotto('#h', h_all)
      randomMotto('#u', u_all)
    }, 4444)
  }
}, false)
