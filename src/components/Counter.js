import {useEffect, useState} from 'react';

function Counter({children}) {
  const [count, setCount] = useState(1);
  console.log('Counter rendered');

  useEffect(() => {
    console.log('interval 초기화');
    const intervalId = window.setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    }
  }, [])

  return <>{count}. {children}</>
}

export default Counter;
