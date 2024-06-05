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
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default Todos