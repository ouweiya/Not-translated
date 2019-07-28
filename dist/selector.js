{
  let classes = [];
  let style = null;
  let nextEl = null;

  const createStyle = _ => {
    const style = document.createElement('style');
    document.head.insertAdjacentElement('beforeend', style);
    const hover = `#_a_ { background-color: #82b4e680 !important;box-shadow: 0 0 0 1px #0f4d9a !important;}`;
    const sty = `#_a_ { background-color: #82b4e680 !important;box-shadow: 0 0 0 1px #0f4d9a !important; }`;
    const def = `#_a_ { background-color: #abe88f7d !important; box-shadow: 0 0 0 1px #44b311; }`;
    const mid = `#_a_ { background-color: #e6d07c81 !important; box-shadow: 0 0 0 1px #be9911; }`;
    const iframe = `iframe { pointer-events: none; }`;
    [hover, sty, def, mid, iframe].forEach(cssText => style.sheet.insertRule(cssText, style.sheet.cssRules.length));
    return style;
  };

  const selec = el => {
    const tagName = el.tagName;
    const code = /^(pre|code|table|tbody|kbd|var|samp|iframe)$/i.test(tagName);
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
    return classes;
  };

  const mouseover = e => {
    e.stopPropagation(), e.preventDefault();
    style.sheet.cssRules[0].selectorText = selec(e.target);
  };

  const mouseout = _ => (style.sheet.cssRules[0].selectorText = '._b_');

  const mousewheel = e => {
    e.preventDefault();
    e.wheelDelta > 0
      ? (style.sheet.cssRules[0].selectorText = selec(nextEl(-1)))
      : (style.sheet.cssRules[0].selectorText = selec(nextEl(1)));
  };

  const mousedown = e => {
    e.stopPropagation(), e.preventDefault();
    document.addEventListener('mousewheel', mousewheel, { passive: false });
    window.addEventListener('contextmenu', contextmenu);
    document.addEventListener('mouseup', mouseup);
    selec(e.target);

    const filter = el => {
      const code = /^(pre|code|table|tbody|td|th)$/i.test(el.tagName);
      const bool = (el.classList.length && !/^(textarea)$/i.test(el.tagName)) || code || el.id;
      return !!bool;
    };
    const iteration = (acc, i) => (acc.push(i), [...i.children].reduce(iteration, acc));

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
        return n => {
          i += n;
          i < 0 && (i = 0);
          i >= path.length && (i = path.length - 1);
          return path[i];
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
        chrome.runtime.sendMessage('sel');
        chrome.runtime.sendMessage('current');
        setStyle(data);
      });
    } else {
      // console.log(`%c无效元素`, 'color:red');
    }
    // console.log('classes:', classes);
    document.removeEventListener('mousewheel', mousewheel);
  };

  const keydown = e => {
    if (e.keyCode === 27) {
      events();
      chrome.runtime.sendMessage('stop');
    }
  };

  const contextmenu = e => e.preventDefault();
  const click = e => (e.stopPropagation(), e.preventDefault());

  const events = () => {
    style.sheet && style.remove();
    document.removeEventListener('mouseover', mouseover);
    document.removeEventListener('mouseout', mouseout);
    document.removeEventListener('mousedown', mousedown);
    document.removeEventListener('mouseup', mouseup);
    document.removeEventListener('mousewheel', mousewheel);
    document.removeEventListener('keydown', keydown);
    document.removeEventListener('click', click);
    window.removeEventListener('contextmenu', contextmenu);
    chrome.runtime.onMessage.removeListener(stopHandler);
  };

  const stop = () => {
    events();
  };

  const init = _ => {
    style = createStyle();
    chrome.storage.sync.get(document.domain, d => {
      const { [document.domain]: data } = d;
      data && setStyle(data);
    });

    document.addEventListener('mouseover', mouseover);
    document.addEventListener('mouseout', mouseout);
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('keydown', keydown);
    document.addEventListener('click', click);
    window.addEventListener('blur', stop);
    window.addEventListener('visibilitychange', stop);
  };
  init();

  const stopHandler = ({ type }) => {
    if (type === 'stop') {
      stop();
    }
  };

  chrome.runtime.onMessage.addListener(stopHandler);
}
