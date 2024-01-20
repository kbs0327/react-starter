function Hello({isChild}) {
  return <h1>{isChild ? '안녕' : '안녕하세요.'}</h1>;
}
export default Hello;
