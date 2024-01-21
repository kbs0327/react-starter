import {useEffect, useMemo, useState} from 'react';
import Title from './components/Title';

function App() {
  const [, setState] = useState({});

  const style = useMemo(() => ({color: 'blue'}), []);

  useEffect(() => {
    console.log('App rerender trigger');
    setState({});
  }, []);

  return <Title style={{color: 'blue'}}>안녕하세요.</Title>;
}
export default App;
