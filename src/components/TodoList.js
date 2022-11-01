import Todo from './Todo'

function TodoList({ todo, deleteTodo }) {
  return (
    <div>
      {!todo.length && 'no'}
      {todo.map((todos, index) => (
        <Todo key={index} todos={todos} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
export default TodoList
