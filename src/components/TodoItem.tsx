/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem: React.FC<any> = ({ todo, style }) => {
  const { toggleCompleted, deleteTodo }: any = useContext(TodoContext);

  const getTodoTitleStyle = () => ({
    textDecoration: todo.completed ? 'line-through' : 'none',
  });

  return (
    <div style={{ ...styles.todoItem, ...style }}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <p>{todo.date}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '1px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    color: "white",
    marginBottom: '10px',
    borderRadius: '10px'
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TodoItem;
