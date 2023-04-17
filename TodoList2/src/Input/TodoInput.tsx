import { RiChatNewLine } from "react-icons/ri"
import styles from './TodoInput.module.css'

interface TodoInputProps {
  text: string
  onTextChange: (text:string) => void
  onSubmit: () => void
}

const TodoInput = (props:TodoInputProps) => {
  const handleInputChanged = (event:React.ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(event.target.value)
  }

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    props.onSubmit();
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit} >
        <input className={styles.input} placeholder={"해야 할 Todo"} value={props.text} onChange={handleInputChanged} />
      </form>
      <button type="submit" className={styles.enter}><RiChatNewLine/></button>
    </section>
  )
}

export default TodoInput