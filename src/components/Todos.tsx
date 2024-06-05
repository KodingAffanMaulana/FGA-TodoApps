import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosProps {
  todos: Todo[];
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}
const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}
export default Todos