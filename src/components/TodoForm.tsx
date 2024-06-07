/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { TodoContext } from "../App";

const TodoForm = () => {
  const { addTodo }: any = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(title, date);
    setTitle('');
    setDate('');
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title}
        />
        <input
          type="date"
          style={styles.formInput}
          onChange={handleChangeDate}
          value={date}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '32px',
    width: '100%',
    paddingTop: '30px'
  },
  formInput: {
    height: '40px',
    width: '20%',
    fontSize: '16px',
    padding: '0 16px',
    margin: '5px',
    borderRadius: '10px'
  },
  button: {
    backgroundColor: "yellow",
    fontWeight: 'bold',
    height: '40px',
    width: '8%',
    fontSize: '16px',
    borderRadius: '10px',
    cursor: 'Pointer'
  },
};

export default TodoForm;
