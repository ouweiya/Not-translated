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
  let bool = false;
  const selec = el => {
    const tagName = el.tagName;
    const code = /^(pre|code|table|tbody)$/i.test(tagName);
    const column = /^(td)$/i.test(tagName);
    const row = /^(th)$/i.test(tagName);
    bool = false;
    if (el.className && !/^(textarea)$/i.test(tagName)) {
      classes = [...el.classList].map(c => `.${c}`).join('');
    } else if (code) {
      classes = tagName.toLowerCase();
    } else if (column) {
      const i = el.cellIndex;
      classes = `td:nth-of-type(${i + 1})`;
    } else if (row) {
      const i = el.parentElement.rowIndex;
      classes = `tr:nth-of-type(${i + 1})`;
    } else if (el.id) {
      classes = `#${el.id}`;
    } else {
      bool = true;
      // classes = [];
    }
    return classes;
  };

  const mouseover = e => {
    e.stopPropagation();
    e.preventDefault();

    classes = selec(e.target);

    let c = bool ? 'bool' : classes;
    // console.log('C:', c);
    style.sheet.cssRules[0].selectorText = c;
    // classes.length && (style.sheet.cssRules[1].selectorText = classes + ' *');
    !bool && (current = e.target);
    // (classes2 = classes)
    // console.log(classes);
  };

  const mouseout = _ => {
    [...style.sheet.cssRules].forEach(cssRules => (cssRules.selectorText = '.a12345'));
  };

  const iteration = (acc, i) => {
    acc.push(i);
    if (i.children.length) {
      return [...i.children].reduce(iteration, acc);
    }
    return acc;
  };

  const clearStyle = _ => {
    document.querySelectorAll('.sty').forEach(el => el.classList.remove('sty'));
  };

  let nextEl = null;
  const mousewheel = e => {
    e.preventDefault();
    clearStyle();

    let classes = [];
    if (e.wheelDelta > 0) {
      classes = selec(nextEl(-1));
      style.sheet.cssRules[0].selectorText = classes;
    } else {
      classes = selec(nextEl(1));
      style.sheet.cssRules[0].selectorText = classes;
    }
    console.log('classes', classes);
    console.log('classes-2', document.querySelector(classes));
    classes.length && (style.sheet.cssRules[1].selectorText = classes + ' *');
  };
  // console.log(e.wheelDelta);

  const mousedown = e => {
    e.stopPropagation();
    e.preventDefault();
    clearStyle();
    document.addEventListener('mousewheel', mousewheel, { passive: false });

    const previous = e.path.slice(0, -2).reverse();
    const next = [...e.target.children].reduce(iteration, []);
    const path = previous.concat(next);
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

  const mouseup = e => {
    if (current.contains(e.target) && current !== e.target) {
      chrome.storage.sync.get(document.domain, d => {
        let classes1 = classes;
        d[document.domain] && (classes1 = [...new Set(d[document.domain].concat(classes))]);
        chrome.storage.sync.set({ [document.domain]: classes1 });
      });
      // window.location.reload();
      console.log(`选取:`, classes);
      // console.log(`current:`, current);
      // console.log(`e.target:`, e.target);
    } else {
      console.log(`%c不是同一个元素`, 'color:red');
    }
    stop();
  };

  const exit = e => e.keyCode === 27 && stop();

  const stop = () => {
    style.sheet && style.remove();
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('mouseout', mouseout);
    document.removeEventListener('mousedown', mousedown);
    document.removeEventListener('mouseup', mouseup);
    document.removeEventListener('mousewheel', mousewheel);
    document.removeEventListener('keydown', exit);
    console.log('stop');
  };

  document.addEventListener('mouseover', mouseover);
  document.addEventListener('mouseout', mouseout);
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);
  document.addEventListener('keydown', exit);

  window.addEventListener('blur', stop);
  window.addEventListener('visibilitychange', stop);
  document.addEventListener(
    'click',
    e => {
      e.stopPropagation();
      e.preventDefault();
    },
    { once: true }
  );
  // document.addEventListener('click', mousedown);
}

// document.removeEventListener('click', mousedown);

// document.addEventListener('mouseout', mouseout);

// document.removeEventListener('mouseout', mouseout);
//classes = [].concat(`tr:nth-of-type(${i + 1})`);
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

// classes = [].concat([...e.target.classList].map(c => `.${c}`).join(''));
// classes = [].concat(tagName.toLowerCase());
// classes = [].concat(`td:nth-of-type(${i + 1})`);
// classes = [].concat(`#${e.target.id}`);
// const reg = tag => new RegExp(`^(${tag})$`, 'i').test(tagName);

// const iteration2 = el => {
//   let arr = [];
//   const self = el => {
//     el.children.length && [...el.children].forEach(el => (arr.push(el), self(el)));
//   };

//   self(el);
//   return arr;
// };

// if (d[document.domain]) {
//   chrome.storage.sync.set({
//     [document.domain]: [...new Set(d[document.domain].concat(classes))]
//   });
// } else {
//   chrome.storage.sync.set({ [document.domain]: classes });
// }
