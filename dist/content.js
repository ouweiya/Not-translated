chrome.runtime.onMessage.addListener(_ => {
  const domain = document.domain;

  chrome.storage.sync.get([domain, `_$${domain}`], d => {
    let [a, b] = Object.values(d);
    console.log(a, b);


    console.log('notranslate');

    // no2.some(v =>
    //   [...arr[i].classList]
    //     .map(v => '.' + v)
    //     .join('')
    //     .includes(v)
    // );

    // for (let i = 0, len = arr.length; i < len; i++) {
    //   if (1) {
    //     arr[i].classList.add('notranslate');
    //   } else {
    //     arr[i].classList.add('notranslate', 'sty_');
    //   }
    // }
  });
});
