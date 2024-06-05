// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TodoItem: React.FC<any> = ({ todo }) => {
  return <p>{todo.title}</p>;
};

export default TodoItem;
