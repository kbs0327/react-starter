import {useEffect} from 'react';

function ListItem({ name }) {
  // Rendering 확인
  console.log(`${name} rendered`);
  useEffect(() => {
    // 다시 mount 되는 걸 확인
    console.log(`${name} mounted`);
  }, [name]);

  return <>{name}</>;
}

export default ListItem;
