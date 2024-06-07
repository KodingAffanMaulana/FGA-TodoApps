/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { dummy } from './data/dummy';
import image from './assets/image.svg';

export const TodoContext = createContext<any>({});

function App() {
  const [todos, setTodos] = useState(dummy);

  const toggleCompleted = (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const addTodo = (todoTitle: string, todoDate: string) => {
    if (todoTitle === '' || todoDate === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      date: todoDate,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo, addTodo }}>
      <div style={{ ...styles.container, flexDirection: 'column', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src={image} alt="image" width='60px' />
          <h1 style={styles.title}>MyFan Todo List</h1>
        </div>
        <TodoForm />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom, black, blue)',
    minHeight: '100vh',
    textAlign: 'center',
    margin: '0',
    padding: '60px 12px 12px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  title: {
    fontSize: '36px',
    color: "white"
  },
};


export default App;
