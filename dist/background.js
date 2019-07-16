chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  status.status === 'complete' && chrome.tabs.sendMessage(tabId, 'TRANSLATE');
});

// chrome.commands.onCommand.addListener(command => {
//   console.log('Command:', command);
// });

// console.log('background');
// const arr = ['127.0.0.1', 'localhost', '192.168.1.3', 'visualstudio'].join('|');
// const reg = new RegExp(arr, 'i');
// if (!reg.test(tab.url)) {
// }

// chrome.storage.sync.get([document.domain], d => {
//   console.log(d[document.domain]);
// });
// Notranslate(d[document.domain]);
// const Notranslate = classes => {
//   const arr = document.querySelectorAll(classes);
//   for (let i = 0, len = arr.length; i < len; i++) {
//     arr[i].classList.add('notranslate');
//   }
// };
// var url = new URL(tab.url);
// var domain = url.hostname;
