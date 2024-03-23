document.addEventListener('readystatechange', event => {

  if (event.target.readyState === 'loading') {
    // 文書の読み込み中に実行する
  }

  else if (event.target.readyState === 'interactive') {
    function getRandom(randomArray) {
      let random = randomArray[Math.floor(Math.random() * randomArray.length)];
      return random;
    };

    const motto = document.querySelector('#motto');
    motto.style.fontFamily = `"MS Mincho", "SimSong", serif`;

    function randomMotto(query,thisArr) {
      const eachArr = getRandom(Object.entries(thisArr));
      const thisMotto = document.querySelector(query)
      thisMotto.innerText = eachArr[0];
      thisMotto.setAttribute('lang', Object.values(eachArr[1])[0]);
      thisMotto.setAttribute('value', Object.values(eachArr[1])[1]);
    };

    window.setInterval(function() {
      motto.style.fontFamily = `'Times New Roman', serif`;
      randomMotto('#p', p_all);
      randomMotto('#e', e_all);
      randomMotto('#h', h_all);
      randomMotto('#u', u_all);
    }, 4444);

    const mottoAll = document.querySelectorAll('#motto span')
    for (const mottoEach of mottoAll) {
      mottoEach.addEventListener('click', function () {
        const uttr = new SpeechSynthesisUtterance();
        uttr.text = this.innerText;
        uttr.lang = this.lang;
        uttr.rate = 0.75;
        speechSynthesis.speak(uttr);
      }, false);
    }
  }
});
