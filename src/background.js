chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const arr = ['127.0.0.1', 'localhost', '192.168.1.3', 'visualstudio'].join('|');
  const reg = new RegExp(arr, 'i');
  // !reg.test(tab.url) && chrome.tabs.sendMessage(tabId, 'NOTRANSLATE');

  chrome.tabs.executeScript(tabId, {
    file: 'injectionClassName.js',
    runAt: 'document_start'
  });
});
