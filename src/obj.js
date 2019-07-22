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
    const h = /^(h1|h2|h3|h4|h5|h6)$/i.test(tagName);
    const className = [...el.classList].filter(v => !['notranslate', 'translate'].includes(v));

    if (code) {
      classes = [].concat(tagName.toLowerCase());
    } else if (row) {
      const i = el.cellIndex;
      classes = [].concat(`th:nth-of-type(${i + 1})`);
    } else if (column) {
      const i = el.cellIndex;
      classes = [].concat(`td:nth-of-type(${i + 1})`);
    } else if (className.length && !/^(textarea)$/i.test(tagName)) {
      classes = [].concat(className.map(c => `.${c}`).join(''));
    } else if (h) {
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

  const mouseout = _ => (style.sheet.cssRules[0].selectorText = '.a12345xx');

  const filter = el => {
    const code = /^(pre|code|table|tbody|td|th)$/i.test(el.tagName);
    const bool = (el.classList.length && !/^(textarea)$/i.test(el.tagName)) || code || el.id;
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
  const mousedown = e => {
    e.stopPropagation();
    e.preventDefault();
    document.addEventListener('mousewheel', mousewheel, { passive: false });
    window.addEventListener('contextmenu', contextmenu);
    document.addEventListener('mouseup', mouseup);

    const previous = e.path
      .slice(0, -2)
      .reverse()
      .filter(i => filter(i));
    const next = [...e.target.children].reduce(iteration, []).filter(v => filter(v));
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
      const domain = document.domain;
      chrome.storage.sync.get(domain, d => {
        const { [domain]: data = { def: [], sty: [], mid: [] } } = d;

        if (e.button === 0) {
          if (data.sty.includes(...classes)) {
            data.sty = data.sty.filter(v => !classes.includes(v));
          } else {
            data.sty = [...new Set(data.sty.concat(classes))];
            data.def = data.def.filter(v => !classes.includes(v));
            data.mid = data.mid.filter(v => !classes.includes(v));
          }
        }
        if (e.button === 2) {
          if (data.def.includes(...classes)) {
            data.def = data.def.filter(v => !classes.includes(v));
          } else {
            data.def = [...new Set(data.def.concat(classes))];
            data.sty = data.sty.filter(v => !classes.includes(v));
            data.mid = data.mid.filter(v => !classes.includes(v));
          }

          document.removeEventListener('mouseup', mouseup);
        }
        if (e.button === 1) {
          if (data.mid.includes(...classes)) {
            data.mid = data.mid.filter(v => !classes.includes(v));
          } else {
            data.mid = [...new Set(data.mid.concat(classes))];
            data.sty = data.sty.filter(v => !classes.includes(v));
            data.def = data.def.filter(v => !classes.includes(v));
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
    console.log('classes:', classes);
    document.removeEventListener('mousewheel', mousewheel);
  };

  const exit = e => e.keyCode === 27 && stop();
  const contextmenu = e => e.preventDefault();
  const click = e => (e.stopPropagation(), e.preventDefault());

  const stop = () => {
    style.sheet && style.remove();
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
  document.addEventListener('keydown', exit);
  document.addEventListener('click', click);

  // window.addEventListener('blur', stop);
  // window.addEventListener('visibilitychange', stop);
}
