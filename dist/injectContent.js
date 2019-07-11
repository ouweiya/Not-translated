{
  let style = null;
  const InjectStyle = _ => {
    style && style.remove();
    style = document.createElement('style');
    document.head.insertAdjacentElement('beforeend', style);
    style.sheet.insertRule(`
    #a123456 {
      background-color: #bcd5eb !important;
      outline: 2px solid #5166bb !important;
    }
  `);
  };

  let cuerr = null;
  let cls = [];
  const handler = e => {
    e.stopPropagation();

    const t = e.target.tagName.toLowerCase();
    const b = ['pre', 'code', 'table', 'th', 'tr', 'td'].includes(t);
    const toggle = e.target.className || b || e.target.id;
    if (toggle) {
      cls = [];

      if (e.target.className) {
        let a = [...e.target.classList.values()];
        cls = a.map(c => `.${c}`);
      }

      if (b) {
        if (['table', 'tr', 'td'].includes(t)) {
          let i = e.target.cellIndex;
          i !== undefined && cls.push(`td:nth-of-type(${i + 1})`);
        } else if (['th', 'tr'].includes(t)) {
          let i = e.target.parentElement.rowIndex;
          i !== undefined && cls.push(`tr:nth-of-type(${i + 1})`);
        } else {
          cls.push(e.target.tagName.toLowerCase());
        }
      }

      if (e.target.id) {
        cls.push(`#${e.target.id}`);
      }
      cuerr = e.target;
      style.sheet.cssRules[0].selectorText = cls;
      // console.log('cls', cls);
    }
  };

  let ClickHandler = e => {
    e.stopPropagation();
    e.preventDefault();
    if (cuerr === e.target) {
      console.log('%c是同一个元素', 'color:green');
      console.log(`%cClick => ${cls}`, 'color:blue');
      chrome.storage.sync.get(document.domain, d => {
        console.log(d[document.domain]);
        chrome.storage.sync.set({ [document.domain]: [d[document.domain], ...cls].join(',') });
      });

      chrome.storage.sync.get(null, a => console.log('Data:', a));
    } else {
      console.log(`%c不是同一个元素`, 'color:red');
    }

    style.remove();
    document.removeEventListener('mouseover', handler);
    document.removeEventListener('mouseout', out);
  };

  const out = e => {
    e.stopPropagation();
    style.sheet.cssRules[0].selectorText = '#a123456';
  };

  InjectStyle();
  document.addEventListener('mouseover', handler);
  document.addEventListener('mouseout', out);
  document.addEventListener('click', ClickHandler, { once: true });
}

// chrome.storage.sync.set({ sex: 'Man' });

// console.log('%cHello World', 'color:green;font-size:20px');
// var url = new URL(tab.url);
// var domain = url.hostname;

// chrome.runtime.getURL()
// chrome.storage.sync.clear(console.log.bind(console, 'clear'));
