chrome.storage.sync.get('globalCss', data => {
  if (!data.globalCss) {
    const code = `font-family: FiraCode-Regular !important;\nfont-size: 14px !important;`;
    chrome.storage.sync.set({ globalCss: code });
  }
});

let globalData = {};
let currentDomain = '';

chrome.storage.sync.get(null, data => {
  globalData = data;
  // console.log('globalData', globalData);
});

chrome.tabs.onUpdated.addListener((tabId, status, tab) => {
  const addr = new URL(tab.url);
  const domain = addr.hostname;
  const protocol = addr.protocol;

  if (globalData[domain]) {
    chrome.tabs.sendMessage(tabId, { type: 'translation', data: [globalData[domain], globalData.globalCss] });
  }


  if (protocol === 'chrome-extension:') {
    chrome.runtime.sendMessage({ type: 'currentDomain', currentDomain });
  }
});

chrome.storage.onChanged.addListener(e => {
  chrome.storage.sync.get(null, data => {
    globalData = data;
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
    } else {
      chrome.browserAction.setIcon({ path: 'assets/19.png', tabId: tabs[0].id });
      chrome.tabs.sendMessage(tabs[0].id, { type: 'stop' });
      toggle = true;
    }
  });
};

chrome.browserAction.onClicked.addListener(toggleHandler);

// Exit
chrome.runtime.onMessage.addListener((request, sender) => {
  if (request === 'stop') {
    chrome.browserAction.setIcon({ path: 'assets/19.png', tabId: sender.tab.id });
    toggle = true;
  }

  if (request === 'current') {
    const domain = new URL(sender.tab.url).hostname;
    currentDomain = domain;
  }
});
