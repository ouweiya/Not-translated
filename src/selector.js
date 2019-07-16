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

  let classes = [];

  const selec = el => {
    const tagName = el.tagName;
    const code = /^(pre|code|table|tbody|kbd|var|samp)$/i.test(tagName);
    const column = /^(td)$/i.test(tagName);
    const row = /^(th)$/i.test(tagName);

    if (el.className && !/^(textarea)$/i.test(tagName)) {
      classes = [].concat([...el.classList].map(c => `.${c}`).join(''));
    } else if (code) {
      classes = [].concat(tagName.toLowerCase());
    } else if (column) {
      const i = [].concat(el.cellIndex);
      classes = `td:nth-of-type(${i + 1})`;
    } else if (row) {
      const i = [].concat(el.parentElement.rowIndex);
      classes = `tr:nth-of-type(${i + 1})`;
    } else if (el.id) {
      classes = [].concat(`#${el.id}`);
    } else {
      classes = [];
    }
  };

  const mouseover = e => {
    e.stopPropagation();
    e.preventDefault();

    selec(e.target);
    style.sheet.cssRules[0].selectorText = classes;
    classes.length && (style.sheet.cssRules[1].selectorText = classes + ' *');
    // console.log('selectorText:', style.sheet.cssRules[0].selectorText);
  };

  const mouseout = _ => {
    [...style.sheet.cssRules].forEach(cssRules => (cssRules.selectorText = '.a12345'));
  };

  const filter = el => {
    const code = /^(pre|code|table|tbody|td|th)$/i.test(el.tagName);
    let bool = (el.className && !/^(textarea)$/i.test(el.tagName)) || code || el.id;
    return !!bool;
  };

  const iteration = (acc, i) => {
    acc.push(i);
    return i.children.length ? [...i.children].reduce(iteration, acc) : acc.filter(i => filter(i));
  };

  const clearStyle = _ => {
    document.querySelectorAll('.sty').forEach(el => el.classList.remove('sty'));
  };

  let nextEl = null;

  const mousewheel = e => {
    e.preventDefault();
    clearStyle();

    if (e.wheelDelta > 0) {
      selec(nextEl(-1));
      style.sheet.cssRules[0].selectorText = classes;
    } else {
      selec(nextEl(1));
      style.sheet.cssRules[0].selectorText = classes;
    }
    console.log('classes', document.querySelector(classes.length ? classes : 'rerere'));
    classes.length && (style.sheet.cssRules[1].selectorText = classes + ' *');
  };
  // console.log(e.wheelDelta);

  const mousedown = e => {
    e.stopPropagation();
    e.preventDefault();
    clearStyle();
    document.addEventListener('mousewheel', mousewheel, { passive: false });
    window.addEventListener('contextmenu', contextmenu, { once: true });

    const previous = e.path
      .slice(0, -2)
      .reverse()
      .filter(i => filter(i));
    const next = [...e.target.children].reduce(iteration, []);
    const path = previous.concat(next);

    // console.log('path', path);

    if (path.length) {
      const lookupIndex = el => {
        if (!el.parentElement) {
          return path.length - 1;
        }
        return path.indexOf(el) === -1 ? lookupIndex(el.parentElement) : path.indexOf(el);
      };

      const index = lookupIndex(e.target);
      // console.log('index', index);
      nextEl = (i => {
        let arr = path;
        return n => {
          i += n;
          i < 0 && (i = 0);
          i >= arr.length && (i = arr.length - 1);
          return arr[i];
        };
      })(index);
    }
  };

  const mouseup = e => {
    if (classes.length) {
      let domain = document.domain;
      classes = classes.map(v =>
        v
          .split('.notranslate')
          .join('')
          .split('.sty_')
          .join('')
      );

      chrome.storage.sync.get(domain, d => {
        let { [domain]: { def: def = [] } = [] } = d;
        let { [domain]: { sty: sty = [] } = [] } = d;

        const obj = { def: def, sty: sty };

        obj.def = [...new Set(obj.def.concat(classes))];

        if (e.button === 0) {
          obj.sty = [...new Set(obj.sty.concat(classes))];
        }

        if (e.button === 2) {
          obj.sty = [...new Set(obj.sty.concat(classes))].filter(v => !v.includes(classes));
        }

        obj.def = obj.def.filter(v => !obj.sty.includes(v));

        chrome.storage.sync.set({ [domain]: obj });
        console.log(obj);

        // console.log('不运用sty:', result);
        // chrome.storage.sync.set({ [domain]: { def: [...new Set(arr)] } });

        /*   let arr = [];
          if (val1.length) {
            arr = val1.concat(classes);
            console.log(arr);

            arr = arr.map(v => {
              return v.includes(classes) ? `$${v}` : v;
            });
            console.log(arr);
          } else {
            arr = val1.concat(`$${classes}`);
          }
          */

        // if (e.button === 2) {
        //   let arr = [];
        //   if (val1.length) {
        //     arr = val1.concat(classes);
        //     console.log(arr);

        //     arr = arr.map(v => {
        //       return v.includes(classes) ? v : `$${v}`;
        //     });
        //     console.log(arr);
        //   } else {
        //     arr = val1.concat(classes);
        //   }

        //   chrome.storage.sync.set({ [domain]: [...new Set(arr)] });
        //   // [1, 3, 4].filter(v => ![1].includes(v));
        // }
      });
      // let arrn = val1.map(v => (v.includes(classes) ? `${classes}` : v));

      // chrome.storage.sync.set({ [domain2]: [...new Set(val2.concat(classes))] });

      // window.location.reload();
      // console.log(`选取:`, classes);
    } else {
      console.log(`%c无效元素`, 'color:red');
    }

    stop();
  };

  const exit = e => e.keyCode === 27 && stop();
  const contextmenu = e => e.preventDefault();

  const stop = () => {
    style.sheet && style.remove();
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('mouseout', mouseout);
    document.removeEventListener('mousedown', mousedown);
    document.removeEventListener('mouseup', mouseup);
    document.removeEventListener('mousewheel', mousewheel);
    document.removeEventListener('keydown', exit);
    // console.log('stop');
  };
  // e.button === 0 &&
  // window.removeEventListener('contextmenu', contextmenu);

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
}

// document.addEventListener('click', mousedown);
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
