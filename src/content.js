const All = (arr, mid) => {
  if (arr.length) {
    const arrEl = document.querySelectorAll(arr);
    for (let i = 0, len = arrEl.length; i < len; i++) {
      arrEl[i].classList.add('notranslate');
    }
  }

  if (mid.length) {
    const midEl = document.querySelectorAll(mid);
    for (let i = 0, len = midEl.length; i < len; i++) {
      midEl[i].classList.add('translate');
    }
  }
  // console.log('notranslate');
};

let once = ([data, globalCss]) => {
  const { def = [], sty = [], mid = [], css = '' } = data;
  const arr = def.concat(sty);
  All(arr, mid);

  const styArr = sty.map(v => `${v}, ${v} *`);
  const sty_ = document.createElement('style');
  document.head.insertAdjacentElement('beforeend', sty_);
  sty_.sheet.insertRule(`.sty_, .sty_ * { ${css || globalCss} }`, sty_.sheet.cssRules.length);
  sty_.sheet.cssRules[0].selectorText = styArr;

  const setFont = font => {
    const url = chrome.extension.getURL(`./assets/${font}.ttf`);
    const face = `@font-face { font-family: ${font}; src: url(${url}); }`;
    sty_.sheet.insertRule(face, sty_.sheet.cssRules.length);
  };

  ['FiraCode-Medium', 'FiraCode-Regular', 'FiraCode-Retina'].forEach(v => setFont(v));

  once = () => All(arr, mid);
};

chrome.runtime.onMessage.addListener(({ type, data }) => {
  if (type === 'translation') {
    once(data);
  }
});

chrome.runtime.sendMessage('current');
// chrome.runtime.sendMessage('currentDomain');
chrome.runtime.sendMessage('stop');
