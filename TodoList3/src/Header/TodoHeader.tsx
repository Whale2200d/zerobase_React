import { useTodoState } from '../Todo/TodoProvider'
import { TodoType } from '../Todo/todoReducer'
import styles from './TodoHeader.module.css'

const TodoHeader = () => {
  const todoState = useTodoState()
  const count = todoState.todos.filter((todo:TodoType) => !todo.isChecked).length

  return (
    <header>
      <h1>
        <mark className={styles.todoCount}>{count}</mark>
        개의 할 일
      </h1>
    </header>
  )
}

export default TodoHeader