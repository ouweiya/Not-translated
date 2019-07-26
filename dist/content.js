const defcss = `font-family:'Fira Code Regular', Consolas !important;font-size: 14px !important;`;

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
  // console.log('oooooooo');
};

let once = data =>
  (once = (data => {
    const { def = [], sty = [], mid = [], css = '' } = data;
    const arr = def.concat(sty);
    All(arr, mid);

    const styArr = sty.map(v => `${v}, ${v} *`);
    const sty_ = document.createElement('style');
    document.head.insertAdjacentElement('beforeend', sty_);
    sty_.sheet.insertRule(`.sty_, .sty_ * { ${css || defcss} }`, sty_.sheet.cssRules.length);
    sty_.sheet.cssRules[0].selectorText = styArr;
    // console.log('注入样式', data);

    return _ => All(arr, mid);
  })(data));

chrome.runtime.onMessage.addListener(mes => once(mes));
