import Description from './components/Description';
import Hello from './components/Hello';
function App() {
  return (
    <>
      <Hello isChild={false}/>
      <Description isOpen={true}/>
    </>
  );
}
export default App;
