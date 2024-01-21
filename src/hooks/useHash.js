import {useSyncExternalStore} from 'react';

function useHash() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback) {
  window.addEventListener("hashchange", callback);

  return () => {
    window.removeEventListener("hashchange", callback);
  };
}

function getSnapshot() {
  return window.location.hash;
}

export default useHash;
