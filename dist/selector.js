{
  const style = document.createElement('style');
  document.head.insertAdjacentElement('beforeend', style);

  style.sheet.insertRule(
    `
    #a123456789_ {
      background-color: #bcd5eb !important;
      box-shadow: 0 0 0 2px #5166bb !important;
    }
  `,
    style.sheet.cssRules.length
  );
  style.sheet.insertRule(
    `
    #a123456_ {
      background-color: #bcd5eb !important;
      box-shadow: none !important;
    }
  `,
    style.sheet.cssRules.length
  );

  let current = null;
  let classes = [];
  const mouseover = e => {
    e.stopPropagation();
    e.preventDefault();
    const tagName = e.target.tagName;

    const code = /^(pre|code|table|tbody)$/i.test(tagName);
    const column = /^(td)$/i.test(tagName);
    const row = /^(th)$/i.test(tagName);

    if (e.target.className) {
      classes = [].concat([...e.target.classList].map(c => `.${c}`).join(''));
    } else if (code) {
      classes = [].concat(tagName.toLowerCase());
    } else if (column) {
      const i = e.target.cellIndex;
      classes = [].concat(`td:nth-of-type(${i + 1})`);
    } else if (row) {
      const i = e.target.parentElement.rowIndex;
      classes = [].concat(`tr:nth-of-type(${i + 1})`);
    } else if (e.target.id) {
      classes = [].concat(`#${e.target.id}`);
    } else {
      classes = [];
    }
    current = e.target;
    // if (e.target.className || code || column || row || e.target.id) { }

    console.log('classes:', classes);
    style.sheet.cssRules[0].selectorText = classes.length ? classes : ['#bbbbb'];

    if (classes.length) {
      let classes2 = [].concat(classes + ' *');
      style.sheet.cssRules[1].selectorText = classes2.length ? classes2 : ['#bbbbb'];
    }
    // console.log(style.sheet.cssRules[0].selectorText);
    console.log('current:', current);
  };

  const click = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log(current, e.target);

    if (current.contains(e.target)) {
      console.log(`%c选取: ${classes}`, 'color:blue');

      chrome.storage.sync.get(document.domain, d => {
        if (d[document.domain]) {
          const classes1 = [...new Set(d[document.domain].concat(classes))];
          chrome.storage.sync.set({ [document.domain]: classes1 });
          window.location.reload();
        } else {
          chrome.storage.sync.set({ [document.domain]: classes });
        }
      });
    } else {
      console.log(`%c不是同一个元素`, 'color:red');
    }

    stop();
  };

  const exit = e => {
    console.log(e.keyCode === 27);
    if (e.keyCode === 27) {
      stop();
    }
  };

  const stop = () => {
    style.sheet && style.remove();
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('keydown', exit);
    document.removeEventListener('click', click);
  };

  document.addEventListener('mouseover', mouseover);
  document.addEventListener('keydown', exit);
  document.addEventListener('click', click);
  window.addEventListener('blur', stop);
  window.addEventListener('visibilitychange', stop);
}

// document.addEventListener('mouseout', mouseout);

// document.removeEventListener('mouseout', mouseout);

// chrome.storage.sync.set({ sex: 'Man' });

// console.log('%cHello World', 'color:green;font-size:20px');
// var url = new URL(tab.url);
// var domain = url.hostname;

// chrome.runtime.getURL()
// chrome.storage.sync.clear(console.log.bind(console, 'clear'));
// InjectStyle();
// const mouseout = e => {
//   e.stopPropagation();
//   // style.sheet.cssRules[0].selectorText = '#a123456789_';
// };
