chrome.runtime.onMessage.addListener(_ => {
  const domain = document.domain;
  chrome.storage.sync.get(domain, d => {
    console.log(d[domain]);
    const { [domain]: { def = [] } = [] } = d;
    const { [domain]: { sty = [] } = [] } = d;
    console.log(def, sty);

    def.length && document.querySelectorAll(def).forEach(el => el.classList.add('notranslate'));
    sty.length && document.querySelectorAll(sty).forEach(el => el.classList.add('notranslate', 'sty_'));
  });

  // chrome.storage.sync.get([domain, `_${domain}`], d => {
  // let [arr = [], no = []] = Object.values(d);
  // const all = [...new Set(no.concat(arr))];

  // console.log('all:', all);
  // console.log('no:', no);
  // let sty = [];
  // no.length && (sty = all.filter(v => !no.includes(v)));
  // all.length === 1 && (sty = all);

  // console.log('sty:', sty);
  // let arr1 = x.filter(v => !y.includes(v));
  // let arr1 = all.filter(v => !sty.includes(v));
  // console.log('sty_:', arr1);
  // sty.length && (arr = arr.filter(v => sty.includes(v)));
  // console.log('TWO:', arr, sty);

  // if (arr.length) {
  //   document.querySelectorAll(arr).forEach(el => {
  //     if (el.classList.contains('.a')) {
  //       el.classList.add('notranslate');
  //     } else {
  //       el.classList.add('notranslate', 'sty_');
  //     }
  //   });
  // }

  // sty.length && document.querySelectorAll(sty).forEach(el => el.classList.add('sty_'));
  // sty.length && document.querySelectorAll(sty).forEach(el => el.classList.add('notranslate'));
  // });
});

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
