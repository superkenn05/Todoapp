import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function HandlingSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={HandlingSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            placeholder="Enter your task..."
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
