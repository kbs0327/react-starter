import { useEffect, useState } from "react";

function useHash() {
  // FIXME useSyncExternalStore 를 사용하도록 변경
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const listener = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", listener);

    return () => {
      window.removeEventListener("hashchange", listener);
    };
  }, []);

  return hash;
}

export default useHash;
