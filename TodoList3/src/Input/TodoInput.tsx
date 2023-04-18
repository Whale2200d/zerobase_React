import { RiChatNewLine } from "react-icons/ri"
import styles from './TodoInput.module.css'
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from "../Todo/TodoProvider"

const TodoInput = () => {
  //  text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit}

  const todoDispatch = useTodoDispatch()
  const inputDispatch = useInputTodoDispatch()
  const inputState = useInputTodoState()

  const handleInputChanged = (event:React.ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: event.target.value
    })
  }

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    
    if(!inputState.text) {
      return;
    }

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text
      }
    })
    
    inputDispatch({
      type: 'clear'
    })
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit} >
        <input className={styles.input} placeholder={"해야 할 Todo"} value={inputState.text} onChange={handleInputChanged} />
      </form>
      <button type="submit" className={styles.enter}><RiChatNewLine/></button>
    </section>
  )
}

export default TodoInput