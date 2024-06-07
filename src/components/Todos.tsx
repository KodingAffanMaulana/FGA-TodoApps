/* eslint-disable @typescript-eslint/no-explicit-any */
import TodoItem from "./TodoItem";

const Todos = ({ todos }: any) => {
  const getRandomColor = (index: number) => {
    const hue = index * 237;
    return `hsl(${hue % 360}, 90%, 65%)`;
  };

  return (
    <div style={styles.container}>
      {todos.map((todo: any, index: number) => (
        <TodoItem key={todo.id} todo={todo} style={{ backgroundColor: getRandomColor(index) }} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
};

export default Todos;
