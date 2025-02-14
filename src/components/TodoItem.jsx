import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function HandleDelete(item) {
    console.log("delete", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function HandleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name == name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray)
  }
  const className = item.done ? styles.completed : ""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => HandleClick(item.name)}>{item.name}</span>

        <span>
          <button
            onClick={() => HandleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
