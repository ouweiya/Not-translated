chrome.storage.sync.get('globalCss', data => {
  console.log('globalCss:', data.globalCss);
  if (!data.globalCss) {
    const code = `font-family: FiraCode-Regular !important;\nfont-size: 14px !important;`;
    chrome.storage.sync.set({ globalCss: code });
    console.log('没有css');
  }
});

let globalData = {};

chrome.storage.sync.get(null, data => {
  globalData = data;
  console.log('globalData', globalData);
});

chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const domain = new URL(tab.url).hostname;
  if (globalData[domain]) {
    chrome.tabs.sendMessage(tabId, { type: 'translation', data: [globalData[domain], globalData.globalCss] });
  }
});

chrome.storage.onChanged.addListener(e => {
  chrome.storage.sync.get(null, data => {
    globalData = data;
    console.log('onChanged:', globalData);
  });
});

// 按键操作
let toggle = true;

const toggleHandler = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (toggle) {
      chrome.tabs.executeScript(tabs[0].id, { file: 'selector.js', runAt: 'document_start' });
      chrome.browserAction.setIcon({ path: 'assets/a19.png', tabId: tabs[0].id });
      toggle = false;
      console.log('启动');
    } else {
      chrome.browserAction.setIcon({ path: 'assets/19.png', tabId: tabs[0].id });
      chrome.tabs.sendMessage(tabs[0].id, { type: 'stop' });
      toggle = true;
      console.log('停止');
    }
  });
};

chrome.browserAction.onClicked.addListener(toggleHandler);

// Exit
chrome.runtime.onMessage.addListener((request, sender) => {
  if (request === 'stop') {
    chrome.browserAction.setIcon({ path: 'assets/icon38.png', tabId: sender.tab.id });
    toggle = true;
    console.log('停止stop');
  }
});
