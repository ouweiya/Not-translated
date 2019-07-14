{
  const Notranslate = classes => {
    const arr = document.querySelectorAll(classes);
    for (let i = 0, len = arr.length; i < len; i++) {
      arr[i].classList.add('notranslate');
    }
  };

  chrome.storage.sync.get([document.domain], d => {
    // console.log(d[document.domain]);
    // Notranslate(d[document.domain]);
  });

  // console.log('%cClassName', 'color:red;font-size:13px');
}

// document.addEventListener('DOMContentLoaded', _ => console.log('DOC- load'));

// const Translate = _ =>
//   document
//     .querySelectorAll('table.notranslate')
//     .forEach(el => el.classList.remove('notranslate'));

// const classes = [
//   'pre',
//   '.jbzf938',
//   'iframe',
//   '.ja6d57t',
//   '.markdown-body+div',
//   'table tr td:not(:last-of-type)',
//   '.informalexample'
// ];
