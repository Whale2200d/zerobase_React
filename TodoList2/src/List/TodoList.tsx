import TodoItem from '../ListItem/TodoItem'
import { TodoType } from '../Todo/todoReducer'
import styles from './TodoList.module.css'

interface TodoListProps {
  todos: TodoType[]
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void
}


const TodoList = (props:TodoListProps) => {
  // const arr = ['React', 'Typescript', 'Javascript', 'CSS', 'HTML']

  return (
    <section>
      <ol className={styles.olContainer}>
        {
          props.todos.map((todo)=>{
            return <TodoItem
              id={todo.id}
              key={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
              onToggleClick={props.onToggleClick}
              onRemoveClick={props.onRemoveClick} />
          })
        }
      </ol>
    </section>
  )
}

export default TodoList