document.addEventListener('readystatechange', event => {

  if (event.target.readyState === 'complete') {
    function shuffle(arrays) {
      const array = arrays.slice();
      for (let i = array.length - 1; i >= 0; i--) {
        const shuffleArr = Math.floor(Math.random() * (i + 1));
        [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
      }
      return array;
    }
    
    shuffleMotto('#p_motto', p_all);
    shuffleMotto('#e_motto', e_all);
    shuffleMotto('#h_motto', h_all);
    shuffleMotto('#u_motto', u_all);

    function shuffleMotto(query,shuffleArr) {
      const shuffleAll = shuffle(Object.entries(shuffleArr));
      shuffleAll.forEach((shuffleEach) => {
        document.querySelector(query).innerHTML += `
        <dt><i>${Object.values(shuffleEach[1])[0]}</i><br/>${shuffleEach[0]}</dt>
        <dd>${Object.values(shuffleEach[1])[1]}</dd>
        `;
      });
    }
  }
});
