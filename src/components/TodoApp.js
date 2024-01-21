import {useContext} from 'react';
import TodoContext from '../TodoContext';
import FilterContextProvider from './FilterContextProvider';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function TodoApp() {
  const { todos } = useContext(TodoContext);

  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && (
        <FilterContextProvider>
          <Main />
          <Footer />
        </FilterContextProvider>
      )}
    </section>
  );
}
export default TodoApp;
