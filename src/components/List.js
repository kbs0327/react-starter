import ListItem from "./ListItem";

function List({ items }) {
  return (
    <>
      {items
        .filter((item) => item.visible)
        .map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
    </>
  );
}

export default List;
