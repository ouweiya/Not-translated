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

    if (e.target.className && !/^(textarea)$/i.test(tagName)) {
      classes = [].concat([...e.target.classList].map(c => `.${c}`).join(''));
      current = e.target;
    } else if (code) {
      classes = [].concat(tagName.toLowerCase());
      current = e.target;
    } else if (column) {
      const i = e.target.cellIndex;
      classes = [].concat(`td:nth-of-type(${i + 1})`);
      current = e.target;
    } else if (row) {
      const i = e.target.parentElement.rowIndex;
      classes = [].concat(`tr:nth-of-type(${i + 1})`);
      current = e.target;
    } else if (e.target.id) {
      classes = [].concat(`#${e.target.id}`);
      current = e.target;
    } else {
      classes = [];
    }

    console.log('classes:', classes);

    // style.sheet.cssRules[0].selectorText = classes;

    if (classes.length) {
      // let classes2 = [].concat(classes + ' *');
      // style.sheet.cssRules[1].selectorText = classes2;
    }
    // console.log(style.sheet.cssRules[0].selectorText);
    // console.log('current:', current);
  };

  const mouseout = e => {
    if (style.sheet) {
      style.sheet.cssRules[0].selectorText = '#sasasasas';
      style.sheet.cssRules[1].selectorText = '#dsadafdfee';
    }
  };

  const iteration = el => {
    let arr = [];
    const self = el => {
      if (el.children.length) {
        [...el.children].forEach(el => {
          arr.push(el);
          self(el);
        });
      }
    };
    self(el);
    return arr;
  };

  let nextEl = null;
  const mousewheel = e => {
    e.preventDefault();
    // console.log(e.wheelDelta);

    document.querySelectorAll('.sty').forEach(el => el.classList.remove('sty'));
    if (e.wheelDelta > 0) {
      const el = nextEl(-1);
      console.log(el);
      el && el.classList.add('sty');
    } else {
      const el = nextEl(1);
      console.log(el);
      el && el.classList.add('sty');
    }
  };

  const mousedown = e => {
    e.stopPropagation();
    e.preventDefault();

    if (current.contains(e.target) && current !== e.target) {
      console.log(`选取:`, classes);

      chrome.storage.sync.get(document.domain, d => {
        if (d[document.domain]) {
          const classes1 = [...new Set(d[document.domain].concat(classes))];
          chrome.storage.sync.set({ [document.domain]: classes1 });
          // window.location.reload();
        } else {
          chrome.storage.sync.set({ [document.domain]: classes });
        }
      });
    } else {
      console.log(`%c不是同一个元素`, 'color:red');
    }

    // stop();

    document.querySelectorAll('.sty').forEach(el => el.classList.remove('sty'));
    e.target.classList.add('sty');
    document.addEventListener('mousewheel', mousewheel, { passive: false });

    const previous = e.path.slice(0, -2).reverse();
    const next = iteration(e.target);

    const path = previous.concat(next);
    console.log(path);
    const index = path.indexOf(e.target);

    nextEl = (i => {
      let arr = path;
      return n => {
        i += n;
        i < 0 && (i = 0);
        i >= arr.length && (i = arr.length - 1);
        return arr[i];
      };
    })(index);
  };

  const exit = e => {
    console.log(e.keyCode === 27);
    if (e.keyCode === 27) {
      stop();
    }
  };

  const stop = () => {
    console.log('stop');
    style.sheet && style.remove();
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('keydown', exit);
    document.removeEventListener('mouseout', mouseout);
    document.removeEventListener('click', mousedown);
    document.removeEventListener('mousedown', mousedown);
  };

  document.addEventListener('mouseover', mouseover);
  document.addEventListener('mouseout', mouseout);
  document.addEventListener('keydown', exit);
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', _ => document.removeEventListener('mousewheel', mousewheel));

  document.addEventListener(
    'click',
    e => {
      e.stopPropagation();
      e.preventDefault();
    },
    { once: true }
  );
  window.addEventListener('blur', stop);
  window.addEventListener('visibilitychange', stop);
  // document.addEventListener('click', mousedown);
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
