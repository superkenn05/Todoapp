import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos}) {
  function HandleDelete(item){
    console.log("delete", item)
    setTodos(todos.filter((todo)=>todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button onClick={()=>HandleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
