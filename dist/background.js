chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const arr = ['127.0.0.1', 'localhost', '192.168.1.3', 'visualstudio'].join('|');
  const reg = new RegExp(arr, 'i');
  if (!reg.test(tab.url)) {
  }
  // chrome.tabs.executeScript(tabId, {
  //   file: 'translationfix.js',
  //   runAt: 'document_start'
  // });
});

// chrome.commands.onCommand.addListener(command => {
//   console.log('Command:', command);
// });

// console.log('background');
