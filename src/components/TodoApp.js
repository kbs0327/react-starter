import {useContext} from 'react';
import FilterContextProvider from './FilterContextProvider';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import TodoContext from '../TodoContext';

function TodoApp() {
  const {todos} = useContext(TodoContext);

  return (
    <section className="todoapp">
      <FilterContextProvider>
        <Header/>
        {todos.length > 0 && (
          <>
            <Main/>
            <Footer/>
          </>
        )}
      </FilterContextProvider>
    </section>
  );
}

export default TodoApp;
