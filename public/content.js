const query = new URLSearchParams(window.location.search).get('q');
if (query && query.toLowerCase().includes('movie')) {
  chrome.runtime.sendMessage({ action: 'fetchMovie', query });
}
