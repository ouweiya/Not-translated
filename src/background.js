let globalData = {};
chrome.storage.sync.get(null, data => {
  globalData = data;
  console.log('globalData', globalData);
});

chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const domain = new URL(tab.url).hostname;
  globalData[domain] && chrome.tabs.sendMessage(tabId, globalData[domain]);
});

chrome.storage.onChanged.addListener(e => {
  chrome.storage.sync.get(null, data => {
    globalData = data;
    console.log('onChanged:', globalData);
  });
});
