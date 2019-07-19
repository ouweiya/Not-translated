let oldDomain = {};
let globalData = {};

chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const url = new URL(tab.url);
  const newDomain = url.hostname;
  console.log('oldDomain', oldDomain);

  // if (oldDomain.includes(newDomain)) {
  if (oldDomain[newDomain]) {
    chrome.tabs.sendMessage(tabId, globalData[newDomain]);
    console.log('two-222222', globalData[newDomain]);
  } else {
    // oldDomain.push(newDomain);
    oldDomain[newDomain] = true;
    chrome.storage.sync.get(newDomain, ({ [newDomain]: data = {} }) => {
      globalData[newDomain] = data;
      chrome.tabs.sendMessage(tabId, data);
      console.log('one-1111');
    });
  }

  chrome.storage.onChanged.addListener(e => {
    chrome.storage.sync.get(null, data => {
      globalData = data;
    });
  });
  /*   if (newDomain !== oldDomain.includes()) {
    oldDomain = newDomain;
    chrome.storage.sync.get(newDomain, ({ [newDomain]: data = {} }) => {
      globalData = data;
      chrome.tabs.sendMessage(tabId, data);
      console.log('one-1111');
    });
  } else {
    chrome.tabs.sendMessage(tabId, globalData);
    console.log('two-222222');
  } */
});

// chrome.webNavigation.onDOMContentLoaded.addListener(e => console.log(e));
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
// status.status === 'complete' &&
