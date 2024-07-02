/// <reference types="chrome" />

// Function to get a query from Chrome's local storage
export const getQueryFromStorage = (callback: (query: string | undefined) => void) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['query'], (result) => {
        callback(result.query);
      });
    } else {
      console.warn('Chrome API is not available.');
      callback(undefined);
    }
  };
  
  // Function to set a query in Chrome's local storage
  export const setQueryInStorage = (query: string) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ query });
    } else {
      console.warn('Chrome API is not available.');
    }
  };
  
  // Function to clear the query from Chrome's local storage
  export const clearQueryInStorage = () => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.remove('query');
    } else {
      console.warn('Chrome API is not available.');
    }
  };
  