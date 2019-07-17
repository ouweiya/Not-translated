let NOOP = _ => {};
let closureRun = null;
const defcss = `font-family:'Fira Code Regular', Consolas !important;font-size: 14px !important;`;

let run = null;

let once = domain => {
  once = NOOP;
  chrome.storage.sync.get(domain, ({ [domain]: data = {} }) => {
    run = (data => {
      const { def = [] } = data;
      const { sty = [] } = data;
      const { mid = [] } = data;
      const { css = '' } = data;
      const arr = def.concat(sty);
      const styArr = sty.map(v => `${v}, ${v} *`);

      let sty_ = document.createElement('style');
      document.head.insertAdjacentElement('beforeend', sty_);
      sty_.sheet.insertRule(`.sty_, .sty_ * { ${css || defcss} }`, sty_.sheet.cssRules.length);
      sty_.sheet.cssRules[0].selectorText = styArr;
      console.log('data-100', data);

      return () => {
        arr.length && document.querySelectorAll(arr).forEach(el => el.classList.add('notranslate'));
        mid.length && document.querySelectorAll(mid).forEach(el => el.classList.add('translate'));
        console.log('nooooooooo');
      };
    })(data);
  });
};

chrome.runtime.onMessage.addListener(_ => {
  const domain = document.domain;
  once(domain);
  run && run();
});

// let fun = domain => {
//   fun = NOOP;
//   const run2 = new Promise(res => chrome.storage.sync.get(domain, ({ [domain]: data = {} }) => res(data)));
//   return (async () => {
//     let data = await run2.then();
//     const { def = [] } = data;
//     const { sty = [] } = data;
//     const { mid = [] } = data;
//     const { css = '' } = data;
//     const arr = def.concat(sty);
//     const styArr = sty.map(v => `${v}, ${v} *`);
//     let sty_ = document.createElement('style');
//     document.head.insertAdjacentElement('beforeend', sty_);
//     sty_.sheet.insertRule(`.sty_, .sty_ * { ${css || defcss} }`, sty_.sheet.cssRules.length);
//     sty_.sheet.cssRules[0].selectorText = styArr;

//     console.log('data-100', data);
//     return () => {
//       arr.length && document.querySelectorAll(arr).forEach(el => el.classList.add('notranslate'));
//       mid.length && document.querySelectorAll(mid).forEach(el => el.classList.add('translate'));
//     };
//   })();
// };

// let run = data => {
//   const { def = [] } = data;
//   const { sty = [] } = data;
//   const { mid = [] } = data;
//   const { css = '' } = data;
//   const arr = def.concat(sty);
//   const styArr = sty.map(v => `${v}, ${v} *`);
//   // console.log('css:', css || defcss);
//   let sty_ = document.createElement('style');
//   document.head.insertAdjacentElement('beforeend', sty_);
//   sty_.sheet.insertRule(`.sty_, .sty_ * { ${css || defcss} }`, sty_.sheet.cssRules.length);
//   sty_.sheet.cssRules[0].selectorText = styArr;

//   // sty_ = null;
//   // run = NOOP;
//   console.log('data-100', data);
//   return () => {
//     arr.length && document.querySelectorAll(arr).forEach(el => el.classList.add('notranslate'));
//     mid.length && document.querySelectorAll(mid).forEach(el => el.classList.add('translate'));
//   };
// };

// closureRun && closureRun();
// closureRun = run(data);

// console.log(
//   fun(domain).then(fn => {
//     fn();
//   }),
//   100
// );

// globalData = data;
// // console.log(1000);

// !globalData
//   ? chrome.storage.sync.get(domain, ({ [domain]: data = {} }) => {
//       closureRun = run(data);
//       globalData = data;
//       // console.log(1000);
//     })
//   : run(globalData);

// !globalData &&globalData = data;

// const run = new Promise(res => {
//   !globalData
//     ? chrome.storage.sync.get(domain, ({ [domain]: data = {} }) => {
//         res(data);
//         globalData = data;
//         console.log(1000);
//       })
//     : res(globalData);
// });

// data && (data.css = css);
// chrome.storage.sync.set({ [domain]: data });

// sty.length && document.querySelectorAll(sty).forEach(el => el.classList.add('notranslate', 'sty_'));
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
