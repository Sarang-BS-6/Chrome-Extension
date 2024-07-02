chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchMovie') {
      chrome.storage.local.set({ query: request.query });
    }
  });
  