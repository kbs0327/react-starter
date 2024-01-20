import {useEffect} from 'react';

function ListItem({ name }) {
  console.log(`${name} rendered`);
  useEffect(() => {
    console.log(`${name} mounted`);
  }, [name]);

  return <>{name}</>;
}

export default ListItem;
