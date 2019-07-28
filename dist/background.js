chrome.storage.sync.get('globalCss', data => {
  console.log('globalCss:', data.globalCss);
  if (!data.globalCss) {
    const code = `font-family: FiraCode-Regular !important;\nfont-size: 14px !important;`;
    chrome.storage.sync.set({ globalCss: code });
    console.log('没有css')
  }
});

let globalData = {};

chrome.storage.sync.get(null, data => {
  globalData = data;
  console.log('globalData', globalData);
});

chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const domain = new URL(tab.url).hostname;
  globalData[domain] && chrome.tabs.sendMessage(tabId, [globalData[domain], globalData.globalCss]);
});

chrome.storage.onChanged.addListener(e => {
  chrome.storage.sync.get(null, data => {
    globalData = data;
    console.log('onChanged:', globalData);
  });
});

chrome.browserAction.onClicked.addListener(_ => {
  console.log('browserAction');
  chrome.tabs.getSelected(tab => {
    chrome.tabs.executeScript(tab.id, {
      file: 'selector.js',
      runAt: 'document_start'
    });
  });
});

// chrome.commands.onCommand.addListener(command => {
//   console.log('Command:', command);
// });

// lastFocusedWindow
// currentWindow
