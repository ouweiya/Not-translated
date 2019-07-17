{
  const style = document.createElement('style');
  document.head.insertAdjacentElement('beforeend', style);
  // 选择器父级
  style.sheet.insertRule(
    `
    #a123456789_ {
      background-color: #82b4e680 !important;
      box-shadow: 0 0 0 1px #0f4d9a !important;
    }
  `,
    style.sheet.cssRules.length
  );
  // 蓝色
  style.sheet.insertRule(
    `
    #aa1ssd23456789_ {
      background-color: #82b4e680 !important;
      box-shadow: 0 0 0 1px #0f4d9a !important;
    }
  `,
    style.sheet.cssRules.length
  );
  // 绿色
  style.sheet.insertRule(
    `
    #aa123dsds6789_ {
      background-color: #abe88f7d !important;
      box-shadow: 0 0 0 1px #44b311;
    }
  `,
    style.sheet.cssRules.length
  );
  // 黄色
  style.sheet.insertRule(
    `
    #aa1234ag56711_ {
      background-color: #e6d07c81 !important;
      box-shadow: 0 0 0 1px #be9911;
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

    const className = [...el.classList].filter(
      v => !['notranslate', 'translate'].some(i => new RegExp(`^${i}$`).test(v))
    );

    if (row) {
      const i = el.cellIndex;
      classes = [].concat(`th:nth-of-type(${i + 1})`);
    } else if (column) {
      const i = el.cellIndex;
      classes = [].concat(`td:nth-of-type(${i + 1})`);
    } else if (className.length && !/^(textarea)$/i.test(tagName)) {
      classes = [].concat(className.map(c => `.${c}`).join(''));
    } else if (code) {
      classes = [].concat(tagName.toLowerCase());
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
  };

  const mouseout = _ => {
    style.sheet.cssRules[0].selectorText = '.a12345xx';
  };

  const filter = el => {
    const code = /^(pre|code|table|tbody|td|th)$/i.test(el.tagName);
    let bool = (el.className && !/^(textarea)$/i.test(el.tagName)) || code || el.id;
    return !!bool;
  };

  const iteration = (acc, i) => (acc.push(i), [...i.children].reduce(iteration, acc));

  let nextEl = null;

  const mousewheel = e => {
    e.preventDefault();
    if (e.wheelDelta > 0) {
      selec(nextEl(-1));
      style.sheet.cssRules[0].selectorText = classes;
    } else {
      selec(nextEl(1));
      style.sheet.cssRules[0].selectorText = classes;
    }
  };
  // console.log(e.wheelDelta);

  let next = [];
  let previous = [];

  const mousedown = e => {
    e.stopPropagation();
    e.preventDefault();
    document.addEventListener('mousewheel', mousewheel, { passive: false });
    window.addEventListener('contextmenu', contextmenu);
    document.addEventListener('mouseup', mouseup);

    previous = e.path
      .slice(0, -2)
      .reverse()
      .filter(i => filter(i));
    next = [...e.target.children].reduce(iteration, []).filter(v => filter(v));
    const path = previous.concat(next);

    if (path.length) {
      const lookupIndex = el => {
        if (!el.parentElement) {
          return path.length - 1;
        }
        return path.indexOf(el) === -1 ? lookupIndex(el.parentElement) : path.indexOf(el);
      };

      const index = lookupIndex(e.target);

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

  const setStyle = data => {
    style.sheet.cssRules[0].selectorText = '.DGGgbhrtrt_';
    style.sheet.cssRules[1].selectorText = data.sty.length ? data.sty : '.DGGgbhrtrt_';
    style.sheet.cssRules[2].selectorText = data.def.length ? data.def : '.DGGgbhrtrt_';
    style.sheet.cssRules[3].selectorText = data.mid.length ? data.mid : '.DGGgbhrtrt_';
  };

  chrome.storage.sync.get(document.domain, d => {
    const { [document.domain]: data } = d;
    data && setStyle(data);
  });

  const mouseup = e => {
    if (classes.length) {
      let domain = document.domain;
      chrome.storage.sync.get(domain, d => {
        const { [domain]: data = { def: [], sty: [], mid: [] } } = d;
        const bool = v => new RegExp(`^${v.replace(/(?=[.,/() ])/gi, '\\')}$`, 'i').test(classes);
        if (e.button === 0) {
          if (data.sty.some(v => bool(v))) {
            data.sty = data.sty.filter(v => !bool(v));
          } else {
            data.sty = [...new Set(data.sty.concat(classes))];
            data.def = data.def.filter(v => !bool(v));
            data.mid = data.mid.filter(v => !bool(v));
          }
        }

        if (e.button === 2) {
          if (data.def.some(v => bool(v))) {
            data.def = data.def.filter(v => !bool(v));
          } else {
            data.def = [...new Set(data.def.concat(classes))];
            data.sty = data.sty.filter(v => !bool(v));
            data.mid = data.mid.filter(v => !bool(v));
          }

          document.removeEventListener('mouseup', mouseup);
        }
        if (e.button === 1) {
          if (data.mid.some(v => bool(v))) {
            data.mid = data.mid.filter(v => !bool(v));
          } else {
            data.mid = [...new Set(data.mid.concat(classes))];
            data.sty = data.sty.filter(v => !bool(v));
            data.def = data.def.filter(v => !bool(v));
          }

          document.removeEventListener('mouseup', mouseup);
        }

        chrome.storage.sync.set({ [domain]: data });
        console.log(data);
        setStyle(data);
      });
    } else {
      console.log(`%c无效元素`, 'color:red');
    }

    // stop();
    document.removeEventListener('mousewheel', mousewheel);
  };

  const exit = e => e.keyCode === 27 && stop();
  const contextmenu = e => e.preventDefault();
  const click = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const stop = () => {
    // style.sheet && style.remove();
    style.sheet.cssRules[0].selectorText = '#sdss2323s';
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('mouseout', mouseout);
    document.removeEventListener('mousedown', mousedown);
    document.removeEventListener('mouseup', mouseup);
    document.removeEventListener('mousewheel', mousewheel);
    document.removeEventListener('keydown', exit);
    document.removeEventListener('click', click);
    window.removeEventListener('contextmenu', contextmenu);
    console.log('stop');
  };

  document.addEventListener('mouseover', mouseover);
  document.addEventListener('mouseout', mouseout);
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);
  document.addEventListener('keydown', exit);
  document.addEventListener('click', click);

  // window.addEventListener('blur', stop);
  // window.addEventListener('visibilitychange', stop);

  chrome.storage.sync.get('aaa', d => {
    console.log('sync');
  });
  chrome.storage.local.get('aaa', d => {
    console.log('local');
  });
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
// let arrn = val1.map(v => (v.includes(classes) ? `${classes}` : v));

// chrome.storage.sync.set({ [domain2]: [...new Set(val2.concat(classes))] });

// window.location.reload();
// console.log(`选取:`, classes);
// [...e.children].forEach();
// let b = document.querySelector(classes).contains(document.querySelector(classes2));
// let b = e.target.classList.contains(classes2);
// let css = style.sheet.cssRules[2].selectorText.split(',');
// let css = style.sheet.cssRules[2].selectorText;
// let b = css.includes(`${classes2}`);
// css.some(v => v.includes)
// console.log('??', css, `${classes2}`);
// console.log(b);
// b ? (css = css.filter(v => !v.includes(classes2))) : (css += `,${classes}`);
// console.log('classes2', classes2);
// console.log('classes', classes);
// if (`${classes2}` === `${classes}`) {
//   console.log('=====');
//   css = css.split(`,${classes2}`).join('');
//   console.log('css', css);
// } else {
//   css += `,${classes}`;
// }

// css = css.split(`.${classes2}`).join('');
// console.log('css1', css);
// (css = css.split(`,${classes2}`).join(''));

// let a =

// style.sheet.cssRules[2].selectorText = css;
// console.log(a);
// console.log('css2', css);

// previous.forEach(v => {
//   if (v.classList && v !== e.target) {
//     v.classList.contains('selected2') && v.classList.remove('selected2');
//   }
// });
// next.forEach(v => {
//   v.classList && v.classList.contains('selected2') && v.classList.remove('selected2');
// });

// const bool = previous.some(v => (v !== e.target ? v.classList.contains('selected') : false));

// if (!bool) {
//   e.target.classList.remove('selected');
//   e.target.classList.toggle('selected2');
// }

// style.sheet.cssRules[0].selectorText = '#xxxxxxxxx';
// style.sheet.cssRules[1].selectorText = '#xxxxxxxxx';

// document
// .querySelectorAll(['.selected2', '.selected'])
// .forEach(v => v.classList.remove('selected2', 'selected'));

// data.sty.length && document.querySelectorAll(data.sty).forEach(v => v.classList.add('selected'));
// data.def.length && document.querySelectorAll(data.def).forEach(v => v.classList.add('selected2'));

// data.sty.length && (style.sheet.cssRules[2].selectorText = '#sadsadsad');
// data.def.length && (style.sheet.cssRules[3].selectorText = '#sadsadsad1213');

// data.def.length
//   ? (style.sheet.cssRules[4].selectorText = data.def)
//   : (style.sheet.cssRules[4].selectorText = '#sadsadsad13');
/*  if (className.length && !/^(textarea)$/i.test(tagName)) {
      // classes = [].concat([...el.classList].map(c => `.${c}`).join(''));
      classes = [].concat(className.map(c => `.${c}`).join(''));
    } else if (code) {
      classes = [].concat(tagName.toLowerCase());
    } else if (column) {
      const i = el.cellIndex;
      classes = [].concat(`td:nth-of-type(${i + 1})`);
    } else if (row) {
      const i = el.parentElement.rowIndex;
      // classes = [].concat(`tr:nth-of-type(${i + 1})`);
      classes = [].concat(`th:nth-of-type(${i + 1})`);
    } else if (el.id) {
      classes = [].concat(`#${el.id}`);
    } else {
      classes = [];
    } */
// console.log('className:', className);
// console.log('classes:', classes);

// background-color: #82b4e680 !important;
//  box-shadow: none !important;
//  选择器子级
// style.sheet.insertRule(
//   `
//   #a123456_ {

//   }
// `,
//   style.sheet.cssRules.length
// );

// console.log(r);
// console.log(new RegExp(`^${r}$`, 'i').test(classes));
// console.log('RegExp', /^td:nth-of-type\(1\)$/.test(classes));
// data.sty.some(v => new RegExp(`^${v}$`, 'i').test(classes))
// const bool = data.sty.some(v => new RegExp(`^${v.replace(/(?=[.,/() ])/g, '\\')}$`, 'i').test(classes));
// console.log(bool);

// data.sty = [...new Set(data.sty.concat(classes))].filter(v => !v.includes(classes));
// data.sty = [...new Set(data.sty.concat(classes))].filter(v => !new RegExp(`^${v}$`, 'i').test(classes));
// data.mid = [...new Set(data.mid.concat(classes))];
